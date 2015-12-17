class ApplicationController < ActionController::Base
  require 'auth_token'
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :null_session

  helper_method :current_user, :logged_in?

  def current_user
    @current_user 
  end

  def logged_in?
    current_user != nil
  end

  # def authenticate!
  #   begin
  #     token = request.headers['Authorization'].split(' ').last
  #     payload, header = AuthToken.valid?(token)
  #     @current_user = User.find_by(id: payload['user_id'])
  #   rescue
  #     render json: { error: 'Authorization header not valid'}, status: :unauthorized
  #   end
  # end

end
