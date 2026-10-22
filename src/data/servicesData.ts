import { Service } from '../types';

export const servicesData: Service[] = [
  {
    id: 1,
    title: "Force Urbania 15+1 Luxury",
    shortDesc: "Our new flagship ultra-luxury executive van with 15+1 plush individual recliner captain seats, triple-zone AC, ambient LED lighting & panoramic windows.",
    icon: "fa-van-shuttle",
    image: "/img/fleet/urbania-luxury.jpg",
    size: "large",
    categories: ["outstation", "local", "airport"],
    fullDesc: "Travel like royalty with our brand-new Force Urbania 15+1 Luxury van. Engineered for unmatched passenger comfort, it offers individual plush recliner seats with armrests, dedicated roof AC vents, fast-charging USB ports at every seat, ambient aircraft-style cabin lighting, panoramic tinted windows, whisper-quiet cabin acoustics, and a generous rear boot for all your luggage. Ideal for VIP delegates, destination weddings, luxury family tours to Ooty, Coorg, Munnar & Mysore, and premium Bangalore airport transfers.",
    included: [
      "15+1 individual luxury recliner captain seats with armrests",
      "Triple-zone roof-mounted AC with individual louvers",
      "Dedicated USB fast-charging socket for every passenger",
      "Panoramic UV-cut tinted glass windows & ambient LED lighting",
      "Premium multimedia surround-sound infotainment system",
      "Spacious luggage boot + exterior overhead carrier",
      "Experienced, polite, uniformed highway & ghat chauffeur"
    ],
    process: [
      "Call or WhatsApp 98444 64174 / 87221 10180",
      "Provide travel dates, group size & pickup/destination",
      "Receive all-inclusive transparent quote (no hidden surprises)",
      "Chauffeur and vehicle registration details sent on SMS",
      "Enjoy your ride and pay post-trip via UPI, card, or cash"
    ],
    documents: [
      "VIP & Corporate delegations",
      "Luxury family vacations & group tours (Ooty, Coorg, Wayanad)",
      "Destination weddings, functions & executive airport transfers"
    ],
    timeline: "Fixed quote on call – 24/7 service"
  },
  {
    id: 2,
    title: "Innova Crysta – Premium Comfort",
    shortDesc: "Our popular 6+1 / 7+1 seater for family trips, corporate travel & outstation tours. Captain seats, powerful AC, ample luggage space.",
    icon: "fa-car",
    size: "small",
    categories: ["local", "outstation", "airport"],
    fullDesc: "Travel comfortably, reach happily. Innova Crysta is perfect for Ooty, Coonoor, Mysore & Coimbatore trips – smooth on ghats, premium comfort for long drives with experienced hill-station drivers.",
    included: [
      "6+1 / 7+1 seater Innova Crysta",
      "Local packages: 4hr/40km, 8hr/80km",
      "Outstation: All-inclusive fixed packages",
      "Airport pickup / drop – on-time guarantee",
      "Sanitized car, uniformed driver"
    ],
    process: [
      "Call / WhatsApp 98444 64174",
      "Share date, pickup point & destination",
      "Get fixed quote – no hidden charges",
      "Driver details on SMS before trip",
      "Pay after trip – UPI / cash"
    ],
    documents: ["Families & groups up to 6", "Corporate airport transfers", "Mysore / Ooty weekend tours"],
    timeline: "Fixed quote on call – 24/7 service"
  },
  {
    id: 3,
    title: "Tempo Traveller",
    shortDesc: "12 / 14 / 17-seater pushback Tempo Travellers for group tours, weddings & pilgrimages.",
    icon: "fa-shuttle-van",
    size: "small",
    categories: ["outstation", "local"],
    fullDesc: "Ideal for 9–17 passengers. High roof, pushback seats, music system & ample luggage carrier for multi-day South India tours.",
    included: [
      "12 / 14 / 17 seater options",
      "Pushback seats + charging points",
      "Ooty, Coorg, Tirupati packages",
      "Wedding / corporate shuttles"
    ],
    process: [
      "Share group size & itinerary",
      "Get vehicle + package quote",
      "Confirm with small advance",
      "Tour-ready vehicle at doorstep"
    ],
    documents: ["Groups 9–17 pax", "Weddings & events", "Multi-day tours"],
    timeline: "Fixed quote on call – 24/7 service"
  },
  {
    id: 4,
    title: "Mini Bus & Bus Rental",
    shortDesc: "22 to 50-seater buses for school trips, company outings & large groups.",
    icon: "fa-bus",
    size: "small",
    categories: ["outstation", "local"],
    fullDesc: "Safe, speed-governed buses with experienced drivers for large groups. Perfect for Chennai, Tirupati, Mysore day trips.",
    included: [
      "22 / 32 / 50 seater buses",
      "School / college trips",
      "Corporate outings",
      "Wedding guest movement"
    ],
    process: [
      "Share headcount & route",
      "Site / route planning call",
      "Fixed package quotation",
      "On-trip 24/7 support"
    ],
    documents: ["Groups 20–50 pax", "Schools & corporates", "Weddings"],
    timeline: "Fixed quote on call – 24/7 service"
  },
  {
    id: 5,
    title: "Local Packages – Bangalore",
    shortDesc: "Half-day & full-day Bangalore city tours, shopping, hospital & function drops.",
    icon: "fa-city",
    size: "small",
    categories: ["local"],
    fullDesc: "8hr/80km full-day and 4hr/40km half-day local packages in Urbania, Innova or Tempo. Ideal for city sightseeing, marriages & guest handling.",
    included: [
      "4hr/40km & 8hr/80km slabs",
      "ISKCON, Lalbagh, Nandi Hills runs",
      "Function / hospital drops",
      "Transparent billing on call"
    ],
    process: [
      "Pick vehicle & time slot",
      "Fixed local package quote",
      "Driver arrives 10 min early",
      "Transparent billing on call"
    ],
    documents: ["City sightseeing", "Functions & guests", "Hospital visits"],
    timeline: "Fixed quote on call – 24/7 service"
  },
  {
    id: 6,
    title: "Outstation – South India Tourism",
    shortDesc: "Ooty, Coonoor, Mysore, Coimbatore, Chennai & custom hill-station / temple / beach tours.",
    icon: "fa-route",
    size: "wide",
    categories: ["outstation"],
    fullDesc: "New places, new experiences. 1-day Mysore, 2-day Ooty–Coonoor, Tirupati darshan, Coimbatore–Isha, Chennai drops & Kerala routes with tour planning help.",
    included: [
      "Ooty – Coonoor 2D/3D tours",
      "Mysore 1-day packages",
      "Tirupati / Coimbatore pilgrimage",
      "Chennai airport drops",
      "Custom South India circuits"
    ],
    process: [
      "Tell us dates & places",
      "Get route + hotel guidance",
      "Vehicle + driver package",
      "On-tour support on WhatsApp"
    ],
    documents: ["Family vacations", "Pilgrimage groups", "Honeymoon & friends trips"],
    timeline: "Fixed quote on call – 24/7 service"
  },
  {
    id: 7,
    title: "Airport Pickup & Drop",
    shortDesc: "On-time Kempegowda Airport transfers at fixed quote – day or night, with flight tracking.",
    icon: "fa-plane",
    size: "small",
    categories: ["airport", "local"],
    fullDesc: "Early-morning or late-night flights – we track your flight and wait with placard. Fixed airport quote from Gottigere & across Bangalore.",
    included: [
      "Fixed airport quote",
      "Flight tracking + waiting",
      "Night-drive experienced drivers",
      "Urbania / Innova / Tempo / Sedan options"
    ],
    process: [
      "Share flight no. & time",
      "Fixed pickup quote",
      "Driver + cab details on SMS",
      "Pay after drop"
    ],
    documents: ["Solo & family flyers", "Corporate pickups", "Night arrivals"],
    timeline: "Fixed quote on call – 24/7 service"
  }
];
