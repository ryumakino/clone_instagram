import { Controller } from "stimulus";
import Toastify from "toastify-js";

export default class extends Controller {
  static values = { flashMessages: Array };

  connect() {
    const backgroundColors = {
      notice: "#009688",
      alert: "#f44336",
      error: "#f44336"
    };

    // Initialize with existing flash messages (if any)
    this.showFlashMessages(this.flashMessagesValue);

    // Set up Turbo Streams to handle future flash message updates
    document.addEventListener("turbo:load", () => {
      const flashMessages = JSON.parse(this.element.dataset.flashMessages || '[]');
      this.showFlashMessages(flashMessages);
    });
  }

  showFlashMessages(flashMessages) {
    flashMessages.forEach(flashMessage => {
      if (Array.isArray(flashMessage) && flashMessage.length >= 2) {
        const [type, message] = flashMessage;

        Toastify({
          text: message,
          duration: 3000,
          close: true,
          backgroundColor: backgroundColors[type] || "#000", // Default background color
          stopOnFocus: true
        }).showToast();
      } else {
        console.warn("Invalid flash message:", flashMessage);
      }
    });
  }
}
