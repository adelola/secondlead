require_relative 'scrape_list'
require_relative 'scrape_drama_content'

namespace :db do

  desc "Import data from scraping Asian Drama Wiki"
  task :import_db => :environment do
    urls = ScrapeList.drama_url
    urls.each do |url|
      ScrapeDramaContent.new(url)
    end
  end
end