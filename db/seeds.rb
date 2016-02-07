# (4630..4730).each do |num|
#   ScrapeDramaContent.new("https://www.dramafever.com/drama/#{num}")
# end

# 244 pages on Viki
# (2..2).each do |num|
#   ScrapeVikiForDramaUrls.new("https://www.viki.com/explore?page=#{num}&sort=latest").urls.each do |url|
#     ScrapeVikiDramaContent.new(url)
#   end
# end