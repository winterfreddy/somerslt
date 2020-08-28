class Api::BlogsController < ApplicationController
    before_action :require_user, only: [:create, :update, :destroy]

    def index
        @blogs = Blog.all
        render :index
    end

    def show
        @blog = Blog.find_by(id: params[:id])
        if @blog
            render :show
        else
            render json: ['Fetching blog failed: That blog does not exist'], status: 422
        end
    end

    def create
        @blog = Blog.new(blog_params)
        if @blog.save!
            render :show
        else
            render json: @blog.errors.full_messages, status: 422
        end
    end

    def update
        @blog = Blog.find_by(id: params[:id])
        # @blog = Blog.find_by(id: params[:blog][:formId])
        if @blog && @blog.update!(blog_params)
        # if @blog && @blog.update!({"title": :title, "body": :body, "media_type": :media_type, "author_id": :author_id, :photo})
            render :show
        elsif !@blog
            render json: ["Updating blog failed: That blog does not exist"], status: 422
        else
            render json: @blog.errors.full_messages, status: 422
        end
    end

    def destroy
        @blog = Blog.find_by(id: params[:id])
        if @blog
            @blog.destroy
        else
            render json: ["Deleting blog failed: That blog does not exist"], status: 422
        end
    end

    private
    def blog_params
        # self.params.require(:blog).permit(:title, :body, :media_type, :author_id, :photo, :formId)
        self.params.require(:blog).permit(:title, :body, :media_type, :author_id, :photo)
    end

end
