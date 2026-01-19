import { c as createComponent, r as renderComponent, f as renderScript, a as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_D4v9cRlD.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BTG76i_g.mjs';
import { $ as $$Navbar } from '../chunks/Navbar_BOGPidyU.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Tours = createComponent(($$result, $$props, $$slots) => {
  const allTours = [
    // BUENOS AIRES
    { id: 1, ciudad: "buenos-aires", titulo: "Tour de Tango & Cena Show", precio: "US$ 80", duracion: "4 horas", imagen: "https://images.unsplash.com/photo-1543167822-04c9955767f4?auto=format&fit=crop&w=600&q=80", link: "#" },
    { id: 2, ciudad: "buenos-aires", titulo: "Navegaci\xF3n Delta del Tigre", precio: "US$ 45", duracion: "Medio d\xEDa", imagen: "https://images.unsplash.com/photo-1534234828563-0aa7cbed99b9?auto=format&fit=crop&w=600&q=80", link: "#" },
    { id: 3, ciudad: "buenos-aires", titulo: "Experiencia Boca Juniors", precio: "US$ 50", duracion: "3 horas", imagen: "https://images.unsplash.com/photo-1626025437642-0b05076ca301?auto=format&fit=crop&w=600&q=80", link: "#" },
    // CALAFATE
    { id: 4, ciudad: "el-calafate", titulo: "Minitrekking Perito Moreno", precio: "US$ 250", duracion: "D\xEDa completo", imagen: "https://images.unsplash.com/photo-1518182170546-0766ce6fec56?auto=format&fit=crop&w=600&q=80", link: "#" },
    { id: 5, ciudad: "el-calafate", titulo: "Navegaci\xF3n Todo Glaciares", precio: "US$ 180", duracion: "D\xEDa completo", imagen: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=600&q=80", link: "#" },
    { id: 6, ciudad: "el-calafate", titulo: "Estancia Cristina 4x4", precio: "US$ 150", duracion: "D\xEDa completo", imagen: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=600&q=80", link: "#" },
    // CHALTEN
    { id: 7, ciudad: "el-chalten", titulo: "Trekking Guiado Fitz Roy", precio: "US$ 90", duracion: "10 horas", imagen: "https://images.unsplash.com/photo-1589553416260-f586c8f1514f?auto=format&fit=crop&w=600&q=80", link: "#" },
    { id: 8, ciudad: "el-chalten", titulo: "Rafting R\xEDo de las Vueltas", precio: "US$ 60", duracion: "4 horas", imagen: "https://images.unsplash.com/photo-1530866495561-507c9faab2ed?auto=format&fit=crop&w=600&q=80", link: "#" },
    // IGUAZU
    { id: 9, ciudad: "iguazu", titulo: "Gran Aventura (Gom\xF3n)", precio: "US$ 70", duracion: "2 horas", imagen: "https://images.unsplash.com/photo-1582234032483-29479b18752c?auto=format&fit=crop&w=600&q=80", link: "#" },
    { id: 10, ciudad: "iguazu", titulo: "Tour Lado Brasile\xF1o", precio: "US$ 45", duracion: "Medio d\xEDa", imagen: "https://images.unsplash.com/photo-1534069873406-80512803b9b0?auto=format&fit=crop&w=600&q=80", link: "#" },
    // MENDOZA
    { id: 11, ciudad: "mendoza", titulo: "Tour Bodegas Luj\xE1n", precio: "US$ 110", duracion: "D\xEDa completo", imagen: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&w=600&q=80", link: "#" },
    { id: 12, ciudad: "mendoza", titulo: "Alta Monta\xF1a", precio: "US$ 65", duracion: "D\xEDa completo", imagen: "https://images.unsplash.com/photo-1621257492476-c4d370150993?auto=format&fit=crop&w=600&q=80", link: "#" },
    // USHUAIA
    { id: 13, ciudad: "ushuaia", titulo: "Navegaci\xF3n Canal Beagle", precio: "US$ 70", duracion: "3 horas", imagen: "https://images.unsplash.com/photo-1548291673-30541797c552?auto=format&fit=crop&w=600&q=80", link: "#" },
    { id: 14, ciudad: "ushuaia", titulo: "Trekking Laguna Esmeralda", precio: "US$ 80", duracion: "6 horas", imagen: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=600&q=80", link: "#" }
  ];
  const filters = [
    { id: "all", label: "Todos" },
    { id: "buenos-aires", label: "Buenos Aires" },
    { id: "el-calafate", label: "Calafate" },
    { id: "el-chalten", label: "Chalt\xE9n" },
    { id: "iguazu", label: "Iguaz\xFA" },
    { id: "mendoza", label: "Mendoza" },
    { id: "ushuaia", label: "Ushuaia" }
  ];
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tours y Actividades | Instante Trips", "data-astro-cid-4s3tfqtf": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-4s3tfqtf": true })} ${maybeRenderHead()}<main class="page-container" data-astro-cid-4s3tfqtf> <header class="page-header" data-astro-cid-4s3tfqtf> <h1 data-astro-cid-4s3tfqtf>Explora Argentina</h1> <p data-astro-cid-4s3tfqtf>Las mejores experiencias seleccionadas para vos.</p> </header> <div class="filters-wrapper" data-astro-cid-4s3tfqtf> <div class="filters-scroll" data-astro-cid-4s3tfqtf> ${filters.map((f, index) => renderTemplate`<button${addAttribute(`filter-btn ${index === 0 ? "active" : ""}`, "class")}${addAttribute(f.id, "data-filter")} data-astro-cid-4s3tfqtf> ${f.label} </button>`)} </div> </div> <div class="tours-grid" id="tours-container" data-astro-cid-4s3tfqtf> ${allTours.map((tour) => renderTemplate`<a${addAttribute(tour.link, "href")} target="_blank" class="tour-card"${addAttribute(tour.ciudad, "data-city")} data-astro-cid-4s3tfqtf> <div class="card-image"${addAttribute(`background-image: url('${tour.imagen}')`, "style")} data-astro-cid-4s3tfqtf> <div class="tag-overlay" data-astro-cid-4s3tfqtf> <span class="duration" data-astro-cid-4s3tfqtf><i class="far fa-clock" data-astro-cid-4s3tfqtf></i> ${tour.duracion}</span> </div> </div> <div class="card-content" data-astro-cid-4s3tfqtf> <span class="city-label" data-astro-cid-4s3tfqtf>${tour.ciudad.replace("-", " ")}</span> <h3 data-astro-cid-4s3tfqtf>${tour.titulo}</h3> <div class="card-bottom" data-astro-cid-4s3tfqtf> <span class="price" data-astro-cid-4s3tfqtf>${tour.precio}</span> <span class="btn-arrow" data-astro-cid-4s3tfqtf><i class="fas fa-chevron-right" data-astro-cid-4s3tfqtf></i></span> </div> </div> </a>`)} </div> <div id="no-results" class="hidden" data-astro-cid-4s3tfqtf> <p data-astro-cid-4s3tfqtf>No hay actividades disponibles en esta categoría por el momento.</p> </div> </main> ` })} ${renderScript($$result, "/Volumes/ARANA SSD/Instante Trips/destinos_argentina/src/pages/tours.astro?astro&type=script&index=0&lang.ts")} `;
}, "/Volumes/ARANA SSD/Instante Trips/destinos_argentina/src/pages/tours.astro", void 0);

const $$file = "/Volumes/ARANA SSD/Instante Trips/destinos_argentina/src/pages/tours.astro";
const $$url = "/argentina/tours";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Tours,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
