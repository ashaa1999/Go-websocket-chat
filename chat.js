(function () {
  const messages = document.getElementById("messages");
  const form = document.getElementById("chat-form");
  const input = document.getElementById("message-input");

  const socket = new WebSocket(
    "ws://" + window.location.host + "/room"
  );

  socket.onmessage = function (event) {
    const message = document.createElement("div");
    message.className = "message";
    message.textContent = event.data;

    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
  };

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (input.value.trim() === "") {
      return;
    }

    socket.send(input.value);
    input.value = "";
  });
})();
