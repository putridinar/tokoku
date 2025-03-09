function processMidtransPayment(totalAmount) {
    $.ajax({
        url: 'http://localhost:3000/midtrans-token', // Endpoint untuk mendapatkan token transaksi dari server
        type: 'POST',
        data: {
            amount: totalAmount
        },
        success: function(response) {
            snap.pay(response.token, {
                onSuccess: function(result) {
                    console.log('Pembayaran sukses:', result);
                    alert("Pembayaran berhasil!");
                    window.location.href = "/order-terkirim";
                },
                onPending: function(result) {
                    console.log('Menunggu pembayaran:', result);
                    alert("Pembayaran masih diproses. Silakan cek email Anda.");
                },
                onError: function(result) {
                    console.log('Pembayaran gagal:', result);
                    alert("Pembayaran gagal. Silakan coba lagi.");
                }
            });
        }
    });
}
