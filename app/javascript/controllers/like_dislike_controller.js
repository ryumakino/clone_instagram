import { Controller } from "stimulus";

export default class extends Controller {
  static targets = ["like", "dislike"];

  toggleLikeDislike(event) {
    const actionElement = event.target.closest(".action");
    const postId = actionElement.dataset.postId;
    const likeId = actionElement.dataset.likeId;
    const method = likeId ? "DELETE" : "POST";
    const url = likeId ? `/likes/${likeId}` : "/likes";

    const form = document.createElement("form");
    form.method = method;
    form.action = url;

    if (!likeId) {
      const postIdInput = document.createElement("input");
      postIdInput.type = "hidden";
      postIdInput.name = "like[post_id]";
      postIdInput.value = postId;
      form.appendChild(postIdInput);
    }

    document.body.appendChild(form);
    form.submit();
  }
}
