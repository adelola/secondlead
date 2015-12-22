require 'jwt'

module AuthToken
  def self.issue_token(payload, exp=24.hours.from_now)
    payload['exp'] = exp.to_i 
    # payload['aud'] = Rails.application.secrets.client_id
    JWT.encode(payload, Rails.application.secrets.client_secret, 'HS256')
  end

  def self.valid?(token)
    begin 
      JWT.decode(token, Rails.application.secrets.client_secret, true, { :algorithm => 'HS256' })
    rescue
      false
    end 
  end

end