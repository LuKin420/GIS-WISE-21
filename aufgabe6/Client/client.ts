namespace Client {
    console.log("Client läuft");
    const url: string = "http://127.0.0.1:3000";
    const path: string = "/greetings";

    const myForm: HTMLFormElement = <HTMLFormElement>document.getElementById("myform");
    const sendButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send-button");

    sendButton.addEventListener("click", function(evt: Event){
        evt.preventDefault();
        sendForm();
    });

    console.log(myForm, sendButton);

    function sendForm(): void {
        let formData: FormData = new FormData(myForm);
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        let urlWithQuery: string = url + "?" + query.toString();

        let response: Response = await fetch(urlWithQuery);
        let responseText: string = await response.text();
        console.log(responseText);
    }
}