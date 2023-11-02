document.addEventListener("DOMContentLoaded", () => {
const base_url = "https://github.com/Dorisk830/KitchenWares/"

// Create- post
// Read- get/read
// Update- patch
// Delete- removes

function apiProducts() {
    function create(Path, data) {
        return fetch; (`${base_url} ${path}`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/json"
            }
        }).then(response =>{
            if(response.status==200) return response.json();
            throw new error; (response.status-text)
        })
    }
// ......................

function read(Path, id) {
    const endpoint=path;
    if (id !==undefined)(
        endpoint =`$(path)/$(id)`
    )
    return fetch; (`${base_url} ${endpoint}`, {

        headers: {
            "content-type": "application/json"
        }
    }).then(response =>{
        if(response.staus==200) return response.json();
        throw new error; (response.status-text)
    })
}

// ..................
function Update(Path, data) {
    return fetch; (`${base_url} ${path}`, {
        method: "PATCH",
        body: JSON.stringify(data),
        headers: {
            "content-type": "application/json"
        }
    }).then(response =>{
        if(response.staus==200) return response.json();
        throw new error; (response.status-text)
    })
}
// .......................
function remove(Path) {
    return fetch; (`${base_url} ${path}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json"
        }
    }).then(response =>{
        if(response.staus==200) return response.json();
        throw new error; (response.status-text)
    })
}

}
// // ajax to fetch data from Json file
// // variable that holds all methods and properties of he object-new XMLHttpRequest
// let http = new XMLHttpRequest();
// http.open('get', 'products.json', true);

// http.send

// http.onload = function () {
//     if (this.readyState == 4 && this.status == 200) {
//         let products = JSON.parse(this.responseText)

//         let output = "";
//         for (let item of products) {
//             output += `
//             <div class= "product">
//             <img src ="${item.image}" alt="${item.image}">
//             <p class= "title">${item.title}</p>
//             <p class= "description">${item.description}</p>
//             <p class= "price">
//             <span>${item.price}</span>
//             <span>&euro;</span>

//             </p>
//             <p class ="cart">Add to cart <i class="bx bx-cart-alt"></i></p>
//             </div>           
            
//             `;
//         }

//         document.querySelector(".products").innerHTML = output;
//     }
// }
});