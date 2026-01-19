import { d as createAstro, c as createComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute, e as defineScriptVars, u as unescapeHTML, r as renderComponent } from '../../chunks/astro/server_D4v9cRlD.mjs';
import 'piccolore';
import { g as getCollection } from '../../chunks/_astro_content_D1rvoA4B.mjs';
import { $ as $$Layout } from '../../chunks/Layout_BTG76i_g.mjs';
import { $ as $$Navbar } from '../../chunks/Navbar_BOGPidyU.mjs';
import 'clsx';
import { getApps, initializeApp } from 'firebase/app';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
/* empty css                                   */
export { renderers } from '../../renderers.mjs';

const firebaseConfig = {
  apiKey: "AIzaSyBdsu65Voj8en9u_7eL5q0YRFuCC7fUYWA",
  authDomain: "instantetrips-editor.firebaseapp.com",
  projectId: "instantetrips-editor"
};
const DEFAULT_CONFIG = {
  booking: { affiliateId: "1234567", enabled: true },
  skyscanner: { affiliateTag: "instante_trips", enabled: true },
  civitatis: { affiliateId: "12345", enabled: true },
  adsense: { publisherId: "", slots: { sidebar: "", inline: "" }, enabled: false }
};
let cachedConfig = null;
async function fetchAffiliates() {
  if (cachedConfig) {
    return cachedConfig;
  }
  try {
    const existingApps = getApps();
    const appName = "affiliate-fetch";
    let app = existingApps.find((a) => a.name === appName);
    if (!app) {
      app = initializeApp(firebaseConfig, appName);
    }
    const db = getFirestore(app);
    const docRef = doc(db, "config", "affiliates");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      cachedConfig = {
        booking: {
          affiliateId: data.booking?.affiliateId || DEFAULT_CONFIG.booking.affiliateId,
          enabled: data.booking?.enabled ?? DEFAULT_CONFIG.booking.enabled
        },
        skyscanner: {
          affiliateTag: data.skyscanner?.affiliateTag || DEFAULT_CONFIG.skyscanner.affiliateTag,
          enabled: data.skyscanner?.enabled ?? DEFAULT_CONFIG.skyscanner.enabled
        },
        civitatis: {
          affiliateId: data.civitatis?.affiliateId || DEFAULT_CONFIG.civitatis.affiliateId,
          enabled: data.civitatis?.enabled ?? DEFAULT_CONFIG.civitatis.enabled
        },
        adsense: {
          publisherId: data.adsense?.publisherId || DEFAULT_CONFIG.adsense.publisherId,
          slots: {
            sidebar: data.adsense?.slots?.sidebar || DEFAULT_CONFIG.adsense.slots.sidebar,
            inline: data.adsense?.slots?.inline || DEFAULT_CONFIG.adsense.slots.inline
          },
          enabled: data.adsense?.enabled ?? DEFAULT_CONFIG.adsense.enabled
        }
      };
      return cachedConfig;
    }
    console.warn("[fetchAffiliates] Documento config/affiliates no encontrado, usando valores por defecto");
    cachedConfig = DEFAULT_CONFIG;
    return cachedConfig;
  } catch (error) {
    console.error("[fetchAffiliates] Error:", error);
    return DEFAULT_CONFIG;
  }
}
async function getBookingConfig() {
  const config = await fetchAffiliates();
  return config.booking;
}
async function getSkyscannerConfig() {
  const config = await fetchAffiliates();
  return config.skyscanner;
}
async function getAdsenseConfig() {
  const config = await fetchAffiliates();
  return config.adsense;
}

var __freeze$3 = Object.freeze;
var __defProp$3 = Object.defineProperty;
var __template$3 = (cooked, raw) => __freeze$3(__defProp$3(cooked, "raw", { value: __freeze$3(raw || cooked.slice()) }));
var _a$3;
const $$Astro$5 = createAstro("https://www.instantetrips.com");
const $$FlightSearch = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$FlightSearch;
  const skyscannerConfig = await getSkyscannerConfig();
  skyscannerConfig.affiliateTag;
  const isEnabled = skyscannerConfig.enabled;
  const {
    variant = "sidebar",
    defaultOrigin = "",
    defaultDestination = ""
  } = Astro2.props;
  return renderTemplate(_a$3 || (_a$3 = __template$3(["", "<script>\n    document.getElementById('flightSearchForm')?.addEventListener('submit', function(e) {\n        e.preventDefault();\n        const form = e.target;\n        const origin = form.origin.value.trim();\n        const destination = form.destination.value.trim();\n        const outbound = form.outbound.value;\n        const inbound = form.inbound.value;\n        \n        // Construir URL de Skyscanner\n        let url = `https://www.skyscanner.com/transport/flights/${origin}/${destination}/${outbound.replace(/-/g, '')}`;\n        if (inbound) {\n            url += `/${inbound.replace(/-/g, '')}`;\n        }\n        url += '/?adultsv2=1&cabinclass=economy&childrenv2=&ref=home&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false';\n        \n        // Abrir en nueva pesta\xF1a\n        window.open(url, '_blank');\n    });\n<\/script>"], ["", "<script>\n    document.getElementById('flightSearchForm')?.addEventListener('submit', function(e) {\n        e.preventDefault();\n        const form = e.target;\n        const origin = form.origin.value.trim();\n        const destination = form.destination.value.trim();\n        const outbound = form.outbound.value;\n        const inbound = form.inbound.value;\n        \n        // Construir URL de Skyscanner\n        let url = \\`https://www.skyscanner.com/transport/flights/\\${origin}/\\${destination}/\\${outbound.replace(/-/g, '')}\\`;\n        if (inbound) {\n            url += \\`/\\${inbound.replace(/-/g, '')}\\`;\n        }\n        url += '/?adultsv2=1&cabinclass=economy&childrenv2=&ref=home&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false';\n        \n        // Abrir en nueva pesta\xF1a\n        window.open(url, '_blank');\n    });\n<\/script>"])), isEnabled && renderTemplate`${maybeRenderHead()}<div${addAttribute(`flight-widget ${variant}`, "class")} data-astro-cid-4fbrsb3y><div class="widget-header" data-astro-cid-4fbrsb3y><span class="widget-icon" data-astro-cid-4fbrsb3y>✈️</span><h4 data-astro-cid-4fbrsb3y>Buscar Vuelos</h4></div><form class="flight-form" id="flightSearchForm" data-astro-cid-4fbrsb3y><div class="input-group" data-astro-cid-4fbrsb3y><label for="flight-origin" data-astro-cid-4fbrsb3y>Origen</label><input type="text" id="flight-origin" name="origin" placeholder="Ciudad o aeropuerto"${addAttribute(defaultOrigin, "value")} required data-astro-cid-4fbrsb3y></div><div class="input-group" data-astro-cid-4fbrsb3y><label for="flight-destination" data-astro-cid-4fbrsb3y>Destino</label><input type="text" id="flight-destination" name="destination" placeholder="¿A dónde viajas?"${addAttribute(defaultDestination, "value")} required data-astro-cid-4fbrsb3y></div><div class="input-row" data-astro-cid-4fbrsb3y><div class="input-group half" data-astro-cid-4fbrsb3y><label for="flight-date" data-astro-cid-4fbrsb3y>Salida</label><input type="date" id="flight-date" name="outbound" required data-astro-cid-4fbrsb3y></div><div class="input-group half" data-astro-cid-4fbrsb3y><label for="flight-return" data-astro-cid-4fbrsb3y>Regreso</label><input type="date" id="flight-return" name="inbound" data-astro-cid-4fbrsb3y></div></div><button type="submit" class="search-btn" data-astro-cid-4fbrsb3y><span data-astro-cid-4fbrsb3y>Buscar Vuelos</span><span class="arrow" data-astro-cid-4fbrsb3y>→</span></button></form><p class="widget-note" data-astro-cid-4fbrsb3y>
Buscamos en +700 aerolíneas
</p></div>`);
}, "/Volumes/ARANA SSD/Instante Trips/destinos_argentina/src/components/FlightSearch.astro", void 0);

var __freeze$2 = Object.freeze;
var __defProp$2 = Object.defineProperty;
var __template$2 = (cooked, raw) => __freeze$2(__defProp$2(cooked, "raw", { value: __freeze$2(raw || cooked.slice()) }));
var _a$2;
const $$Astro$4 = createAstro("https://www.instantetrips.com");
const $$HotelWidget = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HotelWidget;
  const bookingConfig = await getBookingConfig();
  const affiliateId = bookingConfig.affiliateId;
  const isEnabled = bookingConfig.enabled;
  const {
    variant = "sidebar",
    defaultDestination = ""
  } = Astro2.props;
  return renderTemplate(_a$2 || (_a$2 = __template$2(["", "<script>(function(){", "\n    document.getElementById('hotelSearchForm')?.addEventListener('submit', function(e) {\n        e.preventDefault();\n        const form = e.target;\n        const destination = form.destination.value.trim();\n        const checkin = form.checkin.value;\n        const checkout = form.checkout.value;\n        const guests = form.guests.value;\n        \n        const url = `https://www.booking.com/searchresults.html?ss=${encodeURIComponent(destination)}&checkin=${checkin}&checkout=${checkout}&group_adults=${guests}&no_rooms=1&aid=${affiliateId}`;\n        \n        window.open(url, '_blank');\n    });\n})();<\/script>"], ["", "<script>(function(){", "\n    document.getElementById('hotelSearchForm')?.addEventListener('submit', function(e) {\n        e.preventDefault();\n        const form = e.target;\n        const destination = form.destination.value.trim();\n        const checkin = form.checkin.value;\n        const checkout = form.checkout.value;\n        const guests = form.guests.value;\n        \n        const url = \\`https://www.booking.com/searchresults.html?ss=\\${encodeURIComponent(destination)}&checkin=\\${checkin}&checkout=\\${checkout}&group_adults=\\${guests}&no_rooms=1&aid=\\${affiliateId}\\`;\n        \n        window.open(url, '_blank');\n    });\n})();<\/script>"])), isEnabled && renderTemplate`${maybeRenderHead()}<div${addAttribute(`hotel-widget ${variant}`, "class")} data-astro-cid-5pji2nxq><div class="widget-header" data-astro-cid-5pji2nxq><span class="widget-icon" data-astro-cid-5pji2nxq>🏨</span><h4 data-astro-cid-5pji2nxq>Buscar Hoteles</h4></div><form class="hotel-form" id="hotelSearchForm" data-astro-cid-5pji2nxq><div class="input-group" data-astro-cid-5pji2nxq><label for="hotel-destination" data-astro-cid-5pji2nxq>Destino</label><input type="text" id="hotel-destination" name="destination" placeholder="Ciudad o hotel"${addAttribute(defaultDestination, "value")} required data-astro-cid-5pji2nxq></div><div class="input-row" data-astro-cid-5pji2nxq><div class="input-group half" data-astro-cid-5pji2nxq><label for="hotel-checkin" data-astro-cid-5pji2nxq>Check-in</label><input type="date" id="hotel-checkin" name="checkin" required data-astro-cid-5pji2nxq></div><div class="input-group half" data-astro-cid-5pji2nxq><label for="hotel-checkout" data-astro-cid-5pji2nxq>Check-out</label><input type="date" id="hotel-checkout" name="checkout" required data-astro-cid-5pji2nxq></div></div><div class="input-group" data-astro-cid-5pji2nxq><label for="hotel-guests" data-astro-cid-5pji2nxq>Huéspedes</label><select id="hotel-guests" name="guests" data-astro-cid-5pji2nxq><option value="1" data-astro-cid-5pji2nxq>1 adulto</option><option value="2" selected data-astro-cid-5pji2nxq>2 adultos</option><option value="3" data-astro-cid-5pji2nxq>3 adultos</option><option value="4" data-astro-cid-5pji2nxq>4 adultos</option></select></div><button type="submit" class="search-btn booking" data-astro-cid-5pji2nxq><span data-astro-cid-5pji2nxq>Ver en Booking</span><span class="arrow" data-astro-cid-5pji2nxq>→</span></button></form><p class="widget-note" data-astro-cid-5pji2nxq><span class="booking-logo" data-astro-cid-5pji2nxq>Booking.com</span> · Precios y disponibilidad
</p></div>`, defineScriptVars({ affiliateId }));
}, "/Volumes/ARANA SSD/Instante Trips/destinos_argentina/src/components/HotelWidget.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$3 = createAstro("https://www.instantetrips.com");
const $$AdsenseWidget = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$AdsenseWidget;
  const adsenseConfig = await getAdsenseConfig();
  const isEnabled = adsenseConfig.enabled;
  const publisherId = adsenseConfig.publisherId;
  const slots = adsenseConfig.slots;
  const {
    slot = "inline",
    format = "auto",
    className = ""
  } = Astro2.props;
  const slotId = slot === "sidebar" ? slots.sidebar : slots.inline;
  return renderTemplate`${isEnabled && publisherId && slotId && renderTemplate(_a$1 || (_a$1 = __template$1(["", "<div", ' data-astro-cid-5nqwrfln><ins class="adsbygoogle" style="display:block"', "", "", ' data-full-width-responsive="true" data-astro-cid-5nqwrfln></ins><script>\n        (adsbygoogle = window.adsbygoogle || []).push({});\n    <\/script></div>'])), maybeRenderHead(), addAttribute(`adsense-container ${slot} ${className}`, "class"), addAttribute(publisherId, "data-ad-client"), addAttribute(slotId, "data-ad-slot"), addAttribute(format, "data-ad-format"))}`;
}, "/Volumes/ARANA SSD/Instante Trips/destinos_argentina/src/components/AdsenseWidget.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro("https://www.instantetrips.com");
const $$FAQ = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FAQ;
  const { faqs, destinoTitle } = Astro2.props;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.pregunta,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.respuesta
      }
    }))
  };
  return renderTemplate`${faqs && faqs.length > 0 && renderTemplate(_a || (_a = __template(["", '<section class="faq-section" data-astro-cid-al2ca2vr><div class="section-header" data-astro-cid-al2ca2vr><h2 data-astro-cid-al2ca2vr>Preguntas Frecuentes</h2><span class="badge" data-astro-cid-al2ca2vr>FAQ</span></div><div class="faq-list" data-astro-cid-al2ca2vr>', '</div><!-- Schema.org FAQPage for SEO --><script type="application/ld+json">', "<\/script></section>"])), maybeRenderHead(), faqs.map((faq, index) => renderTemplate`<details class="faq-item"${addAttribute(index === 0, "open")} data-astro-cid-al2ca2vr><summary class="faq-question" data-astro-cid-al2ca2vr><span class="question-icon" data-astro-cid-al2ca2vr><i class="fas fa-question-circle" data-astro-cid-al2ca2vr></i></span><span class="question-text" data-astro-cid-al2ca2vr>${faq.pregunta}</span><span class="toggle-icon" data-astro-cid-al2ca2vr><i class="fas fa-chevron-down" data-astro-cid-al2ca2vr></i></span></summary><div class="faq-answer" data-astro-cid-al2ca2vr><p data-astro-cid-al2ca2vr>${faq.respuesta}</p></div></details>`), unescapeHTML(JSON.stringify(faqSchema)))}`;
}, "/Volumes/ARANA SSD/Instante Trips/destinos_argentina/src/components/FAQ.astro", void 0);

const $$Astro$1 = createAstro("https://www.instantetrips.com");
const $$LeadMagnet = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LeadMagnet;
  const { leadMagnet, destinoTitle } = Astro2.props;
  const imagenUrl = leadMagnet.imagen || "/argentina/checklist-default.jpg";
  return renderTemplate`${leadMagnet && renderTemplate`${maybeRenderHead()}<section class="leadmagnet-section" data-astro-cid-cbi6tqy4><div class="leadmagnet-card" data-astro-cid-cbi6tqy4><div class="leadmagnet-image" data-astro-cid-cbi6tqy4><img${addAttribute(imagenUrl, "src")}${addAttribute(leadMagnet.titulo, "alt")} loading="lazy" data-astro-cid-cbi6tqy4><div class="free-badge" data-astro-cid-cbi6tqy4><i class="fas fa-gift" data-astro-cid-cbi6tqy4></i> GRATIS
</div></div><div class="leadmagnet-content" data-astro-cid-cbi6tqy4><div class="content-header" data-astro-cid-cbi6tqy4><span class="eyebrow" data-astro-cid-cbi6tqy4>📥 Recurso Descargable</span><h3 data-astro-cid-cbi6tqy4>${leadMagnet.titulo}</h3></div><p class="description" data-astro-cid-cbi6tqy4>${leadMagnet.descripcion}</p><div class="features" data-astro-cid-cbi6tqy4><div class="feature" data-astro-cid-cbi6tqy4><i class="fas fa-check-circle" data-astro-cid-cbi6tqy4></i><span data-astro-cid-cbi6tqy4>PDF listo para imprimir</span></div><div class="feature" data-astro-cid-cbi6tqy4><i class="fas fa-check-circle" data-astro-cid-cbi6tqy4></i><span data-astro-cid-cbi6tqy4>Sin necesidad de registro</span></div><div class="feature" data-astro-cid-cbi6tqy4><i class="fas fa-check-circle" data-astro-cid-cbi6tqy4></i><span data-astro-cid-cbi6tqy4>Actualizado ${(/* @__PURE__ */ new Date()).getFullYear()}</span></div></div><a${addAttribute(leadMagnet.archivo, "href")} download class="download-btn" data-astro-cid-cbi6tqy4><i class="fas fa-download" data-astro-cid-cbi6tqy4></i>
Descargar Ahora
</a><p class="disclaimer" data-astro-cid-cbi6tqy4>
*Contenido creado por viajeros locales
</p></div></div></section>`}`;
}, "/Volumes/ARANA SSD/Instante Trips/destinos_argentina/src/components/LeadMagnet.astro", void 0);

const $$Astro = createAstro("https://www.instantetrips.com");
async function getStaticPaths() {
  const destinos = await getCollection("destinos");
  return destinos.map((destino) => ({
    params: { id: destino.slug },
    props: { destino }
  }));
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { destino } = Astro2.props;
  const { Content } = await destino.render();
  const {
    title,
    img,
    desc,
    historia,
    secciones,
    tours,
    faqs,
    leadMagnet,
    dashboard,
    zonas,
    ctas,
    // Nuevos campos
    actividades,
    atracciones,
    barrios,
    transporte,
    escapadas,
    gastronomia,
    mapa
  } = destino.data;
  const zonaColors = {
    trendy: { bg: "rgba(168, 85, 247, 0.1)", border: "#a855f7", text: "#a855f7" },
    elegante: { bg: "rgba(59, 130, 246, 0.1)", border: "#3b82f6", text: "#3b82f6" },
    bohemio: { bg: "rgba(249, 115, 22, 0.1)", border: "#f97316", text: "#f97316" },
    moderno: { bg: "rgba(16, 185, 129, 0.1)", border: "#10b981", text: "#10b981" }
  };
  const ctaColors = {
    emerald: { bg: "linear-gradient(135deg, #10b981, #059669)", hover: "#047857" },
    blue: { bg: "linear-gradient(135deg, #3b82f6, #2563eb)", hover: "#1d4ed8" },
    gold: { bg: "linear-gradient(135deg, #F4B942, #d97706)", hover: "#b45309" },
    purple: { bg: "linear-gradient(135deg, #8b5cf6, #7c3aed)", hover: "#6d28d9" }
  };
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${title} | Destinos Argentinos`, "data-astro-cid-ld6fkunx": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-ld6fkunx": true })} ${maybeRenderHead()}<header class="dest-hero"${addAttribute(`background-image: url(${img})`, "style")} data-astro-cid-ld6fkunx> <div class="overlay" data-astro-cid-ld6fkunx></div> <div class="hero-text" data-astro-cid-ld6fkunx> <h1 data-astro-cid-ld6fkunx>${title}</h1> <p class="slogan" data-astro-cid-ld6fkunx>${desc}</p> </div> </header> <main class="container" data-astro-cid-ld6fkunx> <div class="nav-back" data-astro-cid-ld6fkunx> <a href="/argentina/#destinos" class="back-link" data-astro-cid-ld6fkunx> <i class="fas fa-chevron-left" data-astro-cid-ld6fkunx></i> VOLVER A DESTINOS
</a> </div> <!-- Dashboard eliminado por redundancia con secciones --> <article class="main-info" data-astro-cid-ld6fkunx> <div class="text-block" data-astro-cid-ld6fkunx> <h2 data-astro-cid-ld6fkunx>La Experiencia</h2> <p data-astro-cid-ld6fkunx>${historia}</p> </div> <div class="icon-grid" data-astro-cid-ld6fkunx> ${secciones.map((sec) => renderTemplate`<div class="icon-item" data-astro-cid-ld6fkunx> <div class="icon-wrapper" data-astro-cid-ld6fkunx> <i${addAttribute(`fas ${sec.icon}`, "class")} data-astro-cid-ld6fkunx></i> </div> <div class="icon-content" data-astro-cid-ld6fkunx> <h3 data-astro-cid-ld6fkunx>${sec.label}</h3> <p data-astro-cid-ld6fkunx>${sec.text}</p> </div> </div>`)} </div> </article> <!-- ========== NUEVO: ZONAS ========== --> ${zonas && zonas.length > 0 && renderTemplate`<section class="zonas-section" data-astro-cid-ld6fkunx> <h2 data-astro-cid-ld6fkunx>🗺️ Zonas Recomendadas</h2> <div class="zonas-grid" data-astro-cid-ld6fkunx> ${zonas.map((zona) => {
    const colors = zonaColors[zona.tipo] || zonaColors.trendy;
    return renderTemplate`<div class="zona-card"${addAttribute(`background: ${colors.bg}; border-color: ${colors.border}`, "style")} data-astro-cid-ld6fkunx> <span class="zona-badge"${addAttribute(`background: ${colors.border}; color: white`, "style")} data-astro-cid-ld6fkunx> ${zona.tipo} </span> <h3 data-astro-cid-ld6fkunx>${zona.nombre}</h3> <p data-astro-cid-ld6fkunx>${zona.descripcion}</p> </div>`;
  })} </div> </section>`} <!-- ========== NUEVO: CTAs ========== --> ${ctas && ctas.length > 0 && renderTemplate`<section class="ctas-section" data-astro-cid-ld6fkunx> ${ctas.map((cta) => {
    const colors = ctaColors[cta.color] || ctaColors.gold;
    return renderTemplate`<a${addAttribute(cta.link, "href")} target="_blank" rel="noopener" class="cta-box" data-astro-cid-ld6fkunx> <div class="cta-content" data-astro-cid-ld6fkunx> <h3 data-astro-cid-ld6fkunx>${cta.titulo}</h3> <p data-astro-cid-ld6fkunx>${cta.descripcion}</p> </div> <button class="cta-button"${addAttribute(`background: ${colors.bg}`, "style")} data-astro-cid-ld6fkunx> ${cta.boton} <i class="fas fa-arrow-right" data-astro-cid-ld6fkunx></i> </button> </a>`;
  })} </section>`} <!-- ========== QUÉ HACER ========== --> ${actividades && actividades.length > 0 && renderTemplate`<section class="actividades-section" data-astro-cid-ld6fkunx> <h2 data-astro-cid-ld6fkunx>🎯 Qué Hacer en ${title}</h2> <div class="actividades-grid" data-astro-cid-ld6fkunx> ${actividades.map((act) => renderTemplate`<a${addAttribute(act.link || "#", "href")}${addAttribute(act.link ? "_blank" : "_self", "target")} rel="noopener" class="actividad-card" data-astro-cid-ld6fkunx> <div class="actividad-icon" data-astro-cid-ld6fkunx> <i${addAttribute(`fas ${act.icono}`, "class")} data-astro-cid-ld6fkunx></i> </div> <div class="actividad-content" data-astro-cid-ld6fkunx> <h3 data-astro-cid-ld6fkunx>${act.nombre}</h3> <p data-astro-cid-ld6fkunx>${act.descripcion}</p> </div> ${act.link && renderTemplate`<i class="fas fa-chevron-right actividad-arrow" data-astro-cid-ld6fkunx></i>`} </a>`)} </div> </section>`} <!-- ========== QUÉ VISITAR ========== --> ${atracciones && atracciones.length > 0 && renderTemplate`<section class="atracciones-section" data-astro-cid-ld6fkunx> <h2 data-astro-cid-ld6fkunx>🏛️ Qué Visitar</h2> <div class="atracciones-grid" data-astro-cid-ld6fkunx> ${atracciones.map((lugar) => renderTemplate`<div class="atraccion-card" data-astro-cid-ld6fkunx> ${lugar.imagen && renderTemplate`<div class="atraccion-imagen"${addAttribute(`background-image: url('${lugar.imagen}')`, "style")} data-astro-cid-ld6fkunx> ${lugar.gratis && renderTemplate`<span class="tag-gratis" data-astro-cid-ld6fkunx>GRATIS</span>`} ${lugar.precio && renderTemplate`<span class="tag-precio" data-astro-cid-ld6fkunx>${lugar.precio}</span>`} </div>`} <div class="atraccion-content" data-astro-cid-ld6fkunx> <span class="atraccion-zona" data-astro-cid-ld6fkunx>${lugar.zona}</span> <h3 data-astro-cid-ld6fkunx>${lugar.nombre}</h3> <p data-astro-cid-ld6fkunx>${lugar.descripcion}</p> ${lugar.link && renderTemplate`<a${addAttribute(lugar.link, "href")} target="_blank" rel="noopener" class="atraccion-link" data-astro-cid-ld6fkunx>
Ver más <i class="fas fa-arrow-right" data-astro-cid-ld6fkunx></i> </a>`} </div> </div>`)} </div> </section>`} <!-- ========== BARRIOS ========== --> ${barrios && barrios.length > 0 && renderTemplate`<section class="barrios-section" data-astro-cid-ld6fkunx> <h2 data-astro-cid-ld6fkunx>🏘️ Barrios para Explorar</h2> <div class="barrios-grid" data-astro-cid-ld6fkunx> ${barrios.map((barrio) => renderTemplate`<div class="barrio-card" data-astro-cid-ld6fkunx> ${barrio.imagen && renderTemplate`<div class="barrio-imagen"${addAttribute(`background-image: url('${barrio.imagen}')`, "style")} data-astro-cid-ld6fkunx> <span class="barrio-tipo" data-astro-cid-ld6fkunx>${barrio.tipo}</span> </div>`} <div class="barrio-content" data-astro-cid-ld6fkunx> <h3 data-astro-cid-ld6fkunx>${barrio.nombre}</h3> <p data-astro-cid-ld6fkunx>${barrio.descripcion}</p> <div class="barrio-imperdible" data-astro-cid-ld6fkunx> <span data-astro-cid-ld6fkunx>⭐ Imperdible:</span> ${barrio.imperdible} </div> </div> </div>`)} </div> </section>`} <!-- ========== CÓMO LLEGAR ========== --> ${transporte && transporte.aeropuerto && renderTemplate`<section class="transporte-section" data-astro-cid-ld6fkunx> <h2 data-astro-cid-ld6fkunx>✈️ Cómo Llegar del Aeropuerto</h2> <div class="aeropuerto-info" data-astro-cid-ld6fkunx> <div class="aeropuerto-header" data-astro-cid-ld6fkunx> <h3 data-astro-cid-ld6fkunx>${transporte.aeropuerto.nombre}</h3> <span class="distancia-badge" data-astro-cid-ld6fkunx>${transporte.aeropuerto.distancia}</span> </div> <div class="opciones-transporte" data-astro-cid-ld6fkunx> ${transporte.aeropuerto.opciones.map((op) => renderTemplate`<div class="opcion-card" data-astro-cid-ld6fkunx> <div class="opcion-metodo" data-astro-cid-ld6fkunx>${op.metodo}</div> <div class="opcion-details" data-astro-cid-ld6fkunx> <span class="opcion-tiempo" data-astro-cid-ld6fkunx><i class="far fa-clock" data-astro-cid-ld6fkunx></i> ${op.tiempo}</span> <span class="opcion-precio" data-astro-cid-ld6fkunx><i class="fas fa-tag" data-astro-cid-ld6fkunx></i> ${op.precio}</span> </div> ${op.link && renderTemplate`<a${addAttribute(op.link, "href")} target="_blank" rel="noopener" class="opcion-btn" data-astro-cid-ld6fkunx>
Reservar <i class="fas fa-arrow-right" data-astro-cid-ld6fkunx></i> </a>`} </div>`)} </div> </div> </section>`} <!-- ========== ESCAPADAS ========== --> ${escapadas && escapadas.length > 0 && renderTemplate`<section class="escapadas-section" data-astro-cid-ld6fkunx> <h2 data-astro-cid-ld6fkunx>🚌 Escapadas desde ${title}</h2> <div class="escapadas-grid" data-astro-cid-ld6fkunx> ${escapadas.map((escapada) => renderTemplate`<a${addAttribute(escapada.link || "#", "href")}${addAttribute(escapada.link ? "_blank" : "_self", "target")} rel="noopener" class="escapada-card" data-astro-cid-ld6fkunx> ${escapada.imagen && renderTemplate`<div class="escapada-imagen"${addAttribute(`background-image: url('${escapada.imagen}')`, "style")} data-astro-cid-ld6fkunx> <div class="escapada-tags" data-astro-cid-ld6fkunx> <span class="escapada-distancia" data-astro-cid-ld6fkunx>${escapada.distancia}</span> <span class="escapada-tiempo" data-astro-cid-ld6fkunx>${escapada.tiempo}</span> </div> </div>`} <div class="escapada-content" data-astro-cid-ld6fkunx> <h3 data-astro-cid-ld6fkunx>${escapada.nombre}</h3> <p data-astro-cid-ld6fkunx>${escapada.descripcion}</p> </div> </a>`)} </div> </section>`} <!-- ========== GASTRONOMÍA ========== --> ${gastronomia && gastronomia.length > 0 && renderTemplate`<section class="gastronomia-section" data-astro-cid-ld6fkunx> <h2 data-astro-cid-ld6fkunx>🍽️ Dónde Comer</h2> <div class="gastronomia-grid" data-astro-cid-ld6fkunx> ${gastronomia.map((cat) => renderTemplate`<div class="gastronomia-categoria" data-astro-cid-ld6fkunx> <h3 data-astro-cid-ld6fkunx>${cat.categoria}</h3> <div class="lugares-lista" data-astro-cid-ld6fkunx> ${cat.lugares.map((lugar) => renderTemplate`<div class="lugar-item" data-astro-cid-ld6fkunx> <span class="lugar-nombre" data-astro-cid-ld6fkunx>${lugar.nombre}</span> <span class="lugar-zona" data-astro-cid-ld6fkunx>${lugar.zona}</span> <span class="lugar-precio" data-astro-cid-ld6fkunx>${lugar.precio}</span> </div>`)} </div> </div>`)} </div> </section>`} <!-- ========== MAPA ========== --> ${mapa && renderTemplate`<section class="mapa-section" data-astro-cid-ld6fkunx> <h2 data-astro-cid-ld6fkunx>🗺️ Mapa de ${title}</h2> <div class="mapa-container" data-astro-cid-ld6fkunx> <iframe${addAttribute(`https://www.openstreetmap.org/export/embed.html?bbox=${parseFloat(mapa.centro.split(",")[1]) - 0.1}%2C${parseFloat(mapa.centro.split(",")[0]) - 0.05}%2C${parseFloat(mapa.centro.split(",")[1]) + 0.1}%2C${parseFloat(mapa.centro.split(",")[0]) + 0.05}&layer=mapnik`, "src")} style="border: 0; width: 100%; height: 400px; border-radius: 16px;" loading="lazy" data-astro-cid-ld6fkunx></iframe> <a${addAttribute(`https://www.google.com/maps?ll=${mapa.centro}&z=${mapa.zoom}`, "href")} target="_blank" rel="noopener" class="mapa-link" data-astro-cid-ld6fkunx> <i class="fas fa-external-link-alt" data-astro-cid-ld6fkunx></i> Abrir en Google Maps
</a> </div> </section>`} ${renderComponent($$result2, "AdsenseWidget", $$AdsenseWidget, { "slot": "inline", "data-astro-cid-ld6fkunx": true })} ${leadMagnet && renderTemplate`${renderComponent($$result2, "LeadMagnet", $$LeadMagnet, { "leadMagnet": leadMagnet, "destinoTitle": title, "data-astro-cid-ld6fkunx": true })}`} ${faqs && faqs.length > 0 && renderTemplate`${renderComponent($$result2, "FAQ", $$FAQ, { "faqs": faqs, "destinoTitle": title, "data-astro-cid-ld6fkunx": true })}`} <!-- Tours/Experiencias Imperdibles eliminado --> <!-- ========== PLANIFICA TU VIAJE (PREMIUM) ========== --> <section class="travel-widgets-section" data-astro-cid-ld6fkunx> <div class="section-header" data-astro-cid-ld6fkunx> <h2 data-astro-cid-ld6fkunx>✈️ Planifica tu Viaje</h2> <span class="badge" data-astro-cid-ld6fkunx>Reservar</span> </div> <!-- Widgets de vuelos y hoteles --> <div class="travel-widgets" data-astro-cid-ld6fkunx> ${renderComponent($$result2, "FlightSearch", $$FlightSearch, { "defaultDestination": title, "data-astro-cid-ld6fkunx": true })} ${renderComponent($$result2, "HotelWidget", $$HotelWidget, { "defaultDestination": title, "data-astro-cid-ld6fkunx": true })} </div> <!-- CTA GRATUITO: Itinerario 3 días --> <div class="itinerario-cta free-cta" data-astro-cid-ld6fkunx> <div class="itinerario-content" data-astro-cid-ld6fkunx> <span class="cta-tag gratis" data-astro-cid-ld6fkunx>📅 GRATIS</span> <h3 data-astro-cid-ld6fkunx>Itinerario de 3 días en ${title}</h3> <p data-astro-cid-ld6fkunx>Plan básico día a día con los imprescindibles. Ideal para una primera visita rápida.</p> <ul class="cta-benefits" data-astro-cid-ld6fkunx> <li data-astro-cid-ld6fkunx><i class="fas fa-check" data-astro-cid-ld6fkunx></i> Rutas por día optimizadas</li> <li data-astro-cid-ld6fkunx><i class="fas fa-check" data-astro-cid-ld6fkunx></i> Horarios sugeridos</li> <li data-astro-cid-ld6fkunx><i class="fas fa-check" data-astro-cid-ld6fkunx></i> Descarga instantánea</li> </ul> </div> <a href="/downloads/itinerario-3-dias-{title.toLowerCase().replace(/ /g, '-')}.pdf" class="cta-btn free" data-astro-cid-ld6fkunx> <i class="fas fa-download" data-astro-cid-ld6fkunx></i> Descargar Gratis
</a> </div> <!-- CTA PREMIUM: Guía Completa --> <div class="itinerario-cta premium-cta" data-astro-cid-ld6fkunx> <div class="itinerario-content" data-astro-cid-ld6fkunx> <span class="cta-tag premium" data-astro-cid-ld6fkunx>⭐ PREMIUM</span> <h3 data-astro-cid-ld6fkunx>Guía Completa de ${title} (5-7 días)</h3> <p data-astro-cid-ld6fkunx>Todo lo que necesitas para un viaje perfecto. Contenido exclusivo de expertos locales.</p> <ul class="cta-benefits" data-astro-cid-ld6fkunx> <li data-astro-cid-ld6fkunx><i class="fas fa-star" data-astro-cid-ld6fkunx></i> Itinerarios detallados de 5 y 7 días</li> <li data-astro-cid-ld6fkunx><i class="fas fa-star" data-astro-cid-ld6fkunx></i> Mapas offline de cada barrio</li> <li data-astro-cid-ld6fkunx><i class="fas fa-star" data-astro-cid-ld6fkunx></i> Rutas secretas de locales</li> <li data-astro-cid-ld6fkunx><i class="fas fa-star" data-astro-cid-ld6fkunx></i> Restaurantes fuera del circuito turístico</li> <li data-astro-cid-ld6fkunx><i class="fas fa-star" data-astro-cid-ld6fkunx></i> Presupuesto detallado por día</li> </ul> </div> <a href="/planifica/?destino={title.toLowerCase().replace(/ /g, '-')}" class="cta-btn premium" data-astro-cid-ld6fkunx> <i class="fas fa-crown" data-astro-cid-ld6fkunx></i> Ver Guía Premium
</a> </div> ${renderComponent($$result2, "AdsenseWidget", $$AdsenseWidget, { "slot": "inline", "className": "mt-ads", "data-astro-cid-ld6fkunx": true })} </section> </main> ` })} `;
}, "/Volumes/ARANA SSD/Instante Trips/destinos_argentina/src/pages/destinos/[id].astro", void 0);

const $$file = "/Volumes/ARANA SSD/Instante Trips/destinos_argentina/src/pages/destinos/[id].astro";
const $$url = "/argentina/destinos/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
