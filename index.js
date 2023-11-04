document.addEventListener("DOMContentLoaded", () => {
    const base_url = "https://github.com/Dorisk830/KitchenWares/";
    console.log("API base URL:", base_url);

    // Function to fetch and display products
    function fetchProducts() {
        fetch(`${base_url}products.json`)
            .then((response) => response.json())
            .then((data) => {
                const productsList = document.getElementById("products-list");

                data.apiProducts.forEach((product) => {
                    const productElement = document.createElement("div");
                    productElement.className = "product";

                    const img = document.createElement("img");
                    img.src = product.image_url;
                    img.alt = product.title;

                    const title = document.createElement("div");
                    title.className = "title";
                    title.textContent = product.title;

                    const description = document.createElement("div");
                    description.className = "description";
                    description.textContent = product.description;

                    const price = document.createElement("div");
                    price.className = "price";
                    price.textContent = product.price;

                    const cartButton = document.createElement("button");
                    cartButton.className = "cart-button";
                    cartButton.textContent = "Add to Cart";

                    productElement.appendChild(img);
                    productElement.appendChild(title);
                    productElement.appendChild(description);
                    productElement.appendChild(price);
                    productElement.appendChild(cartButton);

                    productsList.appendChild(productElement);
                });
            })
            .catch((error) => console.error("Error fetching products:", error));
    }

    // Fetch and display products when the page loads
    fetchProducts();
});
