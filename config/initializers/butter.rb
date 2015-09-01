Buttercms.configure do |config|
  # If you added the Heroku Butter add-on, ENV["BUTTER_TOKEN"] will be defined.
  # Otherwise, grab your token at https://buttercms.com/api_token and either
  # paste it below or set it on your ENV like so: $ export BUTTER_TOKEN=yourtokenhere"
  config.token = ENV["BUTTER_TOKEN"]

  # Specify a custom layout for your blog so it matches the rest of your site.
  # For example uncomment the line below and define the layout in /view/layout/blog.html.erb
  # You can of course also use your existing main application layout.
  # config.layout = "blog"
end