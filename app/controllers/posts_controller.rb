class PostsController < ApplicationController
  include SuggestedUsers

  before_action :set_post, only: %i[show]
  before_action :set_suggested_users, only: %i[index]

  def index
    @posts = Post.all.order(created_at: :desc)
  end

  def show
    @comment = Comment.new
  end

  def new
    @post = Post.new
  end

  def create
    @post = current_user.posts.new(post_params)

    if @post.save
      # Set flash notice and respond with Turbo Stream
      flash[:notice] = "Post criado com sucesso!"
      
      respond_to do |format|
        format.html { redirect_to @post, notice: flash[:notice] }
        format.turbo_stream do
          # Render Turbo Stream to append the new post to the posts list
          render turbo_stream: turbo_stream.append("posts", target: "posts", html: render_to_string(partial: "posts/post", locals: { post: @post }))
        end
      end
    else
      flash.now[:alert] = @post.errors.full_messages.to_sentence
      
      respond_to do |format|
        format.html { render :new }
        format.turbo_stream do
          # Render Turbo Stream to show the flash alert message
          render turbo_stream: turbo_stream.append("flash_notifications", target: "flash-notifications", html: "<p>#{flash.now[:alert]}</p>")
        end
      end
    end
  end

  private

  def set_post
    @post = Post.find(params[:id])
  end

  def post_params
    params.require(:post).permit(:photo, :description)
  end
end
