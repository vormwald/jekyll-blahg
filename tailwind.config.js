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
  theme: {
    extend: {
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.gray.600"),
            "--tw-prose-headings": theme("colors.gray.800"),
            "--tw-prose-links": theme("colors.gray.800"),
            "--tw-prose-links-hover": theme("colors.gray.700"),
            "--tw-prose-underline": theme("colors.gray.600 / 0.2"),
            "--tw-prose-underline-hover": theme("colors.gray.700"),
            "--tw-prose-bold": theme("colors.gray.900"),
            "--tw-prose-counters": theme("colors.gray.900"),
            "--tw-prose-bullets": theme("colors.gray.900"),
            "--tw-prose-hr": theme("colors.gray.600"),
            "--tw-prose-quote-borders": theme("colors.gray.400"),
            "--tw-prose-captions": theme("colors.gray.400"),
            "--tw-prose-code": theme("colors.gray.700"),
            "--tw-prose-code-bg": theme("colors.gray.800 / 0.2"),
            "--tw-prose-pre-code": theme("colors.gray.100"),
            "--tw-prose-pre-bg": theme("colors.gray.900"),
            "--tw-prose-pre-border": theme("colors.gray.300"),
            "--tw-prose-th-borders": "none",
            "--tw-prose-td-borders": "none",

            "--tw-prose-invert-body": theme("colors.gray.300"),
            "--tw-prose-invert-headings": theme("colors.gray.300"),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-links-hover": theme("colors.gray.400"),
            "--tw-prose-invert-underline": theme("colors.gray.400 / 0.3"),
            "--tw-prose-invert-underline-hover": theme("colors.gray.400"),
            "--tw-prose-invert-bold": theme("colors.gray.200"),
            "--tw-prose-invert-counters": theme("colors.gray.200"),
            "--tw-prose-invert-bullets": theme("colors.gray.200"),
            "--tw-prose-invert-hr": theme("colors.gray.700 / 0.4"),
            "--tw-prose-invert-quote-borders": theme("colors.gray.500"),
            "--tw-prose-invert-captions": theme("colors.gray.500"),
            "--tw-prose-invert-code": theme("colors.gray.300"),
            "--tw-prose-invert-code-bg": theme("colors.gray.200 / 0.05"),
            "--tw-prose-invert-pre-code": theme("colors.gray.100"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 0.4)",
            "--tw-prose-invert-pre-border": theme("colors.gray.200 / 0.1"),
            "--tw-prose-invert-th-borders": "none",
            "--tw-prose-invert-td-borders": "none",

            h1: {
              fontSize: "1.7rem",
              marginTop: "1.5rem",
              marginBottom: "1.25rem",
              fontWeight: "normal",
            },
            h2: {
              color: theme("colors.neutral.500"),
              fontSize: "1.65rem",
              marginTop: "1.5rem",
              marginBottom: "1.25rem",
              fontWeight: "normal",
            },
            h3: {
              color: "--tw-prose-body",
              fontSize: "1.4rem",
              marginTop: "1rem",
              marginBottom: "0.5rem",
              fontWeight: "bold",
              textAlign: "center",
            },
            h4: {
              fontSize: "1.1rem",
              marginTop: "1rem",
              marginBottom: "0.5rem",
              fontWeight: "bold",
            },
            h5: {
              fontSize: "0.875rem",
              marginTop: "1rem",
              marginBottom: "0.5rem",
              fontWeight: "bold",
            },
            h6: {
              fontSize: "0.75rem",
              marginTop: "1rem",
              marginBottom: "0.5rem",
              fontWeight: "bold",
            },
            p: {
              marginTop: "1rem",
              marginBottom: "1rem",
              fontSize: "1.1rem",
            },
            "code::before": {
              content: "none",
            },
            "code::after": {
              content: "none",
            },
            code: {
              backgroundColor: theme("colors.gray.800 / 0.2"),
              paddingLeft: "0.2rem",
              paddingRight: "0.2rem",
              paddingTop: "0.1rem",
              paddingBottom: "0.1rem",
            },
            strong: {
              fontWeight: "bold",
            },
            pre: {
              borderRadius: "0",
            },
            hr: {
              marginTop: "1rem",
              marginBottom: "1rem",
            },
            li: {
              marginTop: "0.1rem",
              marginBottom: "0.1rem",
            },
            blockquote: {
              fontSize: "1.1rem",
              marginTop: "1rem",
              marginBottom: "1rem",
              paddingLeft: "1rem",
              border: "1px solid #3d3d3d",
              padding: ".5rem",
              quotes: "none",
            },
            "tbody tr": {
              borderBottomWidth: "0",
            },
            thead: {
              borderBottom: "none",
            },
            "thead th, th": {
              textAlign: "center !important",
              fontWeight: "bold",
              padding: "0.5rem",
              fontSize: "1.1rem",
            },
          },
        },
      }),
    },
  },
  darkMode: "media",
  plugins: [typographyPlugin],
};
