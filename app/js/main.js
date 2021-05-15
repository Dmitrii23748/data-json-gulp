const headerTitle = document.querySelector('.headinglevel__title');
const titleNav = document.querySelector('.header__title-block');
const bread = document.querySelector('.breadcrumbs__list');
const gallery = document.querySelector('.headinglevel-block__content');
const text = document.querySelector('.headinglevel-block__text-lorem');


fetch('json/data.json')
    .then((res) => res.json())
    .then((data) => setPower(data));


function setPower ({page_meta, nav, breadcrumbs, stock, page_text}) {
    headerTitle.insertAdjacentHTML('afterbegin', `
        <h1>${page_meta.h1}</h1>
    `);

    document.head.insertAdjacentHTML('afterbegin',`
        <title>${page_meta.title}</title>
        <meta>${page_meta.meta_keywords}
        <meta>${page_meta.meta_description}
    `);

    titleNav.insertAdjacentHTML('afterbegin',`
        ${setNav(nav)}
    `);

    bread.insertAdjacentHTML('afterbegin',`
        ${setBreack(breadcrumbs)}
    `);

    gallery.insertAdjacentHTML('afterbegin',`
        ${setStock(stock)}
    `);
    text.insertAdjacentHTML('afterbegin',`
        ${setText(page_text)}
    `);

}

function setNav(nav) {
    return nav.map(
    (item) => `
    <a href="#">
        ${item.text}
    <a>
    `
    
    ).join(' ');
}

function setBreack (breadcrumbs) {
    return breadcrumbs.map(
        (item) => `
        <li class="breadcrumbs__item">
            <a class="breadcrumbs__link" href="#">
                ${item.text} >
            <a>
        </li>
        `
        ).join(' ');
}

function setStock (stock) {
    return stock.map(
        (item) => `
        <div class="headinglevel-block__gallery-item">
                  <img class="headinglevel-block__img" src="images/${item.image}" alt="1">
                  <div class="headinglevel-block__item">
                    <div class="headinglevel-block__title-text">
                      <a href="#">
                        <h4>${item.title}</h4>
                      </a>
                      <a href="#">
                        <p>Item Description: Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Nulla quis distinctio, officia tenetur a 
                        eaque deleniti, impedit accusamus, alias provident sint id odio neque 
                        laudantium! Saepe quisquam libero soluta itaque? 
                        </p>
                      </a>
                    </div>
                    <ul class="headinglevel-block__item-ul">
                      <li class="headinglevel-block__item-link">
                        <a class="headinglevel-block__item-a" href="#">${item.year}</a>
                      </li>
                      <li class="headinglevel-block__item-link">
                        <a class="headinglevel-block__item-a" href="#">${item.mileage} ${item.mileage_measure}</a>
                      </li>
                      <li class="headinglevel-block__item-link">
                        <a class="headinglevel-block__item-a" href="#">${item.axle_configuration}</a>
                      </li>
                    </ul>
                  </div>
                  <div class="headinglevel-block__price">
                    <p>${item.price_currency} ${item.price}</p>
                  </div>
                </div>
        `
        ).join(' ');
}

function setText (page_text) {
    return page_text.map(
        (item) => `
        <p>
            ${item.content}
        </p>
        `
        ).join(' ');
}