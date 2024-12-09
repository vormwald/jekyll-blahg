const typographyPlugin = require("@tailwindcss/typography");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_drafts/**/*.md",
    "./_includes/**/*.html",
    "./_layouts/**/*.html",
    "./_pages/*.html",
    "./_posts/*.md",
    "./til/*.html",
    "./*.md",
    "./*.html",
  ],
  darkMode: "media", // 'class' or 'media' if you prefer automatic switching based on user's system preferences
  plugins: [typographyPlugin],
};
