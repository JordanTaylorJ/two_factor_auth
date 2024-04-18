class UsersController < ApplicationController

    def create
        user = User.create(user_params)
        if user.valid?
            session[:user_id] = user.id 
            render json: user, status: :ok
        else 
            render json: {errors: user.errors.full_messages}, status: :unprocessable_entitiy 
        end
    end

    def user_params
        params.permit(:username, :password, :password_confirmation, :first_name, :last_name, :email)
    end

end
