/**
 * Tailwind CSS Configuration
 * Ensures shadcn/ui and custom components use CSS variables for backgrounds.
 */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        card: "var(--card)",
        popover: "var(--popover)",
        // Add more as needed
      },
    },
  },
  plugins: [],
};
