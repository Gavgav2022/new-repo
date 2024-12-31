import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderScript, e as createAstro, a as renderComponent } from './astro/server-C38GGGvR.js';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
/* empty css                             */

const $$Astro$4 = createAstro();
const $$ProductCommon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$ProductCommon;
  const { productData } = Astro2.props;
  const {
    id,
    model,
    price,
    nominalVoltage,
    capacity,
    batteryPackEnergy,
    batteryLife,
    length,
    width,
    height,
    weight,
    bluetooth,
    warranty,
    description,
    mainImgName,
    paymentPageLink,
    paymentPage
  } = productData;
  return renderTemplate`${maybeRenderHead()}<div class="product-info" data-type="product"${addAttribute(id, "data-id")}${addAttribute(`./images/${mainImgName}.webp`, "data-img")}${addAttribute(model, "data-name")}${addAttribute(price, "data-price")} data-quantity="1"> <h1 class="title-h2 product-info__title">${`${model}, ${nominalVoltage}`}</h1> <div class="product-info__warranty">${warranty} Warranty</div> <div class="product-info__description"> <p> ${description} </p> </div> <div class="product-info__price">$${price}</div> <div class="product-info__actions">  <a${addAttribute(paymentPage, "href")} class="btn cart-controls__add"${addAttribute(paymentPageLink, "data-payment-link")}${addAttribute(id, "data-id")}>Buy now</a> </div> </div> ${renderScript($$result, "E:/__work/_freelance/0_imecar/src/components/ProductPage/ProductCommon/ProductCommon.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/__work/_freelance/0_imecar/src/components/ProductPage/ProductCommon/ProductCommon.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw) }));
var _a;
const $$Astro$3 = createAstro();
const $$ProductSlider = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProductSlider;
  const { imageName, badge } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["", `<div class="product-sliders">  <div thumbsSlider class="swiper main-slider"> <!-- <div class='product-label'>{badge}</div> --> `, ' <div class="swiper-wrapper"> <div class="swiper-slide"> <div class="swiper-zoom-container" data-swiper-zoom="3"> <picture> <img', ` alt="product-image"> </picture> </div> </div>  </div> <div class="swiper-pagination"></div> </div> </div> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"> <script type="module">
  import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

  function swiperInit() {
   /* const swiper = new Swiper('.thumbs-slider', {
      spaceBetween: 20,
      slidesPerView: 4,
      freeMode: true,
      direction: 'horizontal',
      breakpoints: {
        1200: {
          direction: 'vertical',
        },
      },
    });*/
    const swiper2 = new Swiper('.main-slider', {
      zoom: true,
      spaceBetween: 10,
      // thumbs: {
      //   swiper: swiper,
      // },
      breakpoints: {
        320: {
          pagination: {
            el: ".swiper-pagination",
          },
        },
        600: {
          pagination: false
        }
      }
    });


    // \u041E\u0442\u0440\u0438\u043C\u0443\u0454\u043C\u043E \u0432\u0441\u0456 \u0441\u043B\u0430\u0439\u0434\u0438
const slides = document.querySelectorAll('.main-slider .swiper-slide');


// \u0414\u043E\u0434\u0430\u0454\u043C\u043E \u043E\u0431\u0440\u043E\u0431\u043D\u0438\u043A\u0438 \u043F\u043E\u0434\u0456\u0439 \u043D\u0430 \u043A\u043E\u0436\u0435\u043D \u0441\u043B\u0430\u0439\u0434
slides.forEach((slide) => {
  const zoomContainer = slide.querySelector('.swiper-zoom-container');
  slide.addEventListener('mouseover', () => {
    // \u0412\u043C\u0438\u043A\u0430\u0454\u043C\u043E \u0437\u0443\u043C
    swiper2.zoom.in(2);
  });

  slide.addEventListener('mousemove', (e) => {
    // \u041E\u0431\u0447\u0438\u0441\u043B\u044E\u0454\u043C\u043E \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F \u043C\u0438\u0448\u0456 \u0432\u0456\u0434\u043D\u043E\u0441\u043D\u043E \u0441\u043B\u0430\u0439\u0434\u0430
    const rect = zoomContainer.getBoundingClientRect();
    const offsetX = ((e.clientX - rect.left) / rect.width) * 100;
    const offsetY = ((e.clientY - rect.top) / rect.height) * 100;

    // \u041F\u0435\u0440\u0435\u043C\u0456\u0449\u0443\u0454\u043C\u043E \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F
    const image = zoomContainer.querySelector('img');
    image.style.transformOrigin = \`\${offsetX}% \${offsetY}%\`;
  });

  slide.addEventListener('mouseout', () => {
    // \u0412\u0438\u043C\u0438\u043A\u0430\u0454\u043C\u043E \u0437\u0443\u043C
    swiper2.zoom.out(1);
  });
});
  }

  swiperInit();
  document.addEventListener('astro:after-swap', swiperInit);
<\/script>`], ["", `<div class="product-sliders">  <div thumbsSlider class="swiper main-slider"> <!-- <div class='product-label'>{badge}</div> --> `, ' <div class="swiper-wrapper"> <div class="swiper-slide"> <div class="swiper-zoom-container" data-swiper-zoom="3"> <picture> <img', ` alt="product-image"> </picture> </div> </div>  </div> <div class="swiper-pagination"></div> </div> </div> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"> <script type="module">
  import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

  function swiperInit() {
   /* const swiper = new Swiper('.thumbs-slider', {
      spaceBetween: 20,
      slidesPerView: 4,
      freeMode: true,
      direction: 'horizontal',
      breakpoints: {
        1200: {
          direction: 'vertical',
        },
      },
    });*/
    const swiper2 = new Swiper('.main-slider', {
      zoom: true,
      spaceBetween: 10,
      // thumbs: {
      //   swiper: swiper,
      // },
      breakpoints: {
        320: {
          pagination: {
            el: ".swiper-pagination",
          },
        },
        600: {
          pagination: false
        }
      }
    });


    // \u041E\u0442\u0440\u0438\u043C\u0443\u0454\u043C\u043E \u0432\u0441\u0456 \u0441\u043B\u0430\u0439\u0434\u0438
const slides = document.querySelectorAll('.main-slider .swiper-slide');


// \u0414\u043E\u0434\u0430\u0454\u043C\u043E \u043E\u0431\u0440\u043E\u0431\u043D\u0438\u043A\u0438 \u043F\u043E\u0434\u0456\u0439 \u043D\u0430 \u043A\u043E\u0436\u0435\u043D \u0441\u043B\u0430\u0439\u0434
slides.forEach((slide) => {
  const zoomContainer = slide.querySelector('.swiper-zoom-container');
  slide.addEventListener('mouseover', () => {
    // \u0412\u043C\u0438\u043A\u0430\u0454\u043C\u043E \u0437\u0443\u043C
    swiper2.zoom.in(2);
  });

  slide.addEventListener('mousemove', (e) => {
    // \u041E\u0431\u0447\u0438\u0441\u043B\u044E\u0454\u043C\u043E \u043F\u043E\u043B\u043E\u0436\u0435\u043D\u043D\u044F \u043C\u0438\u0448\u0456 \u0432\u0456\u0434\u043D\u043E\u0441\u043D\u043E \u0441\u043B\u0430\u0439\u0434\u0430
    const rect = zoomContainer.getBoundingClientRect();
    const offsetX = ((e.clientX - rect.left) / rect.width) * 100;
    const offsetY = ((e.clientY - rect.top) / rect.height) * 100;

    // \u041F\u0435\u0440\u0435\u043C\u0456\u0449\u0443\u0454\u043C\u043E \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F
    const image = zoomContainer.querySelector('img');
    image.style.transformOrigin = \\\`\\\${offsetX}% \\\${offsetY}%\\\`;
  });

  slide.addEventListener('mouseout', () => {
    // \u0412\u0438\u043C\u0438\u043A\u0430\u0454\u043C\u043E \u0437\u0443\u043C
    swiper2.zoom.out(1);
  });
});
  }

  swiperInit();
  document.addEventListener('astro:after-swap', swiperInit);
<\/script>`])), maybeRenderHead(), badge && renderTemplate`<div class="product-label">${badge}</div>`, addAttribute(`./images/${imageName}.webp`, "src"));
}, "E:/__work/_freelance/0_imecar/src/components/ProductPage/ProductSlider/ProductSlider.astro", void 0);

const $$Astro$2 = createAstro();
const $$ProductTabs = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$ProductTabs;
  const { productData } = Astro2.props;
  const {
    id,
    model,
    price,
    nominalVoltage,
    capacity,
    batteryPackEnergy,
    batteryLife,
    length,
    width,
    height,
    weight,
    bluetooth,
    cell,
    bodyMaterial,
    warranty,
    description,
    mainImgName,
    paymentPageLink,
    paymentPage
  } = productData;
  return renderTemplate`${maybeRenderHead()}<div class="product-tabs"> <div class="container"> <div class="product-tabs__nav"> <button class="product-tabs__btn product-tabs__btn--active" type="button" data-tab="description">Description</button> <button class="product-tabs__btn" type="button" data-tab="specifications">Specifications</button> </div> <div class="product-tabs__content  product-tabs__content--active" data-tab="description"> <div class="product-tabs__inner"> <div class="product-tabs__info"> <div class="product-tabs__description"> <p> ${description} </p> </div> <div class="system-features"> <h2 class="system-features__title title-h3">System features</h2> <ul class="system-features__list"> <li class="system-features__item">
Industrial, ground service and special vehicle applications
</li> <li class="system-features__item">
Freely scalable and robust structure
</li> <li class="system-features__item">
Common CJB (Pack Junction Box) for all products
</li> <li class="system-features__item">
Optional liquid cooling system
</li> </ul> </div> <div class="applications"> <h2 class="applications__title title-h3">Supported applications</h2> <ul class="applications__grid"> <li class="applications__item"> <img src="/images/tab-ship.svg" alt="Ship" class="applications__icon" loading="lazy" width="176" height="100"> </li> <li class="applications__item"> <img src="/images/tab-van.svg" alt="Van" class="applications__icon" loading="lazy" width="176" height="100"> </li> <li class="applications__item"> <img src="/images/tab-car.svg" alt="Car" class="applications__icon" loading="lazy" width="176" height="100"> </li> <li class="applications__item"> <img src="/images/tab-vehicle.svg" alt="Vehicle" class="applications__icon" loading="lazy" width="176" height="100"> </li> </ul> </div> </div> <picture class="product-tabs__picture"> <img src="/images/tab_photo_2.webp" alt="" width="574" height="473" loading="lazy"> </picture> </div> </div> <div class="product-tabs__content" data-tab="specifications"> <div class="product-tabs__inner"> <table class="specs-table"> <tr class="specs-table__row"> <td class="specs-table__cell specs-table__label">Cell</td> <td class="specs-table__cell">${cell}</td> </tr> <tr class="specs-table__row"> <td class="specs-table__cell specs-table__label">Nominal Voltage</td> <td class="specs-table__cell">${nominalVoltage}</td> </tr> <tr class="specs-table__row"> <td class="specs-table__cell specs-table__label">Capacity</td> <td class="specs-table__cell">${capacity}</td> </tr> <tr class="specs-table__row"> <td class="specs-table__cell specs-table__label">Battery Pack Energy</td> <td class="specs-table__cell">${batteryPackEnergy}</td> </tr> <tr class="specs-table__row"> <td class="specs-table__cell specs-table__label">Body Material</td> <td class="specs-table__cell">${bodyMaterial}</td> </tr> <tr class="specs-table__row"> <td class="specs-table__cell specs-table__label">Length</td> <td class="specs-table__cell">${length}</td> </tr> <tr class="specs-table__row"> <td class="specs-table__cell specs-table__label">Width</td> <td class="specs-table__cell">${width}</td> </tr> <tr class="specs-table__row"> <td class="specs-table__cell specs-table__label">Height</td> <td class="specs-table__cell">${height}</td> </tr> <tr class="specs-table__row"> <td class="specs-table__cell specs-table__label">Weight</td> <td class="specs-table__cell">${weight}</td> </tr> </table> <picture class="product-tabs__picture"> <img src="/images/tab_photo_1.webp" alt="" width="574" height="473" loading="lazy"> </picture> </div> </div> </div> </div> ${renderScript($$result, "E:/__work/_freelance/0_imecar/src/components/ProductPage/ProductTabs/ProductTabs.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/__work/_freelance/0_imecar/src/components/ProductPage/ProductTabs/ProductTabs.astro", void 0);

const $$Astro$1 = createAstro();
const $$ProductAll = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ProductAll;
  const { productData } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="product-page-head"> <div class="container product-page-head__inner"> ${renderComponent($$result, "ProductSlider", $$ProductSlider, { "imageName": productData.mainImgName, "badge": productData.badge })} ${renderComponent($$result, "ProductCommon", $$ProductCommon, { "productData": productData })} </div> ${renderComponent($$result, "ProductTabs", $$ProductTabs, { "productData": productData })} </div>`;
}, "E:/__work/_freelance/0_imecar/src/components/ProductPage/ProductAll/ProductAll.astro", void 0);

const $$Astro = createAstro();
const $$ProductCompare = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductCompare;
  const { batteriesData = [] } = Astro2.props;
  if (!batteriesData || batteriesData.length === 0) {
    return null;
  }
  return renderTemplate`${maybeRenderHead()}<section class="comparison"> <div class="container"> <h2 class="comparison__title title-h2">Comparative characteristics</h2> <!-- Desktop Version --> <div class="comparison__desktop"> <div class="comparison__container"> <table class="comparison__table"> <tr class="comparison__row"> <th class="comparison__header"></th> ${batteriesData.map((battery) => renderTemplate`<td class="comparison__cell"> <article class="product" data-type="product"${addAttribute(battery.id, "data-id")}${addAttribute(`/images/${battery.transparentImageName}.webp`, "data-img")}${addAttribute(battery.model, "data-name")}${addAttribute(battery.price, "data-price")}> <a class="product__link"> <h3 class="product__title">${battery.model}</h3> <picture class="product__picture"> <img${addAttribute(`/images/${battery.transparentImageName}.webp`, "src")}${addAttribute(battery.model, "alt")} class="product__image" loading="lazy" width="170" height="150"> </picture> </a>  </article> </td>`)} </tr> <tr class="comparison__row"> <th class="comparison__header">Price</th> ${batteriesData.map((battery) => renderTemplate`<td class="comparison__cell">$${battery.price}</td>`)} </tr> <tr class="comparison__row"> <th class="comparison__header">Nominal Voltage</th> ${batteriesData.map((battery) => renderTemplate`<td class="comparison__cell">${battery.nominalVoltage}</td>`)} </tr> <tr class="comparison__row"> <th class="comparison__header">Capacity</th> ${batteriesData.map((battery) => renderTemplate`<td class="comparison__cell">${battery.capacity}</td>`)} </tr> <tr class="comparison__row"> <th class="comparison__header">Battery Pack Energy</th> ${batteriesData.map((battery) => renderTemplate`<td class="comparison__cell">${battery.batteryPackEnergy}</td>`)} </tr> <tr class="comparison__row"> <th class="comparison__header">Battery Life</th> ${batteriesData.map((battery) => renderTemplate`<td class="comparison__cell">${battery.batteryLife}</td>`)} </tr> <tr class="comparison__row"> <th class="comparison__header">Length</th> ${batteriesData.map((battery) => renderTemplate`<td class="comparison__cell">${battery.length}</td>`)} </tr> <tr class="comparison__row"> <th class="comparison__header">Width</th> ${batteriesData.map((battery) => renderTemplate`<td class="comparison__cell">${battery.width}</td>`)} </tr> <tr class="comparison__row"> <th class="comparison__header">Height</th> ${batteriesData.map((battery) => renderTemplate`<td class="comparison__cell">${battery.height}</td>`)} </tr> <tr class="comparison__row"> <th class="comparison__header">Weight</th> ${batteriesData.map((battery) => renderTemplate`<td class="comparison__cell">${battery.weight}</td>`)} </tr>  </table> </div> </div> <!-- Mobile Version --> <div class="comparison__mobile"> <div class="comparison__selector"> <button class="comparison__select-btn" type="button">Price</button> <div class="comparison__options"> <div class="comparison__option selected" data-characteristic="price">Price</div> <div class="comparison__option" data-characteristic="nominalVoltage">Nominal Voltage</div> <div class="comparison__option" data-characteristic="capacity">Capacity</div> <div class="comparison__option" data-characteristic="batteryPackEnergy">Battery Pack Energy</div> <div class="comparison__option" data-characteristic="batteryLife">Battery Life</div> <div class="comparison__option" data-characteristic="length">Length</div> <div class="comparison__option" data-characteristic="width">Width</div> <div class="comparison__option" data-characteristic="height">Height</div> <div class="comparison__option" data-characteristic="weight">Weight</div>  </div> </div> <ul class="comparison__products"> ${batteriesData.map((battery, index) => renderTemplate`<li> <article class="product" data-type="product"${addAttribute(battery.id, "data-id")}${addAttribute(`/images/${battery.transparentImageName}.webp`, "data-img")}${addAttribute(battery.model, "data-name")}${addAttribute(battery.price, "data-price")}${addAttribute(index, "data-index")}${addAttribute(JSON.stringify({
    price: battery.price,
    nominalVoltage: battery.nominalVoltage,
    capacity: battery.capacity,
    batteryPackEnergy: battery.batteryPackEnergy,
    batteryLife: battery.batteryLife,
    length: battery.length,
    width: battery.width,
    height: battery.height,
    weight: battery.weight
  }), "data-values")}> <a class="product__link"> <h3 class="product__title">${battery.model}</h3> <picture class="product__picture"> <img${addAttribute(`/images/${battery.transparentImageName}.webp`, "src")}${addAttribute(battery.model, "alt")} class="product__image" loading="lazy" width="170" height="150"> </picture> <div class="product__value">$${battery.price}</div> </a>  </article> </li>`)} </ul> </div> </div> </section> ${renderScript($$result, "E:/__work/_freelance/0_imecar/src/components/ProductPage/ProductCompare/ProductCompare.astro?astro&type=script&index=0&lang.ts")}`;
}, "E:/__work/_freelance/0_imecar/src/components/ProductPage/ProductCompare/ProductCompare.astro", void 0);

export { $$ProductAll as $, $$ProductCompare as a };
