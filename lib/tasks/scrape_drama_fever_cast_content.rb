require 'open-uri'

class ScrapeDramaFeverCastContent

  def initialize(url, drama)
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
    @drama = drama
    @dob = nil
    @blood_type = nil
    @age = nil
    @weight = nil
    @height = nil
    @star_sign = nil
    add_content_to_db
  end

  def age(dob)
    now = Time.now.utc.to_date
    now.year - dob.year - ((now.month > dob.month || (now.month == dob.month && now.day >= dob.day)) ? 0 : 1)
  end

  def scrape_name
    if @doc.search('.actor-stat-box h3').map { |element| element.inner_text }[0] != nil
      @doc.search('.actor-stat-box h3').map { |element| element.inner_text }[0].strip
    else
      nil
    end
  end

  def scrape_info
    @doc.search('.actor-vitals > li').map { |element| element.inner_text }.each do |stat|
      if stat =~ /birth/i
        @dob = Date.parse(stat.split(":")[1])
        @age = age(@dob)
      elsif stat =~ /height/i
        @height = stat.split(":")[1]
      elsif stat =~ /weight/i
        @weight = stat.split(":")[1]
      end
    end
  end

  def scrape_star_sign
    @doc.search('.stat-zodiac > img').map { |element| element['title'] }[0]
  end

  def scrape_star_sign
    @doc.search('.stat-btype').map { |element| element.inner_text }[0]
  end

  def scrape_dob
    if @doc.search('.actor-vitals > li').map { |element| element.inner_text }[0] != nil
      @doc.search('.actor-stat-box h3').map { |element| element.inner_text }[0].strip
    else
      nil
    end
  end

  def scrape_image_url
    if @doc.search('.keyart > img').map { |element| element['src'] }[0] != nil
      "https:" + @doc.search('.keyart > img').map { |element| element['src'] }[0]
    else
      nil
    end
  end

  def add_content_to_db
    if @doc != false
      cast = Cast.where(
        name: scrape_name,
        non_english_name: scrape_non_english_name,
        dob: @dob,
        blood_type: @blood_type,
        age: @age,
        weight: @weight,
        height: @height,
        star_sign: @star_sign
        ).first_or_create
      DramaCast.create(cast: cast, drama: @drama)
      if scrape_image_url != nil
        cast.update(picture: URI.parse(scrape_image_url))
        cast.add_image_url
        cast.save
      end
    end
  end
end