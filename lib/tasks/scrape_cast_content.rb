require 'open-uri'

class ScrapeCastContent

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
    scrape_info
    add_content_to_db
  end

  def age(dob)
    now = Time.now.utc.to_date
    now.year - dob.year - ((now.month > dob.month || (now.month == dob.month && now.day >= dob.day)) ? 0 : 1)
  end

  def scrape_info
    @doc.search('.dl-horizontal > dt').map { |element| element.inner_text }.each_with_index do |header, index|
      contents = @doc.search('.dl-horizontal > dd').map { |element| element.inner_text }
      if (/born/i =~ header) == 0
        @dob = Date.parse(contents[index].split("(").first)
        @age = age(@dob)
      elsif (/blood type/i =~ header) == 0
        @blood_type = contents[index]
      elsif (/star sign/i =~ header) == 0
        @star_sign = contents[index]
      elsif (/height/i =~ header) == 0
        @height = contents[index]
      elsif (/weight/i =~ header) == 0
        @weight = contents[index]
      end
    end
  end

  def scrape_name
    @doc.search('.display-2').map { |element| element.inner_text }[0].strip
  end

  def scrape_non_english_name
    if @doc.search('.billboard-desc-title').map { |element| element.inner_text }[0] != nil
      @doc.search('.billboard-desc-title').map { |element| element.inner_text }[0].strip
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
      end
    end
  end
end