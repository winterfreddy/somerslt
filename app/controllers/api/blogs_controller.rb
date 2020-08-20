class Api::BlogsController < ApplicationController
    # before_action :require_user, only: [:create, :update, :destroy]

    def index
        @blogs = Blog.all
        render :index
    end

    def show
        @blog = Blog.find_by(id: params[:id])
        render :show
    end

    def create
        @blog = Blog.new(blog_params)
        if @blog.save
            render :show
        else
            render json: @blog.errors.full_messages, status: 422
        end
    end

    def update
        @blog = Blog.find_by(id: params[:id])
        if @blog && @blog.update(blog_params)
            render :show
        elsif !@blog
            render json: ["Updating blog failed: That blog does not exist"]
        else
            render json: @blog.errors.full_messages
        end
    end

    def destroy
        @blog = Blog.find_by(id: params[:id])
        if @blog
            @blog.destroy
        else
            render json: ["Deleting blog failed: That blog does not exist"]
        end
    end

    private
    def blog_params
        self.params.require(:blog).permit(:title, :body, :author_id)
    end

end
