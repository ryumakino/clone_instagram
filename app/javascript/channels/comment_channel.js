import consumer from "./consumer"

consumer.subscriptions.create("CommentChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received({ post_id, comment_created }) {
    debugger
    const comments = document.querySelector(".comments");

    if (comments.dataset.postId != post_id) return;

    const template = document.createElement("template");
    template.innerHTML = comment_created

    document.querySelector("form.new-comment")
      .insertAdjacentElement("beforebegin", template.content.firstChild);
  }
});
