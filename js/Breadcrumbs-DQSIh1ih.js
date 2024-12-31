import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as createAstro } from './astro/server-C38GGGvR.js';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                 */

const $$Astro = createAstro();
const $$Breadcrumbs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Breadcrumbs;
  const { title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="breadcrumbs-wrapper"> <div class="container"> <ul class="breadcrumbs"> <li> <a href="/">Home</a> </li> <li> <a>${title || "-----"}</a> </li> </ul> </div> </div>`;
}, "E:/__work/_freelance/0_imecar/src/components/Base/Breadcrumbs/Breadcrumbs.astro", void 0);

export { $$Breadcrumbs as $ };
