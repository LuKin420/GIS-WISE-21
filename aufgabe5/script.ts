namespace a_5 {
    
    interface CustomEvent {
        inpterpret: String;
        price: String;
        dateTime: String;
    }
    
    const form: HTMLFormElement = document.querySelector("#form");
    const display: HTMLInputElement = document.querySelector("#table-body");
    const interpretInput: HTMLInputElement = document.querySelector("#interpretPut");
    const priceInput: HTMLInputElement = document.querySelector("#pricePut");
    const dateTimeInput: HTMLInputElement = document.querySelector("#dateTimePut");
    const storedEvents: CustomEvent[] = JSON.parse(localStorage.getItem("events"));
    let events: CustomEvent[] = storedEvents;

    if (storedEvents) {
        for (let i: number = 0; i < events.length; i++) {
            displayEvent(events[i]);
        }
    } else {
        events = [];
    }
    
    function formSubmit(event: Event): void {
        event.preventDefault();
        
        const customEvent: CustomEvent = {
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

    function displayEvent(customEvent: CustomEvent): void {
    const element: HTMLElement = document.createElement("tr");
    element.innerHTML = `<td>${customEvent.inpterpret}</td><td>${customEvent.price}€</td><td>${customEvent.dateTime}</td>`;
    
    const tdElement: HTMLElement = document.createElement("td");
    const button: HTMLButtonElement = document.createElement("button");
    button.classList.add("delete-button");
    button.innerHTML = "delete";
    button.addEventListener("click", function(): void {
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

}