class CommentsController < ApplicationController
  def create
    @comment = current_user.comments.new(comment_params)

    if @comment.save
      # Broadcasting the new comment to the comment_channel using Action Cable
      CommentChannel.broadcast_to("comment_channel",
        post_id: @comment.post_id,
        comment_created: render_to_string(partial: "comments/comment", locals: { comment: @comment })
      )

      # Set a flash message
      flash[:notice] = "Comentário enviado com sucesso."

      respond_to do |format|
        format.turbo_stream do
          render turbo_stream: turbo_stream.append("comments", target: "comments", html: render_to_string(partial: "comments/comment", locals: { comment: @comment }))
        end
        format.html { redirect_to @comment.post, notice: flash[:notice] }
      end
    else
      @post = @comment.post
      flash.now[:alert] = @comment.errors.full_messages.to_sentence

      respond_to do |format|
        format.turbo_stream do
          render turbo_stream: turbo_stream.append("flash_notifications", target: "flash-notifications", html: "<p>#{flash.now[:alert]}</p>")
        end
        format.html { render "posts/show" }
      end
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:post_id, :body)
  end
end
