class Api::FollowsController < ApplicationController
    before_action :require_user, only: [:create, :destroy]

    def index
        @active_relationships = current_user.active_relationships
        @passive_relationships = current_user.passive_relationships
    end

    def create
        @followee_user = User.find(params[:relationship][:followee_id])
        @relationship = current_user.active_relationships.new(followee_id: @followee_user.id)
        if @relationship.save!
            flash[:message] = "Follow successful"
        else
            flash[:message] = "Follow unsuccessful"
        end
    end

    def destroy
        @relationship = Follow.find_by(id: params[:id])
        if @relationship.follower_user == current_user
            @relationship.destroy
            flash[:message] = "Unfollowed"
        end
    end

    private
    def follow_params
        self.params.require(:follow).permit(:follower_id, :followee_id)
    end
end
