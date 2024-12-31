import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderScript, a as renderComponent, e as createAstro, d as addAttribute, f as renderHead, g as renderSlot } from './astro/server-C38GGGvR.js';
import 'kleur/colors';
import 'html-escaper';
/* empty css               */
import 'clsx';

const $$CartBtn = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button class="cart-btn"> <span class="sr-only">Cart</span> <span class="cart-btn__counter" data-cart-counter="0">0</span> </button> ${renderScript($$result, "E:/__work/_freelance/0_imecar/src/components/Base/Cart/CartBtn.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/__work/_freelance/0_imecar/src/components/Base/Cart/CartBtn.astro", void 0);

const $$Cart = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="cart-wrapper"> ${renderComponent($$result, "CartBtn", $$CartBtn, {})} <section class="cart"> <div class="cart__inner"> <div class="cart-head"> <h2 class="cart-head__title">Cart(<span data-cart-counter="0">0</span>)</h2> <button class="cart-head__close" data-cart-close type="button"> <div class="sr-only">Close cart</div> </button> </div> <div class="cart-body"> <ul class="cart-body__list"></ul> </div> <div class="cart-footer"> <div class="cart-subtotal"> <h3 class="cart-subtotal__title">Subtotal</h3> <div class="cart-subtotal__sum">$<span class="cart-subtotal__sum-value" data-cart-total="0">0</span> </div> </div> <div class="cart-actions"> <a href="/checkout" class="btn cart-actions__place-order">Place an order</a> <button class="btn cart-actions__close" data-cart-close>Continue shopping</button> </div> </div> </div> <div class="cart__inner empty"> <div class="cart-head"> <h2 class="cart-head__title">Cart(<span data-cart-counter="0">0</span>)</h2> <button class="cart-head__close" data-cart-close type="button"> <div class="sr-only">Close cart</div> </button> </div> <div class="cart-empty-text">Your cart is empty</div> </div> </section> </div>`;
}, "E:/__work/_freelance/0_imecar/src/components/Base/Cart/Cart.astro", void 0);

const $$Astro$6 = createAstro();
const $$Actions = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Actions;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="actions">  ${renderComponent($$result, "Cart", $$Cart, {})} </div>`;
}, "E:/__work/_freelance/0_imecar/src/components/Base/Actions/Actions.astro", void 0);

const $$Burger = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<button class="burger"> <span class="burger-line"></span> </button> ${renderScript($$result, "E:/__work/_freelance/0_imecar/src/components/Base/Burger/Burger.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/__work/_freelance/0_imecar/src/components/Base/Burger/Burger.astro", void 0);

const $$Astro$5 = createAstro();
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Logo;
  Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a href="/"${addAttribute(`logo`, "class")}> <img class="logo-img"${addAttribute(`./images/logo.svg`, "src")} alt="logotype" width="214" height="54"> </a>`;
}, "E:/__work/_freelance/0_imecar/src/components/Base/Logo/Logo.astro", void 0);

const $$Astro$4 = createAstro();
const $$Menu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Menu;
  const { class: className } = Astro2.props;
  const menuItems = [
    { title: "Batteries", href: "/#batteries" },
    { title: "About us", href: "/about" },
    { title: "Contacts", href: "/contacts" }
  ];
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(`menu ${className}`, "class")}> ${menuItems.map(({ title, href }) => {
    const isActive = title === "Documentation" ? Astro2.url.pathname.startsWith("/documentation") : Astro2.url.pathname.startsWith(href);
    return renderTemplate`<li class="menu-item"> <a${addAttribute(`menu-link ${isActive ? "current" : ""}`, "class")}${addAttribute(href, "href")}> ${title} </a> </li>`;
  })} </ul>`;
}, "E:/__work/_freelance/0_imecar/src/components/Base/Menu/Menu.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="header"> <div class="container"> <div class="header-container"> <nav class="header-nav"> ${renderComponent($$result, "Logo", $$Logo, { "class": "header-logo" })} ${renderComponent($$result, "Burger", $$Burger, {})} ${renderComponent($$result, "Menu", $$Menu, { "class": "header-menu" })} ${renderComponent($$result, "Actions", $$Actions, { "class": "header-actions" })} </nav> </div> </div> </header> ${renderScript($$result, "E:/__work/_freelance/0_imecar/src/components/Base/Header/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/__work/_freelance/0_imecar/src/components/Base/Header/Header.astro", void 0);

const $$Astro$3 = createAstro();
const $$CompanyEmail = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CompanyEmail;
  return renderTemplate`${maybeRenderHead()}<a href="mailto:usa@imecar.com"${addAttribute(Astro2.props.class, "class")}>usa@imecar.com</a>`;
}, "E:/__work/_freelance/0_imecar/src/components/ContactsData/CompanyEmail.astro", void 0);

const $$CompanyName = createComponent(($$result, $$props, $$slots) => {
  const cName = "Imecar LLC";
  return renderTemplate`${cName}`;
}, "E:/__work/_freelance/0_imecar/src/components/ContactsData/CompanyName.astro", void 0);

const $$Astro$2 = createAstro();
const $$PhoneNumber = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PhoneNumber;
  return renderTemplate`${maybeRenderHead()}<a href="tel:17865753530"${addAttribute(Astro2.props.class, "class")}>+1 (786) 575-3530</a>`;
}, "E:/__work/_freelance/0_imecar/src/components/ContactsData/PhoneNumber.astro", void 0);

const $$Payment = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<ul class="footer__payment-list"> <li class="footer__payment-item"> <img src="/images/icons/icon-paypal.svg" alt="Paypal payment logo" width="40" height="40" loading="lazy"> </li> <li class="footer__payment-item"> <img src="/images/icons/icon-visa.svg" alt="Visa payment logo" width="40" height="40" loading="lazy"> </li> <li class="footer__payment-item"> <img src="/images/icons/icon-mc.svg" alt="MasterCard payment logo" width="40" height="40" loading="lazy"> </li> <li class="footer__payment-item"> <img src="/images/icons/icon-stripe.svg" alt="Stripe payment logo" width="40" height="40" loading="lazy"> </li> </ul>`;
}, "E:/__work/_freelance/0_imecar/src/components/Base/Payment/Payment.astro", void 0);

const $$Astro$1 = createAstro();
const $$Social = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Social;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(`social ${className}`, "class")}> <li> <a class="social-link fb" href="https://www.facebook.com/profile.php?id=100063638660638&locale=tr_TR" target="_blank"> <span class="sr-only">Go to our Facebook page</span> </a> </li> <li> <a class="social-link instagram" href="https://www.instagram.com/imecar/" target="_blank"> <span class="sr-only">Go to our Instagram page</span> </a> </li> <li> <a class="social-link twitter" href="https://twitter.com/ImecarElektron1" target="_blank"> <span class="sr-only">Go to our Twitter(X) page</span> </a> </li> <li> <a class="social-link youtube" href="https://www.youtube.com/c/ImecarElektronik" target="_blank"> <span class="sr-only">Go to our YouTube channel</span> </a> </li> </ul>`;
}, "E:/__work/_freelance/0_imecar/src/components/Base/Social/Social.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer"> <section> <h2 class="sr-only">Contact information</h2> <div class="container"> <div class="footer__top"> ${renderComponent($$result, "Logo", $$Logo, {})} <nav class="footer__section footer__section--menu"> <h3 class="footer__title">Menu</h3> <ul class="footer__list"> <li class="footer__item"> <a href="/batteries" class="footer__link">Batteries</a> </li> <li class="footer__item"> <a href="/about" class="footer__link">About us</a> </li> <li class="footer__item"> <a href="/contacts" class="footer__link">Contacts</a> </li> </ul> </nav> <div class="footer__section footer__section--contact"> <h3 class="footer__title">Contact us</h3> <address class="footer__contact-info footer__list"> <p class="footer__text"> ${renderComponent($$result, "CompanyName", $$CompanyName, {})} </p> ${renderComponent($$result, "PhoneNumber", $$PhoneNumber, { "class": "footer__link" })} ${renderComponent($$result, "CompanyEmail", $$CompanyEmail, { "class": "footer__link" })} </address> </div> <div class="footer__section footer__section--social"> <h3 class="footer__title">Follow us</h3> ${renderComponent($$result, "Social", $$Social, {})} <div class="footer__section footer__section--payment show-xl"> <h3 class="footer__title">Payment methods</h3> ${renderComponent($$result, "Payment", $$Payment, {})} </div> </div> <div class="footer__section footer__section--payment hide-xl"> <h3 class="footer__title">Payment methods</h3> ${renderComponent($$result, "Payment", $$Payment, {})} </div> </div> <div class="footer__hr"><div class="line"></div></div> <div class="footer__bottom"> <p class="footer__copyright">Imecar Electronics © 2024.</p> <p class="footer__rights">All Rights Reserved.</p> </div> </div> </section> </footer>`;
}, "E:/__work/_freelance/0_imecar/src/components/Base/Footer/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description, className } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content=""><meta name="viewport" content="width=device-width"><link rel="icon" href="/favicon.ico" sizes="32x32"><link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><!-- <link rel="stylesheet" href="./../main.scss"> --><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&family=Syne:wght@400..800&display=swap" rel="stylesheet"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"><title>Imecar | ${title}</title>${renderScript($$result, "E:/__work/_freelance/0_imecar/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}${renderHead()}</head> <body${addAttribute(className, "class")}> <div class="main-content"> <div class="main-wrapper"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </div> </div> ${renderScript($$result, "E:/__work/_freelance/0_imecar/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts")}</body></html>`;
}, "E:/__work/_freelance/0_imecar/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$CompanyEmail as a, $$PhoneNumber as b };
