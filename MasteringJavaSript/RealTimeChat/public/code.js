(function(){
    const app = document.querySelector(".app");
    const socket = io();

    let uname;

    app.querySelector(".join_screen #join_chat").addEventListener("click", () => {
        let username = app.querySelector(".join_screen #username").value;
        if(username.length == 0){
            return;
        }
        socket.emit("newuser", username);
        uname = username;
        app.querySelector(".join_screen").classList.remove("active");
        app.querySelector(".chat_screen").classList.add("active");
    });

    app.querySelector(".chat_screen #send_message").addEventListener("click", () => {
        sendMessage();
    });

    app.querySelector(".chat_screen #message_input").addEventListener("keyup", (event) => {
        if(event.key === "Enter"){
            sendMessage();
        }
    });

    function sendMessage(){
        let message = app.querySelector(".chat_screen #message_input").value;
        if(message.length == 0){
            return;
        }
        renderMessage("my", {
            username: uname,
            text: message
        });
        socket.emit("chat", {
            username: uname,
            text: message
        });
        app.querySelector(".chat_screen #message_input").value = "";
    }

    app.querySelector(".chat_screen #exit_chat").addEventListener("click", ()=>{
        socket.emit("exituser", uname);
        window.location.href = window.location.href;
        
    });

    socket.on("update", (update) => {
        renderMessage("update", update);
    });

    socket.on("chat", (message) => {
        renderMessage("other", message);
    });

    function renderMessage(type, message){
        let messageContainer = document.querySelector(".chat_screen .messages");
        console.log(type)
        if(type == "my"){
            let el = document.createElement("div");
            el.setAttribute("class", "message my_message");
            el.innerHTML = `
            <div>
                <span>
                    <div class="name">You</div>
                    <div class="text">${message.text}</div>
                </span>
            </div>
            `;
            messageContainer.appendChild(el);
        } else if(type == "other"){
            let el = document.createElement("div");
            el.setAttribute("class", "message other_message");
            el.innerHTML = `
            <div>
                <span>
                    <div class="name">${message.username}</div>
                    <div class="text">${message.text}</div>
                </span>
            </div>
            `;
            messageContainer.appendChild(el);
        } else if (type == "update"){
            let el = document.createElement("div");
            el.setAttribute("class", "update");
            el.innerText = message;
            messageContainer.appendChild(el);
        }
        messageContainer.scrollTop = messageContainer.scrollHeight - messageContainer.clientHeight;
    }
})();
