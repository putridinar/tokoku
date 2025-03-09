document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("pay-button").addEventListener("click", function () {
        let orderData = {
            transaction_details: {
                order_id: "ORDER-" + new Date().getTime(),
                gross_amount: getTotalAmount() // Total harga dari cart
            },
            customer_details: {
                first_name: document.getElementById("nama").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("nomor").value,
                address: document.getElementById("alamat").value
            }
        };

        fetch("/create-midtrans-transaction", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(orderData)
        })
        .then(response => response.json())
        .then(data => {
            snap.pay(data.token);
        })
        .catch(error => console.error("Error:", error));
    });
});

function getTotalAmount() {
    let cartItems = JSON.parse(localStorage.getItem("simpleCart_items"));
    return Object.values(cartItems).reduce((total, item) => total + (item.price * item.quantity), 0);
}