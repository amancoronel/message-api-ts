let cases = ["Hello", "Hi", "Goodbye", "bye"];

const validateMessage = (message: string) => {
    let newMessage:string[] = message.replace(/[^a-zA-Z ]/g, "").toLowerCase().split(" ");

    cases = cases.toLocaleString().toLowerCase().split(',');

    let filtered = cases.filter((cas) => newMessage.includes(cas));
    if(filtered[0]) {
        let index = cases.indexOf(filtered[0]);
        return (index >= 0 && index <= 1) ? "Welcome to StationFive." : "Thank you, see you around."
         
    } else return "Sorry, I don’t understand.";
}

export default validateMessage;