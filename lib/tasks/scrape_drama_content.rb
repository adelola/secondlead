require 'open-uri'

class ScrapeDramaContent

  def initialize(id)
    @drama = Drama.find(id.to_s)
    @doc   = Nokogiri::HTML(open(@drama.url))
    add_content_to_db
  end

  def scrape_non_english_namer
    @doc.search('#mw-content-text ul > li:nth-child(3)').map { |element| element.inner_text}[1].gsub(/[a-z: \\\n]/i, "")
  end

  def scrape_episode_count
    @doc.search('#mw-content-text ul > li:nth-child(7)').map { |element| element.inner_text}[0].gsub(/[a-z: \\\n]/i, "").to_i
  end

  def scrape_release_date
    @doc.search('#mw-content-text ul > li:nth-child(8)').map { |element| element.inner_text}[0].gsub(/(Release Date: )/, "").chomp
  end

  def scrape_release_date
    @doc.search('#mw-content-text ul > li:nth-child(10)').map { |element| element.inner_text}[0].gsub(/(Language: )/, "").chomp
  end

  def add_content_to_db
    @drama.update_attributes(non_english_name: scrape_non_english_name)
  end
end

# @doc   = Nokogiri::HTML(open(Drama.first.url))