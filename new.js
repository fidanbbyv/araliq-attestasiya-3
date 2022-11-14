const sender = document.getElementById("sender");
const messages = document.getElementById("message");
const sendButton = document.querySelector(".btn");
class Message {
    constructor(author, text) {
        this.author = author;
        this.time = gettime();
        this.text = text;
    }
    toHtml() {
      return `<p>${this.time} ${this.author}: ${this.text}</p></b>`;
  }
    toString() {
        return `${this.time} ${this.author}: ${this.text}`;
    }
}
function gettime() {
  let date =  new Date();
  return `${date.getHours()}:${date.getMinutes()}`
}
class Messenger {
    constructor() {
        this.history = [];
        this.historyelement = document.querySelector(`.history`);
    }
    send(author, text) {
      const message = new Message(author, text);
      this.history.push(message);
      const p = document.createElement("p");
      p.innerHTML = message.toHtml();
      this.historyelement.appendChild(p);
  }
    show_history() {
        this.history.forEach((element) => {
            console.log(element.toString());
        });
    }
}
let messenger = new Messenger("messenger");
sendButton.addEventListener("click", () => {
    const author = sender.value;
    const message = messages.value;
    sender.value = "";
    messages.value = "";
    messenger.send(author, message);
});