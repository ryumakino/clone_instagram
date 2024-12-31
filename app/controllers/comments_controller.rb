class CommentsController < ApplicationController
  def create
    @comment = current_user.comments.new(comment_params)

    if @comment.save
      # Broadcasting to the comment_channel using Action Cable
      CommentChannel.broadcast_to("comment_channel",
        post_id: @comment.post_id,
        comment_created: render_to_string(partial: "comments/comment", locals: { comment: @comment })
      )

      # Respond with Turbo Stream to append the new comment to the page
      respond_to do |format|
        format.turbo_stream
        format.html { redirect_to @comment.post, notice: "Comentário enviado com sucesso." }
      end
    else
      @post = @comment.post
      flash.now[:alert] = @comment.errors.full_messages.to_sentence
      render "posts/show"
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:post_id, :body)
  end
end
