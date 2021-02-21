const getIconPath = require.context(
  "./assets/img/favicons/",
  false,
  /\.(png|svg)$/i
);

export default function changeFavicon(theme?: "light" | "dark"): void {
  const icons = {
    light: [
      {
        type: "image/svg+xml",
        sizes: "any",
        name: "./favicon.svg",
      },
      {
        type: "image/png",
        sizes: "48x48",
        name: "./favicon@48.png",
      },
      {
        type: "image/png",
        sizes: "32x32",
        name: "./favicon@32.png",
      },
      {
        type: "image/png",
        sizes: "16x16",
        name: "./favicon@16.png",
      },
    ],
    dark: [
      {
        type: "image/svg+xml",
        sizes: "any",
        name: "./favicon-dark.svg",
      },
      {
        type: "image/png",
        sizes: "48x48",
        name: "./favicon-dark@48.png",
      },
      {
        type: "image/png",
        sizes: "32x32",
        name: "./favicon-dark@32.png",
      },
      {
        type: "image/png",
        sizes: "16x16",
        name: "./favicon-dark@16.png",
      },
    ],
  };

  icons[theme || "dark"].forEach((val) => {
    document.head.insertAdjacentHTML(
      "beforeend",
      `<link
      rel="icon"
      type="${val.type}"
      sizes="${val.sizes}"
      href="${getIconPath(val.name)}"
      />`
    );
  });
}
