import { Controller } from "stimulus";
import tingle from "tingle.js";
import "tingle.js/src/tingle.css";

export default class extends Controller {
  static targets = ["button", "modalContent"];

  connect() {
    this.modal = null;
  }

  open(event) {
    event.preventDefault();

    const button = event.target;
    const modalId = button.dataset.modalId;

    // Check if the modal exists
    const modalContent = document.querySelector(`#${modalId}`).innerHTML;

    if (!modalContent) {
      console.warn("Modal content not found for ID:", modalId);
      return;
    }

    this.createModal(modalContent);
  }

  createModal(content) {
    this.modal = new tingle.modal({
      closeMethods: ["overlay", "escape"],
      cssClass: ["instagram-modal"],
    });

    this.modal.setContent(content);
    this.modal.open();
  }
}
