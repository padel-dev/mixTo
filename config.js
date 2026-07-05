// ─────────────────────────────────────────────────────────────────────────────
// CONFIG.JS — Mixto Padel Cup · I Edizione 2026
// Modifica solo questo file per personalizzare il sito.
// ─────────────────────────────────────────────────────────────────────────────

const CONFIG = {

  // ── DATI GOOGLE SHEETS ────────────────────────────────────────────────────
  spreadsheetId: '14aBgW2ReFiRQNOEPJFG2rgApzQL9QOQvrx0eVfsmuYc',
  apiKey:        'AIzaSyAdN7BX1xID-YDW2ZwAoivSbAPbqz_Tr50',
  mixSheet:      'Mix',   // foglio iscritti: intestazioni "GIRONE A" + righe "Nome1 / Nome2"
  matchSheet:    'Mix2',  // foglio partite: intestazioni "GIRONE A" + righe Coppia1|Coppia2|Data|Orario|Campo|Risultato|Punti1|Punti2

  // ── IDENTITÀ ──────────────────────────────────────────────────────────────
  title:       'MIXTO PADEL CUP',
  titleAccent: 'X',
  edition:     'I EDIZIONE',
  tagline:     'Il torneo amatoriale a coppie miste che porta la passione del padel nei rioni di Benevento. Nove gironi, ventisette coppie, un solo obiettivo.',
  eyebrow:     'Benevento · Padel Amatoriale Misto · 2026',
  footerSub:   'I Edizione · Benevento 2026 · Padel Amatoriale Misto',
  footerCredit:'Fatto con passione per i rioni di Benevento',
  pageTitle:   'Mixto Padel Cup – I Edizione · Benevento Padel 2026',

  // ── SOCIAL ────────────────────────────────────────────────────────────────
  social: {
    facebook:  'https://www.facebook.com/groups/400903518309647',
    instagram: 'https://www.instagram.com/torneo_dei_rioni_padel_bn/',
  },

  // ── PALETTE ───────────────────────────────────────────────────────────────
  palette: {
    '--accent':       '#f5c842',
    '--accent-light': '#ffe066',
    '--accent-dim':   '#2b2306',
    '--accent-mid':   '#4d3f0d',
    '--bg':           '#0a0a08',
    '--bg2':          '#0f0f0c',
    '--card':         '#17160f',
    '--border':       '#2b2a1e',
    '--muted':        '#7a7862',
    '--text':         '#f0eee2',
    '--gold':         '#f5c842',
    '--cal-month-color': '#f5c842',
    '--map-filter': 'grayscale(0.3) invert(0.9) hue-rotate(30deg)',
  },

  // ── GIRONI (9 gironi, letti da un unico foglio "Mix2") ───────────────────
  gironi: [
    { name: 'A', label: 'GIRONE A', color: '#f5c842', cssVars: { '--g-dim': '#2b2306', '--g-mid': '#4d3f0d' } },
    { name: 'B', label: 'GIRONE B', color: '#e8402d', cssVars: { '--g-dim': '#2b0f0a', '--g-mid': '#4d1f16' } },
    { name: 'C', label: 'GIRONE C', color: '#3fd97a', cssVars: { '--g-dim': '#0a2b16', '--g-mid': '#164d2c' } },
    { name: 'D', label: 'GIRONE D', color: '#4fb8e8', cssVars: { '--g-dim': '#0a1f2b', '--g-mid': '#163b4d' } },
    { name: 'E', label: 'GIRONE E', color: '#c77dff', cssVars: { '--g-dim': '#1e0a2b', '--g-mid': '#38164d' } },
    { name: 'F', label: 'GIRONE F', color: '#ff7043', cssVars: { '--g-dim': '#2b140a', '--g-mid': '#4d2416' } },
    { name: 'G', label: 'GIRONE G', color: '#42e8d0', cssVars: { '--g-dim': '#0a2b26', '--g-mid': '#164d46' } },
    { name: 'H', label: 'GIRONE H', color: '#ff5ca8', cssVars: { '--g-dim': '#2b0a1c', '--g-mid': '#4d1633' } },
    { name: 'I', label: 'GIRONE I', color: '#b8e942', cssVars: { '--g-dim': '#232b0a', '--g-mid': '#3f4d16' } },
  ],

  // ── FEATURE FLAGS ─────────────────────────────────────────────────────────
  features: {
    calendarFilters: true,
    levelLegend:     false,
    loadMoreButton:  true,
  },

  // ── STORICO EDIZIONI ──────────────────────────────────────────────────────
  storia: [
    { edition: 'I Edizione · 2026', winner: 'In corso', current: true },
  ],

  // ── VENUE ─────────────────────────────────────────────────────────────────
  venue: {
    name:       'MOOD SPORT VILLAGE',
    subtitle:   '3 campi da padel · Coperti · Panoramici',
    address:    'Strada Provinciale 17\n82010 Sant\'Angelo a Cupolo (BN)\nCampania, Italia',
    hours:      'Tutti i giorni · 08:30 – 00:00',
    services:   '🅿️ Parcheggio gratuito\n🚿 Spogliatoi\n🍹 Bar & snack\n📶 WiFi\n🎾 Noleggio attrezzatura',
    playtomicUrl: 'https://playtomic.io/tenant/362372fa-8ece-439e-8a3b-42de92c3f824',
    mapsUrl:    'https://www.google.com/maps?q=41.09364247,14.81436365',
    imageUrl:   'https://res.cloudinary.com/playtomic/image/upload/c_scale,w_1200,q_80,f_auto/pro/tenants/362372fa-8ece-439e-8a3b-42de92c3f824/1708523265153',
    embedUrl:   'https://maps.google.com/maps?q=41.09364247,14.81436365&z=15&output=embed',
  },

};
