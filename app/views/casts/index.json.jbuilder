json.array!(@casts) do |cast|
  json.extract! cast, :id, :name
  json.url cast_url(cast, format: :json)
end
