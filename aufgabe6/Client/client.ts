namespace Client {
    console.log("Client läuft");
    const url: string = "http://127.0.0.1:3000";
    const path: string = "/convertDate";

    const myForm: HTMLFormElement = <HTMLFormElement>document.getElementById("myform");
    const sendButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("send-button");
    const answer: HTMLElement = <HTMLElement>document.getElementById("answer");

    sendButton.addEventListener("click", function(evt: Event) {
        evt.preventDefault();
        sendForm();

    });

    async function sendForm(): Promise<void> {
        let formData: FormData = new FormData(myForm); //formData übergeben
        let query: URLSearchParams = new URLSearchParams(<any>formData); //query - richtig formatieren beim formData
        let urlWithQuery: string = url + path + "?" + query.toString();
        
        let response: Response = await fetch(urlWithQuery);
        
        let responseText: string = await response.text();
        
        const paragraph: HTMLElement = document.createElement("p");
        paragraph.innerText = responseText;
        answer.appendChild(paragraph);

        
    }
 


}