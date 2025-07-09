import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Bl5g64wB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_MSurQtuQ.mjs';
export { renderers } from '../renderers.mjs';

const $$Add = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<form method="post" action="/api/blog"> <label for="title">Title</label> <input type="text" id="title" name="title"> <label for="text">Text</label> <input type="text" id="text" name="text"> <label for="text">Date</label> <input type="text" id="date" name="date"> <label for="text">Tags</label> <input type="text" id="tags" name="tags"> <button type="submit">add</button> </form> ` })}`;
}, "/home/praktikant/my-portfolio/src/pages/add.astro", void 0);

const $$file = "/home/praktikant/my-portfolio/src/pages/add.astro";
const $$url = "/add";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Add,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
