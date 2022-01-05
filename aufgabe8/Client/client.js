"use strict";
var Client_8;
(function (Client_8) {
    let eventForm = (document.getElementById("form"));
    eventForm.addEventListener("submit", onSubmitEventForm);
    async function onSubmitEventForm(event) {
        event.preventDefault();
        let formData = new FormData(event.currentTarget);
        let events = {
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
})(Client_8 || (Client_8 = {}));
//# sourceMappingURL=client.js.map