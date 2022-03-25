import { bigOrderList } from "./menu/FoodCard.js";
import { pushOrder, pushOrderFoods } from "./menu/MenuManger.js";

const footerElement = document.querySelector("footer");

document.addEventListener("orderUpdated", (event) => {
  Footer();
  bigOrderList.forEach(
    (o) => (footerElement.innerHTML += `<div>Order: ${o.foodId}</div>`)
  );
});

document.addEventListener("click", (event) => {
  if (event.target.id === "placeOrder") {
    const newOrder = {
      userId: 1,
      notes: "wow my order",
      timestamp: new Date(),
      isPickedUp: false,
    };
    pushOrder(newOrder).then((order) => {
      bigOrderList.forEach((o) => (o.orderId = order.id));
      bigOrderList.forEach((o) => pushOrderFoods(o));
    });
  }
});

export const Footer = () => {
  footerElement.innerHTML = `
    <div class="container-fluid alert-primary">
    <div class="row">
    <h3 class="alert-heading text-center">Give us a call for pickup orders <br /><a href="tel:5558675309">555-867-5309</a></h3> <p class="text-center">Open M-F, 11am-3pm.</p><p class="text-center">&copy; ${new Date().getFullYear()} NSS Cohorts 53 and 55</p>
    <button class="btn-primary" id="placeOrder">Place Order</button>
    </div>
    </div>
    `;
};
