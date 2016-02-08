require 'open-uri'

class ScrapeDramaFeverDramaContent

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
    binding.pry
    add_content_to_db
  end

  def scrape_name
    @doc.search('.info-card h3 > span').map { |element| element.inner_text }[0]
  end

  def scrape_non_english_name
    if @doc.search('.info-card h3 > span').map { |element| element.inner_text }[1] != nil
      @doc.search('.info-card h3 > span').map { |element| element.inner_text }[1].gsub(/[()]/, "").gsub(/\s+/, "")
    else
      nil
    end
  end

  def scrape_episode_count
    if @doc.search('.quickview').map { |element| element.inner_text }[0] != nil
      @doc.search('.quickview').map { |element| element.inner_text }[0].gsub(/[a-z\-|]/i, "").slice(2..3)
    else
      nil
    end
  end

  def scrape_network
    if @doc.search('.quickview').map { |element| element.inner_text }[0] != nil
      @doc.search('.quickview').map { |element| element.inner_text }[0].split("|")[1].strip
    else
      nil
    end
  end

  def scrape_release_date
    if @doc.search('.quickview').map { |element| element.inner_text }[0] != nil
      @doc.search('.quickview').map { |element| element.inner_text }[0].gsub(/[a-z\-|]/i, "").slice(-4..-1)
    else
      nil
    end
  end

  def scrape_plot
    if @doc.search('.synopsis').map { |element| element.inner_text }[0] != nil
      @doc.search('.synopsis').map { |element| element.inner_text }[0].strip
    else
      nil
    end
  end

  def scrape_image_url
    if @doc.search('.series-thumbnail > img').map { |element| element['src'] }[0] != nil
      @doc.search('.series-thumbnail > img').map { |element| element['src'] }[0]
    else
      nil
    end
  end

  def scrape_cast
    @doc.search('.actor-info h4 > a').map { |element| element.inner_text }
  end

  def scrape_genre
    @doc.search('.theme-list li > a').map { |element| element.inner_text }
  end

  def find_drama
    Drama.find_by_non_english_name(scrape_non_english_name)
  end

  def is_in_database?
    find_drama.nil?
  end

  def add_content_to_db
    if @doc != false
      if is_in_database?
        find_drama.update(drama_fever_url: @url)
      else
        if scrape_image_url != nil
          @drama = Drama.create!(name: scrape_name, poster: URI.parse("https:" + scrape_image_url))
        else
          @drama = Drama.create!(name: scrape_name)
        end
        @drama.update_attributes(
          non_english_name: scrape_non_english_name,
          episode_count:    scrape_episode_count,
          release_date:     scrape_release_date,
          plot:             scrape_plot,
          network:          scrape_network,
          drama_fever_url:  @url
        )
        scrape_genre.each do |genre|
          @drama.genres.find_or_create_by(name: genre)
        end
        scrape_cast.each do |cast|
          @drama.casts.find_or_create_by(name: cast)
        end
      end
    end
  end
end
