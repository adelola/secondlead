require 'open-uri'

class ScrapeDramaContent

  def initialize(url)
    begin
      file = open(url)
      @doc = Nokogiri::HTML(file) do
      end
      binding.pry
    rescue OpenURI::HTTPError => e
      if e.message == '404 Not Found'
        @doc = false
      else
        raise e
      end
    end
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
      @doc.search('.card > .card-content > .left').map { |element| element.inner_text }[0].gsub(/[a-z]/i, "").strip
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
    @doc.search('.badge').map { |element| element.inner_text }[0]
  end

  def scrape_cast
    @doc.search('.actor-info h4 > a').map { |element| element.inner_text }
  end

  def scrape_genre
    @doc.search('.section > .badge').map { |element| element.inner_text }[1..-1]
  end

  def add_content_to_db
    if @doc != false
      if scrape_image_url != nil
        @drama = Drama.create!(name: scrape_name, poster: URI.parse("http:" + scrape_image_url))
      else
        @drama = Drama.create!(name: scrape_name)
      end
      @drama.update_attributes(
        non_english_name: scrape_non_english_name,
        episode_count:    scrape_episode_count,
        release_date:     scrape_release_date,
        plot:             scrape_plot,
        language:         scrape_language
      )
      if scrape_genre.any?
        scrape_genre.each do |genre|
          @drama.genres.find_or_create_by(name: genre)
        end
      end
      scrape_cast.each do |cast|
        @drama.casts.find_or_create_by(name: cast)
      end
    end
  end
end
