class AuthController < ApplicationController
  require 'auth_token'

  def login
  	user = User.find_by(username: params[:username]) 
    if user && user.authenticate(params[:password])
      render json: { user: user, token: user.generate_auth_token }
    else
      render json: { error: 'Invalid username/password combination' }, status: :unauthorized
    end
  end
  
  def token_status
    token = params[:token]
    if AuthToken.valid? token
      head 200
    else
      head 401
    end
  end

end 