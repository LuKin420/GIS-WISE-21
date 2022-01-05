namespace Client_8 {
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
            eventNr: formData.get("eventNr"),
            interpret: formData.get("interpret"),
            price: formData.get("price"),

        };
        console.log(events);
        await fetch("http://localhost:3000/events", {
            method: "post",
            body: JSON.stringify(events),
        });
    }

}