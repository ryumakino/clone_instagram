class LikesController < ApplicationController
  before_action :set_like, only: %i[destroy]

  def create
    post = Post.find(params[:like][:post_id])
    like = post.likes.create(user: current_user)

    if like.save
      render json: { successful: true, id: like.id }
    else
      render json: { successful: false }
    end
  end

  def destroy
    render json: { successful: @like.destroy }
  end

  private

  def set_like
    @like = current_user.likes.find(params[:id])
  end

  def like_params
    params.require(:like).permit(:post_id)
  end
end
