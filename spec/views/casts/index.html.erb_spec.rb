require 'rails_helper'

RSpec.describe "casts/index", type: :view do
  before(:each) do
    assign(:casts, [
      Cast.create!(
        :name => "Name"
      ),
      Cast.create!(
        :name => "Name"
      )
    ])
  end

  it "renders a list of casts" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
  end
end
