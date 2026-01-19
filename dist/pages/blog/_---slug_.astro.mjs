import { c as createComponent, a as renderTemplate, d as createAstro, r as renderComponent, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_D4v9cRlD.mjs';
import 'piccolore';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_D1rvoA4B.mjs';
import { $ as $$Layout } from '../../chunks/Layout_BTG76i_g.mjs';
import 'clsx';
export { renderers } from '../../renderers.mjs';

const $$SecurityAlert = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "/Volumes/ARANA SSD/Instante Trips/destinos_argentina/src/components/blog/SecurityAlert.astro", void 0);

const $$Astro = createAstro("https://www.instantetrips.com");
async function getStaticPaths() {
  const posts = await getCollection("blog");
  return posts.map((post) => ({
    params: { slug: post.slug },
    props: { post }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { post } = Astro2.props;
  const { Content } = await renderEntry(post);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${post.data.title} | Instante Trips` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="min-h-screen pb-32 font-montserrat" style="background-color: var(--bg-color);"> <header class="relative w-full h-[50vh] min-h-[400px] flex flex-col justify-end pb-16 px-6"> <div class="absolute inset-0 z-0"> <img${addAttribute(post.data.image.url, "src")}${addAttribute(post.data.image.alt, "alt")} class="w-full h-full object-cover opacity-60"> <div class="absolute inset-0 bg-gradient-to-t from-[var(--bg-color)] via-[var(--bg-color)]/80 to-transparent"></div> </div> <div class="relative z-10 max-w-3xl mx-auto w-full text-center"> <div class="flex justify-center gap-4 mb-6"> ${post.data.tags.map((tag) => renderTemplate`<span class="text-[10px] font-bold tracking-[0.2em] uppercase text-white/80 border border-white/20 px-3 py-1 rounded-full"> ${tag} </span>`)} </div> <h1 class="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight text-balance"> ${post.data.title} </h1> <div class="flex items-center justify-center gap-4 text-sm font-medium text-gray-400"> <span>Por ${post.data.author}</span> <span class="w-1 h-1 bg-gray-600 rounded-full"></span> <span>${post.data.pubDate.toLocaleDateString()}</span> </div> </div> </header> <main class="max-w-[680px] mx-auto px-6 relative z-10"> ${post.data.isSecurityAlert && renderTemplate`<div class="mb-12"> ${renderComponent($$result2, "SecurityAlert", $$SecurityAlert, { "title": "Log\xEDstica Cr\xEDtica" }, { "default": async ($$result3) => renderTemplate` <p class="text-sm">Consejos de seguridad basados en la experiencia real del equipo.</p> ` })} </div>`} <div class="prose prose-invert prose-lg max-w-none 
                  prose-p:text-gray-300 prose-p:font-light prose-p:leading-8 prose-p:text-justify prose-p:tracking-wide
                  prose-headings:font-bold prose-headings:text-white prose-headings:mt-12 prose-headings:mb-6
                  prose-strong:text-white prose-strong:font-semibold
                  prose-a:text-[var(--celeste)] prose-a:underline prose-a:underline-offset-4 hover:prose-a:text-[var(--sol)]
                  prose-ul:my-8 prose-li:my-2 prose-li:text-gray-300"> ${renderComponent($$result2, "Content", Content, {})} </div> <div class="mt-24 pt-12 border-t border-white/10 flex flex-col items-center gap-6 text-center"> <p class="text-gray-500 text-sm font-light italic">
"Viajar es la única cosa que compras que te hace más rico."
</p> <a href="/argentina/blog" class="px-8 py-3 rounded-full border border-white/20 hover:border-[var(--celeste)] text-white hover:text-[var(--celeste)] transition-all uppercase text-xs tracking-widest font-bold">
Ver más artículos
</a> </div> </main> </article> ` })}`;
}, "/Volumes/ARANA SSD/Instante Trips/destinos_argentina/src/pages/blog/[...slug].astro", void 0);

const $$file = "/Volumes/ARANA SSD/Instante Trips/destinos_argentina/src/pages/blog/[...slug].astro";
const $$url = "/argentina/blog/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
