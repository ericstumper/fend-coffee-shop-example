import products from "./products.json";
import productImageFile from "../images/product.jpg";

function createProductElement() {
  const productSection = document.querySelector(".product-section");
  const productContainer = document.createElement("div");

  const urlParams = new URLSearchParams(window.location.search);
  const id = Number(urlParams.get("id"));
  console.log("current id", id);

  const product = products.filter((currentProduct) => {
    console.log(currentProduct.id, id);
    return currentProduct.id === id;
  })[0];
  console.log(product);

  const productsHtml = `
      <div class="product">
        <img class="product-img" src="${productImageFile}">
        <a class="product-title" href="/product/index.html?id=${product.id}">${product.productName}</a>
        <div class="product-price">${product.price}</div>
      </div>
    `;

  console.log(productsHtml);

  productContainer.innerHTML = productsHtml;

  productSection.appendChild(productContainer);
}

const product = () => {
  console.log(products);

  createProductElement();
};

export default product;
