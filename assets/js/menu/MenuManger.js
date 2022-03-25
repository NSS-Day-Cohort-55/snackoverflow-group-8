const apiURL = "http://localhost:8088";

export const getFoods = (id) => {
  if (id === 0) {
    return fetch(`${apiURL}/foods?_sort=price&_order=asc`).then((response) =>
      response.json()
    );
  } else {
    return fetch(`${apiURL}/foods?menuId=${id}&_sort=price&_order=asc`).then(
      (response) => response.json()
    );
  }
};

export const pushOrder = (obj) => {
  return fetch(`${apiURL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  }).then((res) => res.json());
};

export const pushOrderFoods = (obj) => {
  return fetch(`${apiURL}/orderFoods`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  });
};

// export const getFoodsByMenuId=(id)=>{
//     return fetch(`${apiURL}/foods?menuId=${id}`)
//     .then(response=>response.json())
// }
