# Cassidy's blog template (in jekyll)

## What is this?

This is a Jekyll port of @cassidoo's blahg template (https://github.com/cassidoo/blahg).

## Why does this exist?

Recently, I wrote up a tailwind CSS plugin for Jekyll that uses tailwindcss-ruby to manage versions, and wanted a demo site that could show off the various configuration options.

Eventually I came across @cassidoo's blahg template, and thought it showed off a timeless blog design infused with some fun.

Currently it's built as a site template. Maybe I'll port it to a jekyll theme gem in the future.


## How to use it

1. Clone the repo
2. Run `bundle install`
3. Run `bundle exec jekyll serve`
4. Open the site in your browser at `http://localhost:4000`

## How to deploy it

I use a github action. See: `.github/workflows/jekyll.yml`

## Important bits

All that's needed to bring tailwindcss into this jekyll site is

```ruby
group :jekyll_plugins do
  # ...
  gem "jekyll-tailwindcss"
end
```

The Tailwind CSS file and definition file is `./_tailwind.css`. It will be processed by the Tailwind CLI and it's content will be put into any `*.tailwindcss` files in your repo. For example, see `assets/css/styles.tailwindcss`

To learn more about the gem head over to https://github.com/vormwald/jekyll-tailwindcss

### What If I want tailwind v3?

See the `v3` branch, and how it includes:
* ruby-tailwindcss pinned to a 3.4 version
* tailwind.config.js with a setting in _config.yml
* a CSS file with frontmatter that gets converted
