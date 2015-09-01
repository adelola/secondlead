require 'rails_helper'

RSpec.describe "casts/edit", type: :view do
  before(:each) do
    @cast = assign(:cast, Cast.create!(
      :name => "MyString"
    ))
  end

  it "renders the edit cast form" do
    render

    assert_select "form[action=?][method=?]", cast_path(@cast), "post" do

      assert_select "input#cast_name[name=?]", "cast[name]"
    end
  end
end
