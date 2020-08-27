class Api::FollowsController < ApplicationController

    def create
        @follow = current_user.following.create!(followee_id: params[:user_id])
        if @follow.save!
            @users = @follow.followees
            redirect_to api_users_url(@users)
        else
            render json: @follow.errors.full_messages, status: 422
        end
    end

    def destroy
        @follow = current_user.out_follows.find_by(followee_id: params[:user_id])
        if @follow
            @follow.destroy
        end
        render json: ["Unfollowing user failed: Must be following user"], status: 422
    end

end
