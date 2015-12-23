class SessionsController < ApplicationController

  respond_to :json

  def create
    @user = User.find_by_username(params[:username])
    token = AuthToken.issue_token({user_id: @user.id })


    # if @user && @user.authenticate(params[:session][:password])
    #   session[:user_id] = @user.id
    #   redirect_to user_path(@user)

    #   repond_with
    # else
    #   render '/sessions/new'
    # end
  end

  def destroy
    # session[:user_id] = nil
    redirect_to root_url, :notice => "Logged out!"
  end

end