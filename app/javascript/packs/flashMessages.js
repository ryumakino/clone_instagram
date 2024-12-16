import Toastify from "toastify-js";

document.addEventListener('DOMContentLoaded', () => {
  const backgroundColors = {
    notice: "#009688",
    alert: "#f44336",
    error: "#f44336"
  };

  const flashMessages = JSON.parse(document.body.dataset.flashMessages || '[]');
  
  flashMessages.forEach(flashMessage => {
    if (Array.isArray(flashMessage) && flashMessage.length >= 2) {
      const [type, message] = flashMessage;

      Toastify({
        text: message,
        duration: 3000,
        close: true,
        backgroundColor: backgroundColors[type] || "#000", // Cor padrão
        stopOnFocus: true
      }).showToast();
    } else {
      console.warn("Flash message inválida:", flashMessage);
    }
  });
});
