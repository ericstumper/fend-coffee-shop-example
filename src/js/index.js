import shop from "./shop";
import product from "./product";

document.addEventListener("DOMContentLoaded", function (event) {
  const currentPath = window.location.pathname;

  console.log(currentPath);

  if (currentPath === "/shop/index.html") {
    shop();
  } else if (currentPath === "/product/index.html") {
    product();
  }
});
