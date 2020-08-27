class Api::LikesController < ApplicationController
    # before_action :require_user, only: [:create, :destroy]

    def create
        @like = Like.new(like_params)
        if @like.save!
            @blog = @like.blog
            redirect_to api_blog_url(@blog)
        else
            render json: @like.errors.full_messages, status: 422
        end
    end

    def destroy
        # @like = current_user.likes.find_by(id: params[:id])
        @like = Like.find_by(id: params[:id])
        if @like
            @like.destroy
        else
            render json: ["Deleting like failed: That blog does not exist"], status: 422
        end
    end

    private
    def like_params
        self.params.require(:like).permit(:blog_id, :user_id)
    end
end
