"use strict";
var a_8;
(function (a_8) {
    const form = document.querySelector("#form");
    const display = document.querySelector("#table-body");
    const interpretInput = document.querySelector("#interpretPut");
    const priceInput = document.querySelector("#pricePut");
    const dateTimeInput = document.querySelector("#dateTimePut");
    async function requestEvents() {
        let response = await fetch("http://localhost:3000/events");
        let events = await response.json();
        console.log(events);
        for (let index = 0; index < events.length; index++) {
            const element = document.createElement("tr");
            element.innerHTML = `<td>${events[index].interpret}</td><td>${events[index].price}€</td><td>${events[index].dateTime}</td>`;
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
    }
    requestEvents();
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
    let eventForm = (document.getElementById("form"));
    eventForm.addEventListener("submit", onSubmitEventForm);
    async function onSubmitEventForm(event) {
        event.preventDefault();
        let formData = new FormData(event.currentTarget);
        let events = {
            interpret: formData.get("interpret"),
            price: formData.get("price"),
            dateTime: formData.get("datetime")
        };
        console.log(events);
        await fetch("http://localhost:3000/events", {
            method: "POST",
            body: JSON.stringify(events),
            mode: "no-cors"
        });
    }
})(a_8 || (a_8 = {}));
//# sourceMappingURL=script.js.map