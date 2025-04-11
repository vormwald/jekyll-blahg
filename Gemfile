source "https://rubygems.org"
gem "jekyll", "~> 4.3.0"
gem "csv"

# Ruby 3 no longer includes webrick, which is used for jekyll serve
gem "webrick", group: :development

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
  gem "jekyll-tailwindcss"
  gem "jemoji"
  gem "jekyll-paginate-v2"
  gem "jekyll-tagging"
  gem "tailwindcss-ruby", "~> 3.4"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", platforms: [:mingw, :x64_mingw, :mswin]
