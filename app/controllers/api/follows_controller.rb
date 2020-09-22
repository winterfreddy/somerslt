class Api::FollowsController < ApplicationController
    before_action :require_user, only: [:create, :destroy]

    def index

    end

    def create

    end

    def destroy

    end

    private
    def follow_params
        self.params.require(:follow).permit(:follower_id, :followee_id)
    end
end
