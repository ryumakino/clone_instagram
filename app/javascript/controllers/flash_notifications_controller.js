import { Controller } from "stimulus";
import Toastify from "toastify-js";

export default class extends Controller {
  connect() {
    const backgroundColors = {
      notice: "#009688",
      alert: "#f44336",
      error: "#f44336"
    };

    // Get the flash messages from the dataset attribute
    const flashMessages = JSON.parse(this.element.dataset.flashMessages || '[]');

    // Display the flash messages using Toastify
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
