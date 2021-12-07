"use strict";
var a_4;
(function (a_4) {
    const form = document.querySelector("#form");
    const display = document.querySelector("#table-body");
    const interpretInput = document.querySelector("#interpretPut");
    const priceInput = document.querySelector("#pricePut");
    const dateTimeInput = document.querySelector("#dateTimePut");
    function formSubmit(event) {
        event.preventDefault();
        const element = document.createElement("tr");
        element.innerHTML = `<td>${interpretInput.value}</td><td>${priceInput.value}€</td><td>${dateTimeInput.value}</td>`;
        const tdElement = document.createElement("td");
        const button = document.createElement("button");
        button.classList.add("delete-button");
        button.innerHTML = "delete";
        button.addEventListener("click", function () {
            display.removeChild(element);
        });
        tdElement.appendChild(button);
        element.appendChild(tdElement);
        display.appendChild(element);
    }
    form.addEventListener("submit", formSubmit);
})(a_4 || (a_4 = {}));
//# sourceMappingURL=script.js.map