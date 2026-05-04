// ========================
// PROJECT TITLE & META TRANSLATIONS
// ========================
const titleTranslations = {
  // Architecture
  'Sistem Dere Pivot':                'Pivot Entry System',
  'Parmak me Rrjetë Diamanti':        'Diamond Lattice Railing',
  'Parmak Ballkoni Ornamental':       'Ornamental Balcony Railing',
  'Ekran Metalik Dekorativ':          'Laser-Cut Metal Screen',
  'Shkallë Spirale Monumentale':      'Monumental Spiral Staircase',
  'Shkallë Aksesi të Jashtme':        'Exterior Access Staircase',
  'Shkallë Spirale Korten':           'Corten Spiral Staircase',
  'Shkallë e Varur':                  'Floating Staircase',
  'Shkallë e Jashtme':               'Commercial Exterior Staircase',
  'Detaj Kornize Çeliku':             'Black Steel Door Frame',
  'Skelet Strukturor Industrial':     'Industrial Structural Framework',
  'Veshje Muri Dekorative':           'Decorative Wall Cladding',
  'Parmak me Shufra Vertikale':       'Vertical Bar Railing',
  'Panel Hekuri Floral':              'Floral Scrollwork Panel',
  'Veshje Traversash Shkallësh':      'Stair Stringer Cladding',
  'Skelet Strukturor i Rëndë':        'Heavy Structural Framework',
  'Parmak Hekuri Ornamental':         'Ornamental Iron Railing',
  'Vizatimi Teknik i Parmakut':       'Railing Design Drawing',
  'Portë Rrëshqitëse e Zezë':         'Black Sliding Gate',
  'Shkallë Spirale Gri':              'Grey Spiral Staircase',
  'Derë Industriale me Dy Fletë':     'Bifold Industrial Door',
  'Strukturë Modulare Çeliku':        'Modular Steel Structure',
  'Montim Parmakësh në Punishte':     'Loop-Motif Railings',
  'Prodhim Serie i Gardhit':          'Fence Panel Batch',
  'Portë Hyrëse Automatike':          'Vertical Slat Driveway Gate',
  'Pamje Ajrore e Shkallëve':         'Aerial Stair Construction',
  'Veshje Kolone Inox':               'Column Cladding Panel',
  'Ansambël i Derës së Sigurisë':     'Security Door Assembly',
  // Objects
  'Unaza Koncentrike Çeliku':         'Concentric Steel Rings',
  'Raft Varës Gotash':                'Steel Hanging Rack',
  'Panel Artistik Korten':            'Corten Artistic Panel',
  'Sistem Rafti i Porositur':         'Custom Shelving System',
  'Tavolinë Pritjeje me Valë':        'Wavy Reception Desk',
  'Bordurë e Bazës Inox':             'Stainless Steel Base Trim',
  'Kolonë e Kanneluruar Bronzi':      'Fluted Bronze Column',
  'Raft me Rrjetë Inox':              'Expanded Mesh Shelf',
  'Kuti Metalike Shërbimi':           'Metal Utility Enclosure',
  'Detaj i Dorezës së Kutisë':        'Flush Enclosure Detail',
  'Rrafshi i Shkallëve Komerciale':   'Commercial Staircase Elevation',
  'Instalimi i Shkallëve Lisi':       'Oak Stair Installation',
};

const metaTranslations = {
  'Arkitekturë':        'Architecture',
  'Objekte':            'Objects',
  'Çelik':              'Steel',
  'Shkallë':            'Staircases',
  'Kangjella & Korimano': 'Railings & Handrails',
  'Dekor & CNC':        'Decorative & CNC',
  'Strukturë':          'Structures',
  'Fasadë':             'Facade',
  'Porta & Dyer':       'Gates & Doors',
  'Arredim & Mobilje':  'Interiors & Furniture',
};

// ========================
// PROJECT DATA
// ========================
const projectData = {
  // Architecture
  'Sistem Dere Pivot':              { category: 'Arkitekturë', year: '2022', client: 'Privat', desc: 'Kornizë çeliku e zezë me xham dhe panel anësor fiks.', descEn: 'Black steel frame with clear glass and fixed sidelight.' },
  'Parmak me Rrjetë Diamanti':      { category: 'Arkitekturë', year: '2022', client: 'Privat', desc: 'Panel metalik i porositur me medalion për Villa Xoxe.', descEn: 'Custom metal panel with medallion for Villa Xoxe.' },
  'Parmak Ballkoni Ornamental':     { category: 'Arkitekturë', year: '2020', client: 'Privat', desc: 'Punë hekuri me spirale dekorative për fasadë tulle.', descEn: 'Wrought-iron scrollwork patterns for brick facade.' },
  'Ekran Metalik Dekorativ':        { category: 'Arkitekturë', year: '2022', client: 'Privat', desc: 'Model gjeometrik i ndërthurur në çelik të prerë me lazer.', descEn: 'Geometric interlocking pattern in decorative steel.' },
  'Shkallë Spirale Monumentale':    { category: 'Arkitekturë', year: '2019', client: 'Privat', desc: 'Çelik helikal i bardhë me parmak të lakuar.', descEn: 'White helical steel with curved handrail.' },
  'Shkallë Aksesi të Jashtme':      { category: 'Arkitekturë', year: '2021', client: 'Privat', desc: 'Çelik gri dhe parmakë me shufra vertikale për ndërtesë kompozite.', descEn: 'Grey steel stairs and vertical bar railings for composite building.' },
  'Shkallë Spirale Korten':         { category: 'Arkitekturë', year: '2022', client: 'Privat', desc: 'Çelik korten helikal i rrethuar rreth një shtylle çeliku të zi.', descEn: 'Helical corten steel wrapped around a black steel column.' },
  'Shkallë e Varur':                { category: 'Arkitekturë', year: '2023', client: 'Privat', desc: 'Hapa lisi mbi çelik të lyer me pluhur dhe ndriçim LED.', descEn: 'Oak wood treads on powder-coated steel with integrated LED.' },
  'Shkallë e Jashtme':              { category: 'Arkitekturë', year: '2021', client: 'Privat', desc: 'Strukturë çeliku e pikturuar me të bardhë mbi fasadë xhami.', descEn: 'White painted steel structure on glass curtain wall.' },
  'Detaj Kornize Çeliku':           { category: 'Arkitekturë', year: '2023', client: 'Privat', desc: 'Detaj i bashkimit të këndit të kornizës me rrjetë çeliku.', descEn: 'Precision-welded corner junction of grid mullion pattern.' },
  'Skelet Strukturor Industrial':   { category: 'Arkitekturë', year: '2020', client: 'Privat', desc: 'Kolona çeliku dhe sistem trarësh çatie për përdorim tregtar.', descEn: 'Steel columns and roof truss system for commercial use.' },
  'Veshje Muri Dekorative':         { category: 'Arkitekturë', year: '2023', client: 'Privat', desc: 'Veshje muri nga dyshemeja deri në tavan për brenda një ambienti luksoz.', descEn: 'Floor-to-ceiling wall facade inside a luxury residential interior.' },
  'Parmak me Shufra Vertikale':     { category: 'Arkitekturë', year: '2022', client: 'Privat', desc: 'Parmak ballkoni prej çeliku të zi me balustrada të rrafshëta.', descEn: 'Black steel balcony railing with flat bar balusters.' },
  'Panel Hekuri Floral':            { category: 'Arkitekturë', year: '2021', client: 'Privat', desc: 'Ornament dekorativ hekuri gjatë fazës së fabrikimit.', descEn: 'Wrought-iron decorative tracery in the fabrication phase.' },
  'Veshje Traversash Shkallësh':    { category: 'Arkitekturë', year: '2021', client: 'Privat', desc: 'Panele anësore çeliku të bardha mbi shkallë betoni.', descEn: 'White steel side paneling on concrete staircase.' },
  'Skelet Strukturor i Rëndë':      { category: 'Arkitekturë', year: '2020', client: 'Privat', desc: 'Kolona çeliku dhe syneta për ndërtesë të madhe.', descEn: 'Steel columns and lateral bracing for large-scale building.' },
  'Parmak Hekuri Ornamental':       { category: 'Arkitekturë', year: '2021', client: 'Privat', desc: 'Shkallë hyrëse me motive rrethore të falsifikuara.', descEn: 'Entrance staircase with circular-loop motifs.' },
  'Vizatimi Teknik i Parmakut':     { category: 'Arkitekturë', year: '2022', client: 'Privat', desc: 'Plan teknik CAD për panel metalik me rrjetë diamanti.', descEn: 'Technical CAD plan for diamond lattice metal panel.' },
  'Portë Rrëshqitëse e Zezë':       { category: 'Arkitekturë', year: '2021', client: 'Privat', desc: 'Çelik i lyer me pluhur me dizajn gjeometrik.', descEn: 'Powder-coated steel with geometric panel layout.' },
  'Shkallë Spirale Gri':            { category: 'Arkitekturë', year: '2021', client: 'Privat', desc: 'Strukturë çeliku e lyer me pluhur në hapësirë betoni.', descEn: 'Powder-coated steel structure in raw concrete space.' },
  'Derë Industriale me Dy Fletë':   { category: 'Arkitekturë', year: '2020', client: 'Privat', desc: 'Çelik i lyer me pluhur të kuq për hyrje parkingu.', descEn: 'Red powder-coated steel for parking entrance.' },
  'Strukturë Modulare Çeliku':      { category: 'Arkitekturë', year: '2022', client: 'Privat', desc: 'Ndërtesë e veshur me shkallë aksesi të integruar.', descEn: 'Clad building with integrated black access staircase.' },
  'Montim Parmakësh në Punishte':   { category: 'Arkitekturë', year: '2021', client: 'Privat', desc: 'Set parmakësh çeliku gri gati për instalim.', descEn: 'Set of grey steel railings ready for site installation.' },
  'Prodhim Serie i Gardhit':        { category: 'Arkitekturë', year: '2022', client: 'Privat', desc: 'Panele metalike të fabrikuara në punishte.', descEn: 'Fabricated metal panels in the production workshop.' },
  'Portë Hyrëse Automatike':        { category: 'Arkitekturë', year: '2023', client: 'Privat', desc: 'Portë çeliku krem me shufra vertikale.', descEn: 'Automated cream powder-coated steel gate.' },
  'Pamje Ajrore e Shkallëve':       { category: 'Arkitekturë', year: '2022', client: 'Privat', desc: 'Pamje nga lart e paraqitjes së hapave të çelikut.', descEn: 'Top-down view of helical steel tread layout.' },
  'Veshje Kolone Inox':             { category: 'Arkitekturë', year: '2022', client: 'Privat', desc: 'Montim i panelit inox të brushuar rreth shtyllës së betonit.', descEn: 'Brushed stainless steel fit-out around concrete pillar.' },
  'Ansambël i Derës së Sigurisë':   { category: 'Arkitekturë', year: '2021', client: 'Privat', desc: 'Derë dhe portë metalike me dekorime të falsifikuara.', descEn: 'Black metal door and gate with ornamental scrollwork.' },
  // Objects
  'Unaza Koncentrike Çeliku':       { category: 'Objekte', year: '2022', client: 'Privat', desc: 'Instalacion dekorativ metalik i integruar me suva skulpturore.', descEn: 'Decorative metal installation integrated with sculptural plaster.' },
  'Raft Varës Gotash':              { category: 'Objekte', year: '2021', client: 'Privat', desc: 'Instalacion çeliku për bar me ndriçim Edison të integruar.', descEn: 'Custom bar installation with integrated Edison lighting.' },
  'Panel Artistik Korten':          { category: 'Objekte', year: '2021', client: 'Privat', desc: 'Çelik dekorativ i prerë me lazer për Universitetin Politeknik të Tiranës.', descEn: 'Laser-etched decorative steel for Polytechnic University of Tirana.' },
  'Sistem Rafti i Porositur':       { category: 'Objekte', year: '2022', client: 'Privat', desc: 'Korniza çeliku me furnir druri dhe ndriçim LED.', descEn: 'Steel frames with wood veneer and LED strip lighting.' },
  'Tavolinë Pritjeje me Valë':      { category: 'Objekte', year: '2022', client: 'Privat', desc: 'Çelik inox me lustër pasqyre për Europa Dental Hospital.', descEn: 'Mirror-polished stainless steel for Europa Dental Hospital.' },
  'Bordurë e Bazës Inox':           { category: 'Objekte', year: '2021', client: 'Privat', desc: 'Finalizimi i bordurës së çelikut inox në tavolinë të lakuar.', descEn: 'Finishing of brushed stainless steel on a curved counter.' },
  'Kolonë e Kanneluruar Bronzi':    { category: 'Objekte', year: '2022', client: 'Privat', desc: 'Kolonë metalike e skulpturuar si ndarëse hapësire.', descEn: 'Sculpted metal column serving as interior space divider.' },
  'Raft me Rrjetë Inox':            { category: 'Objekte', year: '2022', client: 'Privat', desc: 'Detaj i raftit prej rrjete çeliku inox me sfond të kuq.', descEn: 'Detail of stainless steel display rack with red backing.' },
  'Kuti Metalike Shërbimi':         { category: 'Objekte', year: '2022', client: 'Privat', desc: 'Strehim metalik rezistent ndaj motit mbi mur guri.', descEn: 'Powder-coated weatherproof housing on stone wall.' },
  'Detaj i Dorezës së Kutisë':      { category: 'Objekte', year: '2022', client: 'Privat', desc: 'Pamje e afërt e dorezës me kyç në kutinë metalike.', descEn: 'Close-up of lockable handle on powder-coated box.' },
  'Rrafshi i Shkallëve Komerciale': { category: 'Objekte', year: '2021', client: 'Privat', desc: 'Strukturë çeliku zigzag me lartësi të plotë në fasadë.', descEn: 'Full-height zigzag steel structure on glass facade.' },
  'Instalimi i Shkallëve Lisi':     { category: 'Objekte', year: '2022', client: 'Privat', desc: 'Strukturë druri dhe çeliku e përfunduar me shufra vertikale.', descEn: 'Completed wood and steel structure with floor-to-ceiling bars.' },
};

// ========================
// PROJECT MODAL
// ========================

// Cached modal element references (queried once, reused on every open)
var _modalEls = null;
function getModalEls() {
  if (_modalEls) return _modalEls;
  _modalEls = {
    category:   document.getElementById('modalCategory'),
    title:      document.getElementById('modalTitle'),
    desc:       document.getElementById('modalDesc'),
    year:       document.getElementById('modalYear'),
    client:     document.getElementById('modalClient'),
    mainImg:    document.getElementById('modalMainImg'),
    gallery:    document.getElementById('modalGallery'),
    strip:      document.getElementById('modalGalleryStrip'),
    prev:       document.getElementById('modalGalleryPrev'),
    next:       document.getElementById('modalGalleryNext'),
    counter:    document.getElementById('modalGalleryCounter'),
    relLabel:   document.getElementById('modalRelatedLabel'),
    relGrid:    document.getElementById('modalRelatedGrid'),
  };
  return _modalEls;
}

var _galleryItems = [];
var _galleryIndex = 0;

function buildModalGallery(items, alt) {
  var m = getModalEls();
  _galleryItems = items;
  _galleryIndex = 0;
  _galleryEls = [];
  m.strip.innerHTML = '';
  items.forEach(function(src, i) {
    var isVideo = /\.mp4$/i.test(src);
    var el;
    if (isVideo) {
      el = document.createElement('video');
      el.src = src;
      el.autoplay = true;
      el.muted = true;
      el.loop = true;
      el.setAttribute('playsinline', '');
    } else {
      el = document.createElement('img');
      el.src = src;
      el.alt = alt;
      el.loading = 'lazy';
      el.decoding = 'async';
    }
    el.className = 'modal-gallery-media';
    el.dataset.index = i;
    el.addEventListener('click', function() { setGalleryIndex(i); });
    m.strip.appendChild(el);
  });
  updateGalleryState();
}

function setGalleryIndex(idx) {
  _galleryIndex = idx;
  updateGalleryState();
}

var _galleryEls = [];
function updateGalleryState() {
  var m = getModalEls();
  if (!_galleryEls.length) _galleryEls = Array.from(m.strip.querySelectorAll('.modal-gallery-media'));
  _galleryEls.forEach(function(el, i) {
    el.classList.toggle('active', i === _galleryIndex);
  });
  m.counter.textContent = (_galleryIndex + 1) + ' / ' + _galleryItems.length;
  m.prev.disabled = _galleryIndex === 0;
  m.next.disabled = _galleryIndex === _galleryItems.length - 1;
  if (_galleryEls[_galleryIndex]) {
    _galleryEls[_galleryIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }
}

function modalGalleryPrev() {
  if (_galleryIndex > 0) setGalleryIndex(_galleryIndex - 1);
}

function modalGalleryNext() {
  if (_galleryIndex < _galleryItems.length - 1) setGalleryIndex(_galleryIndex + 1);
}

function openProjectModal(card) {
  // Track which card is open so language switching can refresh the modal
  currentModalCard = card;

  // Read all data directly from card data attributes (stored at card creation time)
  const titleAl = card.dataset.titleAl || card.querySelector('.project-title').textContent.trim();
  const titleEn = card.dataset.titleEn || titleAl;
  const titleDisplay = currentLang === 'en' ? titleEn : titleAl;

  const descAl = card.dataset.descAl || '';
  const descEn = card.dataset.descEn || descAl;
  const descDisplay = currentLang === 'en'
    ? (descEn || descAl || 'Custom steel work by Work Steel.')
    : (descAl || 'Punim çeliku me porosi nga Work Steel.');

  const year = card.dataset.year || '';

  const categoryAl = card.dataset.categoryAl || card.querySelector('.project-meta').textContent.split('·')[0].trim() || 'Arkitekturë';
  const categoryEn = metaTranslations[categoryAl] || categoryAl;
  const categoryDisplay = currentLang === 'en' ? categoryEn : categoryAl;

  const mainImgSrc = card.querySelector('img').getAttribute('src');

  // Parse extra gallery photos (beyond the cover image)
  let galleryExtras = [];
  try {
    if (card.dataset.gallery) galleryExtras = JSON.parse(card.dataset.gallery);
  } catch(e) { galleryExtras = []; }

  // Populate modal header fields
  var m = getModalEls();
  m.category.textContent = categoryDisplay;
  m.title.textContent    = titleDisplay;
  m.desc.textContent     = descDisplay;
  m.year.textContent     = year;
  m.client.textContent   = 'Privat';
  m.mainImg.src          = mainImgSrc;
  m.mainImg.alt          = titleDisplay;

  // Gallery section — dynamic, shows all images/videos
  if (!galleryExtras || galleryExtras.length === 0) {
    m.gallery.style.display = 'none';
  } else {
    m.gallery.style.display = '';
    buildModalGallery(galleryExtras, titleDisplay);
    m.prev.onclick = modalGalleryPrev;
    m.next.onclick = modalGalleryNext;
  }

  // Related projects — random selection from same category, never the open card
  const t = translations[currentLang] || translations['al'];
  m.relLabel.textContent = t.modalRelated || 'PUNIME TË TJERA';
  const grid = m.relGrid;
  grid.innerHTML = '';
  const allCards = Array.from(document.querySelectorAll('.project-card'));
  // Build pool: same category, exclude current card — then shuffle for randomness
  let pool = allCards.filter(function(c) { return c !== card && c.dataset.categoryAl === categoryAl; });
  if (pool.length === 0) pool = allCards.filter(function(c) { return c !== card; });
  const others = shuffleArray(pool).slice(0, 3);
  others.forEach(function(c) {
    const relTitleAl = c.dataset.titleAl || '';
    const relTitleEn = c.dataset.titleEn || relTitleAl;
    const relTitle   = currentLang === 'en' ? relTitleEn : relTitleAl;
    const relCatAl   = c.dataset.categoryAl || '';
    const relCatEn   = metaTranslations[relCatAl] || relCatAl;
    const relCat     = currentLang === 'en' ? relCatEn : relCatAl;
    const relSrc     = c.querySelector('img').getAttribute('src');
    const div = document.createElement('div');
    div.className = 'modal-related-card';
    // Store bilingual data so switchLanguage can update without re-opening
    div.dataset.titleAl   = relTitleAl;
    div.dataset.titleEn   = relTitleEn;
    div.dataset.categoryAl = relCatAl;
    div.dataset.categoryEn = relCatEn;
    div.innerHTML = '<div class="modal-related-card-img"><img src="' + relSrc + '" alt="' + relTitle + '" loading="lazy" decoding="async"></div>'
      + '<p class="modal-related-card-title">' + relTitle + '</p>'
      + '<p class="modal-related-card-meta">' + relCat + ' · Çelik</p>';
    div.addEventListener('click', function() {
      var modal = document.getElementById('projectModal');
      if (modal.classList.contains('open')) {
        var content = modal.querySelector('.project-modal-content');
        content.style.animation = 'modalDismiss 0.28s cubic-bezier(0.55,0,1,0.45) both';
        setTimeout(function() {
          openProjectModal(c);
          modal.scrollTop = 0;
          content.style.animation = 'none';
          void content.offsetWidth;
          content.style.animation = 'modalReveal 0.55s cubic-bezier(0.16,1,0.3,1) both';
          setTimeout(function() { content.style.animation = ''; }, 560);
        }, 290);
      } else {
        openProjectModal(c);
      }
    });
    grid.appendChild(div);
  });

  const modal = document.getElementById('projectModal');
  modal.classList.add('open');
  modal.scrollTop = 0;
  document.body.style.overflow = 'hidden';

  // Browser back support
  history.pushState({ projectModal: true }, '');
}

function closeProjectModal() {
  const modal = document.getElementById('projectModal');
  modal.classList.add('closing');
  setTimeout(function() {
    modal.classList.remove('open', 'closing');
    document.body.style.overflow = '';
  }, 320);
}

// Browser back button closes modal
window.addEventListener('popstate', function(e) {
  const modal = document.getElementById('projectModal');
  if (modal.classList.contains('open')) {
    modal.classList.add('closing');
    setTimeout(function() {
      modal.classList.remove('open', 'closing');
      document.body.style.overflow = '';
    }, 320);
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    var contactModal = document.getElementById('contactModal');
    if (contactModal && contactModal.classList.contains('is-open')) {
      contactModal.classList.remove('is-open');
      document.body.style.overflow = '';
      return;
    }
  }
  var modal = document.getElementById('projectModal');
  if (!modal || !modal.classList.contains('open')) return;
  if (e.key === 'Escape') { closeProjectModal(); return; }
  if (e.key === 'ArrowLeft')  { modalGalleryPrev(); return; }
  if (e.key === 'ArrowRight') { modalGalleryNext(); return; }
});

// Touch swipe on gallery strip
(function() {
  var touchStartX = 0;
  document.addEventListener('touchstart', function(e) {
    var strip = document.getElementById('modalGalleryStrip');
    if (strip && strip.contains(e.target)) touchStartX = e.touches[0].clientX;
  }, { passive: true });
  document.addEventListener('touchend', function(e) {
    var strip = document.getElementById('modalGalleryStrip');
    if (!strip || !strip.contains(e.target)) return;
    var dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 40) { dx < 0 ? modalGalleryNext() : modalGalleryPrev(); }
  }, { passive: true });
})();

// Delegated click handler for all project cards (static + dynamically cloned)
document.addEventListener('click', function(e) {
  var card = e.target.closest('.project-card');
  if (!card) return;
  e.preventDefault();
  openProjectModal(card);
});

// ========================
// NAVIGATION
// ========================
const pages = ['home','punet','arkitekture','objekte','sherbime','ekspertize','kontakt'];
let currentPage = 'home';

// ── OVERLAY COLOUR SYSTEM ──────────────────────────────────────────────
// Maps section CSS classes → background theme for the WS monogram & hamburger.
// Color theory: brass (warm gold) on dark, charcoal on cream/light, cream on bronze.
const SECTION_THEME_MAP = {
  'portfolio-section':     'light',
  'cat-section':           'light',
  'cat-hero':              'light',
  'faq-section':           'light',
  'domains-section':       'light',
  'steel-foundation':      'light',
  'services-editorial':    'bronze',
  'contact-types-section': 'light',
  'guiding-section':       'light',
  'exp-referencat':        'light',
};

function _getThemeAtY(pageId, checkY) {
  const pageEl = document.getElementById('page-' + pageId);
  if (!pageEl) return 'dark';
  const sections = pageEl.querySelectorAll('section, .cat-hero');
  let theme = 'dark';
  for (const sec of sections) {
    const r = sec.getBoundingClientRect();
    if (r.top <= checkY && r.bottom > checkY) {
      for (const cls in SECTION_THEME_MAP) {
        if (sec.classList.contains(cls)) { theme = SECTION_THEME_MAP[cls]; break; }
      }
      break;
    }
  }
  return theme;
}

function applyOverlayTheme(theme, skipHeader) {
  const mono  = document.getElementById('ws-monogram');
  const hb    = document.getElementById('hamburger');
  const hdr   = document.getElementById('site-header');
  if (!mono || !hb) return;

  mono.classList.remove('dark', 'on-bronze');
  hb.classList.remove('dark-bg', 'on-bronze');

  if (theme === 'light') {
    mono.classList.add('dark');
    hb.classList.add('dark-bg');
    if (!skipHeader) hdr && hdr.classList.add('light-theme');
  } else if (theme === 'bronze') {
    mono.classList.add('on-bronze');
    hb.classList.add('on-bronze');
    if (!skipHeader) hdr && hdr.classList.remove('light-theme');
  } else {
    if (!skipHeader) hdr && hdr.classList.remove('light-theme');
  }
}

function updateHeaderForPage(pageId) {
  // Active nav link
  document.querySelectorAll('.header-nav a').forEach(a => a.classList.remove('active-page'));
  var activePageId = (pageId === 'arkitekture' || pageId === 'objekte') ? 'punet' : pageId;
  const match = document.querySelector(`.header-nav a[data-page="${activePageId}"]`);
  if (match) match.classList.add('active-page');
  // Colour at scroll top (y=55 — centre of the fixed symbols)
  const theme = _getThemeAtY(pageId, 55);
  applyOverlayTheme(theme);
}

function updateOverlayOnScroll() {
  const theme = _getThemeAtY(currentPage, 55);
  applyOverlayTheme(theme, true); // skip header class — handled separately
}

function navigateTo(pageId) {
  if (pageId === currentPage) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }

  const prevPage = currentPage;
  currentPage = pageId;
  updateHeaderForPage(pageId);

  const oldEl = document.getElementById('page-' + prevPage);
  const newEl = document.getElementById('page-' + pageId);

  function revealCards() {
    if (pageId === 'punet') initPortfolio(pageId);
  }

  function enterCatTitle() {
    var title = newEl.querySelector('.cat-title');
    if (!title) return;
    title.classList.remove('title-entered');
    void title.offsetWidth;
    setTimeout(function() { title.classList.add('title-entered'); }, 60);
  }

  var scrollY = window.scrollY;
  var vh = window.innerHeight;
  var pageH = Math.max(oldEl.scrollHeight, vh);
  var pct = Math.max(0, Math.min(100, Math.round(((scrollY + vh * 0.5) / pageH) * 100)));
  oldEl.style.transformOrigin = 'center ' + pct + '%';
  oldEl.classList.add('page-exiting');

  setTimeout(function() {
    oldEl.classList.remove('active', 'page-exiting');
    oldEl.style.transformOrigin = '';
    newEl.classList.remove('no-enter-anim');
    newEl.classList.add('active', 'page-entering');
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (window._scrollEngineReset) window._scrollEngineReset();

    if (pageId === 'punet') { buildPunetGrid(); resetPunetPage(); }
    enterCatTitle();

    setTimeout(function() {
      newEl.classList.remove('page-entering');
      newEl.classList.add('no-enter-anim');
      initScrollAnimations();
      revealCards();
    }, 260);
  }, 280);
}

// ========================
// HEADER SCROLL HIDE/SHOW
// ========================
let lastScroll = 0;
let scrollTicking = false;
const header = document.getElementById('site-header');

window.addEventListener('scroll', () => {
  if (!scrollTicking) {
    requestAnimationFrame(() => {
      const current = window.scrollY;
      const delta = current - lastScroll;
      // Only react to intentional scrolls (>6px), not micro-movements
      if (Math.abs(delta) > 6) {
        if (delta > 0 && current > 120) {
          header.classList.add('hidden');
        } else {
          header.classList.remove('hidden');
        }
        lastScroll = current;
      }
      updateOverlayOnScroll();
      scrollTicking = false;
    });
    scrollTicking = true;
  }
}, { passive: true });

// ========================
// SCROLL ANIMATIONS
// ========================
var _scrollObserver = null;
function initScrollAnimations() {
  var activePage = document.querySelector('.page.active');
  if (!activePage) return;

  activePage.querySelectorAll('.cat-grid, .portfolio-grid').forEach(function(grid) {
    var cards = grid.querySelectorAll('.project-card:not(.hidden-project)');
    cards.forEach(function(card, i) {
      var delay = Math.floor(i / 2) * 0.1;
      card.style.setProperty('--stagger', delay + 's');
      card.classList.add('stagger-item');
    });
  });

  var selectors = '.fade-up:not(.hero-reveal), .fade-left:not(.hero-reveal), .fade-right:not(.hero-reveal), .img-reveal:not(.hero-reveal)';
  var els = activePage.querySelectorAll(selectors);

  if (_scrollObserver) _scrollObserver.disconnect();
  _scrollObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        _scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.10, rootMargin: '0px 0px -60px 0px' });

  els.forEach(function(el) { _scrollObserver.observe(el); });

  // Re-trigger word reveals on new page
  setTimeout(function() {
    activePage.querySelectorAll('.reveal-words').forEach(function(el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) el.classList.add('words-visible');
    });
  }, 400);
}
initScrollAnimations();

// ========================
// FAQ ACCORDION
// ========================
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const answer = item.querySelector('.faq-a');
  const isOpen = btn.getAttribute('aria-expanded') === 'true';
  document.querySelectorAll('.faq-q[aria-expanded="true"]').forEach(function(b) {
    b.setAttribute('aria-expanded', 'false');
    b.closest('.faq-item').querySelector('.faq-a').classList.remove('open');
  });
  if (!isOpen) {
    btn.setAttribute('aria-expanded', 'true');
    answer.classList.add('open');
  }
}

// ========================
// CONTACT TYPE TOGGLE
// ========================
function toggleType(item) {
  const details = item.querySelector('.type-details');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.contact-type-item').forEach(i => i.classList.remove('open'));
  document.querySelectorAll('.type-details').forEach(d => d.classList.remove('open'));
  if (!isOpen) {
    item.classList.add('open');
    details.classList.add('open');
  }
}

// ========================
// FILE UPLOAD ZONE
// ========================

var UPLOAD_ALLOWED_EXTS = ['jpg','jpeg','png','heic','pdf','dwg','dxf'];
var UPLOAD_MAX_SIZE = 10 * 1024 * 1024; // 10MB

function extIcon(name) {
  var ext = name.split('.').pop().toLowerCase();
  if (['jpg','jpeg','png','heic'].includes(ext)) return '🖼️';
  if (ext === 'pdf') return '📄';
  if (['dwg','dxf'].includes(ext)) return '📐';
  return '📎';
}

function initFileUpload(areaId, inputId, fileListId, promptId, addMoreBtnId, form) {
  var area       = document.getElementById(areaId);
  var input      = document.getElementById(inputId);
  var fileList   = document.getElementById(fileListId);
  var prompt     = document.getElementById(promptId);
  var addMoreBtn = document.getElementById(addMoreBtnId);

  if (!area || !input || !form) return;

  var dt = new DataTransfer();

  function renderList() {
    fileList.innerHTML = '';
    for (var i = 0; i < dt.files.length; i++) {
      var f = dt.files[i];
      var li = document.createElement('li');
      li.innerHTML =
        '<span class="file-icon">' + extIcon(f.name) + '</span>' +
        '<span class="file-info">' +
          '<span class="file-name">' + f.name + '</span>' +
          '<span class="file-type">' + f.name.split('.').pop().toUpperCase() + ' &mdash; ' + (f.size/1024/1024).toFixed(2) + ' MB</span>' +
        '</span>' +
        '<button class="file-remove" type="button" data-idx="' + i + '" title="Hiq skedarin">✕</button>';
      fileList.appendChild(li);
    }
  }

  // Use event delegation on fileList to avoid accumulating listeners
  fileList.addEventListener('click', function(e) {
    var btn = e.target.closest('.file-remove');
    if (!btn) return;
    e.stopPropagation();
    var idx = parseInt(btn.dataset.idx);
    var newDt = new DataTransfer();
    for (var j = 0; j < dt.files.length; j++) {
      if (j !== idx) newDt.items.add(dt.files[j]);
    }
    dt = newDt;
    renderList();
    updateUI();
  });

  function updateUI() {
    var hasFiles = dt.files.length > 0;
    prompt.style.display     = hasFiles ? 'none' : '';
    fileList.style.display   = hasFiles ? '' : 'none';
    addMoreBtn.style.display = hasFiles ? '' : 'none';
  }

  function addFiles(newFiles) {
    var rejected = [];
    for (var i = 0; i < newFiles.length; i++) {
      var f = newFiles[i];
      var ext = f.name.split('.').pop().toLowerCase();
      if (!UPLOAD_ALLOWED_EXTS.includes(ext)) { rejected.push(f.name + ' (lloj i palejueshëm / unsupported type)'); continue; }
      if (f.size > UPLOAD_MAX_SIZE) { rejected.push(f.name + ' (max 10MB)'); continue; }
      var dup = false;
      for (var j = 0; j < dt.files.length; j++) {
        if (dt.files[j].name === f.name && dt.files[j].size === f.size) { dup = true; break; }
      }
      if (!dup) dt.items.add(f);
    }
    if (rejected.length) alert('Skedarët e mëposhtëm u refuzuan:\n' + rejected.join('\n'));
    renderList();
    updateUI();
  }

  area.addEventListener('click', function(e) {
    if (e.target.closest('.file-remove') || e.target.closest('#' + addMoreBtnId)) return;
    input.click();
  });

  input.addEventListener('change', function() {
    addFiles(this.files);
    this.value = '';
  });

  area.addEventListener('dragover', function(e) { e.preventDefault(); area.classList.add('drag-over'); });
  area.addEventListener('dragleave', function() { area.classList.remove('drag-over'); });
  area.addEventListener('drop', function(e) {
    e.preventDefault();
    area.classList.remove('drag-over');
    addFiles(e.dataTransfer.files);
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    var submitBtn = form.querySelector('button[type="submit"]');
    var originalText = submitBtn.textContent;
    submitBtn.textContent = currentLang === 'en' ? 'Sending...' : 'Duke dërguar...';
    submitBtn.disabled = true;

    // Sync custom file picker files into the real input
    var fileInput = input;
    var container = new DataTransfer();
    for (var i = 0; i < dt.files.length; i++) container.items.add(dt.files[i]);
    fileInput.files = container.files;

    var formData = new FormData(form);

    fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData })
      .then(function(res) {
        if (res.ok) {
          submitBtn.textContent = currentLang === 'en' ? '✓ Sent!' : '✓ U dërgua!';
          form.reset();
          dt = new DataTransfer();
          fileInput.files = new DataTransfer().files;
          renderList();
          updateUI();
          setTimeout(function() { submitBtn.textContent = originalText; submitBtn.disabled = false; }, 3500);
        } else {
          submitBtn.textContent = currentLang === 'en' ? 'Error — try again' : 'Gabim — riprovo';
          submitBtn.disabled = false;
        }
      })
      .catch(function() {
        submitBtn.textContent = currentLang === 'en' ? 'Error — try again' : 'Gabim — riprovo';
        submitBtn.disabled = false;
      });
  });
}

// Home page contact form upload
(function() {
  var area = document.getElementById('uploadArea');
  var form = area ? area.closest('section').querySelector('form.contact-form-ws') : null;
  initFileUpload('uploadArea', 'fileInput', 'fileList', 'uploadPrompt', 'addMoreBtn', form);
})();

// Kontakt page upload
(function() {
  initFileUpload('uploadAreaK', 'fileInputK', 'fileListK', 'uploadPromptK', 'addMoreBtnK', document.getElementById('ksContactForm'));
})();

// ========================
// MOBILE MENU
// ========================
var _menuScrollY = 0;
function openMobileMenu() {
  _menuScrollY = window.scrollY;
  document.getElementById('mobile-menu').classList.add('open');
  var hb = document.getElementById('hamburger');
  if (hb) hb.classList.add('menu-open');
  var mono = document.getElementById('ws-monogram');
  if (mono) mono.style.opacity = '0';
  document.body.style.overflow = 'hidden';
}
function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
  var hb = document.getElementById('hamburger');
  if (hb) hb.classList.remove('menu-open');
  var mono = document.getElementById('ws-monogram');
  if (mono) mono.style.opacity = '';
  document.body.style.overflow = '';
  window.scrollTo(0, _menuScrollY);
}

// ========================
// LANGUAGE TOGGLE
// ========================
let currentLang = 'al';
let currentModalCard = null; // tracks whichever card the modal is showing

function shuffleArray(arr) {
  var a = arr.slice();
  for (var i = a.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
  }
  return a;
}

const translations = {
  al: {
    // ── HOME ──
    heroStatement: '<span class="vh">Punime metalike me porosi — shkallë, parmakë dhe struktura çeliku të bëra me dorë në Tiranë.</span><span class="hero-line-1" aria-hidden="true">Punime metalike me porosi</span><span class="hero-line-2" aria-hidden="true">Shkallë,</span><span class="hero-line-3" aria-hidden="true">parmakë &amp; çelik</span><span class="hero-line-4" aria-hidden="true">me dorë — Tiranë.</span>',
    aboutText: 'Që nga viti 2018, kemi realizuar mbi 120 projekte për arkitektë, dizajnerë dhe klientë privatë në mbarë Shqipërinë. Çdo punim mban emrin tonë.',
    aboutCaption: 'Punishtja jonë ndodhet në zemër të Tiranës. Saldim TIG/MIG, prerje precize, finitura me dorë — çdo fazë brenda punishtjes sonë, pa ndërmjetës, pa kompromis.',
    btnOferte: 'KËRKO OFERTË FALAS',
    btnPunet: 'PUNËT',
    btnExpertiza: 'SHËRBIMET',
    missionText: 'Prodhim me porosi i strukturave dhe objekteve prej çeliku. Çdo punë fillon me një bisedë — dhe mbaron kur ju jeni plotësisht të kënaqur.',
    showMore: 'Për më shumë',
    servicesIntro: 'Nga shkallë spirale deri te skulptura metalike — çdo gjë kryhet brenda punishtjes sonë, pa ndërmjetës.',
    processLabel: 'PROCESI',
    processTitle: 'Si Punojmë',
    processLeadtime: 'Koha aktuale e pritjes: <strong>3–4 javë</strong> nga miratimi i vizatimeve.',
    step1Title: 'Biseda',     step1Desc: 'Takohemi, dëgjojmë dhe kuptojmë çfarë keni nevojë. Pa formula — vetëm bisedë e drejtpërdrejtë.', step1Time: 'Ofertë brenda 48 orëve',
    step2Title: 'Vizatimi',   step2Desc: 'Ndërtojmë vizatime teknike dhe modele 3D — ju miratoni çdo detaj para se të prekë çeliku.', step2Time: 'Vizatime brenda 5–7 ditëve',
    step3Title: 'Fabrikimi',  step3Desc: 'Punojmë brenda punishtjes sonë — saldim MIG/TIG, prerje me precizion, trajtim sipërfaqeje.', step3Time: 'Prodhim 3–6 javë',
    step4Title: 'Dorëzimi',   step4Desc: 'Ekipi ynë instalon, kontrollon dhe dorëzon. Nuk largohemi derisa gjithçka është si duhet.', step4Time: 'Garanci 2 vjet',
    contactLabel: 'KONTAKTO',
    contactTitle: 'Na Kontaktoni',
    formName: 'Emri', formEmail: 'Email', formPhone: 'Telefon', formMessage: 'Mesazhi',
    formFile: 'Bashkangjit Skedar', formSend: 'KËRKO OFERTË',
    uploadText: 'Shtoni foto këtu', uploadBtn: 'ZGJIDHNI FOTO',
    showProject: 'Shiko projektin',
    // ── NAV / FOOTER ──
    navArch: 'ARKITEKTURË', navObj: 'OBJEKTE', navServices: 'SHËRBIME',
    navExpertise: 'EKSPERTIZË', navContact: 'KONTAKT',
    mobileNavPunet: 'Punët', mobileNavArch: 'Arkitekturë', mobileNavObj: 'Objekte',
    mobileNavServices: 'Shërbime', mobileNavExpertise: 'Ekspertizë', mobileNavContact: 'Kontakt',
    footerNavProjects: 'PUNËT', footerNavServices: 'SHËRBIMET', footerNavExpertise: 'EKSPERTIZË', footerNavContact: 'KONTAKT',
    footerTagline: 'Punime Metalike me Porosi · Custom Metalwork',
    footerCopyright: '© Work Steel që nga 2018',
    // ── PORTFOLIO ──
    archPageTitle: 'Arkitekturë',
    archFilterActive: 'Arkitekturë ×', archFilterOther: 'Objekte',
    objPageTitle: 'Objekte',
    objFilterOther: 'Arkitekturë', objFilterActive: 'Objekte ×',
    portfolioFilterLabel: 'FILTRO SIPAS',
    portfolioShowMore: 'SHFAQ MË SHUMË',
    // ── EKSPERTIZË ──
    expHeroLabel: 'Çfarë Bëjmë',
    expHeroTitle: 'Ekspertiza',
    expHeroTexts: [
      'Punishtja jonë është vendosur në Tiranë — një hapësirë ku çdo veglë ka vendin e saj dhe çdo saldim ka qëllim.',
      'Që nga viti 2018, kemi punuar me arkitektë, dekoratorë dhe privatë — duke ofruar strukturë, formë dhe rezistencë.',
      'Nuk premtojmë gjëra të mëdha — bëjmë punë të mirë, me kujdes, me kohë.',
      'Çdo projekt mban emrin tonë — dhe kjo gjë na angazhon plotësisht.'
    ],
    expAccordionTitles: ['Angazhimi', 'Cilësia', 'Teknika', 'Rrjeti', 'Afati Kohor'],
    expAccordionBodies: [
      'Marrim çdo projekt si të ishte i yni — nga vizatimi i parë deri te vidhosja e fundit.',
      'Çeliku që përdorim është i certifikuar. Saldimi kontrollohet. Asnjë copë nuk del nga punishtja pa aprovimin tonë.',
      'Zotërojmë prerjen me precizion, saldimin TIG/MIG dhe formimin manual — e gjitha brenda punishtjes.',
      'Bashkëpunojmë me arkitektë, dizajnerë dhe furnizues të selektuar — njerëz me të cilët ndajmë standardet.',
      'Respektojmë çdo afat të rënë dakord. Shumica e projekteve janë gati brenda 3–6 javësh.'
    ],
    expRefTitle: 'Me Kë Punojmë',
    expRefLabels: ['Marka', 'Dizajnerë, Krijues, Klientë Privatë', 'Kompani Prodhimi', 'Firma Arkitekture', 'Mbulesë'],
    // ── SHËRBIME ──
    servicesHeroTitle: 'Shërbimet',
    servicesHeroDesc: 'Punime çeliku me porosi — nga strukturat portante deri te objektet e veçanta. Gjithçka prodhuar brenda punishtjes.',
    servicesEditorialIntro: 'Çdo projekt fillon me një vizion. Ne e ndërtojmë atë me çelik.',
    servicesEditorialTitles: ['Arkitekturë', 'Dizajn &amp; Ambiente', 'Prodhime Artistike', 'Luksi', 'Struktur Metalike'],
    servicesEditorialSubs: ['Nën-kontraktim artistik', 'Prezantime, objekte', 'Teatër, kinema'],
    domainsLabel: 'FUSHAT E APLIKIMIT',
    domainsHeading: 'Ku Punon Work Steel',
    domainTitles: ['Arkitekturë', 'Dizajn Interior', 'Arte &amp; Skulpturë', 'Industri &amp; Ndërtim', 'Struktur Metalike', 'Luksi &amp; Prezantim'],
    domainDescs: [
      'Shkallë, railingë, dyer dhe struktura portante çeliku — punime të qëndrueshme për hapësirat tuaja.',
      'Raftë, elementë ndriçimi dhe detaje dekorative çeliku që i japin karakter çdo ambienti.',
      'Skulptura metalike dhe instalacione artistike me porosi — për hapësira publike dhe private.',
      'Struktura industriale, ura këmbësorësh dhe komponentë strukturorë me specifikime teknike.',
      'Elementë skenografike për teatër dhe produksione filmike — precizion dhe besueshmëri.',
      'Ekspozitorë, objekte luksi dhe instalacione unike për ambiente premium dhe showroom.'
    ],
    domainLink: 'MËSO MË SHUMË →',
    steelFoundationTexts: [
      'Çeliku nuk është thjesht një material — është baza e çdo gjëje që ndërtojmë. Rezistenca e tij, qëndrueshmëria dhe shumëllojshmëria e bëjnë atë materialin ideal për punën tonë.',
      'Çdo copë çeliku që kalon nëpër punishtjen tonë punësohet me kujdes dhe precizion — duke u shndërruar nga lëndë e parë në vepër të finalizuar.'
    ],
    qseHeadings: ['Cilësi', 'Siguri', 'Mjedisi'],
    qseSubheadings: ['Asnjë Kompromis', 'Ndërtuar për të Qëndruar', 'Çelik i Qëndrueshëm'],
    qseDescs: [
      'Çdo punë e Work Steel kalon kontrolle rigoroze të cilësisë. Përdorim çelik të certifikuar dhe teknika saldimi sipas standardeve EN ISO.',
      'Ekipi ynë ndjek protokolle strikte gjatë fabrikimit dhe instalimit. Strukturat tona janë projektuar për dekada.',
      'Çeliku është 100% i riciklueshëm. Work Steel minimizon mbetjet dhe ripërdor materialin sa herë është e mundur.'
    ],
    // ── KONTAKT ──
    kontaktHeroTitle: 'Kontakt',
    contactTypesLabel: 'KUSH JEMI NE PËR',
    contactTypeTitle1: 'Privatë', contactTypeMore1: 'Mëso më shumë',
    contactTypeDetail1: 'Punojmë direkt me individë — njerëz me një ide të qartë për hapësirën e tyre dhe shije për detajin. Nga skica e parë deri te vidhosja e fundit.',
    contactTypeTitle2: 'Arkitektë &amp; Dekoratorë', contactTypeMore2: 'Mëso më shumë',
    contactTypeDetail2: 'Work Steel është nën-kontraktor i preferuar i arkitektëve dhe dekoratorëve në Shqipëri. Ofrojmë vizatime teknike, modele 3D dhe zgjidhje çeliku me precizion.',
    guidingLabel: 'DUKE JU UDHËHEQUR',
    guidingStatement: 'Nuk transferojmë projekte dhe as nuk dërgojmë njerëz të panjohur. E njëjta dorë që diskuton projektin e bën atë — nga fillimi deri në fund.',
    kontaktSectionLabel: 'KONTAKTO',
    kontaktFormTitle: 'Na Kontaktoni',
    kontaktFormName: 'Emri', kontaktFormEmail: 'Email', kontaktFormPhone: 'Telefon', kontaktFormMessage: 'Mesazhi',
    kontaktFormSend: 'DËRGO',
    kontaktUploadText: 'Shtoni skedarë këtu', kontaktUploadBtn: 'Zgjidhni Skedarë', kontaktAddMore: '+ Shto më shumë',
    // ── MODAL ──
    modalBack: '← KTHEHU TE PUNËT',
    modalYear: 'VITI', modalClient: 'KLIENTI', modalMaterial: 'MATERIALI', modalMaterialVal: 'Çelik',
    modalRelated: 'PUNIME TË TJERA',
    punet_pageTitle: 'Punët',
    punet_filterAll: 'Të Gjitha',
    punet_filterArch: 'Shkallë',
    punet_filterObj: 'Kangjella & Korimano',
    punet_filterGates: 'Porta & Dyer',
    punet_filterStructures: 'Strukturë',
    punet_filterInteriors: 'Arredim & Mobilje',
    punet_filterDecor: 'Dekor & CNC',
    punet_searchPlaceholder: 'Kërko punën...',
    punet_recLabel: 'Për më shumë',
    // ── SUB-PAGE TITLES & SIDEBARS ──
    cat_shkalle_title: 'Shkallë', cat_shkalle_active: 'Shkallë ×',
    cat_kangjella_title: 'Kangjella & Korimano', cat_kangjella_active: 'Kangjella & Korimano ×',
    cat_dekor_title: 'Dekor & CNC', cat_dekor_active: 'Dekor & CNC ×',
    cat_struktura_title: 'Strukturë', cat_struktura_active: 'Strukturë ×',
    cat_fasada_title: 'Fasadë', cat_fasada_active: 'Fasadë ×',
    cat_porta_title: 'Porta & Dyer', cat_porta_active: 'Porta & Dyer ×',
    cat_arredim_title: 'Arredim & Mobilje', cat_arredim_active: 'Arredim & Mobilje ×',
    cat_sidebar_shkalle: 'Shkallë', cat_sidebar_kangjella: 'Kangjella & Korimano',
    cat_sidebar_dekor: 'Dekor & CNC', cat_sidebar_struktura: 'Strukturë',
    cat_sidebar_fasada: 'Fasadë', cat_sidebar_porta: 'Porta & Dyer',
    cat_sidebar_arredim: 'Arredim & Mobilje',
    // ── KONTAKT HERO ──
    kontaktHeroDesc: 'Gati për të ndërtuar diçka të veçantë?<br>Na shkruani dhe ne ju përgjigjemi brenda 24 orëve.',
    // ── FAQ ──
    faqLabel: 'PYETJE TË SHPESHTA',
    faqHeading: 'Çfarë Duhet të Dini',
    faqQ1: 'Sa kushton një shkallë çeliku me porosi?',
    faqA1: 'Çmimi varet nga dimensionet, materiali (çelik i lyer, inoks ose corten), forma dhe finitura. Projektet tona fillojnë nga 1 500 € dhe variojnë sipas kompleksitetit. Na kontaktoni për një vlerësim falas brenda 48 orëve.',
    faqQ2: 'Sa kohë zgjat prodhimi dhe instalimi?',
    faqA2: 'Shumica e projekteve janë gati brenda 3–6 javësh nga miratimi i vizatimeve. Vizatimet teknike dhe modelet 3D janë gati brenda 5–7 ditëve. Instalimi zakonisht kryhet brenda 1–2 ditëve pune.',
    faqQ3: 'A punoni jashtë Tiranës?',
    faqA3: 'Po. Kemi realizuar projekte në Durrës, Vlorë, Shkodër, Elbasan dhe qytete të tjera. Transporti dhe instalimi koordinohen nga ekipi ynë — pa ndërmjetës.',
    faqQ4: 'A ofrohet garanci për punimet?',
    faqA4: 'Po. Të gjitha punimet tona mbulohen nga garancia 2-vjeçare për defekte fabrikimi. Çeliku i trajtuar siç duhet zgjat dhjetëra vjet — dhe ne qëndrojmë pas çdo punë.',
    faqQ5: 'A mund të punoni nga vizatimet e arkitektit tim?',
    faqA5: 'Absolutisht. Jemi nën-kontraktorët e preferuar të shumë arkitektëve dhe dekoratorëve në Shqipëri. Pranojmë skica, AutoCAD, DXF, PDF ose thjesht një foto dhe idenë tuaj — dhe ndërtojmë nga zeroja.',
    faqQ6: 'Si funksionon pagesa dhe çfarë materialesh përdorni?',
    faqA6: 'Pagesa ndahet në tre faza: 30% paradhënie pas miratimit të vizatimeve, 40% gjatë prodhimit dhe 30% pas instalimit. Çeliku që përdorim është i certifikuar sipas standardeve europiane (EN) — inoks AISI 304/316, çelik konstruktiv S235/S355 dhe corten A606.',
    faqQ7: 'Çfarë ndodh nëse dizajni nuk më pëlqen?',
    faqA7: 'Para se të prekë çeliku, ju miratoni çdo detaj — vizatimet teknike dhe modelet 3D. Kemi të drejtë rishikimi pa kosto shtesë deri sa dizajni të jetë saktësisht si e dëshironi. Prodhimi fillon vetëm pas nënshkrimit të miratimit tuaj.',
    faqQ8: 'A mund të shoh punime të mëparshme para se të vendos?',
    faqA8: 'Po. Portfolioja jonë në këtë faqe tregon një pjesë të punimeve të realizuara. Gjithashtu mund të vizitoni faqen tonë në Instagram @work_steel_shpk ku publikojmë projekte të reja rregullisht. Me kërkesë, mund të organizojmë një vizitë te punimet e klientëve tanë.',
    // ── FORM / CONTACT ──
    formIntro: 'Gati për të filluar projektin tuaj? Na dërgoni mesazhin tuaj me foto dhe skica. Ju përgjigjemi brenda 24 orëve me një afat kohor dhe vlerësim çmimi.',
    formIntroK: 'Gati për të filluar projektin tuaj? Na dërgoni mesazhin tuaj me foto dhe skica — ju përgjigjemi brenda 24 orëve.',
    gdprText: 'Pranoj që të dhënat e mia të përdoren vetëm për t\'iu përgjigjur këtij mesazhi, sipas <a href="/privacy.html">Politikës së Privatësisë</a>.',
    gdprTextK: 'Pranoj politikën e privatësisë dhe përdorimin e të dhënave të mia për t\'iu përgjigjur mesazhit.',
    contactColAddress: 'Adresa',
    contactColHours: 'E Hënë — E Premte, 08:00 — 18:00',
    navArchitecture: 'Arkitekturë',
    navObjekte: 'Objekte',
    navSherbime: 'Shërbime',
    navKontakt: 'Kontakt',
    contactColContact: 'Kontaktet',
    contactColSocial: 'Mediat tona sociale',
    // ── COOKIE BANNER ──
    cookieText: 'Ne përdorim cookies për të analizuar trafikun dhe për të përmirësuar përvojën tuaj. Duke klikuar "Prano", ju pranoni përdorimin tonë të cookies. <a href="/privacy.html">Mëso më shumë</a>',
    cookieAccept: 'Prano',
    cookieDecline: 'Vetëm e nevojshme',
    // ── TRUST + MICROCOPY ──
    heroMicrocopy: 'Pa detyrim. Ofertë brenda 48 orëve.',
    trustProjects: 'Projekte',
    trustSince: 'Që nga',
    trustWarranty: 'Garanci',
    trustWarrantyNum: '2<span style="font-size:0.6em;opacity:0.7;">vjet</span>',
    heroCtaAria: 'Kërko ofertë falas',
    waAria: 'Kontakto Work Steel në WhatsApp',
    mobCtaCall: 'Telefono',
    mobCtaWa: 'WhatsApp',
    cookieAria: 'Njoftim për cookies',
    faqAria: 'Pyetje të shpeshta',
  },
  en: {
    // ── HOME ──
    heroStatement: '<span class="vh">Custom metalwork to order — staircases, railings and steel structures handcrafted in Tirana, Albania.</span><span class="hero-line-1" aria-hidden="true">Custom metalwork to order</span><span class="hero-line-2" aria-hidden="true">Staircases,</span><span class="hero-line-3" aria-hidden="true">railings &amp; steel</span><span class="hero-line-4" aria-hidden="true">handcrafted — Tirana.</span>',
    aboutText: 'Since 2018, we\'ve delivered 120+ projects for architects, designers and private clients across Albania. Every piece carries our name.',
    aboutCaption: 'Our workshop is in the heart of Tirana. TIG/MIG welding, precision cutting, hand finishing — every job handled in-house, without intermediaries or compromise.',
    btnOferte: 'REQUEST FREE QUOTE',
    btnPunet: 'PROJECTS',
    btnExpertiza: 'SERVICES',
    missionText: 'Custom fabrication of steel structures and objects. Every job starts with a conversation — and ends when you are fully satisfied.',
    showMore: 'To view more',
    servicesIntro: 'From spiral staircases to metal sculptures — everything made in our own workshop, without intermediaries.',
    processLabel: 'THE PROCESS',
    processTitle: 'How We Work',
    processLeadtime: 'Current lead time: <strong>3–4 weeks</strong> from drawing approval.',
    step1Title: 'The Conversation', step1Desc: 'We meet, listen, and understand what you need. No templates — just a direct conversation.', step1Time: 'Quote within 48 hours',
    step2Title: 'The Drawing',      step2Desc: 'Technical drawings and 3D models built to your specification — you approve every detail before steel is touched.', step2Time: 'Drawings within 5–7 days',
    step3Title: 'The Making',       step3Desc: 'We work in our own workshop — MIG/TIG welding, precision cutting, surface finishing.', step3Time: 'Fabrication 3–6 weeks',
    step4Title: 'The Handover',     step4Desc: "Our team installs, checks, and delivers. We don't leave until everything is right.", step4Time: '2-year warranty',
    contactLabel: 'CONTACT',
    contactTitle: 'Get in Touch',
    formName: 'Name', formEmail: 'Email', formPhone: 'Phone', formMessage: 'Message',
    formFile: 'Attach File', formSend: 'REQUEST QUOTE',
    uploadText: 'Drop photos here', uploadBtn: 'CHOOSE PHOTOS',
    showProject: 'View project',
    // ── NAV / FOOTER ──
    navArch: 'ARCHITECTURE', navObj: 'OBJECTS', navServices: 'SERVICES',
    navExpertise: 'EXPERTISE', navContact: 'CONTACT',
    mobileNavPunet: 'Works', mobileNavArch: 'Architecture', mobileNavObj: 'Objects',
    mobileNavServices: 'Services', mobileNavExpertise: 'Expertise', mobileNavContact: 'Contact',
    footerNavProjects: 'PROJECTS', footerNavServices: 'SERVICES', footerNavExpertise: 'EXPERTISE', footerNavContact: 'CONTACT',
    footerTagline: 'Custom Metalwork · Punime me Porosi',
    footerCopyright: '© Work Steel since 2018',
    // ── PORTFOLIO ──
    archPageTitle: 'Architecture',
    archFilterActive: 'Architecture ×', archFilterOther: 'Objects',
    objPageTitle: 'Objects',
    objFilterOther: 'Architecture', objFilterActive: 'Objects ×',
    portfolioFilterLabel: 'FILTER BY',
    portfolioShowMore: 'SHOW MORE',
    // ── EKSPERTIZË ──
    expHeroLabel: 'What We Do',
    expHeroTitle: 'Expertise',
    expHeroTexts: [
      'Our workshop is set in the centre of Tirana — a working space where every tool has its place and every weld has a purpose.',
      'Since 2018, we have worked with architects, interior designers, and private clients — delivering structure, form, and durability.',
      "We don't promise the extraordinary — we do good work, with care, on time.",
      'Every project carries our name — and that holds us to account.'
    ],
    expAccordionTitles: ['Commitment', 'Quality', 'Technique', 'Network', 'Delivery'],
    expAccordionBodies: [
      'We treat every project as our own — from the first drawing to the final screw.',
      'The steel we use is certified. Every weld is checked. Nothing leaves the workshop without our approval.',
      'We command precision cutting, TIG/MIG welding, and manual forming — all in-house.',
      'We collaborate with architects, designers, and selected suppliers who share our standards.',
      'We honour every agreed deadline. Most projects are ready within 3–6 weeks.'
    ],
    expRefTitle: 'Who We Work With',
    expRefLabels: ['Brands', 'Designers, Creators, Private Clients', 'Production Companies', 'Architecture Firms', 'Coverage'],
    // ── SHËRBIME ──
    servicesHeroTitle: 'Services',
    servicesHeroDesc: 'Custom steel fabrication — from load-bearing structures to singular objects. Everything produced in our own workshop.',
    servicesEditorialIntro: 'Every project begins with a vision. We build it in steel.',
    servicesEditorialTitles: ['Architecture', 'Design &amp; Interiors', 'Artistic Production', 'Luxury', 'Stage Design'],
    servicesEditorialSubs: ['Artistic sub-contracting', 'Presentations, objects', 'Theatre, film'],
    domainsLabel: 'DOMAINS OF APPLICATION',
    domainsHeading: 'Where Work Steel Operates',
    domainTitles: ['Architecture', 'Interior Design', 'Art &amp; Sculpture', 'Industry &amp; Construction', 'Stage Design', 'Luxury &amp; Exhibition'],
    domainDescs: [
      'Staircases, railings, doors, and load-bearing steel structures — durable work for your spaces.',
      'Shelving, lighting elements, and decorative steel details that give character to any interior.',
      'Custom metal sculptures and artistic installations — for public and private spaces alike.',
      'Industrial structures, pedestrian bridges, and structural components built to specification.',
      'Set elements for theatre and film productions — precision and reliability when it counts.',
      'Display stands, luxury objects, and bespoke installations for premium environments and showrooms.'
    ],
    domainLink: 'READ MORE →',
    steelFoundationTexts: [
      'Steel is not merely a material — it is the foundation of everything we build. Its strength, durability, and versatility make it the ideal choice for the work we do.',
      'Every piece of steel that passes through our workshop is handled with care and precision — transformed from raw material into finished work.'
    ],
    qseHeadings: ['Quality', 'Safety', 'Environment'],
    qseSubheadings: ['No Compromise', 'Built to Last', 'Sustainable Steel'],
    qseDescs: [
      'Every Work Steel piece passes rigorous quality checks. We use certified steel and welding techniques conforming to EN ISO standards.',
      'Our team follows strict protocols during fabrication and installation. Our steel structures are built to endure for decades.',
      'Steel is 100% recyclable. Work Steel minimises waste and reuses material wherever possible.'
    ],
    // ── KONTAKT ──
    kontaktHeroTitle: 'Contact',
    contactTypesLabel: 'WHO WE SERVE',
    contactTypeTitle1: 'Private Clients', contactTypeMore1: 'Learn more',
    contactTypeDetail1: 'We work directly with individuals — people with a clear vision for their space and an eye for detail. From the first sketch to the final fitting.',
    contactTypeTitle2: 'Architects &amp; Decorators', contactTypeMore2: 'Learn more',
    contactTypeDetail2: 'Work Steel is the preferred sub-contractor for architects and interior designers across Albania. We provide technical drawings, 3D models, and precision steel solutions.',
    guidingLabel: 'GUIDING YOU',
    guidingStatement: "We don't pass projects on or send unfamiliar faces. The same hands that discuss the brief are the ones that build it — start to finish.",
    kontaktSectionLabel: 'CONTACT',
    kontaktFormTitle: 'Get in Touch',
    kontaktFormName: 'Name', kontaktFormEmail: 'Email', kontaktFormPhone: 'Phone', kontaktFormMessage: 'Message',
    kontaktFormSend: 'SEND',
    kontaktUploadText: 'Drop files here', kontaktUploadBtn: 'Choose Files', kontaktAddMore: '+ Add more',
    // ── MODAL ──
    modalBack: '← RETURN TO PROJECTS',
    modalYear: 'YEAR', modalClient: 'CLIENT', modalMaterial: 'MATERIAL', modalMaterialVal: 'Steel',
    modalRelated: 'OTHER PROJECTS',
    punet_pageTitle: 'Works',
    punet_filterAll: 'All',
    punet_filterArch: 'Staircases',
    punet_filterObj: 'Railings & Handrails',
    punet_filterGates: 'Gates & Doors',
    punet_filterStructures: 'Structures',
    punet_filterInteriors: 'Interiors & Furniture',
    punet_filterDecor: 'Decorative & CNC',
    punet_searchPlaceholder: 'Search works...',
    punet_recLabel: 'For more',
    // ── SUB-PAGE TITLES & SIDEBARS ──
    cat_shkalle_title: 'Staircases', cat_shkalle_active: 'Staircases ×',
    cat_kangjella_title: 'Railings & Handrails', cat_kangjella_active: 'Railings & Handrails ×',
    cat_dekor_title: 'Decorative & CNC', cat_dekor_active: 'Decorative & CNC ×',
    cat_struktura_title: 'Structures', cat_struktura_active: 'Structures ×',
    cat_fasada_title: 'Facade', cat_fasada_active: 'Facade ×',
    cat_porta_title: 'Gates & Doors', cat_porta_active: 'Gates & Doors ×',
    cat_arredim_title: 'Interiors & Furniture', cat_arredim_active: 'Interiors & Furniture ×',
    cat_sidebar_shkalle: 'Staircases', cat_sidebar_kangjella: 'Railings & Handrails',
    cat_sidebar_dekor: 'Decorative & CNC', cat_sidebar_struktura: 'Structures',
    cat_sidebar_fasada: 'Facade', cat_sidebar_porta: 'Gates & Doors',
    cat_sidebar_arredim: 'Interiors & Furniture',
    // ── KONTAKT HERO ──
    kontaktHeroDesc: 'Ready to build something exceptional?<br>Write to us — we respond within 24 hours.',
    // ── FAQ ──
    faqLabel: 'FREQUENTLY ASKED',
    faqHeading: 'What You Should Know',
    faqQ1: 'How much does a custom steel staircase cost?',
    faqA1: 'Pricing depends on dimensions, material (painted steel, stainless or corten), shape and finish. Our projects start from €1,500 and vary by complexity. Contact us for a free estimate within 48 hours.',
    faqQ2: 'How long does fabrication and installation take?',
    faqA2: 'Most projects are ready within 3–6 weeks of drawing approval. Technical drawings and 3D models are ready within 5–7 days. Installation is typically completed in 1–2 working days.',
    faqQ3: 'Do you work outside Tirana?',
    faqA3: 'Yes. We have completed projects in Durrës, Vlorë, Shkodër, Elbasan and other cities. Transport and installation are coordinated by our team — no intermediaries.',
    faqQ4: 'Is a warranty provided?',
    faqA4: 'Yes. All our work is covered by a 2-year warranty against manufacturing defects. Properly treated steel lasts decades — and we stand behind every piece we build.',
    faqQ5: "Can you work from my architect's drawings?",
    faqA5: "Absolutely. We are the preferred sub-contractor for many architects and interior designers in Albania. We accept sketches, AutoCAD, DXF, PDF or simply a photo and your idea — and we build from scratch.",
    faqQ6: 'How does payment work, and what materials do you use?',
    faqA6: 'Payment is split into three stages: 30% deposit on drawing approval, 40% during fabrication, and 30% on installation. All steel we use is certified to European standards (EN) — stainless AISI 304/316, structural steel S235/S355, and corten A606.',
    faqQ7: 'What if I don\'t like the design?',
    faqA7: 'Before any steel is touched, you approve every detail — technical drawings and 3D models. We offer unlimited revisions at no extra cost until the design is exactly right. Fabrication only begins after your signed approval.',
    faqQ8: 'Can I see previous work before deciding?',
    faqA8: 'Yes. Our portfolio on this site shows a selection of completed projects. You can also visit our Instagram @work_steel_shpk where we post new projects regularly. On request, we can arrange a visit to see our work at client premises.',
    // ── FORM / CONTACT ──
    formIntro: 'Ready to start your project? Send us a message with photos and sketches. We respond within 24 hours with a timeline and price estimate.',
    formIntroK: 'Ready to start your project? Send us a message with photos and sketches — we\'ll respond within 24 hours.',
    gdprText: 'I agree that my data will be used solely to respond to this message, in accordance with the <a href="/privacy.html">Privacy Policy</a>.',
    gdprTextK: 'I agree to the privacy policy and the use of my data to respond to this message.',
    contactColAddress: 'Address',
    contactColHours: 'Monday — Friday, 08:00 — 18:00',
    navArchitecture: 'Architecture',
    navObjekte: 'Objects',
    navSherbime: 'Services',
    navKontakt: 'Contact',
    contactColContact: 'Our Contacts',
    contactColSocial: 'Social',
    // ── COOKIE BANNER ──
    cookieText: 'We use cookies to analyse traffic and improve your experience. By clicking "Accept", you consent to our use of cookies. <a href="/privacy.html">Learn more</a>',
    cookieAccept: 'Accept',
    cookieDecline: 'Essential only',
    // ── TRUST + MICROCOPY ──
    heroMicrocopy: 'No obligation. Quote within 48 hours.',
    trustProjects: 'Projects',
    trustSince: 'Since',
    trustWarranty: 'Warranty',
    trustWarrantyNum: '2<span style="font-size:0.6em;opacity:0.7;">yr</span>',
    heroCtaAria: 'Request free quote',
    waAria: 'Contact Work Steel on WhatsApp',
    mobCtaCall: 'Call',
    mobCtaWa: 'WhatsApp',
    cookieAria: 'Cookie notification',
    faqAria: 'Frequently asked questions',
  }
};

function switchLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  // ── Lang toggle buttons ──
  document.querySelectorAll('.lang-toggle').forEach(toggle => {
    toggle.querySelectorAll('button').forEach(b => {
      b.classList.toggle('active', b.textContent.trim() === (lang === 'al' ? 'AL' : 'EN'));
    });
  });

  // ── Header nav (update split-text spans or plain text) ──
  document.querySelectorAll('.header-nav a[data-page]').forEach(a => {
    const pg = a.getAttribute('data-page');
    let label = '';
    if (pg === 'arkitekture') label = t.navArch;
    else if (pg === 'objekte')      label = t.navObj;
    else if (pg === 'sherbime')     label = t.navServices;
    else if (pg === 'ekspertize')   label = t.navExpertise;
    else if (pg === 'kontakt')      label = t.navContact;
    if (!label) return;
    a.textContent = label;
  });
  document.dispatchEvent(new Event('langChanged'));

  // ── Mobile menu ──
  const mob = document.querySelectorAll('#mobile-menu a[onclick]');
  mob.forEach(a => {
    const oc = a.getAttribute('onclick') || '';
    if (oc.includes("'punet'"))          a.textContent = t.mobileNavPunet;
    else if (oc.includes("'arkitekture'"))    a.textContent = t.mobileNavArch;
    else if (oc.includes("'objekte'"))   a.textContent = t.mobileNavObj;
    else if (oc.includes("'sherbime'"))  a.textContent = t.mobileNavServices;
    else if (oc.includes("'ekspertize'"))a.textContent = t.mobileNavExpertise;
    else if (oc.includes("'kontakt'"))   a.textContent = t.mobileNavContact;
  });

  // ── Footer nav (all footers) ──
  document.querySelectorAll('.footer-nav a[onclick]').forEach(a => {
    const oc = a.getAttribute('onclick') || '';
    if (oc.includes("'arkitekture'") || oc.includes("'punet'")) a.textContent = t.footerNavProjects;
    else if (oc.includes("'sherbime'"))   a.textContent = t.footerNavServices;
    else if (oc.includes("'ekspertize'")) a.textContent = t.footerNavExpertise;
    else if (oc.includes("'kontakt'"))    a.textContent = t.footerNavContact;
  });

  // ── Footer tagline & copyright ──
  document.querySelectorAll('.footer-tagline').forEach(el => el.textContent = t.footerTagline);
  document.querySelectorAll('.footer-bottom span:not(.lang-toggle)').forEach(el => {
    if (el.textContent.includes('Work Steel')) el.textContent = t.footerCopyright;
  });

  // ════════════════════════
  //  HOME PAGE
  // ════════════════════════
  const heroStatement = document.querySelector('.hero-statement');
  if (heroStatement) heroStatement.innerHTML = t.heroStatement;

  const aboutText = document.querySelector('.about-text-large');
  if (aboutText) aboutText.innerHTML = t.aboutText;
  const aboutCaption = document.querySelector('.about-caption');
  if (aboutCaption) aboutCaption.textContent = t.aboutCaption;

  const ctaPrimary = document.querySelector('.hero-ctas .hero-cta-primary span');
  if (ctaPrimary) ctaPrimary.textContent = t.btnOferte;
  const ctaBtns = document.querySelectorAll('.hero-ctas .btn-outline span');
  if (ctaBtns[0]) ctaBtns[0].textContent = t.btnPunet;
  if (ctaBtns[1]) ctaBtns[1].textContent = t.btnExpertiza;

  const missionAl = document.querySelector('.mission-text-al');
  const missionEn = document.querySelector('.mission-text-en');
  if (missionAl && missionEn) {
    missionAl.style.display = lang === 'al' ? '' : 'none';
    missionEn.style.display = lang === 'en' ? '' : 'none';
  }

  const servicesIntro = document.querySelector('#page-home .services-intro p');
  if (servicesIntro) servicesIntro.textContent = t.servicesIntro;

  const processSteps = document.querySelectorAll('.process-step');
  if (processSteps.length >= 4) {
    [[0,t.step1Title,t.step1Desc,t.step1Time],[1,t.step2Title,t.step2Desc,t.step2Time],[2,t.step3Title,t.step3Desc,t.step3Time],[3,t.step4Title,t.step4Desc,t.step4Time]].forEach(([i,ti,de,tm]) => {
      const s = processSteps[i];
      const tEl = s.querySelector('.step-title'); if (tEl) tEl.textContent = ti;
      const dEl = s.querySelector('.step-desc');  if (dEl) dEl.textContent = de;
      const mEl = s.querySelector('.step-time');  if (mEl && tm) mEl.textContent = tm;
    });
  }

  // Form labels now use data-i18n attributes — handled by the generic [data-i18n] loop below
  const sendBtn = document.querySelector('#page-home .btn-brass');
  if (sendBtn) sendBtn.textContent = t.formSend;

  document.querySelectorAll('[data-placeholder-al]').forEach(el => {
    el.placeholder = lang === 'al' ? el.dataset.placeholderAl : el.dataset.placeholderEn;
  });

  const upText = document.querySelector('#uploadPrompt p:not(.sub)');
  if (upText) upText.textContent = t.uploadText;
  const upBtn = document.querySelector('#uploadPrompt span.btn-pill, #uploadPrompt span');
  if (upBtn) upBtn.textContent = t.uploadBtn;

  const processLabelEl = document.querySelector('#page-home .process-section .section-label');
  if (processLabelEl) processLabelEl.textContent = t.processLabel;
  const processTitleEl = document.querySelector('#page-home .process-section .section-heading');
  if (processTitleEl) processTitleEl.textContent = t.processTitle;
  var processLeadtimeEl = document.getElementById('processLeadtime');
  if (processLeadtimeEl) processLeadtimeEl.innerHTML = t.processLeadtime;
  const contactLabelEl = document.querySelector('#page-home .contact-section .section-label');
  if (contactLabelEl) contactLabelEl.textContent = t.contactLabel;
  const contactTitleEl = document.querySelector('#page-home .contact-section h2');
  if (contactTitleEl) contactTitleEl.textContent = t.contactTitle;

  // ── FAQ section ──
  const faqLabelEl = document.querySelector('#page-home .faq-label');
  if (faqLabelEl) faqLabelEl.textContent = t.faqLabel;
  const faqHeadingEl = document.querySelector('#page-home .faq-heading');
  if (faqHeadingEl) faqHeadingEl.textContent = t.faqHeading;
  document.querySelectorAll('#page-home .faq-item[data-faq]').forEach(function(item) {
    var n = item.getAttribute('data-faq');
    var qEl = item.querySelector('.faq-q-text');
    var aEl = item.querySelector('.faq-a p');
    if (qEl && t['faqQ' + n]) qEl.textContent = t['faqQ' + n];
    if (aEl && t['faqA' + n]) aEl.textContent = t['faqA' + n];
  });

  // ── Form intros ──
  var homeFormIntro = document.getElementById('home-form-intro');
  if (homeFormIntro) homeFormIntro.textContent = t.formIntro;
  var kontaktFormIntro = document.getElementById('kontakt-form-intro');
  if (kontaktFormIntro) kontaktFormIntro.textContent = t.formIntroK;

  // ── GDPR consent texts ──
  var homeGdpr = document.getElementById('home-gdpr-text');
  if (homeGdpr) homeGdpr.innerHTML = t.gdprText;
  var kontaktGdpr = document.getElementById('kontakt-gdpr-text');
  if (kontaktGdpr) kontaktGdpr.innerHTML = t.gdprTextK;

  // ── Contact info labels & hours (data-i18n) ──
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // ── Cookie banner ──
  var cookieBannerP = document.querySelector('#cookieBanner p');
  if (cookieBannerP) cookieBannerP.innerHTML = t.cookieText;
  var cookieBtns = document.querySelectorAll('#cookieBanner .cookie-actions button');
  if (cookieBtns[0]) cookieBtns[0].textContent = t.cookieAccept;
  if (cookieBtns[1]) cookieBtns[1].textContent = t.cookieDecline;

  // ── Hero microcopy + trust labels ──
  var heroMicro = document.getElementById('heroMicrocopy');
  if (heroMicro) heroMicro.textContent = t.heroMicrocopy;
  var trustWarrantyNumEl = document.getElementById('trustWarrantyNum');
  if (trustWarrantyNumEl) trustWarrantyNumEl.innerHTML = t.trustWarrantyNum;

  // ── Aria-label updates ──
  var heroCtaEl = document.getElementById('heroCtaPrimary');
  if (heroCtaEl) heroCtaEl.setAttribute('aria-label', t.heroCtaAria);
  var waFloat = document.querySelector('.wa-float');
  if (waFloat) waFloat.setAttribute('aria-label', t.waAria);
  var mobCallLbl = document.getElementById('mobCtaCallLabel');
  if (mobCallLbl) mobCallLbl.textContent = t.mobCtaCall;
  var mobWaLbl = document.getElementById('mobCtaWaLabel');
  if (mobWaLbl) mobWaLbl.textContent = t.mobCtaWa;
  var cookieBannerEl = document.getElementById('cookieBanner');
  if (cookieBannerEl) cookieBannerEl.setAttribute('aria-label', t.cookieAria);
  var faqSection = document.getElementById('faq');
  if (faqSection) faqSection.setAttribute('aria-label', t.faqAria);

  // ════════════════════════
  //  PUNET PAGE
  // ════════════════════════
  const punetTitle = document.querySelector('#page-punet .cat-title');
  if (punetTitle) punetTitle.innerHTML = '<em>' + t.punet_pageTitle + '</em>';
  const punetSM = document.querySelector('#punet-show-more .btn-pill');
  if (punetSM) punetSM.textContent = t.portfolioShowMore;
  const punetInp = document.getElementById('punet-search-input');
  if (punetInp) punetInp.placeholder = t.punet_searchPlaceholder;
  const punetRecLabel = document.getElementById('punet-rec-label');
  if (punetRecLabel) punetRecLabel.textContent = t.punet_recLabel;
  const punetChips = document.querySelectorAll('#punet-chips .punet-chip');
  if (punetChips[0]) punetChips[0].textContent = t.punet_filterAll;
  if (punetChips[1]) punetChips[1].textContent = t.punet_filterArch;
  if (punetChips[2]) punetChips[2].textContent = t.punet_filterObj;
  if (punetChips[3]) punetChips[3].textContent = t.punet_filterGates;
  if (punetChips[4]) punetChips[4].textContent = t.punet_filterStructures;
  if (punetChips[5]) punetChips[5].textContent = t.punet_filterInteriors;
  if (punetChips[6]) punetChips[6].textContent = t.punet_filterDecor;

  document.querySelectorAll('.filter-label').forEach(el => el.textContent = t.portfolioFilterLabel);

  document.querySelectorAll('.brass-circle').forEach(c => c.textContent = t.showProject);

  // Translate project card titles and meta
  document.querySelectorAll('.project-card').forEach(function(card) {
    var titleEl = card.querySelector('.project-title');
    var metaEl  = card.querySelector('.project-meta');
    if (titleEl && card.dataset.titleAl) {
      titleEl.textContent = lang === 'en' ? (card.dataset.titleEn || card.dataset.titleAl) : card.dataset.titleAl;
    }
    if (metaEl) {
      if (card.dataset.metaAl) {
        metaEl.textContent = lang === 'en' ? (card.dataset.metaEn || card.dataset.metaAl) : card.dataset.metaAl;
      } else if (card.dataset.categoryAl) {
        var catAl = card.dataset.categoryAl;
        var catEn = metaTranslations[catAl] || catAl;
        var yr = card.dataset.year || '';
        metaEl.textContent = (lang === 'en' ? catEn : catAl) + (yr ? ' · ' + yr : '');
      }
    }
  });

  // ════════════════════════
  //  SHËRBIME PAGE
  // ════════════════════════
  const srvHT = document.querySelector('#page-sherbime .services-hero-title em');
  if (srvHT) srvHT.textContent = t.servicesHeroTitle;
  const srvHD = document.querySelector('#page-sherbime .services-hero-desc');
  if (srvHD) srvHD.textContent = t.servicesHeroDesc;
  const srvEI = document.querySelector('#page-sherbime .services-editorial .services-intro p');
  if (srvEI) srvEI.textContent = t.servicesEditorialIntro;

  document.querySelectorAll('#page-sherbime .editorial-item-title em').forEach((el, i) => {
    if (t.servicesEditorialTitles[i]) el.innerHTML = t.servicesEditorialTitles[i];
  });
  document.querySelectorAll('#page-sherbime .editorial-item-sub').forEach((el, i) => {
    if (t.servicesEditorialSubs[i]) el.textContent = t.servicesEditorialSubs[i];
  });

  const domsLabel = document.querySelector('#page-sherbime .domains-section .section-label');
  if (domsLabel) domsLabel.textContent = t.domainsLabel;
  const domsHd = document.querySelector('#page-sherbime .domains-heading');
  if (domsHd) domsHd.textContent = t.domainsHeading;

  document.querySelectorAll('#page-sherbime .domain-card').forEach((card, i) => {
    const tEl = card.querySelector('.domain-card-title');
    const dEl = card.querySelector('.domain-card-desc');
    const lEl = card.querySelector('.domain-card-link');
    if (tEl && t.domainTitles[i]) tEl.innerHTML = t.domainTitles[i];
    if (dEl && t.domainDescs[i]) dEl.textContent = t.domainDescs[i];
    if (lEl) lEl.textContent = t.domainLink;
  });

  document.querySelectorAll('#page-sherbime .steel-text p').forEach((p, i) => {
    if (t.steelFoundationTexts[i]) p.textContent = t.steelFoundationTexts[i];
  });

  document.querySelectorAll('#page-sherbime .qse-block').forEach((block, i) => {
    const hEl = block.querySelector('.qse-heading');
    const sEl = block.querySelector('h3.playfair');
    const dEl = block.querySelector('p');
    if (hEl && t.qseHeadings[i]) hEl.textContent = t.qseHeadings[i];
    if (sEl && t.qseSubheadings[i]) sEl.textContent = t.qseSubheadings[i];
    if (dEl && t.qseDescs[i]) dEl.textContent = t.qseDescs[i];
  });

  // ════════════════════════
  //  EKSPERTIZË PAGE
  // ════════════════════════
  const expT = document.querySelector('#page-ekspertize .exp-hero-title em');
  if (expT) expT.textContent = t.expHeroTitle;
  const expHL = document.querySelector('#page-ekspertize .exp-hero-label');
  if (expHL) expHL.textContent = t.expHeroLabel;

  const expTexts = document.querySelectorAll('#page-ekspertize .exp-hero-text p');
  if (t.expHeroTexts) t.expHeroTexts.forEach((txt, i) => { if (expTexts[i]) expTexts[i].textContent = txt; });

  const expAccTitles = document.querySelectorAll('#page-ekspertize .exp-accordion-title');
  if (t.expAccordionTitles) t.expAccordionTitles.forEach((ti, i) => { if (expAccTitles[i]) expAccTitles[i].textContent = ti; });

  const expAccBodies = document.querySelectorAll('#page-ekspertize .exp-accordion-body p');
  if (t.expAccordionBodies) t.expAccordionBodies.forEach((bd, i) => { if (expAccBodies[i]) expAccBodies[i].textContent = bd; });

  const expRefTitleEl = document.getElementById('exp-ref-title');
  if (expRefTitleEl) expRefTitleEl.textContent = t.expRefTitle;

  const expGuidLbl = document.querySelector('#page-ekspertize .guiding-section .section-label');
  if (expGuidLbl) expGuidLbl.textContent = t.guidingLabel;
  const expGuidStmt = document.querySelector('#page-ekspertize .guiding-statement');
  if (expGuidStmt) expGuidStmt.innerHTML = t.guidingStatement;

  // ════════════════════════
  //  SUB-PAGES (category pages)
  // ════════════════════════
  const catPageMap = [
    { id: 'page-shkalle',   titleKey: 'cat_shkalle_title',   activeKey: 'cat_shkalle_active' },
    { id: 'page-kangjella', titleKey: 'cat_kangjella_title', activeKey: 'cat_kangjella_active' },
    { id: 'page-dekor',     titleKey: 'cat_dekor_title',     activeKey: 'cat_dekor_active' },
    { id: 'page-struktura', titleKey: 'cat_struktura_title', activeKey: 'cat_struktura_active' },
    { id: 'page-fasada',    titleKey: 'cat_fasada_title',    activeKey: 'cat_fasada_active' },
    { id: 'page-porta',     titleKey: 'cat_porta_title',     activeKey: 'cat_porta_active' },
    { id: 'page-arredim',   titleKey: 'cat_arredim_title',   activeKey: 'cat_arredim_active' },
  ];
  catPageMap.forEach(function(pg) {
    const pageEl = document.getElementById(pg.id);
    if (!pageEl) return;
    const titleEl = pageEl.querySelector('.cat-title em');
    if (titleEl) titleEl.textContent = t[pg.titleKey];
    const activeItem = pageEl.querySelector('.cat-sidebar .filter-item.active');
    if (activeItem) activeItem.textContent = t[pg.activeKey];
  });

  const sidebarLinkMap = [
    { page: 'shkalle',   key: 'cat_sidebar_shkalle' },
    { page: 'kangjella', key: 'cat_sidebar_kangjella' },
    { page: 'dekor',     key: 'cat_sidebar_dekor' },
    { page: 'struktura', key: 'cat_sidebar_struktura' },
    { page: 'fasada',    key: 'cat_sidebar_fasada' },
    { page: 'porta',     key: 'cat_sidebar_porta' },
    { page: 'arredim',   key: 'cat_sidebar_arredim' },
  ];
  document.querySelectorAll('.cat-sidebar .filter-item:not(.active)').forEach(function(a) {
    const oc = a.getAttribute('onclick') || '';
    sidebarLinkMap.forEach(function(m) {
      if (oc.includes("'" + m.page + "'")) a.textContent = t[m.key];
    });
  });

  // ════════════════════════
  //  KONTAKT PAGE
  // ════════════════════════
  const ktHeroTitle = document.querySelector('#page-kontakt .services-hero-title em');
  if (ktHeroTitle) ktHeroTitle.textContent = t.kontaktHeroTitle;
  const ktHeroDesc = document.getElementById('kontakt-hero-desc');
  if (ktHeroDesc) ktHeroDesc.innerHTML = t.kontaktHeroDesc;

  const ktTL = document.querySelector('#page-kontakt .contact-types-left .section-label');
  if (ktTL) ktTL.textContent = t.contactTypesLabel;

  const ktItems = document.querySelectorAll('#page-kontakt .contact-type-item');
  [[0, t.contactTypeTitle1, t.contactTypeMore1, t.contactTypeDetail1],
   [1, t.contactTypeTitle2, t.contactTypeMore2, t.contactTypeDetail2]].forEach(([i, ti, mo, de]) => {
    if (!ktItems[i]) return;
    const tEl = ktItems[i].querySelector('.type-title');
    const mEl = ktItems[i].querySelector('.type-more');
    const dEl = ktItems[i].querySelector('.type-details p');
    if (tEl) tEl.innerHTML = ti;
    if (mEl) mEl.textContent = mo;
    if (dEl) dEl.textContent = de;
  });

  const ktSL = document.querySelector('#page-kontakt .ks-contact-section .section-label');
  if (ktSL) ktSL.textContent = t.kontaktSectionLabel;
  const ktFT = document.querySelector('#page-kontakt .contact-form-title');
  if (ktFT) ktFT.textContent = t.kontaktFormTitle;

  const ktLbls = document.querySelectorAll('#page-kontakt .ks-label');
  [[0,t.kontaktFormName],[1,t.kontaktFormEmail],[2,t.kontaktFormPhone],[3,t.kontaktFormMessage]].forEach(([i,v]) => {
    if (ktLbls[i]) ktLbls[i].textContent = v;
  });
  const ktSub = document.querySelector('#page-kontakt .ks-submit');
  if (ktSub) ktSub.textContent = t.kontaktFormSend;

  const ktUP = document.querySelector('#uploadPromptK p.ks-upload-p:not(.sub)');
  if (ktUP) ktUP.textContent = t.kontaktUploadText;
  const ktUB = document.querySelector('#uploadPromptK .ks-btn-pill');
  if (ktUB) ktUB.textContent = t.kontaktUploadBtn;
  const ktAM = document.getElementById('addMoreBtnK');
  if (ktAM) ktAM.textContent = t.kontaktAddMore;

  // ════════════════════════
  //  MODAL
  // ════════════════════════
  const mBack = document.querySelector('.project-modal-back');
  if (mBack) mBack.textContent = t.modalBack;

  const mStrongs = document.querySelectorAll('.project-modal-detail-item strong');
  if (mStrongs[0]) mStrongs[0].textContent = t.modalYear;
  if (mStrongs[1]) mStrongs[1].textContent = t.modalClient;
  if (mStrongs[2]) mStrongs[2].textContent = t.modalMaterial;

  const mMatVal = document.querySelector('.project-modal-detail-item:nth-child(3) span');
  if (mMatVal) mMatVal.textContent = t.modalMaterialVal;

  const mRel = document.getElementById('modalRelatedLabel');
  if (mRel) mRel.textContent = t.modalRelated;

  // ── Live-refresh open modal dynamic content ──────────────
  const openModal = document.getElementById('projectModal');
  if (openModal && openModal.classList.contains('open') && currentModalCard) {
    const mc = currentModalCard;

    // Title
    const mTitle = document.getElementById('modalTitle');
    if (mTitle) {
      mTitle.textContent = lang === 'en'
        ? (mc.dataset.titleEn || mc.dataset.titleAl || '')
        : (mc.dataset.titleAl || '');
    }

    // Category tag
    const mCat = document.getElementById('modalCategory');
    if (mCat) {
      const mcCatAl = mc.dataset.categoryAl || '';
      const mcCatEn = metaTranslations[mcCatAl] || mcCatAl;
      mCat.textContent = lang === 'en' ? mcCatEn : mcCatAl;
    }

    // Description
    const mDesc = document.getElementById('modalDesc');
    if (mDesc) {
      const dAl = mc.dataset.descAl || '';
      const dEn = mc.dataset.descEn || dAl;
      mDesc.textContent = lang === 'en'
        ? (dEn || dAl || 'Custom steel work by Work Steel.')
        : (dAl || 'Punim çeliku me porosi nga Work Steel.');
    }

    // Main image alt
    const mMainImg = document.getElementById('modalMainImg');
    if (mMainImg) {
      mMainImg.alt = lang === 'en'
        ? (mc.dataset.titleEn || mc.dataset.titleAl || '')
        : (mc.dataset.titleAl || '');
    }

    // Gallery image alts
    const gallAlt = lang === 'en'
      ? (mc.dataset.titleEn || mc.dataset.titleAl || '')
      : (mc.dataset.titleAl || '');
    ['modalGalleryImg1','modalGalleryImg2','modalGalleryImg3'].forEach(function(id) {
      var el = document.getElementById(id);
      if (el && el.src) el.alt = gallAlt;
    });

    // Related cards — update titles and metas using stored bilingual data attrs
    const relGrid = document.getElementById('modalRelatedGrid');
    if (relGrid) {
      relGrid.querySelectorAll('.modal-related-card').forEach(function(div) {
        const tEl = div.querySelector('.modal-related-card-title');
        const mEl = div.querySelector('.modal-related-card-meta');
        const imgEl = div.querySelector('img');
        if (tEl) {
          const newTitle = lang === 'en'
            ? (div.dataset.titleEn || div.dataset.titleAl || '')
            : (div.dataset.titleAl || '');
          tEl.textContent = newTitle;
          if (imgEl) imgEl.alt = newTitle;
        }
        if (mEl && div.dataset.categoryAl) {
          const rCatDisplay = lang === 'en'
            ? (div.dataset.categoryEn || div.dataset.categoryAl)
            : div.dataset.categoryAl;
          mEl.textContent = rCatDisplay + ' · ' + t.modalMaterialVal;
        }
      });
    }
  }
}

document.addEventListener('click', function(e) {
  if (e.target.closest('.lang-toggle button')) {
    var btn = e.target.closest('.lang-toggle button');
    var lang = btn.textContent.trim() === 'AL' ? 'al' : 'en';
    switchLanguage(lang);
  }
});

// ========================
// CONTACT FORM (Web3Forms)
// ========================
// #ksContactForm has its own dedicated submit handler (file upload IIFE above)
document.querySelectorAll('.contact-form-ws:not(#ksContactForm)').forEach(form => {
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn = this.querySelector('.btn-brass, .ks-submit');
    if (!btn) return;
    const origText = btn.textContent;
    btn.textContent = (currentLang==='en'?'Sending...':'Duke dërguar...');
    btn.disabled = true;

    try {
      const formData = new FormData(this);
      const resp = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
      });
      const json = await resp.json().catch(() => ({}));
      if (resp.ok && json.success !== false) {
        btn.textContent = currentLang==='en'?'✓ Sent!':'✓ U dërgua!';
        this.reset();
        setTimeout(() => { btn.textContent = origText; btn.disabled = false; }, 3000);
      } else {
        btn.textContent = currentLang==='en'?'Error — try again':'Gabim — riprovo';
        setTimeout(() => { btn.textContent = origText; btn.disabled = false; }, 3000);
      }
    } catch (err) {
      btn.textContent = currentLang==='en'?'Error':'Gabim';
      setTimeout(() => { btn.textContent = origText; btn.disabled = false; }, 3000);
    }
  });
});

// ========================
// PAGE LOAD ANIMATION
// ========================
// Strategy: start the splash the moment the DOM is parsed (fast).
// Gate Phase 2 on BOTH:
//   (a) a minimum display threshold so the animation always feels intentional, AND
//   (b) the page being fully loaded (images etc.)
// Whichever takes longer wins — the user never waits extra if the page was slow.

(function() {
  const THRESHOLD = 1000; // ms — minimum time the splash logo holds before flying

  history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);

  const logo       = document.getElementById('splash-ws-logo');
  const splash     = document.getElementById('splash-screen');
  const wsMonogram = document.getElementById('ws-monogram');

  // Phase 1 — Fade logo in immediately (DOM is ready, no images needed)
  requestAnimationFrame(() => requestAnimationFrame(() => {
    logo.style.transition = 'opacity 0.55s cubic-bezier(0.16,1,0.3,1)';
    logo.style.opacity    = '1';
  }));

  // Two gates: threshold timer + page load. Phase 2 fires when both are done.
  let thresholdDone = false;
  let pageDone      = false;
  const splashStart = performance.now();

  function runPhase2() {
    if (!thresholdDone || !pageDone) return;

    // Phase 2 — logo flies to top-left corner, background fades out
    // Use transform-only animation (GPU composited, no layout reflow)
    const rect = logo.getBoundingClientRect();
    const targetX = 24 - rect.left;
    const targetY = 24 - rect.top;
    const scaleRatio = 30 / 62; // target font-size / initial font-size
    logo.style.transition = [
      'transform 0.92s cubic-bezier(0.76,0,0.24,1)',
      'opacity 0.3s ease 0.62s'
    ].join(', ');
    logo.style.transform = `translate(calc(-50% + ${targetX}px), calc(-50% + ${targetY}px)) scale(${scaleRatio})`;
    logo.style.opacity   = '0';
    setTimeout(() => splash.classList.add('fading'), 120);

    // Phase 3 — reveal monogram + trigger hero animations
    setTimeout(() => {
      wsMonogram.style.transition = 'opacity 0.3s ease';
      wsMonogram.style.opacity    = '1';
      logo.style.display          = 'none';
      document.querySelectorAll('.page.active .hero-reveal').forEach(el => {
        el.classList.add('visible');
      });
      setTimeout(() => {
        document.querySelectorAll('.page.active .hero-reveal.reveal-words').forEach(el => {
          el.classList.add('words-visible');
        });
      }, 250);
    }, 480); // 480ms after phase 2 starts (fly is 0.92s, reveal at ~halfway)
  }

  // Gate A — minimum threshold
  const elapsed = performance.now() - splashStart;
  const remaining = Math.max(0, THRESHOLD - elapsed);
  setTimeout(() => { thresholdDone = true; runPhase2(); }, remaining);

  // Gate B — page fully loaded (images, fonts, everything)
  if (document.readyState === 'complete') {
    pageDone = true;
  } else {
    window.addEventListener('load', () => { pageDone = true; runPhase2(); }, { once: true });
  }
})();


// ========================
// FILTER ANIMATIONS
// ========================

// Cat pages: animate current cards out, then navigate to other category
function filterCatAndNavigate(targetPage) {
  var activePage = document.querySelector('.page.active');
  if (!activePage) return;
  var cards = Array.from(activePage.querySelectorAll('.cat-grid .project-card'))
    .filter(function(c) { return c.style.display !== 'none'; });

  cards.forEach(function(card, i) {
    card.style.animationDelay = (i * 0.04) + 's';
    card.classList.add('card-exit');
  });

  var delay = Math.min(cards.length * 40 + 320, 600);
  setTimeout(function() {
    cards.forEach(function(c) { c.style.animationDelay = ''; });
    navigateTo(targetPage);
  }, delay);
}

// Home page: in-place animated filter (no page navigation)
var HOME_PORTFOLIO_CAT = 'all';

function buildHomePortfolio() {
  var grid = document.getElementById('home-portfolio-grid');
  if (!grid) return;
  grid.innerHTML = '';

  var catMap = {
    shkalle:  'Shkalle',
    kangjella:'Kangjella & Korimano',
    dekor:    'Dekor & CNC',
    struktura:'Struktura',
    fasada:   'Fasada',
    porta:    'Porta & Dyer',
    arredim:  'Arredim & Mobilje'
  };

  var HOME_FEATURED_IDS = ['P18','P33','P43','P52','P60','P56'];

  var filtered;
  if (HOME_PORTFOLIO_CAT === 'all') {
    // Show the 6 curated featured projects in order
    filtered = HOME_FEATURED_IDS.map(function(id) {
      return PROJECTS_DATA.find(function(p) { return p.id === id; });
    }).filter(Boolean);
  } else {
    var catLabel = catMap[HOME_PORTFOLIO_CAT] || '';
    filtered = PROJECTS_DATA.filter(function(p) {
      return p.cats.split(',').some(function(c) { return c.trim() === catLabel; });
    }).slice(0, 6);
  }

  filtered.forEach(function(p) {
    var card = document.createElement('div');
    card.className = 'project-card fade-up';
    card.dataset.titleAl   = p.titleAl;
    card.dataset.titleEn   = p.titleEn;
    card.dataset.descAl    = p.descAl;
    card.dataset.descEn    = p.descEn;
    card.dataset.year      = p.year;
    var _catAl0 = p.cats.split(',')[0].trim();
    var _catEn0 = metaTranslations[_catAl0] || _catAl0;
    card.dataset.categoryAl = _catAl0;
    card.dataset.metaAl = _catAl0 + ' · ' + p.year;
    card.dataset.metaEn = _catEn0 + ' · ' + p.year;
    card.dataset.gallery   = JSON.stringify(p.gallery);

    var catDisplay = currentLang === 'en' ? _catEn0 : _catAl0;
    card.innerHTML =
      '<div class="project-card-img">' +
        '<img src="' + p.thumb + '" alt="' + p.titleAl + ' - Work Steel" style="width:100%;height:100%;object-fit:cover;" loading="lazy" decoding="async">' +
        '<div class="project-hover-circle"><div class="brass-circle">Shiko projektin</div></div>' +
        '<span class="expand-icon">↗</span>' +
      '</div>' +
      '<div class="project-info">' +
        '<p class="project-title">' + (currentLang === 'en' ? p.titleEn : p.titleAl) + '</p>' +
        '<p class="project-meta">' + catDisplay + ' · ' + p.year + '</p>' +
      '</div>';

    grid.appendChild(card);
  });

  // "See more" button
  var more = document.createElement('div');
  more.className = 'portfolio-more';
  more.innerHTML = '<a class="btn-pill" onclick="navigateTo(\'punet\')">Shiko më shumë punë</a>';
  grid.appendChild(more);

  // Re-run scroll animations so new cards fade in
  setTimeout(initScrollAnimations, 50);
}

function filterHomePortfolio(cat) {
  HOME_PORTFOLIO_CAT = cat;

  document.querySelectorAll('#page-home .portfolio-sidebar .filter-item').forEach(function(a) {
    a.classList.remove('active');
    if (a.dataset.filterCat === cat) a.classList.add('active');
  });

  var grid = document.getElementById('home-portfolio-grid');
  if (!grid) return;

  // Fade out existing cards, then rebuild
  var existing = Array.from(grid.querySelectorAll('.project-card'));
  existing.forEach(function(card, i) {
    card.style.animationDelay = (i * 0.04) + 's';
    card.classList.add('card-exit');
  });

  var delay = existing.length > 0 ? 350 : 0;
  setTimeout(function() {
    buildHomePortfolio();
  }, delay);
}

function toggleAccordion(item) {
  var isOpen = item.classList.contains('open');
  document.querySelectorAll('.exp-accordion-item').forEach(function(i) {
    i.classList.remove('open');
  });
  if (!isOpen) item.classList.add('open');
}

// ========================
// PORTFOLIO PAGINATION + COUNTER
// ========================
var portfolioShown = { punet: 0 };
var PORTFOLIO_BATCH = 6;

// Called from onclick handlers on the home/services editorial items to deep-link into a category
function openPunetCategory(cat) {
  var chip = document.querySelector('#punet-chips [data-cat="' + cat + '"]');
  if (chip) filterPunetCat(cat, chip);
}

function buildPunetGrid() {
  var grid = document.getElementById('punet-all-grid');
  if (!grid) return;
  if (grid.children.length > 0) return; // already built; reset via resetPunetPage on re-entry

  PROJECTS_DATA.forEach(function(p) {
    var card = document.createElement('div');
    card.className = 'project-card';
    card.dataset.titleAl = p.titleAl;
    card.dataset.titleEn = p.titleEn;
    card.dataset.descAl  = p.descAl;
    card.dataset.descEn  = p.descEn;
    card.dataset.cats       = p.cats;
    card.dataset.categoryAl = p.cats.split(',')[0].trim();
    card.dataset.year       = p.year;
    card.dataset.gallery    = JSON.stringify(p.gallery);
    var catAl = p.cats.split(',')[0].trim();
    var catEn = metaTranslations[catAl] || catAl;
    card.dataset.metaAl = catAl + ' · ' + p.year;
    card.dataset.metaEn = catEn + ' · ' + p.year;
    var catDisplay = currentLang === 'en' ? catEn : catAl;
    card.innerHTML =
      '<div class="project-card-img">' +
        '<img src="' + p.thumb + '" alt="' + p.titleAl.replace(/"/g,'&quot;') + ' - Work Steel" style="width:100%;height:100%;object-fit:cover;" loading="lazy" decoding="async">' +
        '<div class="project-hover-circle"><div class="brass-circle">Shiko projektin</div></div>' +
        '<span class="expand-icon">↗</span>' +
      '</div>' +
      '<div class="project-info">' +
        '<p class="project-title" data-al="' + p.titleAl.replace(/"/g,'&quot;') + '" data-en="' + p.titleEn.replace(/"/g,'&quot;') + '">' + (currentLang === 'en' ? p.titleEn : p.titleAl) + '</p>' +
        '<p class="project-meta">' + catDisplay + ' · ' + p.year + '</p>' +
      '</div>';
    grid.appendChild(card);
  });

}

function resetPunetPage() {
  punetSearchState.query = '';
  punetSearchState.cat = 'all';
  var inp = document.getElementById('punet-search-input');
  if (inp) inp.value = '';
  var clr = document.getElementById('punet-search-clear');
  if (clr) clr.style.display = 'none';
  var rec = document.getElementById('punet-recommendations');
  if (rec) rec.style.display = 'none';
  // Reset chip active states
  document.querySelectorAll('#punet-chips .punet-chip').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.cat === 'all');
  });
  // Reset sidebar active states
  document.querySelectorAll('#page-punet .punet-browser-sidebar .filter-item').forEach(function(a) {
    a.classList.toggle('active', a.dataset.filterCat === 'all');
  });
  applyPunetFilter();
}

// ========================
// PUNET SEARCH + FILTER
// ========================
var punetSearchState = { query: '', cat: 'all' };

var _searchDebounceTimer = null;
function searchPunet(val) {
  punetSearchState.query = val.trim().toLowerCase();
  var clr = document.getElementById('punet-search-clear');
  if (clr) clr.style.display = punetSearchState.query ? '' : 'none';
  clearTimeout(_searchDebounceTimer);
  _searchDebounceTimer = setTimeout(applyPunetFilter, 120);
}

function clearPunetSearch() {
  punetSearchState.query = '';
  var inp = document.getElementById('punet-search-input');
  if (inp) inp.value = '';
  var clr = document.getElementById('punet-search-clear');
  if (clr) clr.style.display = 'none';
  applyPunetFilter();
}

function filterPunetCat(cat, btn) {
  punetSearchState.cat = cat;
  document.querySelectorAll('#punet-chips .punet-chip').forEach(function(b) {
    b.classList.toggle('active', b === btn);
  });
  // Sync sidebar
  document.querySelectorAll('#page-punet .punet-browser-sidebar .filter-item').forEach(function(a) {
    a.classList.toggle('active', a.dataset.filterCat === cat);
  });
  applyPunetFilter();
}

function punetSidebarFilter(cat, el) {
  punetSearchState.cat = cat;
  document.querySelectorAll('#page-punet .punet-browser-sidebar .filter-item').forEach(function(a) {
    a.classList.toggle('active', a === el);
  });
  // Sync chips
  document.querySelectorAll('#punet-chips .punet-chip').forEach(function(b) {
    b.classList.toggle('active', b.dataset.cat === cat);
  });
  applyPunetFilter();
}

function applyPunetFilter() {
  var grid = document.getElementById('punet-all-grid');
  if (!grid) return;
  var q   = punetSearchState.query;
  var cat = punetSearchState.cat;

  var allCards = Array.from(grid.querySelectorAll('.project-card'));
  var matched = [], unmatched = [];

  allCards.forEach(function(card) {
    var titleAl = (card.dataset.titleAl || '').toLowerCase();
    var titleEn = (card.dataset.titleEn || '').toLowerCase();
    var descAl  = (card.dataset.descAl  || '').toLowerCase();
    var descEn  = (card.dataset.descEn  || '').toLowerCase();
    var cardCat = card.dataset.categoryAl || '';

    var cardCats = (card.dataset.cats || cardCat).split(',').map(function(s){ return s.trim(); });
    var catMatch = (cat === 'all') || cardCats.some(function(c){ return c === cat; });
    var qMatch   = !q || titleAl.includes(q) || titleEn.includes(q) || descAl.includes(q) || descEn.includes(q);

    if (catMatch && qMatch) matched.push(card);
    else unmatched.push(card);
  });

  // Show matched, hide unmatched
  unmatched.forEach(function(c) { c.style.display = 'none'; c.classList.remove('visible','card-enter'); });
  matched.forEach(function(c, i) {
    c.classList.remove('hidden-project', 'card-exit');
    c.style.display = '';
    c.style.opacity = '0';
    setTimeout(function() {
      c.style.opacity = '';
      c.classList.add('card-enter', 'visible');
      setTimeout(function() { c.classList.remove('card-enter'); }, 400);
    }, i * 40);
  });

  // Update counter
  var curEl = document.getElementById('punet-counter-current');
  var totEl = document.getElementById('punet-counter-total');
  if (curEl) curEl.textContent = matched.length;
  if (totEl) totEl.textContent = matched.length;

  // Hide show-more when filtering/searching
  var btnWrap = document.getElementById('punet-show-more');
  if (btnWrap) btnWrap.style.display = (q || cat !== 'all') ? 'none' : (allCards.length > PORTFOLIO_BATCH ? '' : 'none');

  // Recommendations: show cards from unmatched set when there's a query
  renderPunetRecommendations(q ? unmatched : []);
}

function renderPunetRecommendations(pool) {
  var wrap = document.getElementById('punet-recommendations');
  var recGrid = document.getElementById('punet-rec-grid');
  if (!wrap || !recGrid) return;

  if (!pool.length) { wrap.style.display = 'none'; return; }

  var picks = pool.slice(0, 4);
  recGrid.innerHTML = '';
  picks.forEach(function(card) {
    var clone = card.cloneNode(true);
    clone.style.display = '';
    clone.style.opacity = '';
    clone.classList.remove('hidden-project', 'card-exit', 'card-enter');
    recGrid.appendChild(clone);
  });

  wrap.style.display = '';
}

// Hides all cards on a portfolio page and resets the batch counter.
// Returns the card NodeList so the caller can pass it straight to showBatch.
// Call this BEFORE making the page active to prevent any flash of old content.
function preInitPortfolio(pageId) {
  var page = document.getElementById('page-' + pageId);
  if (!page) return [];
  var allCards = Array.from(page.querySelectorAll('.cat-grid .project-card'));
  var total = allCards.length;

  allCards.forEach(function(c) {
    c.style.display = 'none';
    c.style.opacity = '';
    c.style.pointerEvents = '';
    c.classList.remove('visible', 'card-exit', 'card-enter');
    c.style.animationDelay = '';
  });
  portfolioShown[pageId] = 0;

  // Hide the counter + show-more bar until cards are ready
  var controls = page.querySelector('.portfolio-controls');
  if (controls) controls.classList.remove('controls-visible');

  // Update counters / show-more button
  var totalEl = document.getElementById('punet-counter-total');
  if (totalEl) totalEl.textContent = total;
  var btnId = 'punet-show-more';
  var btnWrap = document.getElementById(btnId);
  if (btnWrap) btnWrap.style.display = total > PORTFOLIO_BATCH ? '' : 'none';

  return allCards;
}

function initPortfolio(pageId) {
  var allCards = preInitPortfolio(pageId);
  showBatch(pageId, allCards);
}

function showBatch(pageId, allCards) {
  var start = portfolioShown[pageId];
  var end   = Math.min(start + PORTFOLIO_BATCH, allCards.length);
  var batchCount = end - start;

  for (var i = start; i < end; i++) {
    (function(card, delay) {
      card.classList.remove('hidden-project', 'card-exit', 'card-enter');
      card.style.display    = '';
      card.style.opacity    = '0';
      card.style.animationDelay = '';

      setTimeout(function() {
        card.style.opacity = '';
        card.style.pointerEvents = '';
        card.classList.add('card-enter', 'visible');
        setTimeout(function() { card.classList.remove('card-enter'); }, 400);
      }, delay);
    })(allCards[i], (i - start) * 48);
  }
  portfolioShown[pageId] = end;

  // Update counter value
  var curEl = document.getElementById('punet-counter-current');
  if (curEl) curEl.textContent = end;

  // Show/hide "show more" button
  var btnId = 'punet-show-more';
  var btnWrap = document.getElementById(btnId);
  if (btnWrap) {
    var remaining = allCards.length - end;
    btnWrap.style.display = remaining > 0 ? '' : 'none';
    var btnEl = btnWrap.querySelector('.btn-pill');
    if (btnEl) {
      var t = translations[currentLang];
      btnEl.textContent = t ? t.portfolioShowMore : 'SHFAQ MË SHUMË';
    }
  }

  // Fade in the controls bar only after the last card in this batch has entered.
  // Delay = last card's stagger + card animation duration.
  var page = document.getElementById('page-' + pageId);
  if (page) {
    var controls = page.querySelector('.portfolio-controls');
    if (controls) {
      var controlsDelay = (batchCount - 1) * 48 + 180;
      setTimeout(function() { controls.classList.add('controls-visible'); }, controlsDelay);
    }
  }
}

function showMoreProjects(pageId) {
  var page = document.getElementById('page-' + pageId);
  if (!page) return;
  // All cards (no filter — showBatch will pick up from where we left off)
  var allCards = Array.from(page.querySelectorAll('.cat-grid .project-card'));
  showBatch(pageId, allCards);
}

// Silently preload + decode all portfolio card images in the background.
// Runs after the page is idle so it never competes with the splash animation.
window.addEventListener('load', function() {
  requestIdleCallback(function() {
    document.querySelectorAll('.cat-grid .project-card img, .portfolio-grid .project-card img').forEach(function(img) {
      if (!img.src) return;
      var pre = new Image();
      pre.src = img.src;
      if (pre.decode) pre.decode().catch(function(){});
    });
  }, { timeout: 3000 });
});

// Init both portfolio counters on first load (home is default active page)
document.addEventListener('DOMContentLoaded', function() {
  // Build the home portfolio grid from PROJECTS_DATA
  buildHomePortfolio();

  // Pre-calculate totals and ensure controls bars start hidden on all portfolio pages
  // Controls bar starts hidden — only revealed by showBatch
  var punetPage = document.getElementById('page-punet');
  if (punetPage) {
    var controls = punetPage.querySelector('.portfolio-controls');
    if (controls) controls.classList.remove('controls-visible');
  }

  // Stamp bilingual data attributes on all project cards
  document.querySelectorAll('.project-card').forEach(function(card) {
    var titleEl = card.querySelector('.project-title');
    var metaEl  = card.querySelector('.project-meta');
    if (titleEl && !card.dataset.titleAl) {
      var alTitle = titleEl.textContent.trim();
      card.dataset.titleAl = alTitle;
      card.dataset.titleEn = titleTranslations[alTitle] || alTitle;
    }
    if (metaEl && !card.dataset.metaAl) {
      var alMeta = metaEl.textContent.trim();
      card.dataset.metaAl = alMeta;
      var parts = alMeta.split('·').map(function(s){ return s.trim(); });
      card.dataset.metaEn = parts.map(function(p){ return metaTranslations[p] || p; }).join(' · ');
    }
  });
});

// Init portfolio if a portfolio page is the initial active page
window.addEventListener('load', function() {
  var punetPg = document.getElementById('page-punet');
  if (punetPg && punetPg.classList.contains('active')) {
    buildPunetGrid();
    initPortfolio('punet');
  }
});

// ========================
// CUSTOM CURSOR
// ========================
(function() {
  const dot  = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  if (!dot || !ring) return;

  let mouseX = 0, mouseY = 0;
  let ringX = 0, ringY = 0;
  let rafId;

  document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.left  = mouseX + 'px';
    dot.style.top   = mouseY + 'px';
  }, { passive: true });

  var ringActive = true;
  function animateRing() {
    if (ringActive) {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.left = ringX + 'px';
      ring.style.top  = ringY + 'px';
    }
    rafId = requestAnimationFrame(animateRing);
  }
  animateRing();
  document.addEventListener('visibilitychange', function() {
    ringActive = document.visibilityState === 'visible';
  });

  document.addEventListener('mouseover', function(e) {
    const el = e.target.closest('a, button, [onclick], .project-card, .filter-item, .social-icon, .exp-accordion-item, .contact-type-item');
    if (el) document.body.classList.add('cursor-hover');
  }, { passive: true });
  document.addEventListener('mouseout', function(e) {
    const el = e.target.closest('a, button, [onclick], .project-card, .filter-item, .social-icon, .exp-accordion-item, .contact-type-item');
    if (el) document.body.classList.remove('cursor-hover');
  }, { passive: true });

  document.addEventListener('mouseleave', function() {
    dot.style.opacity  = '0';
    ring.style.opacity = '0';
  });
  document.addEventListener('mouseenter', function() {
    dot.style.opacity  = '1';
    ring.style.opacity = '1';
  });
})();

// ========================
// WORD-BY-WORD REVEAL
// ========================
(function() {
  function splitIntoWords(el) {
    if (el.dataset.wordsSplit) return;
    el.dataset.wordsSplit = '1';
    // Collect text nodes and HTML elements separately
    var nodes = Array.from(el.childNodes);
    el.innerHTML = '';
    nodes.forEach(function(node) {
      if (node.nodeType === 3) { // text node
        var words = node.textContent.split(/(\s+)/);
        words.forEach(function(part) {
          if (/^\s+$/.test(part)) {
            el.appendChild(document.createTextNode(part));
          } else if (part.length > 0) {
            var span = document.createElement('span');
            span.className = 'wd';
            var inner = document.createElement('span');
            inner.className = 'wd-inner';
            inner.textContent = part;
            span.appendChild(inner);
            el.appendChild(span);
          }
        });
      } else {
        // preserve HTML elements (e.g. <em>, <span>)
        var child = node.cloneNode(true);
        // wrap the element in a .wd span
        var wrap = document.createElement('span');
        wrap.className = 'wd';
        var inner = document.createElement('span');
        inner.className = 'wd-inner';
        inner.appendChild(child);
        wrap.appendChild(inner);
        el.appendChild(wrap);
      }
    });
  }

  function staggerWords(el) {
    el.querySelectorAll('.wd-inner').forEach(function(w, i) {
      w.style.transitionDelay = (i * 70) + 'ms';
    });
  }

  var wordObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('words-visible');
      }
    });
  }, { threshold: 0.18, rootMargin: '0px 0px -40px 0px' });

  function initWordReveal() {
    document.querySelectorAll('.page.active .reveal-words, .reveal-words').forEach(function(el) {
      if (!el.dataset.wordsSplit) {
        splitIntoWords(el);
        staggerWords(el);
      }
      wordObserver.observe(el);
      // If already in viewport (e.g. hero on load), trigger immediately after slight delay
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        setTimeout(function() { el.classList.add('words-visible'); }, 300);
      }
    });
  }

  initWordReveal();
  if (typeof navigateTo === 'function') {
    var _origNav = navigateTo;
    window.navigateTo = function(pageId) {
      _origNav(pageId);
      setTimeout(initWordReveal, 400);
    };
  }
  document.addEventListener('pageNavigated', initWordReveal);
})();

// ========================
// PORTFOLIO CURSOR TRACKING
// ========================
(function() {
  var pc = document.getElementById('portfolio-cursor');
  if (!pc) return;

  var pcX = window.innerWidth / 2;
  var pcY = window.innerHeight / 2;
  var curX = pcX, curY = pcY;
  var visible = false;

  // Smoothly follow mouse
  (function animPC() {
    if (document.visibilityState !== 'hidden') {
      curX += (pcX - curX) * 0.14;
      curY += (pcY - curY) * 0.14;
      pc.style.left = curX + 'px';
      pc.style.top  = curY + 'px';
    }
    requestAnimationFrame(animPC);
  })();

  document.addEventListener('mousemove', function(e) {
    pcX = e.clientX;
    pcY = e.clientY;
  }, { passive: true });

  // Show/hide based on hovering over .project-card
  document.addEventListener('mouseover', function(e) {
    if (e.target.closest('.project-card')) {
      if (!visible) { pc.classList.add('visible'); document.body.classList.add('on-portfolio-zone'); visible = true; }
    }
  }, { passive: true });
  document.addEventListener('mouseout', function(e) {
    if (e.target.closest('.project-card')) {
      var to = e.relatedTarget;
      if (!to || !to.closest('.project-card')) {
        pc.classList.remove('visible');
        document.body.classList.remove('on-portfolio-zone');
        visible = false;
      }
    }
  }, { passive: true });

  // Update label on language switch
  function updatePortfolioCursorLabel() {
    if (typeof currentLang !== 'undefined') {
      pc.textContent = currentLang === 'en' ? 'View project' : 'Shiko projektin';
    }
  }
  document.addEventListener('langChanged', updatePortfolioCursorLabel);
  updatePortfolioCursorLabel();
})();

// ============================================================
// PREMIUM SMOOTH SCROLL ENGINE
// Intercepts wheel events and applies lerp easing so scrolling
// feels slow, deliberate and flowing rather than instant.
// Only activates on non-touch (desktop) devices.
// ============================================================
(function() {
  if ('ontouchstart' in window) return; // leave mobile native

  // Remove CSS smooth-scroll so our engine takes full control
  document.documentElement.style.scrollBehavior = 'auto';

  // Always start at 0 — browser scroll restore is disabled by the load handler above
  var targetY  = 0;
  var currentY = 0;
  var ticking  = false;
  var EASE     = 0.072; // lower = slower / more flowing
  var MULTIPLIER = 0.9; // scale wheel delta (< 1 = slower input)

  function lerp(a, b, t) { return a + (b - a) * t; }

  var _modalEl = null;
  function getModal() { return _modalEl || (_modalEl = document.getElementById('projectModal')); }

  window.addEventListener('wheel', function(e) {
    var modal = getModal();
    if (modal && modal.classList.contains('open')) return;
    e.preventDefault();
    targetY += e.deltaY * MULTIPLIER;
    targetY = Math.max(0, Math.min(targetY, document.body.scrollHeight - window.innerHeight));
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(tick);
    }
  }, { passive: false });

  function tick() {
    currentY = lerp(currentY, targetY, EASE);
    if (Math.abs(targetY - currentY) > 0.5) {
      window.scrollTo(0, currentY);
      requestAnimationFrame(tick);
    } else {
      window.scrollTo(0, targetY);
      currentY = targetY;
      ticking = false;
    }
  }

  // Keep targetY in sync when scroll happens via keyboard, anchor links, etc.
  window.addEventListener('scroll', function() {
    if (!ticking) {
      targetY  = window.scrollY;
      currentY = window.scrollY;
    }
  }, { passive: true });

  // Called by navigateTo() on every SPA page transition
  window._scrollEngineReset = function() {
    targetY  = 0;
    currentY = 0;
  };
})();

// requestIdleCallback polyfill (Safari < 16.4)
if (!window.requestIdleCallback) {
  window.requestIdleCallback = function(cb, opts) {
    var start = Date.now();
    return setTimeout(function() {
      cb({ didTimeout: false, timeRemaining: function() { return Math.max(0, 50 - (Date.now() - start)); } });
    }, (opts && opts.timeout) ? Math.min(opts.timeout, 50) : 50);
  };
  window.cancelIdleCallback = function(id) { clearTimeout(id); };
}

// ========================
// TOUCH TAP RIPPLE
// Shows a brief brass ring where the user taps, then disappears.
// Only runs on touch devices.
// ========================
(function() {
  if (!('ontouchstart' in window)) return;
  document.addEventListener('touchstart', function(e) {
    var touch = e.touches[0];
    var ripple = document.createElement('span');
    ripple.className = 'tap-ripple';
    ripple.style.left = touch.clientX + 'px';
    ripple.style.top  = touch.clientY + 'px';
    document.body.appendChild(ripple);
    setTimeout(function() { ripple.remove(); }, 480);
  }, { passive: true });
})();

// ========================
// MOBILE MENU LANG TOGGLE
// ========================
document.addEventListener('click', function(e) {
  var btn = e.target.closest('#mobile-menu .lang-toggle button');
  if (!btn) return;
  var lang = btn.textContent.trim() === 'AL' ? 'al' : 'en';
  switchLanguage(lang);
});
