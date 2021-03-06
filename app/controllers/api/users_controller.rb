class Api::UsersController < ApplicationController
    before_action :require_user, only: [:show]

    def index
        @users = User.all
    end

    def show
        @user = User.find_by(id: params[:id])
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login_user(@user)
            render :show
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    private
    def user_params
        self.params.require(:user).permit(:username, :email, :password)
    end
end
