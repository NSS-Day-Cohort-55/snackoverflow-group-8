import { getLoggedInUser } from "./auth/UserManager.js"
import { LoginForm } from "./auth/LoginForm.js";
import { RegisterForm } from "./auth/RegisterForm.js";
import { FoodList } from "./menu/FoodsList.js";
import * as UserManager from "./auth/UserManager.js"

export const NavBar = () => {
    const headerElement = document.querySelector("header");

    headerElement.addEventListener("click", event => {
        if (event.target.id === "login") {
            showLoginRegister()
        }
    })

    headerElement.addEventListener("change", event=>{
        if (event.target.value==="0"){
            FoodList(0)
        }
        else if (event.target.value==="1"){
            FoodList(1)
        }
        else if (event.target.value==="2"){
            FoodList(2)
        }
        else if (event.target.value==="3"){
            FoodList(3)
        }
        else if (event.target.value==="4"){ 
            FoodList(4)
        }
    })


    const showLoginRegister = () => {
        const contentElement = document.querySelector("main");
        contentElement.innerHTML = `
        <div class="container-fluid">
        <div class="row">
          <div class="col-5">
            ${LoginForm()}
          </div>
          <div class="col-2"></div>
          <div class="col-5">
            ${RegisterForm()}
          </div>
      
        </div>
      </div>`;
    }

    

    const showLogin = () => {
        if (getLoggedInUser().id) {
            return `<p class="nav-link" id="logout">Logout</p>`
        } else {
            return `<p class="nav-link" id="login">Login</p>`
        }
    }

    headerElement.innerHTML = `
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        
            <div class="container-fluid">
           
                    <img id="logo-nav" src="../assets/images/snackoverflow.svg" alt="Snack Overflow">
                    <span class="navbar-text">
        Call us to order: <a href="tel:5558675309">555-867-5309</a>
      </span>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 align-items-end">
                    <li class="nav-item">${getLoggedInUser().name? `Welcome, ${getLoggedInUser().name}!` : `Welcome!`}</li>
                    <li class="nav-item">
                        <select class="nav-link" aria-current="page" id="menu">
                        <option>Select</option>
                        <option value="0" id="0">Full Menu</option>
                        <option value="1" id="1">Lunch</option>
                        <option value="2" id="2">Drinks</option>
                        <option value="3" id="3">Appetizers</option>
                        <option value="4" id="4">Dessert</option>
                        </select>
                        
                        
                    </li>
                    <!-- Only show my order once you login -->
                    <!-- <li class="nav-item">
                        <p class="nav-link" id="myOrders">My Orders</p>
                    </li> -->
                    <li class="nav-item">
                    ${showLogin()}
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    `
}