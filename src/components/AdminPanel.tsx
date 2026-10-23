import React, { useCallback, useEffect, useMemo, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase } from '../lib/supabase';
import {
  deleteBooking,
  fetchBookings,
  setBookingStatus,
  updateBooking,
} from '../lib/bookings';
import { Booking, BookingStatus } from '../types';
import { AdminPhotos } from './AdminPhotos';

const STATUS_OPTIONS: BookingStatus[] = [
  'pending',
  'confirmed',
  'completed',
  'cancelled',
];

const STATUS_LABELS: Record<BookingStatus, string> = {
  pending: 'Pending',
  confirmed: 'Confirmed',
  completed: 'Completed',
  cancelled: 'Cancelled',
};

const formatDate = (value: string) =>
  new Date(value).toLocaleString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

const errorMessage = (error: unknown) => {
  if (error instanceof Error) return error.message;
  if (error && typeof error === 'object' && 'message' in error) {
    const message = (error as { message?: unknown }).message;
    if (typeof message === 'string' && message) return message;
  }
  return 'Something went wrong. Please try again.';
};

export const AdminPanel: React.FC = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Login form
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState<string | null>(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // Bookings
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<'all' | BookingStatus>('all');
  const [editing, setEditing] = useState<Booking | null>(null);
  const [editForm, setEditForm] = useState<Booking | null>(null);
  const [actionError, setActionError] = useState<string | null>(null);
  const [busyId, setBusyId] = useState<string | null>(null);
  const [tab, setTab] = useState<'bookings' | 'photos'>('bookings');

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setAuthLoading(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, next) => {
      setSession(next);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const loadBookings = useCallback(async () => {
    setLoading(true);
    setLoadError(null);
    try {
      setBookings(await fetchBookings());
    } catch (error) {
      setLoadError(errorMessage(error));
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (session) void loadBookings();
  }, [session, loadBookings]);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoginError(null);
    setIsLoggingIn(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });
      if (error) throw error;
    } catch (error) {
      setLoginError(errorMessage(error));
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setBookings([]);
  };

  const handleStatusChange = async (booking: Booking, status: BookingStatus) => {
    setActionError(null);
    setBusyId(booking.id);
    try {
      await setBookingStatus(booking.id, status);
      setBookings((prev) =>
        prev.map((item) =>
          item.id === booking.id ? { ...item, status } : item
        )
      );
    } catch (error) {
      setActionError(errorMessage(error));
    } finally {
      setBusyId(null);
    }
  };

  const handleDelete = async (booking: Booking) => {
    if (
      !window.confirm(
        `Delete the booking from ${booking.name}? This cannot be undone.`
      )
    ) {
      return;
    }

    setActionError(null);
    setBusyId(booking.id);
    try {
      await deleteBooking(booking.id);
      setBookings((prev) => prev.filter((item) => item.id !== booking.id));
    } catch (error) {
      setActionError(errorMessage(error));
    } finally {
      setBusyId(null);
    }
  };

  const openEdit = (booking: Booking) => {
    setEditing(booking);
    setEditForm({ ...booking });
    setActionError(null);
  };

  const closeEdit = () => {
    setEditing(null);
    setEditForm(null);
  };

  const handleEditSave = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!editForm) return;

    setActionError(null);
    setBusyId(editForm.id);
    try {
      const changes = {
        name: editForm.name.trim(),
        email: editForm.email?.trim() || null,
        phone: editForm.phone.trim(),
        service: editForm.service,
        message: editForm.message?.trim() || null,
        status: editForm.status,
      };
      await updateBooking(editForm.id, changes);
      setBookings((prev) =>
        prev.map((item) =>
          item.id === editForm.id ? { ...item, ...changes } : item
        )
      );
      closeEdit();
    } catch (error) {
      setActionError(errorMessage(error));
    } finally {
      setBusyId(null);
    }
  };

  const stats = useMemo(() => {
    return {
      total: bookings.length,
      pending: bookings.filter((b) => b.status === 'pending').length,
      confirmed: bookings.filter((b) => b.status === 'confirmed').length,
      completed: bookings.filter((b) => b.status === 'completed').length,
      cancelled: bookings.filter((b) => b.status === 'cancelled').length,
    };
  }, [bookings]);

  const visibleBookings = useMemo(() => {
    const query = search.trim().toLowerCase();
    return bookings.filter((booking) => {
      const matchesStatus =
        statusFilter === 'all' || booking.status === statusFilter;
      const matchesQuery =
        !query ||
        [booking.name, booking.phone, booking.email, booking.service, booking.message]
          .filter(Boolean)
          .some((value) => value!.toLowerCase().includes(query));
      return matchesStatus && matchesQuery;
    });
  }, [bookings, search, statusFilter]);

  if (authLoading) {
    return (
      <div className="admin-page admin-centered">
        <div className="admin-loader">
          <i className="fas fa-circle-notch fa-spin"></i> Loading dashboard…
        </div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className="admin-page admin-centered">
        <form className="admin-login-card" onSubmit={handleLogin}>
          <div className="admin-login-brand">
            <i className="fas fa-shield-halved"></i>
            <h1>CNS Holiday</h1>
            <p>Admin dashboard</p>
          </div>

          <label htmlFor="admin-email">Email</label>
          <input
            id="admin-email"
            type="email"
            autoComplete="username"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />

          <label htmlFor="admin-password">Password</label>
          <input
            id="admin-password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />

          {loginError && (
            <p className="admin-alert is-error" role="alert">
              {loginError}
            </p>
          )}

          <button type="submit" className="admin-btn admin-btn-primary" disabled={isLoggingIn}>
            {isLoggingIn ? 'Signing in…' : 'Sign in'}
          </button>

          <a className="admin-back-link" href="#home">
            <i className="fas fa-arrow-left"></i> Back to website
          </a>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <header className="admin-header">
        <div className="admin-header-brand">
          <img src="/img/cns-logo.png" alt="CNS Holiday" />
          <div>
            <span>Booking Dashboard</span>
            <small>Signed in as {session.user.email}</small>
          </div>
        </div>
        <div className="admin-header-actions">
          <button
            type="button"
            className="admin-btn admin-btn-ghost"
            onClick={() => void loadBookings()}
            disabled={loading}
          >
            <i className={`fas fa-rotate ${loading ? 'fa-spin' : ''}`}></i> Refresh
          </button>
          <a className="admin-btn admin-btn-ghost" href="#home">
            <i className="fas fa-globe"></i> View site
          </a>
          <button
            type="button"
            className="admin-btn admin-btn-danger"
            onClick={() => void handleLogout()}
          >
            <i className="fas fa-right-from-bracket"></i> Sign out
          </button>
        </div>
      </header>

      <main className="admin-main">
        <nav className="admin-tabs" aria-label="Admin sections">
          <button
            type="button"
            className={tab === 'bookings' ? 'active' : ''}
            onClick={() => setTab('bookings')}
          >
            <i className="fas fa-calendar-check"></i> Bookings
          </button>
          <button
            type="button"
            className={tab === 'photos' ? 'active' : ''}
            onClick={() => setTab('photos')}
          >
            <i className="fas fa-images"></i> Photos
          </button>
        </nav>

        {tab === 'photos' ? (
          <AdminPhotos />
        ) : (
          <>
        <div className="admin-stats">
          <div className="admin-stat">
            <span>Total</span>
            <strong>{stats.total}</strong>
          </div>
          <div className="admin-stat is-pending">
            <span>Pending</span>
            <strong>{stats.pending}</strong>
          </div>
          <div className="admin-stat is-confirmed">
            <span>Confirmed</span>
            <strong>{stats.confirmed}</strong>
          </div>
          <div className="admin-stat is-completed">
            <span>Completed</span>
            <strong>{stats.completed}</strong>
          </div>
          <div className="admin-stat is-cancelled">
            <span>Cancelled</span>
            <strong>{stats.cancelled}</strong>
          </div>
        </div>

        <div className="admin-toolbar">
          <div className="admin-search">
            <i className="fas fa-magnifying-glass"></i>
            <input
              type="search"
              placeholder="Search name, phone, email, trip…"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
          </div>
          <select
            value={statusFilter}
            onChange={(event) =>
              setStatusFilter(event.target.value as 'all' | BookingStatus)
            }
          >
            <option value="all">All statuses</option>
            {STATUS_OPTIONS.map((status) => (
              <option key={status} value={status}>
                {STATUS_LABELS[status]}
              </option>
            ))}
          </select>
        </div>

        {loadError && (
          <div className="admin-alert is-error" role="alert">
            Could not load bookings: {loadError}
            <button type="button" onClick={() => void loadBookings()}>
              Retry
            </button>
          </div>
        )}

        {actionError && (
          <div className="admin-alert is-error" role="alert">
            {actionError}
          </div>
        )}

        <div className="admin-table-wrap">
          {loading ? (
            <div className="admin-empty">
              <i className="fas fa-circle-notch fa-spin"></i> Loading bookings…
            </div>
          ) : visibleBookings.length === 0 ? (
            <div className="admin-empty">
              <i className="fas fa-inbox"></i>
              <p>
                {bookings.length === 0
                  ? 'No bookings yet. New appointment requests will appear here.'
                  : 'No bookings match your search or filter.'}
              </p>
            </div>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Received</th>
                  <th>Customer</th>
                  <th>Vehicle / Trip</th>
                  <th>Trip details</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {visibleBookings.map((booking) => (
                  <tr key={booking.id}>
                    <td data-label="Received">
                      <span className="admin-date">{formatDate(booking.created_at)}</span>
                    </td>
                    <td data-label="Customer">
                      <strong>{booking.name}</strong>
                      <a href={`tel:${booking.phone}`} className="admin-contact">
                        <i className="fas fa-phone"></i> {booking.phone}
                      </a>
                      {booking.email && (
                        <a href={`mailto:${booking.email}`} className="admin-contact">
                          <i className="fas fa-envelope"></i> {booking.email}
                        </a>
                      )}
                    </td>
                    <td data-label="Vehicle / Trip">
                      <span className="admin-service">{booking.service}</span>
                    </td>
                    <td data-label="Trip details">
                      <span className="admin-message">
                        {booking.message || <em>No details provided</em>}
                      </span>
                    </td>
                    <td data-label="Status">
                      <span className={`admin-badge is-${booking.status}`}>
                        {STATUS_LABELS[booking.status]}
                      </span>
                    </td>
                    <td data-label="Actions">
                      <div className="admin-row-actions">
                        <button
                          type="button"
                          className="admin-icon-btn"
                          title="Edit booking"
                          onClick={() => openEdit(booking)}
                          disabled={busyId === booking.id}
                        >
                          <i className="fas fa-pen"></i>
                        </button>
                        {booking.status !== 'confirmed' && (
                          <button
                            type="button"
                            className="admin-icon-btn is-confirm"
                            title="Mark as confirmed"
                            onClick={() => void handleStatusChange(booking, 'confirmed')}
                            disabled={busyId === booking.id}
                          >
                            <i className="fas fa-check"></i>
                          </button>
                        )}
                        {booking.status !== 'cancelled' && (
                          <button
                            type="button"
                            className="admin-icon-btn is-cancel"
                            title="Cancel booking"
                            onClick={() => void handleStatusChange(booking, 'cancelled')}
                            disabled={busyId === booking.id}
                          >
                            <i className="fas fa-ban"></i>
                          </button>
                        )}
                        <button
                          type="button"
                          className="admin-icon-btn is-delete"
                          title="Delete booking"
                          onClick={() => void handleDelete(booking)}
                          disabled={busyId === booking.id}
                        >
                          <i className="fas fa-trash"></i>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
          </>
        )}
      </main>

      {editing && editForm && (
        <div className="admin-modal-backdrop" role="presentation" onClick={closeEdit}>
          <form
            className="admin-modal"
            onSubmit={handleEditSave}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="admin-modal-head">
              <h2>Edit booking</h2>
              <button type="button" onClick={closeEdit} aria-label="Close">
                <i className="fas fa-xmark"></i>
              </button>
            </div>

            <div className="admin-modal-grid">
              <label>
                Name
                <input
                  value={editForm.name}
                  onChange={(event) =>
                    setEditForm({ ...editForm, name: event.target.value })
                  }
                  required
                />
              </label>
              <label>
                Phone
                <input
                  value={editForm.phone}
                  onChange={(event) =>
                    setEditForm({ ...editForm, phone: event.target.value })
                  }
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  value={editForm.email ?? ''}
                  onChange={(event) =>
                    setEditForm({ ...editForm, email: event.target.value })
                  }
                />
              </label>
              <label>
                Status
                <select
                  value={editForm.status}
                  onChange={(event) =>
                    setEditForm({
                      ...editForm,
                      status: event.target.value as BookingStatus,
                    })
                  }
                >
                  {STATUS_OPTIONS.map((status) => (
                    <option key={status} value={status}>
                      {STATUS_LABELS[status]}
                    </option>
                  ))}
                </select>
              </label>
              <label className="is-full">
                Vehicle / Trip
                <input
                  value={editForm.service}
                  onChange={(event) =>
                    setEditForm({ ...editForm, service: event.target.value })
                  }
                  required
                />
              </label>
              <label className="is-full">
                Trip details
                <textarea
                  rows={4}
                  value={editForm.message ?? ''}
                  onChange={(event) =>
                    setEditForm({ ...editForm, message: event.target.value })
                  }
                />
              </label>
            </div>

            <div className="admin-modal-actions">
              <button type="button" className="admin-btn admin-btn-ghost" onClick={closeEdit}>
                Cancel
              </button>
              <button
                type="submit"
                className="admin-btn admin-btn-primary"
                disabled={busyId === editForm.id}
              >
                {busyId === editForm.id ? 'Saving…' : 'Save changes'}
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
