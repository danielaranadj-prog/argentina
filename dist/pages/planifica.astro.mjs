import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_D4v9cRlD.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BTG76i_g.mjs';
import { $ as $$Navbar } from '../chunks/Navbar_BOGPidyU.mjs';
/* empty css                                     */
export { renderers } from '../renderers.mjs';

const $$Planifica = createComponent(($$result, $$props, $$slots) => {
  const tools = [
    {
      title: "Tours y Actividades",
      desc: "Explora y reserva excursiones en todas las ciudades.",
      icon: "fa-ticket-alt",
      // CORRECCIÓN: Apuntamos a la ruta URL, no al archivo .astro
      link: "/argentina/tours",
      color: "#C5A059",
      active: true
    },
    {
      title: "Documentaci\xF3n",
      desc: "Requisitos de entrada, vacunas y seguridad.",
      icon: "fa-passport",
      link: "#",
      color: "#FF3B30",
      active: false
    },
    {
      title: "Calculadora",
      desc: "Estima cu\xE1nto vas a gastar d\xEDa por d\xEDa.",
      icon: "fa-calculator",
      link: "#",
      color: "#34C759",
      active: false
    },
    {
      title: "Rutas Sugeridas",
      desc: "Itinerarios de 10, 15 y 20 d\xEDas optimizados.",
      icon: "fa-map-marked-alt",
      link: "#",
      color: "#007AFF",
      active: false
    }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Planifica tu Viaje | Instante Trips", "data-astro-cid-rfnllnoh": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-rfnllnoh": true })} ${maybeRenderHead()}<main class="plan-container" data-astro-cid-rfnllnoh> <header class="header-minimal" data-astro-cid-rfnllnoh> <h1 data-astro-cid-rfnllnoh>Planifica tu Aventura</h1> <p data-astro-cid-rfnllnoh>Todas las herramientas para organizar tu viaje a Argentina en un solo lugar.</p> </header> <div class="tools-grid" data-astro-cid-rfnllnoh> ${tools.map((tool) => renderTemplate`<a${addAttribute(tool.link, "href")}${addAttribute(`tool-card ${!tool.active ? "disabled" : ""}`, "class")} data-astro-cid-rfnllnoh> <div class="icon-box"${addAttribute(`background-color: ${tool.color}20; color: ${tool.color}`, "style")} data-astro-cid-rfnllnoh> <i${addAttribute(`fas ${tool.icon}`, "class")} data-astro-cid-rfnllnoh></i> </div> <div class="card-text" data-astro-cid-rfnllnoh> <h3 data-astro-cid-rfnllnoh> ${tool.title} ${!tool.active && renderTemplate`<span class="coming-soon" data-astro-cid-rfnllnoh>Pronto</span>`} </h3> <p data-astro-cid-rfnllnoh>${tool.desc}</p> </div> ${tool.active && renderTemplate`<div class="arrow-icon" data-astro-cid-rfnllnoh> <i class="fas fa-chevron-right" data-astro-cid-rfnllnoh></i> </div>`} </a>`)} </div> </main> ` })} `;
}, "/Volumes/ARANA SSD/Instante Trips/destinos_argentina/src/pages/planifica.astro", void 0);

const $$file = "/Volumes/ARANA SSD/Instante Trips/destinos_argentina/src/pages/planifica.astro";
const $$url = "/argentina/planifica";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Planifica,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
