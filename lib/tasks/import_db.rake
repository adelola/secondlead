require_relative 'scrape_list'
require_relative 'scrape_drama_content'

namespace :db do

  desc "Import data from scraping Asian Drama Wiki"
  task :import_db => :environment do
    ScrapeList.new.add_drama_to_db

    count = Drama.count

    count.times do |num|
      ScrapeDramaContent.new(num + 1)
    end
  end
end