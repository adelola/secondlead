require 'rails_helper'

RSpec.describe "Casts", type: :request do
  describe "GET /casts" do
    it "works! (now write some real specs)" do
      get casts_path
      expect(response).to have_http_status(200)
    end
  end
end
