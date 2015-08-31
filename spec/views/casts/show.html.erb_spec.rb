require 'rails_helper'

RSpec.describe "casts/show", type: :view do
  before(:each) do
    @cast = assign(:cast, Cast.create!(
      :name => "Name"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/Name/)
  end
end
