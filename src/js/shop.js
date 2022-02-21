import products from "./products.json";
import productImageFile from "../images/product.jpg";

function createProductElements() {
  const productSection = document.querySelector(".products-section");
  const productContainer = document.createElement("div");

  const productsHtml = products
    .map((product) => {
      // const productElement = document.createElement("div");
      // productElement.classList.add("product");

      // const productImage = document.createElement("img");
      // productImage.classList.add("product-img");
      // productImage.setAttribute("src", productImageFile);

      // const productTitle = document.createElement("div");
      // productTitle.classList.add("product-title");
      // const productTitleText = document.createTextNode(product.productName);
      // productTitle.appendChild(productTitleText);

      // const productPrice = document.createElement("div");
      // productPrice.classList.add("product-price");
      // const productPriceText = document.createTextNode(product.price);
      // productPrice.appendChild(productPriceText);

      // productElement.appendChild(productImage);
      // productElement.appendChild(productTitle);
      // productElement.appendChild(productPrice);

      // productContainer.appendChild(productElement);

      return `
      <div class="product">
        <img class="product-img" src="${productImageFile}">
        <a class="product-title" href="/product/index.html?id=${product.id}">${product.productName}</a>
        <div class="product-price">${product.price}</div>
      </div>
    `;
    })
    .join("");

  productContainer.innerHTML = productsHtml;

  productSection.appendChild(productContainer);
}

const shop = () => {
  createProductElements();
};

export default shop;
