import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, h as addAttribute } from '../chunks/astro/server_Bl5g64wB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_MSurQtuQ.mjs';
import { a as app } from '../chunks/server_1hFA-0b5.mjs';
import { getFirestore } from 'firebase-admin/firestore';
import { motion } from 'framer-motion';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$BlogSectionPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BlogSectionPost;
  const { id, title, date, tags } = Astro2.props;
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const postCategoryVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  console.log(id);
  return renderTemplate`${renderComponent($$result, "motion.div", null, { "client:only": "react", "className": "space-y-6", "variants": containerVariants, "initial": "hidden", "whileInView": "visible", "viewport": {
    once: true,
    margin: "-50px"
  }, "client:component-hydration": "only", "client:component-path": "framer-motion", "client:component-export": "motion.div" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "motion.div", motion.div, { "variants": postCategoryVariants }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<a${addAttribute(`./blog/${id}`, "href")}> ${renderComponent($$result3, "GlassCard", null, { "client:only": "react", "className": "p-4", "client:component-hydration": "only", "client:component-path": "/home/praktikant/my-portfolio/src/components/ui/glass-card", "client:component-export": "GlassCard" }, { "default": ($$result4) => renderTemplate` <h3 class="text-lg font-medium mb-3 text-center md:text-left flex items-center"> ${title} </h3> <div class="flex flex-wrap gap-2 justify-center md:justify-start"> <!-- {tags.map((tag => (
                    ))} --> </div> ` })} </a> ` })} ` })}`;
}, "/home/praktikant/my-portfolio/src/components/BlogSectionPost.astro", void 0);

const $$BlogSection = createComponent(async ($$result, $$props, $$slots) => {
  const db = getFirestore(app);
  const blogRef = db.collection("blog");
  const blogSnapshot = await blogRef.get();
  const posts = blogSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data()
  }));
  console.log(posts[0].id);
  return renderTemplate`${maybeRenderHead()}<section id="blog" class="py-12 bg-gradient-to-b from-background to-muted/20"> <div class="container max-w-4xl mx-auto px-6 md:px-4"> ${renderComponent($$result, "MotionWrapper", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/home/praktikant/my-portfolio/src/components/MotionWrapper", "client:component-export": "default" }, { "default": async ($$result2) => renderTemplate` <h2 class="text-2xl font-bold mb-8 text-center md:text-left">
📖 Blog
</h2> ` })} <ul> ${posts.map((post) => renderTemplate`<li>${renderComponent($$result, "BlogSectionPost", $$BlogSectionPost, { "title": post.title, "id": post.id, "date": post.date, "tags": post.tags })}</li>`)} </ul> </div> </section>`;
}, "/home/praktikant/my-portfolio/src/components/BlogSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "GlassHeader", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/GlassHeader", "client:component-export": "default" })} ${maybeRenderHead()}<main class="min-h-screen"> ${renderComponent($$result2, "HeroSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/HeroSection", "client:component-export": "default" })} ${renderComponent($$result2, "ExperienceSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/ExperienceSection", "client:component-export": "default" })} ${renderComponent($$result2, "SkillsSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/SkillsSection", "client:component-export": "default" })} ${renderComponent($$result2, "ProjectsSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/ProjectsSection", "client:component-export": "default" })} ${renderComponent($$result2, "EducationSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/EducationSection", "client:component-export": "default" })} ${renderComponent($$result2, "BlogSection", $$BlogSection, {})} </main> ${renderComponent($$result2, "Footer", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "@/components/Footer", "client:component-export": "default" })} ` })}`;
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
