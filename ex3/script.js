let total = 0;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData("text");
    let cartItems = document.getElementById("cartItems");
    let li = document.createElement("li");
    li.textContent = data;
    cartItems.appendChild(li);

    // Extract price from string
    let price = parseInt(data.split("Rs:")[1]);
    total += price;
    document.getElementById("total").textContent = total;
}

function buyNow() {
    alert("Thanks for your purchase! Total: Rs " + total);
}

function refreshCart() {
    document.getElementById("cartItems").innerHTML = "";
    total = 0;
    document.getElementById("total").textContent = total;
}
