import consumer from "./index";

const chatChannel = consumer.subscriptions.create("ChatChannel", {
  connected() {
    console.log("Connected to ChatChannel!");
  },

  disconnected() {
    console.log("Disconnected from ChatChannel!");
  },

  received(data) {
    console.log("Received data:", data);
    // Implementasi untuk menerima pesan, Anda bisa memanggil fungsi callback di sini
    if (this.onReceived) {
      this.onReceived(data);
    }
  },

  sendMessage(data) {
    this.perform("send_message", data);
  },
});

export default chatChannel;
