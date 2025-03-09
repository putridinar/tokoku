$(document).on('click', '#payWithMidtrans', function () {
    let totalAmount = $('.simpleCart_grandTotal').text().replace(/[^\d]/g, '');
    processMidtransPayment(totalAmount);
});
