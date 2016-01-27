require 'open-uri'

class ScrapeVikiForDramaUrls

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
  end

  def urls
    @doc.search('.thumbnail-wrapper > a').map { |element| element["href"] }.map do |url|
      "https://www.viki.com/" + url
    end
  end
end