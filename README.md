# Cassidy's blog template (in jekyll)

## What is this?

This is a Jekyll port of @cassidoo's blahg template (https://github.com/cassidoo/blahg).

## Why does this exist?

Recently I wrote up a tailwind CSS plugin for Jekyll that uses tailwindcss-ruby to manage versions, and wanted a demo site that could show off the various configuration options.

I had a hard time finding modern, minimal, quirky designs for jekyll. Then I came across @cassidoo's blahg template, and thought it showed off a timeless blog design infused with some quirky colors.

Currently it's built as a site template. Maybe I'll port it to a jekyll theme gem in the future.

## How to use it

1. Clone the repo
2. Run `bundle install`
3. Run `bundle exec jekyll serve`
4. Open the site in your browser at `http://localhost:4000`

## How to deploy it

I use cloudflare pages to deploy this site. It's super easy to set up.

## Fun Fact

All that's needed to bring tailwindcss into this jekyll site is

```ruby
group :jekyll_plugins do
  # ...
  gem "jekyll-tailwindcss"
end
```

and any CSS file with frontmatter and `@import "tailwindcss";`

```css
---
# frontmatter needed for jekyll processing
---

@import "tailwindcss";
```

that's it. To learn more about tailwind configuration options, check their docs.
