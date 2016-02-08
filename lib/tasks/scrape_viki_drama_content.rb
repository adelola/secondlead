require 'open-uri'

class ScrapeVikiDramaContent

  def initialize(url)
    begin
      file = open(url)
      @doc = Nokogiri::HTML(file) do
      end
    rescue OpenURI::HTTPError => e
      if e.message == '404 Not Found'
        @doc = false
      else
        raise e
      end
    end
    @url = url
    @original_title = nil
    @romanized_title = nil
    @also_known_as = nil
    @network = nil
    @broadcast_period = nil
    @rating = nil
    scrape_info
    add_content_to_db
  end

  def scrape_name
    @doc.search('.display-2').map { |element| element.inner_text }[0].strip
  end

  def scrape_info
    @doc.search('.dl-horizontal > dt').map { |element| element.inner_text }.each_with_index do |header, index|
      contents = @doc.search('.dl-horizontal > dd').map { |element| element.inner_text }

      if /original title/i =~ header
        @original_title = contents[index]
      elsif /romanized title/i =~ header
        @romanized_title = contents[index]
      elsif /Also known as/i =~ header
        @also_known_as = contents[index]
      elsif /Broadcast Network/i =~ header
        @network = contents[index]
      elsif /Broadcast Period/i =~ header
        @broadcast_period = contents[index]
      elsif /Rating/i =~ header
        @rating = contents[index]
      end
    end
  end

  def scrape_episode_count
    if @doc.search('.card > .card-content > .left').map { |element| element.inner_text }[0] != nil
      @doc.search('.card > .card-content > .left').map { |element| element.inner_text }[0].gsub(/[a-z]/i, "").strip.to_i
    else
      nil
    end
  end

  def scrape_plot
    if @doc.search('.js-text-truncate').map { |element| element.inner_text }[0] != nil
      @doc.search('.js-text-truncate').map { |element| element.inner_text }[0].strip
    else
      nil
    end
  end

  def scrape_image_url
    if @doc.search('.billboard-image > img').map { |element| element['srcset'] }[0] != nil
      @doc.search('.billboard-image > img').map { |element| element['srcset'] }[0].split(",").last.split(" ")[0].strip
    else
      nil
    end
  end

  def scrape_language
    @doc.search('.section > .badge').map { |element| element.inner_text }[0]
  end

  def scrape_cast_urls
    @doc.search('.thumbnail-description > a').map { |element| element["href"] }.map do |url|
      "https://www.viki.com/" + url
    end
  end

  def scrape_genre
    @doc.search('.section > .badge').map { |element| element.inner_text }[1..-1]
  end

  def add_content_to_db
    if @doc != false
      if scrape_image_url != nil
        @drama = Drama.create!(name: scrape_name, poster: URI.parse(scrape_image_url))
        @drama.image_url = @drama.poster.url
        @drama.save
      else
        @drama = Drama.create!(name: scrape_name)
      end
      @drama.update_attributes(
        non_english_name: @original_title,
        episode_count:    scrape_episode_count,
        plot:             scrape_plot,
        language:         scrape_language,
        broadcast_period: @broadcast_period,
        romanized_title:  @romanized_title,
        also_known_as:    @also_known_as,
        network:          @network,
        rating:           @rating,
        viki_url:         @url
      )
      if scrape_genre.any?
        scrape_genre.each do |name|
          genre = Genre.where(name: name).first_or_create
          DramaGenre.create(genre: genre, drama: @drama)
        end
      end
      if scrape_cast_urls.any?
        scrape_cast_urls.each do |url|
          ScrapeCastContent.new(url, @drama)
        end
      end
    end
  end
end
