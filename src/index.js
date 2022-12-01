const $app = document.getElementById("app");
const API = "https://api.escuelajs.co/api/v1/products?offset=5&limit=10";

const main = async () => {
  const response = await fetch(API);
  const products = await response.json();

  const output = products?.map((product) => {
    return `
      <article class="Card">
        <img src="${product.images[0]}">
        <h2>
          ${product.title} <small>Precio $ ${product.price}</small>
        </h2>
      </article>
    `;
  }).join('');
  let newItem = document.createElement("section");
  newItem.classList.add("Items");
  newItem.innerHTML = output;
  $app.appendChild(newItem);
}

main();