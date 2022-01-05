namespace a_8 {

    const form: HTMLFormElement = document.querySelector("#form");
    const display: HTMLInputElement = document.querySelector("#table-body");
    const interpretInput: HTMLInputElement = document.querySelector("#interpretPut");
    const priceInput: HTMLInputElement = document.querySelector("#pricePut");
    const dateTimeInput: HTMLInputElement = document.querySelector("#dateTimePut");
    
    
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
    
    
}