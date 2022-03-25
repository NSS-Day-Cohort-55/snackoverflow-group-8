import { bigOrderList } from "./menu/FoodCard.js";

const footerElement = document.querySelector("footer");

document.addEventListener("orderUpdated", (event) => {
  Footer();
  bigOrderList.forEach(
    (o) => (footerElement.innerHTML += `<div>Order: ${o.foodId}</div>`)
  );
});

export const Footer = () => {
  footerElement.innerHTML = `
    <div class="container-fluid alert-primary">
    <div class="row">
    <h3 class="alert-heading text-center">Give us a call for pickup orders <br /><a href="tel:5558675309">555-867-5309</a></h3> <p class="text-center">Open M-F, 11am-3pm.</p><p class="text-center">&copy; ${new Date().getFullYear()} NSS Cohorts 53 and 55</p>
    </div>
    </div>
    `;
};
