import { d as createAstro, c as createComponent, j as renderHead, k as renderSlot, a as renderTemplate } from './astro/server_D4v9cRlD.mjs';
import 'piccolore';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro("https://www.instantetrips.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="description" content="Guía de viaje personalizada para Argentina 2026"><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover"><title>${title}</title><meta name="apple-mobile-web-app-capable" content="yes"><meta name="apple-mobile-web-app-status-bar-style" content="black-translucent"><meta name="apple-mobile-web-app-title" content="Argentina 26"><link rel="manifest" href="/argentina/manifest.json"><link rel="apple-touch-icon" href="/argentina/logo-ios.png"><link rel="icon" type="image/svg+xml" href="/argentina/logo.svg"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600;800&family=Inter:wght@300;400&family=IBM+Plex+Serif:wght@400;500;600&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} <footer class="minimal-footer"> <div class="footer-content"> <a href="/argentina/legal" class="legal-link">Legales y Privacidad</a> </div> <div class="dev-line">
Desarrollado por <a href="https://www.instantetrips.com" target="_blank">Instante Trips</a> </div> </footer> </body></html>`;
}, "/Volumes/ARANA SSD/Instante Trips/destinos_argentina/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
