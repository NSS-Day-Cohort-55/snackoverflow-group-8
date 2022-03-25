const apiURL = "http://localhost:8088";

export const getFoods = (id) => {
    if (id===0){
    return fetch(`${apiURL}/foods?_sort=price&_order=asc`)
    .then(response => response.json())}
    else {
        return fetch(`${apiURL}/foods?menuId=${id}&_sort=price&_order=asc`)
            .then(response=>response.json())
    }
}

// export const getFoodsByMenuId=(id)=>{
//     return fetch(`${apiURL}/foods?menuId=${id}`)
//     .then(response=>response.json())
// }