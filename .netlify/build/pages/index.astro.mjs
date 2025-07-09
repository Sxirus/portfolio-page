import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bl5g64wB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_MSurQtuQ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GlassHeader", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/GlassHeader", "client:component-export": "default" })} ${maybeRenderHead()}<main class="min-h-screen"> ${renderComponent($$result2, "HeroSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/HeroSection", "client:component-export": "default" })} ${renderComponent($$result2, "ExperienceSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/ExperienceSection", "client:component-export": "default" })} ${renderComponent($$result2, "SkillsSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/SkillsSection", "client:component-export": "default" })} ${renderComponent($$result2, "ProjectsSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/ProjectsSection", "client:component-export": "default" })} ${renderComponent($$result2, "EducationSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/EducationSection", "client:component-export": "default" })} ${renderComponent($$result2, "BlogSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/BlogSection.astro", "client:component-export": "default" })} </main> ${renderComponent($$result2, "Footer", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/Footer", "client:component-export": "default" })} ` })}`;
}, "/home/praktikant/my-portfolio/src/pages/index.astro", void 0);

const $$file = "/home/praktikant/my-portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
