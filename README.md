# CNS Holiday

A modern React & TypeScript web application for CNS Holiday based in Gottigere, Bengaluru.

## Features

- **Fleet & Services Showcase**: Innova Crysta, Tempo Traveller, Buses, Local Packages, Outstation, and Airport transfers with interactive category filtering and Bento grid.
- **Detailed Service Modals**: Comprehensive breakdown of vehicle features, booking process, inclusions, and transparent pricing.
- **South India Outstation Destinations**: Interactive expanding accordion showcase of top tourism spots (Ooty, Coonoor, Coorg, Munnar, Kodaikanal, Mysore, Hampi, Tirupati, etc.) with high-resolution image lightboxes.
- **Interactive Booking Flow**: Instant WhatsApp and Email booking generation with validation.
- **Why Us Interactive Flip Cards**: 3D interactive flip cards highlighting safe travel, experienced drivers, transparent rates, and 24/7 support.
- **Dynamic Interactive UX**: SVG ring progress bars, typewriter hero taglines, location map modal, animated statistics counters, and circular back-to-top button.

## Tech Stack

- **React 19**
- **TypeScript**
- **Vite**

## Getting Started

```bash
npm install
npm run dev
```

Dev server runs on `http://localhost:3000`.

## Booking Database (Supabase)

Every request submitted through the contact form is saved to Supabase. Bookings can be managed from the admin dashboard:

```text
https://your-site.com/#admin
```

### One-time setup

1. Open your Supabase project, go to **SQL Editor** and run [`supabase/schema.sql`](supabase/schema.sql).
2. Go to **Authentication > Providers > Email** and turn **off** "Allow new users to sign up".
3. Go to **Authentication > Users > Add user** and create your admin email + password.
4. Open `/#admin` on the site and sign in with that account.

The project URL and publishable key are configured in `src/lib/supabase.ts`. You can override them with `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` (see `.env.example`).

### Admin dashboard

- View all bookings with received date, customer contact, vehicle/trip and trip details
- Search and filter by status (pending, confirmed, completed, cancelled)
- Edit booking details, confirm, complete, cancel or delete bookings
- Live counters for each booking status