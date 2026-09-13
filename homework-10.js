import products from './products.js';

function createCardTemplate(product) {
  return `
    <li class="card">
      <img class="card__image" src="${product.image}" alt="Товар ${product.name}" />
      <p class="card__category">
        <span>${product.category}</span>
      </p>
      <h2 class="card__product-name">${product.name}</h2>
      <p class="card__product-description">${product.description}</p>
      <span class="card__compound">Состав:</span>
      <ul class="card__indent">
        ${product.compound.map(item => `<li>${item}</li>`).join('')}
      </ul>
      <div class="card__price">
        <b>Цена</b>
        <span>${product.price}</span>
      </div>
      <button class="button">
        <img src="plus.png" alt="+">
        <span>купить</span>
      </button>
    </li>
  `;
}

const productDescriptions = products.reduce(function(acc, product) {
  acc[product.name] = product.description;
  return acc;
}, {});

console.log(productDescriptions);

function getCardsCount() {
  let count = prompt('Сколько карточек отобразить? От 1 до 5');
  count = Number(count);

  while (isNaN(count) || count < 1 || count > 5) {
    count = prompt('Нужно ввести число от 1 до 5. Попробуй ещё раз:');
    count = Number(count);
  }

  return count;
}

function renderCards(productsArray) {
  const listContainer = document.querySelector('.products-list');
  const cardsHtml = productsArray.map(createCardTemplate).join('');
  listContainer.innerHTML = cardsHtml;
}

const cardsCount = getCardsCount();
const productsToShow = products.slice(0, cardsCount);
renderCards(productsToShow);