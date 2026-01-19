import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_D4v9cRlD.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BTG76i_g.mjs';
import { $ as $$Navbar } from '../chunks/Navbar_BOGPidyU.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Legal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Aviso Legal y Privacidad | Instante Trips", "data-astro-cid-vxegh2s3": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Navbar", $$Navbar, { "data-astro-cid-vxegh2s3": true })} ${maybeRenderHead()}<main class="legal-container" data-astro-cid-vxegh2s3> <div class="legal-header" data-astro-cid-vxegh2s3> <h1 data-astro-cid-vxegh2s3>Términos Legales</h1> <p class="subtitle" data-astro-cid-vxegh2s3>Transparencia y Responsabilidad</p> </div> <section class="legal-content" data-astro-cid-vxegh2s3> <article data-astro-cid-vxegh2s3> <h3 data-astro-cid-vxegh2s3>1. Exención de Responsabilidad (Disclaimer)</h3> <p data-astro-cid-vxegh2s3> <strong data-astro-cid-vxegh2s3>Instante Trips</strong> actúa exclusivamente como una plataforma informativa y de curaduría de contenido turístico. 
                    Todos los servicios sugeridos en este sitio web (incluyendo, pero no limitado a: excursiones, tours, vuelos, alojamiento, tarjetas eSIM y seguros de viaje) 
                    son operados por <strong data-astro-cid-vxegh2s3>proveedores externos e independientes</strong>.
</p> <p data-astro-cid-vxegh2s3> <strong data-astro-cid-vxegh2s3>Instante Trips no asume ninguna responsabilidad</strong> (directa ni indirecta) por el cumplimiento, calidad, seguridad, 
                    reembolsos o cancelaciones de los servicios contratados con dichos terceros. Cualquier reclamo o gestión deberá realizarse directamente con la empresa proveedora del servicio.
</p> </article> <article data-astro-cid-vxegh2s3> <h3 data-astro-cid-vxegh2s3>2. Política de Privacidad</h3> <p data-astro-cid-vxegh2s3>
Respetamos tu privacidad al máximo. Este sitio web:
</p> <ul data-astro-cid-vxegh2s3> <li data-astro-cid-vxegh2s3><strong data-astro-cid-vxegh2s3>No recopila</strong> nombres, correos electrónicos ni teléfonos.</li> <li data-astro-cid-vxegh2s3><strong data-astro-cid-vxegh2s3>No almacena</strong> datos de tarjetas de crédito.</li> <li data-astro-cid-vxegh2s3><strong data-astro-cid-vxegh2s3>No utiliza cookies</strong> de rastreo invasivo.</li> </ul> <p data-astro-cid-vxegh2s3>
Nuestra navegación es anónima. Los enlaces a terceros (como aerolíneas o agencias de tours) pueden tener sus propias políticas de privacidad que sugerimos leer al salir de nuestro sitio.
</p> </article> <article data-astro-cid-vxegh2s3> <h3 data-astro-cid-vxegh2s3>3. Uso de la Información</h3> <p data-astro-cid-vxegh2s3>
La información de precios, horarios y requisitos migratorios puede cambiar sin previo aviso. Recomendamos verificar siempre la información oficial antes de viajar. El usuario reconoce que utiliza esta guía bajo su propia responsabilidad.
</p> </article> <div class="back-btn-container" data-astro-cid-vxegh2s3> <a href="/" class="btn-back" data-astro-cid-vxegh2s3> <i class="fas fa-arrow-left" data-astro-cid-vxegh2s3></i> Volver al Inicio
</a> </div> </section> </main> ` })} `;
}, "/Volumes/ARANA SSD/Instante Trips/destinos_argentina/src/pages/legal.astro", void 0);

const $$file = "/Volumes/ARANA SSD/Instante Trips/destinos_argentina/src/pages/legal.astro";
const $$url = "/argentina/legal";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Legal,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
