export const FoodCard = (foodObj) => {
  const mainElement = document.querySelector(`main`);

  mainElement.addEventListener("click", (event) => {
    if (event.target.id === `order--${foodObj.id}`) {
      const quantityHTML = document.querySelector(`#quantity--${foodObj.id}`);
      const chosenQuantity = parseInt(quantityHTML.value);
      console.log(chosenQuantity);
    }
  });

  return `
    <div class="col-sm-6 g-4">
        <div class="card">
        <div class="h-100">
        <img src="./assets/images/${foodObj.imageURL}" class="card-img-top" alt="${foodObj.imageURL}">
        </div>
            <div class="card-body" id="food--${foodObj.id}">
                <h5 class="card-title">${foodObj.name}</h5>
                <p class="card-text">${foodObj.description}</p>
                <p>Price: $${foodObj.price}</p>
                <button id="order--${foodObj.id}" type="button" class="btn btn-primary">Add to order</button>
                <label>Quantity: </label>
                <input id="quantity--${foodObj.id}" min="0" type="number"></input>
            </div>
        </div>
    </div>
    `;
};
