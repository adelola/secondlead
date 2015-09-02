require 'rails_helper'

RSpec.describe User, type: :model do
  before(:all) do
    DatabaseCleaner.strategy = :transaction
  end

  before(:each) do
    DatabaseCleaner.start
  end

  after(:each) do
    DatabaseCleaner.clean
  end

  it "is invalid without first name" do
    @user = FactoryGirl.build(:user, :first_name=> nil)
    expect(@user).to have(1).errors_on(:first_name)
  end

  it "is invalid without last_name" do
    @user = FactoryGirl.build(:user, :last_name=> nil)
    expect(@user).to have(1).errors_on(:last_name)
  end
  
  it "is invalid without email" do
    @user = FactoryGirl.build(:user, :email=> nil)
    expect(@user).to have(2).errors_on(:email)
  end
  
  it "is invalid without a username" do
    @user = FactoryGirl.build(:user, :username=> nil)
    expect(@user).to have(1).errors_on(:username)
  end

  it "is invalid without a password" do
    @user = FactoryGirl.build(:user, :password=> nil)
    expect(@user).to have(3).errors_on(:password)
  end
  
  it "is invalid if passwords don't match" do
    @user = FactoryGirl.build(:user, :password => "password01", :password_confirmation => "password02")
    expect(@user).to have(1).errors_on(:password_confirmation)
  end
  
end

RSpec.describe User, type: :model do
  it "is valid" do
    @user = FactoryGirl.create(:user)
    expect(@user).to be_valid
  end
end
