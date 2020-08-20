class Api::BlogsController < ApplicationController

    def index

    end

    def show

    end

    def create

    end

    def update

    end

    def destroy

    end

    private
    def blog_params
        self.params.require(:blog).permit(:title, :body, :author_id)
    end

end
