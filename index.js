document.addEventListener("DOMContentLoaded", () => {
    const base_url = "http://localhost:3000";
    console.log("API base URL:", base_url);

    // Cart array to store selected products
    const cart = [];

    // Function to fetch and display products
    function fetchProducts() {
        fetch(`${base_url}products.json`)
            .then((response) => response.json())
            .then((data) => {
                const productsContainer = document.querySelector(".products");

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
                    price.textContent = `$${product.price}`;

                    const cartButton = document.createElement("button");
                    cartButton.className = "cart-button";
                    cartButton.textContent = "Add to Cart";

                    cartButton.addEventListener("click", () => {
                        // Check if the product is already in the cart
                        const isInCart = cart.some((item) => item.id === product.id);

                        if (!isInCart) {
                            // Add the selected product to the cart array
                            cart.push(product);

                            // You can add more logic to update the UI or provide feedback

                            // Update the cart total
                            const cartTotal = document.getElementById("cart-total");
                            const total = cart.reduce((acc, item) => acc + parseFloat(item.price.replace('@', '').replace(',', '')), 0);
                            cartTotal.textContent = `Total: $${total.toFixed(2)}`;

                            // Add a click event listener to the remove button
                            const cartList = document.getElementById("cart-list");
                            const cartItem = document.createElement("li");
                            cartItem.innerHTML = `${product.title} - $${product.price} <button class="remove-cart-item">Remove</button>`;
                            cartList.appendChild(cartItem);

                            const removeButton = cartItem.querySelector(".remove-cart-item");
                            removeButton.addEventListener("click", () => {
                                // Remove the product from the cart
                                const productIndex = cart.findIndex((item) => item.id === product.id);
                                if (productIndex !== -1) {
                                    cart.splice(productIndex, 1);
                                }

                                // Remove the cart item from the list
                                cartList.removeChild(cartItem);

                                // Update the cart total
                                const newTotal = cart.reduce((acc, item) => acc + parseFloat(item.price.replace('@', '').replace(',', '')), 0);
                                cartTotal.textContent = `Total: $${newTotal.toFixed(2)}`;
                            });
                        }
                    });

                    productElement.appendChild(img);
                    productElement.appendChild(title);
                    productElement.appendChild(description);
                    productElement.appendChild(price);
                    productElement.appendChild(cartButton);

                    productsContainer.appendChild(productElement);
                });
            })
            .catch((error) => console.error("Error fetching products:", error));
    }

    // Fetch and display products when the page loads
    fetchProducts();
});
