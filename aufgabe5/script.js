"use strict";
var a_5;
(function (a_5) {
    const form = document.querySelector("#form");
    const display = document.querySelector("#table-body");
    const interpretInput = document.querySelector("#interpretPut");
    const priceInput = document.querySelector("#pricePut");
    const dateTimeInput = document.querySelector("#dateTimePut");
    const storedEvents = JSON.parse(localStorage.getItem("events"));
    let events = storedEvents;
    if (storedEvents) {
        for (let i = 0; i < events.length; i++) {
            displayEvent(events[i]);
        }
    }
    else {
        events = [];
    }
    function formSubmit(event) {
        event.preventDefault();
        const customEvent = {
            inpterpret: interpretInput.value,
            price: priceInput.value,
            dateTime: dateTimeInput.value
        };
        console.log(events);
        events.push(customEvent);
        console.log(events);
        localStorage.setItem("events", JSON.stringify(events));
        displayEvent(customEvent);
    }
    function displayEvent(customEvent) {
        const element = document.createElement("tr");
        element.innerHTML = `<td>${customEvent.inpterpret}</td><td>${customEvent.price}€</td><td>${customEvent.dateTime}</td>`;
        const tdElement = document.createElement("td");
        const button = document.createElement("button");
        button.classList.add("delete-button");
        button.innerHTML = "delete";
        button.addEventListener("click", function () {
            display.removeChild(element);
            events.splice(events.indexOf(customEvent), 1);
            console.log(events);
            localStorage.setItem("events", JSON.stringify(events));
        });
        tdElement.appendChild(button);
        element.appendChild(tdElement);
        display.appendChild(element);
    }
    form.addEventListener("submit", formSubmit);
})(a_5 || (a_5 = {}));
//# sourceMappingURL=script.js.map