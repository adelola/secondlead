require 'open-uri'

class ScrapeList

  def initialize
    url = "http://asianwiki.com/index.php?title=Category:TV-Dramas&from=0"
    @doc = Nokogiri::HTML(open(url))
  end

  def scrape_drama_list
    @doc.search('table ul > li').map { |element| element.inner_text }
  end

  def scrape_drama_url
    @doc.search('table ul > li a').map { |element| element['href'] }
  end

  def add_drama_to_db
    scrape_drama_list.count.times do |num|
      Drama.create!(name: scrape_drama_list[num-1], url: "http://asianwiki.com" + scrape_drama_url[num-1])
    end
  end
end