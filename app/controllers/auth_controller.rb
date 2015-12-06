class AuthController < ApplicationController
  before_action :validate_token

  class InvalidTokenError < StandardError; end

  private

  def authenticate

  	user = User.find_by_credentials(params[:username], params[:password]) # you'll need to implement this
    if user
      render json: { auth_token: user.generate_auth_token }
    else
      render json: { error: 'Invalid username or password' }, status: :unauthorized
    end
  	# begin
   #    authorization = request.headers['Authorization']
   #    raise InvalidTokenError if authorization.nil?

   #    token = request.headers['Authorization'].split('').last
   #    decoded_token = AuthToken.valid?(token)

   #    raise InvalidTokenError if Rails.application.secrets.client_id != decoded_token[0]['aud']

   #    @user = decoded_token
   #  rescue JWT::DecodeError, InvalidTokenError
   #    render :json => {:error => "Unauthorized: Invalid token."}, status: :unauthorized
   #  end
  end

end 