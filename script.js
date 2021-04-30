let total = 0.00;

function updateTotal(price) {
    total += price;
    const totalElement = document.getElementById('total');
    totalElement.innerText = `$ ${total}`;
}

function buttonOne() {
    updateTotal(2.00);
}

function buttonTwo() {
    updateTotal(3.00);
}

function buttonThree() {
    updateTotal(4.00);
}

function buttonFour() {
    updateTotal(6.00);
}