class Api::SessionsController < ApplicationController

    def new
        
    end

    def create
        @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
        if @user
            login_user(@user)
            redirect_to api_user_url(@user)
        else
            render json: ["Incorrect email/password combination"], status: 422
        end
    end

    def destroy
        if current_user
            logout_user
            render json: {}
        else
            render json: ["No current user"], status: 422
        end
    end

end
