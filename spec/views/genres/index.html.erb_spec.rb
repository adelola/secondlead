require 'rails_helper'

RSpec.describe "genres/index", type: :view do
  before(:each) do
    assign(:genres, [
      Genre.create!(
        :name => "Name"
      ),
      Genre.create!(
        :name => "Name"
      )
    ])
  end

  it "renders a list of genres" do
    render
    assert_select "tr>td", :text => "Name".to_s, :count => 2
  end
end
