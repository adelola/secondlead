require 'open-uri'

class ScrapeList

  def self.parse
    url = "http://asianwiki.com/index.php?title=Category:TV-Dramas&from=0"
    Nokogiri::HTML(open(url))
  end

  def self.scrape_drama_url
    parse.search('table ul > li a').map { |element| element['href'] }
  end

  def self.drama_url
    scrape_drama_url.map do |url|
     "http://asianwiki.com" + url
    end
  end
end