require 'open-uri'

class Drama < ActiveRecord::Base

  def initialize
    @doc = Nokogiri::HTML(open("http://asianwiki.com/index.php?title=Category:TV-Dramas&from=0"))
    @drama_list = []
    @drama_list_url = []
  end

  def self.drama_name_list_scraper
    @drama_list = @doc.search('table ul > li').map { |span| span.inner_text}
  end

  def self.drama_uri_list_scraper
    @drama_list_url = @doc.search('table ul > li a').map { |element| element['href']}
  end

end
