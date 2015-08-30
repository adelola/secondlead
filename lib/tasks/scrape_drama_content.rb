require 'open-uri'

class ScrapeDramaContent

  def initialize(url)
    @doc   = Nokogiri::HTML(open(url))
    add_content_to_db
  end

  def scrape_name
    if @doc.search('#mw-content-text ul > li:nth-child(1)').map { |element| element.inner_text }[1] != nil
      @doc.search('#mw-content-text ul > li:nth-child(1)').map { |element| element.inner_text }[1].gsub(/( Drama: )/, "").chomp
    else
      nil
    end
  end

  def scrape_non_english_name
    @doc.search('#mw-content-text ul > li:nth-child(3)').map { |element| element.inner_text }[1].gsub(/[a-z: \\\n]/i, "")
  end

  def scrape_episode_count
    if @doc.search('#mw-content-text ul > li:nth-child(7)').map { |element| element.inner_text }[0].to_i != 0
      @doc.search('#mw-content-text ul > li:nth-child(7)').map { |element| element.inner_text }[0].gsub(/[a-z: \\\n]/i, "").to_i
    else
      nil
    end
  end

  def scrape_release_date
    if @doc.search('#mw-content-text ul > li:nth-child(8)').map { |element| element.inner_text }[0] != nil
      @doc.search('#mw-content-text ul > li:nth-child(8)').map { |element| element.inner_text }[0].gsub(/(Release Date: )/, "").chomp
    else
      nil
    end
  end

  def scrape_language
    if @doc.search('#mw-content-text ul > li:nth-child(10)').map { |element| element.inner_text }[0] != nil
      @doc.search('#mw-content-text ul > li:nth-child(10)').map { |element| element.inner_text }[0].gsub(/(Language: )/, "").chomp
    else
      nil
    end
  end

  def scrape_plot
    if @doc.search('#mw-content-text > p').map { |element| element.inner_text }[3] != nil
      @doc.search('#mw-content-text > p').map { |element| element.inner_text }[3].chomp
    else
      nil
    end
  end

  def scrape_image_url
    if @doc.search('.thumbinner a > img').map { |element| element['src'] }[0] != nil
    "http://asianwiki.com" + @doc.search('.thumbinner a > img').map { |element| element['src'] }[0]
    else
      nil
    end
  end
e
  def add_content_to_db
    if scrape_image_url != nil
      @drama = Drama.create!(name: scrape_name, poster: URI.parse(Drama.first.image_url))
    else
      @drama.create!(name: scrape_name)
    end
    @drama.update_attributes(
      non_english_name: scrape_non_english_name,
      episode_count:    scrape_episode_count,
      release_date:     scrape_release_date,
      language:         scrape_language,
      image_url:        scrape_image_url,
      plot:             scrape_plot
    )
  end
end
