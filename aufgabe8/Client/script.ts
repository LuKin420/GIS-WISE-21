namespace a_8 {

    const form: HTMLFormElement = document.querySelector("#form");
    const display: HTMLInputElement = document.querySelector("#table-body");
    const interpretInput: HTMLInputElement = document.querySelector("#interpretPut");
    const priceInput: HTMLInputElement = document.querySelector("#pricePut");
    const dateTimeInput: HTMLInputElement = document.querySelector("#dateTimePut");
    
    async function requestEvents(): Promise<void> {
        let response: Response = await fetch("http://localhost:3000/events", {mode: "no-cors"});
        let text: string = await response.text();
        console.log(text);
      }
    
    requestEvents();
    
    function formSubmit(event: Event): void {
        event.preventDefault();
    
        const element: HTMLElement = document.createElement("tr");
        element.innerHTML = `<td>${interpretInput.value}</td><td>${priceInput.value}€</td><td>${dateTimeInput.value}</td>`;
        const tdElement: HTMLElement = document.createElement("td");
        const button: HTMLButtonElement = document.createElement("button");
        button.classList.add("delete-button");
        button.innerHTML = "delete";
        button.addEventListener("click", function(): void {
            display.removeChild(element);
        });
    
        tdElement.appendChild(button);
        element.appendChild(tdElement);
        display.appendChild(element);
    }
    
    
    form.addEventListener("submit", formSubmit);
    
    interface CustomEvent {
        inpterpret: String;
        price: String;
        dateTime: String;
    }

    let eventForm: HTMLFormElement = <HTMLFormElement>(
        document.getElementById("form")
    );

    eventForm.addEventListener("submit", onSubmitEventForm);

    async function onSubmitEventForm(event: Event) {
        event.preventDefault();
        let formData: FormData = new FormData(<HTMLFormElement>event.currentTarget);
        let events: CustomEvent = {
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
}