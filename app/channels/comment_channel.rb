class CommentChannel < ApplicationCable::Channel
  def subscribed
    stream_for "post_#{params[:post_id]}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
