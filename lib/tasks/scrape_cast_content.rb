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
    binding.pry
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

      if /born/i =~ header
        @dob = Date.parse(contents[index].split("(").first)
        @age = age(@dob)
      elsif /blood type/i =~ header
        @blood_type = contents[index]
      elsif /star sign/i =~ header
        @star_sign = contents[index]
      elsif /height/i =~ header
        @height = contents[index]
      elsif /weight/i =~ header
        @weight = contents[index]
      end
    end
  end

  def scrape_non_english_name
    if @doc.search('.billboard-desc-title').map { |element| element.inner_text }[0] != nil
      @doc.search('.billboard-desc-title').map { |element| element.inner_text }[0].strip
    else
      nil
    end
  end

  def add_content_to_db
    if @doc != false
      cast = Cast.where(name: scrape_name, non_english_name: scrape_non_english_name).first_or_create
      DramaCast.create(cast: cast, drama: @drama)
    end
  end
end