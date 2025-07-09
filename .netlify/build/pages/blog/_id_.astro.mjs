import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_Bl5g64wB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_MSurQtuQ.mjs';
import { a as app } from '../../chunks/server_1hFA-0b5.mjs';
import { getFirestore } from 'firebase-admin/firestore';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
async function getStaticPaths() {
  const db1 = getFirestore(app);
  const blogRef1 = db1.collection("blog");
  const snapshot = await blogRef1.get();
  const paths = snapshot.docs.map((doc) => ({
    params: { id: doc.id }
  }));
  return paths;
}
const $$id = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$id;
  const { id } = Astro2.params;
  if (!id) {
    return Astro2.redirect("/404");
  }
  const db = getFirestore(app);
  const blogRef = db.collection("blog");
  const postSnapshot = await blogRef.doc(id).get();
  if (!postSnapshot.exists) {
    return Astro2.redirect("/404");
  }
  const post = postSnapshot.data();
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>${post.title}</h1> <p>${post.date}</p> <p>${post.text}</p> ` })}`;
}, "/home/praktikant/my-portfolio/src/pages/blog/[id].astro", void 0);

const $$file = "/home/praktikant/my-portfolio/src/pages/blog/[id].astro";
const $$url = "/blog/[id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$id,
  file: $$file,
  getStaticPaths,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
