import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["like", "dislike"];

  // CSRF token for API requests
  get csrfToken() {
    return document.querySelector("meta[name='csrf-token']").content;
  }

  get headers() {
    return {
      "Content-Type": "application/json",
      "X-CSRF-Token": this.csrfToken
    };
  }

  // Event handler for clicking the like button
  like(event) {
    const actionElement = event.target.closest(".action");

    fetch("/likes", {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify({ like: { post_id: actionElement.dataset.postId } })
    })
      .then(response => response.json())
      .then(json => this.handleLikeFeatureCallback({ ...json, actionElement }))
      .catch(error => console.log("Error:", error));
  }

  // Event handler for clicking the dislike button
  dislike(event) {
    const actionElement = event.target.closest(".action");

    fetch(`/likes/${actionElement.dataset.likeId}`, {
      method: "DELETE",
      headers: this.headers
    })
      .then(response => response.json())
      .then(json => this.handleLikeFeatureCallback({ ...json, actionElement }))
      .catch(error => console.log("Error:", error));
  }

  // Toggle like/dislike buttons based on the response
  handleLikeFeatureCallback({ id, successful, actionElement }) {
    if (successful) {
      // Update the likeId in the dataset
      actionElement.dataset.likeId = id;

      // Toggle visibility of like and dislike buttons
      actionElement.querySelectorAll(".like, .dislike").forEach(button => {
        button.classList.toggle("hidden");
      });
    }
  }
}
