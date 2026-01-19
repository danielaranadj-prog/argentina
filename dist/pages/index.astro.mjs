import { d as createAstro, c as createComponent, m as maybeRenderHead, f as renderScript, a as renderTemplate, b as addAttribute, r as renderComponent } from '../chunks/astro/server_D4v9cRlD.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BTG76i_g.mjs';
import { $ as $$Navbar } from '../chunks/Navbar_BOGPidyU.mjs';
import 'clsx';
/* empty css                                 */
import { g as getCollection } from '../chunks/_astro_content_D1rvoA4B.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$2 = createAstro("https://www.instantetrips.com");
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Hero;
  return renderTemplate`${maybeRenderHead()}<header class="hero" data-astro-cid-bbe6dxrz> <div class="video-background" id="parallax-bg" data-astro-cid-bbe6dxrz> <video autoplay muted loop playsinline class="hero-video" data-astro-cid-bbe6dxrz> <source src="/argentina/intro.mp4" type="video/mp4" data-astro-cid-bbe6dxrz> </video> <div class="overlay" data-astro-cid-bbe6dxrz></div> </div> <div class="hero-content" data-astro-cid-bbe6dxrz> <span class="welcome" data-astro-cid-bbe6dxrz>Tu próximo destino</span> <h1 class="hero-title" data-astro-cid-bbe6dxrz>ARGENTINA</h1> <p class="hero-slogan" data-astro-cid-bbe6dxrz>Del fuego del asado al hielo eterno.</p> </div> </header> ${renderScript($$result, "/Volumes/ARANA SSD/Instante Trips/destinos_argentina/src/components/Hero.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Volumes/ARANA SSD/Instante Trips/destinos_argentina/src/components/Hero.astro", void 0);

const $$Astro$1 = createAstro("https://www.instantetrips.com");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Card;
  const { title, tag, activity, img } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="card" data-astro-cid-dohjnao5> <div class="card-image" data-astro-cid-dohjnao5> <img${addAttribute(img, "src")}${addAttribute(title, "alt")} loading="lazy" data-astro-cid-dohjnao5> <span class="card-tag" data-astro-cid-dohjnao5>${tag}</span> </div> <div class="card-content" data-astro-cid-dohjnao5> <h3 class="card-title" data-astro-cid-dohjnao5>${title}</h3> <p class="card-activity" data-astro-cid-dohjnao5>${activity}</p> <div class="card-footer" data-astro-cid-dohjnao5> <span class="explore" data-astro-cid-dohjnao5>Ver detalles</span> <i class="fas fa-chevron-right" data-astro-cid-dohjnao5></i> </div> </div> </div> `;
}, "/Volumes/ARANA SSD/Instante Trips/destinos_argentina/src/components/Card.astro", void 0);

const $$Astro = createAstro("https://www.instantetrips.com");
const $$TipCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TipCard;
  const { icon, title, text } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="tip-card" data-astro-cid-6hcmsuxi> <div class="tip-icon" data-astro-cid-6hcmsuxi> <span data-astro-cid-6hcmsuxi>${icon}</span> </div> <div class="tip-info" data-astro-cid-6hcmsuxi> <h4 class="tip-title" data-astro-cid-6hcmsuxi>${title}</h4> <p class="tip-text" data-astro-cid-6hcmsuxi>${text}</p> </div> </div> `;
}, "/Volumes/ARANA SSD/Instante Trips/destinos_argentina/src/components/TipCard.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const destinosCollection = await getCollection("destinos");
  const destinos = destinosCollection.map((destino) => ({
    id: destino.slug,
    title: destino.data.title,
    tag: destino.data.secciones?.[0]?.label || "Destino",
    activity: destino.data.desc,
    img: destino.data.img
  }));
  const feriados = [
    { fecha: "01 Ene", nombre: "A\xF1o Nuevo" },
    { fecha: "May 25", nombre: "Revoluci\xF3n de Mayo" },
    { fecha: "Jul 09", nombre: "D\xEDa de la Independencia" },
    { fecha: "Dec 25", nombre: "Navidad" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Gu\xEDa Argentina", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "Hero", $$Hero, { "title": "ARGENTINA", "slogan": "Del fuego del asado al hielo eterno.", "videoSrc": "/argentina/intro.mp4", "data-astro-cid-j7pv25f6": true })} ${maybeRenderHead()}<main class="container" data-astro-cid-j7pv25f6> <!-- NUEVA SECCIÓN: SOBRE ARGENTINA --> <section id="argentina" class="mb-section argentina-intro" data-astro-cid-j7pv25f6> <div class="intro-content" data-astro-cid-j7pv25f6> <div class="intro-text" data-astro-cid-j7pv25f6> <span class="intro-badge" data-astro-cid-j7pv25f6>🇦🇷 Bienvenido</span> <h2 data-astro-cid-j7pv25f6>Descubrí <span class="highlight-gold" data-astro-cid-j7pv25f6>Argentina</span></h2> <p class="intro-lead" data-astro-cid-j7pv25f6>
El país donde el tango nació, la carne es religión y los paisajes parecen pintados. 
                        Desde los glaciares eternos de la Patagonia hasta las cataratas más imponentes del mundo, 
                        Argentina te ofrece una aventura diferente en cada rincón.
</p> </div> <div class="stats-grid" data-astro-cid-j7pv25f6> <div class="stat-item" data-astro-cid-j7pv25f6> <span class="stat-number" data-astro-cid-j7pv25f6>8°</span> <span class="stat-label" data-astro-cid-j7pv25f6>País más grande<br data-astro-cid-j7pv25f6>del mundo</span> </div> <div class="stat-item" data-astro-cid-j7pv25f6> <span class="stat-number" data-astro-cid-j7pv25f6>5</span> <span class="stat-label" data-astro-cid-j7pv25f6>Climas<br data-astro-cid-j7pv25f6>diferentes</span> </div> <div class="stat-item" data-astro-cid-j7pv25f6> <span class="stat-number" data-astro-cid-j7pv25f6>11</span> <span class="stat-label" data-astro-cid-j7pv25f6>Sitios<br data-astro-cid-j7pv25f6>UNESCO</span> </div> <div class="stat-item" data-astro-cid-j7pv25f6> <span class="stat-number" data-astro-cid-j7pv25f6>∞</span> <span class="stat-label" data-astro-cid-j7pv25f6>Pasión<br data-astro-cid-j7pv25f6>por la vida</span> </div> </div> </div> <div class="argentina-highlights" data-astro-cid-j7pv25f6> <div class="highlight-card" data-astro-cid-j7pv25f6> <div class="highlight-icon" data-astro-cid-j7pv25f6><i class="fas fa-drumstick-bite" data-astro-cid-j7pv25f6></i></div> <h4 data-astro-cid-j7pv25f6>Gastronomía</h4> <p data-astro-cid-j7pv25f6>Asado, empanadas, dulce de leche y los mejores vinos Malbec del planeta.</p> </div> <div class="highlight-card" data-astro-cid-j7pv25f6> <div class="highlight-icon" data-astro-cid-j7pv25f6><i class="fas fa-music" data-astro-cid-j7pv25f6></i></div> <h4 data-astro-cid-j7pv25f6>Cultura</h4> <p data-astro-cid-j7pv25f6>Cuna del Tango, la literatura de Borges y el fútbol como pasión nacional.</p> </div> <div class="highlight-card" data-astro-cid-j7pv25f6> <div class="highlight-icon" data-astro-cid-j7pv25f6><i class="fas fa-mountain" data-astro-cid-j7pv25f6></i></div> <h4 data-astro-cid-j7pv25f6>Naturaleza</h4> <p data-astro-cid-j7pv25f6>Glaciares, cataratas, montañas, desiertos y las pampas infinitas.</p> </div> </div> </section> <section id="destinos" class="mb-section scroll-offset" data-astro-cid-j7pv25f6> <div class="section-header" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Destinos recomendados</h2> </div> <div class="grid" data-astro-cid-j7pv25f6> ${destinos.map((d) => renderTemplate`<a${addAttribute(`/argentina/destinos/${d.id}`, "href")} class="card-link" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "Card", $$Card, { "title": d.title, "tag": d.tag, "activity": d.activity, "img": d.img, "data-astro-cid-j7pv25f6": true })} </a>`)} </div> </section> <section id="planifica" class="mb-section scroll-offset" data-astro-cid-j7pv25f6> <div class="section-header" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Planifica tu Viaje</h2> </div> <a href="/argentina/tours" class="tours-banner-link" data-astro-cid-j7pv25f6> <div class="tours-banner" data-astro-cid-j7pv25f6> <div class="banner-icon" data-astro-cid-j7pv25f6> <i class="fas fa-ticket-alt" data-astro-cid-j7pv25f6></i> </div> <div class="banner-info" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Reservar Tours y Actividades</h3> <p data-astro-cid-j7pv25f6>Busca excursiones en todas las ciudades y arma tu itinerario.</p> </div> <div class="banner-arrow" data-astro-cid-j7pv25f6> <i class="fas fa-chevron-right" data-astro-cid-j7pv25f6></i> </div> </div> </a> <div class="tips-grid" data-astro-cid-j7pv25f6> ${renderComponent($$result2, "TipCard", $$TipCard, { "icon": "\u{1F4B5}", "title": "Moneda", "text": "Usa el 'D\xF3lar Blue' para obtener el mejor cambio en efectivo.", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "TipCard", $$TipCard, { "icon": "\u{1F6C2}", "title": "Visas", "text": "Turismo libre por 90 d\xEDas para la mayor\xEDa de pa\xEDses.", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "TipCard", $$TipCard, { "icon": "\u2708\uFE0F", "title": "Transporte", "text": "Vuelos internos para distancias largas y tarjeta SUBE para ciudad.", "data-astro-cid-j7pv25f6": true })} ${renderComponent($$result2, "TipCard", $$TipCard, { "icon": "\u2600\uFE0F", "title": "Clima", "text": "Primavera (Sep-Nov) y Oto\xF1o son las mejores \xE9pocas.", "data-astro-cid-j7pv25f6": true })} </div> </section> <section id="eventos" class="mb-section scroll-offset" data-astro-cid-j7pv25f6> <div class="section-header" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Eventos y Feriados</h2> </div> <div class="event-container" data-astro-cid-j7pv25f6> <div class="event-card" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Festivales Anuales</h3> <ul class="fest-list" data-astro-cid-j7pv25f6> <li data-astro-cid-j7pv25f6><i class="fas fa-music" data-astro-cid-j7pv25f6></i> <strong data-astro-cid-j7pv25f6>Lollapalooza:</strong> Marzo (BA).</li> <li data-astro-cid-j7pv25f6><i class="fas fa-wine-glass" data-astro-cid-j7pv25f6></i> <strong data-astro-cid-j7pv25f6>Vendimia:</strong> Marzo (Mendoza).</li> <li data-astro-cid-j7pv25f6><i class="fas fa-star" data-astro-cid-j7pv25f6></i> <strong data-astro-cid-j7pv25f6>Mundial de Tango:</strong> Agosto (BA).</li> </ul> </div> <div class="event-card" data-astro-cid-j7pv25f6> <h3 data-astro-cid-j7pv25f6>Feriados Nacionales</h3> <div class="holiday-list" data-astro-cid-j7pv25f6> ${feriados.map((f) => renderTemplate`<div class="holiday-item" data-astro-cid-j7pv25f6> <span class="h-date" data-astro-cid-j7pv25f6>${f.fecha}</span> <span class="h-name" data-astro-cid-j7pv25f6>${f.nombre}</span> </div>`)} </div> </div> </div> </section> <section id="faq" class="mb-section scroll-offset" data-astro-cid-j7pv25f6> <div class="section-header" data-astro-cid-j7pv25f6> <h2 data-astro-cid-j7pv25f6>Preguntas Frecuentes</h2> </div> <div class="faq-container" data-astro-cid-j7pv25f6> <details class="faq-item" name="faq-group" data-astro-cid-j7pv25f6> <summary data-astro-cid-j7pv25f6>¿Es seguro viajar a Argentina?</summary> <p data-astro-cid-j7pv25f6>Sí, es muy acogedor. Solo tené "cuidado de ciudad grande" en Buenos Aires y evita zonas turísticas de noche sin compañía.</p> </details> <details class="faq-item" name="faq-group" data-astro-cid-j7pv25f6> <summary data-astro-cid-j7pv25f6>¿Qué moneda debo llevar?</summary> <p data-astro-cid-j7pv25f6>El efectivo es rey. Traé Dólares o Euros nuevos (sin marcas) para cambiar al valor "Blue". Las tarjetas extranjeras ahora tienen buen cambio, pero el efectivo sigue siendo útil.</p> </details> <details class="faq-item" name="faq-group" data-astro-cid-j7pv25f6> <summary data-astro-cid-j7pv25f6>¿A qué hora se cena?</summary> <p data-astro-cid-j7pv25f6>¡Tarde! Los restaurantes se llenan a las 21:30 o 22:00 hs. Ir a las 19:00 es merendar para nosotros.</p> </details> <details class="faq-item" name="faq-group" data-astro-cid-j7pv25f6> <summary data-astro-cid-j7pv25f6>¿Se deja propina?</summary> <p data-astro-cid-j7pv25f6>No es obligatoria por ley, pero se acostumbra dejar el 10% si el servicio fue bueno.</p> </details> <details class="faq-item" name="faq-group" data-astro-cid-j7pv25f6> <summary data-astro-cid-j7pv25f6>¿Necesito adaptador?</summary> <p data-astro-cid-j7pv25f6>Sí, usamos el Tipo I (patas oblicuas, como en Australia). El voltaje es 220V.</p> </details> <details class="faq-item" name="faq-group" data-astro-cid-j7pv25f6> <summary data-astro-cid-j7pv25f6>¿Cómo tengo internet?</summary> <p data-astro-cid-j7pv25f6>Lo más práctico hoy es comprar una eSIM internacional o un chip prepago de Claro/Personal/Movistar al llegar (necesitas pasaporte).</p> </details> </div> </section> </main> ` })} `;
}, "/Volumes/ARANA SSD/Instante Trips/destinos_argentina/src/pages/index.astro", void 0);

const $$file = "/Volumes/ARANA SSD/Instante Trips/destinos_argentina/src/pages/index.astro";
const $$url = "/argentina";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
