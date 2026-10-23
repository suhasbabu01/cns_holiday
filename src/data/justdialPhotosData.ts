import { Photo } from '../types';

export interface JustdialPhotoItem {
  id: string | number;
  title: string;
  image: string;
  caption: string;
}

export interface JustdialAlbum {
  id: string;
  name: string;
  photoCountLabel: string;
  coverImage: string;
  photos: JustdialPhotoItem[];
}

const photoCountLabel = (count: number) =>
  `${count} ${count === 1 ? 'Photo' : 'Photos'}`;

const albumId = (name: string) =>
  name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') ||
  'album';

/** Build the public gallery albums from photos stored in Supabase. */
export const buildAlbumsFromPhotos = (photos: Photo[]): JustdialAlbum[] => {
  if (photos.length === 0) return [];

  const toItem = (photo: Photo): JustdialPhotoItem => ({
    id: photo.id,
    title: photo.title,
    image: photo.image_url,
    caption: photo.caption ?? '',
  });

  const allPhotos = photos.map(toItem);
  const albums: JustdialAlbum[] = [
    {
      id: 'all',
      name: 'All',
      photoCountLabel: photoCountLabel(allPhotos.length),
      coverImage: allPhotos[0].image,
      photos: allPhotos,
    },
  ];

  const albumNames = Array.from(
    new Set(photos.map((photo) => photo.album || 'Latest'))
  );

  albumNames.forEach((name) => {
    const items = photos
      .filter((photo) => (photo.album || 'Latest') === name)
      .map(toItem);

    if (items.length === 0) return;

    albums.push({
      id: albumId(name),
      name,
      photoCountLabel: photoCountLabel(items.length),
      coverImage: items[0].image,
      photos: items,
    });
  });

  return albums;
};

export const justdialAlbumsData: JustdialAlbum[] = [
  {
    id: "all",
    name: "All",
    photoCountLabel: "46 Photos / Videos",
    coverImage: "/img/justdial/urbania-front.jpg",
    photos: [
      {
        id: 101,
        title: "Force Urbania 15+1 Luxury – Front Profile",
        image: "/img/justdial/urbania-front.jpg",
        caption: "Official Force Urbania 15+1 luxury passenger van from our fleet – high roof, wide windshield, and aerodynamic front grille."
      },
      {
        id: 102,
        title: "Toyota Innova – KA 05 AS 9944",
        image: "/img/justdial/innova-front.jpg",
        caption: "Commercial registered Toyota Innova (KA 05 AS 9944) – sanitized and ready for airport transfers and outstation tours."
      },
      {
        id: 103,
        title: "Luxury Tourist Coach – Pushback Cabin",
        image: "/img/justdial/bus-interior.jpg",
        caption: "Spacious luxury bus interior with plush leather seats, personal armrests, and clean red carpet center aisle."
      },
      {
        id: 104,
        title: "Innova Crysta – Captain Seats & Sunroof",
        image: "/img/justdial/car-interior.jpg",
        caption: "Premium executive interior with dual captain seats, ambient roof lighting, and panoramic glass sunroof."
      },
      {
        id: 105,
        title: "Force Urbania 15+1 Luxury – Black Edition",
        image: "/img/fleet/urbania-luxury.jpg",
        caption: "Flagship Force Urbania 15+1 Luxury in gloss black with executive privacy glass and chrome accents."
      },
      {
        id: 106,
        title: "Complete CNS Fleet Lineup",
        image: "/img/fleet/cns-fleet-lineup.jpg",
        caption: "Our full in-house fleet: Innova Crysta, Tempo Traveller, and luxury tourist buses."
      }
    ]
  },
  {
    id: "latest",
    name: "Latest",
    photoCountLabel: "29 Photos",
    coverImage: "/img/justdial/innova-front.jpg",
    photos: [
      {
        id: 201,
        title: "Toyota Innova – Commercial Taxi (KA 05 AS 9944)",
        image: "/img/justdial/innova-front.jpg",
        caption: "Latest verified vehicle addition: Toyota Innova Crysta / Hycross in pristine white with yellow commercial plate."
      },
      {
        id: 202,
        title: "Innova Executive Sunroof Interior",
        image: "/img/justdial/car-interior.jpg",
        caption: "Clean executive seating with ambient neon lighting and panoramic glass roof."
      },
      {
        id: 203,
        title: "Force Urbania 15+1 Luxury Front View",
        image: "/img/justdial/urbania-front.jpg",
        caption: "High-roof Urbania luxury van prepared for South India highway tours."
      }
    ]
  },
  {
    id: "bus",
    name: "Bus",
    photoCountLabel: "3 Photos",
    coverImage: "/img/justdial/bus-interior.jpg",
    photos: [
      {
        id: 301,
        title: "Luxury Tourist Bus – Red Carpet Aisle",
        image: "/img/justdial/bus-interior.jpg",
        caption: "Fully air-conditioned luxury bus with pushback seats, individual luggage racks, and red carpet aisle for marriage & corporate trips."
      },
      {
        id: 302,
        title: "Luxury Coaches Fleet Lineup",
        image: "/img/fleet/cns-fleet-lineup.jpg",
        caption: "22, 32, and 50-seater tourist coaches available for multi-day group tours and marriage functions."
      }
    ]
  },
  {
    id: "car",
    name: "Car",
    photoCountLabel: "9 Photos",
    coverImage: "/img/justdial/car-interior.jpg",
    photos: [
      {
        id: 401,
        title: "Executive Car Interior & Sunroof",
        image: "/img/justdial/car-interior.jpg",
        caption: "Luxury captain seats with plush cushioning, dual-zone AC, and panoramic sunroof."
      },
      {
        id: 402,
        title: "White Toyota Innova (KA 05 AS 9944)",
        image: "/img/justdial/innova-front.jpg",
        caption: "Exterior front view of Toyota Innova Crysta for Bangalore local and outstation rentals."
      }
    ]
  },
  {
    id: "tempo",
    name: "Tempo",
    photoCountLabel: "31 Photos",
    coverImage: "/img/fleet/cns-fleet-lineup.jpg",
    photos: [
      {
        id: 501,
        title: "Force Tempo Traveller Lineup",
        image: "/img/fleet/cns-fleet-lineup.jpg",
        caption: "12, 14, and 17-seater Tempo Travellers with high roof, rear luggage boot, and pushback seating."
      },
      {
        id: 502,
        title: "Tempo Traveller Executive Interior",
        image: "/img/justdial/bus-interior.jpg",
        caption: "Pushback individual seats with charging points and wide legroom for outstation hill-station journeys."
      }
    ]
  },
  {
    id: "urbania",
    name: "Urbania 15+1",
    photoCountLabel: "12 Photos",
    coverImage: "/img/justdial/urbania-front.jpg",
    photos: [
      {
        id: 601,
        title: "Force Urbania 15+1 Luxury – Front",
        image: "/img/justdial/urbania-front.jpg",
        caption: "Front profile of our Force Urbania 15+1 luxury passenger van."
      },
      {
        id: 602,
        title: "Force Urbania Black Edition",
        image: "/img/fleet/urbania-luxury.jpg",
        caption: "Black edition Force Urbania luxury flagship with tinted windows and chrome grille."
      }
    ]
  }
];
