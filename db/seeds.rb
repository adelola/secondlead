# (4741..4741).each do |num|
#   ScrapeDramaFeverDramaContent.new("https://www.dramafever.com/drama/#{num}")
# end

244 pages on Viki
(4..4).each do |num|
  ScrapeVikiForDramaUrls.new("https://www.viki.com/explore?page=#{num}&sort=latest").urls.each do |url|
    ScrapeVikiDramaContent.new(url)
  end
end