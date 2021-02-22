import "./scss/index.scss";
import changeFavicon from "./favicons";
import data from "./data";
import Leaders from "./views/Leaders";
import Vote from "./views/Vote";

function renderTemplate(alias: string, data: Record<string, any>): string {
  console.log(data);

  switch (alias) {
    case "leaders":
      return `${new Leaders(data)}`;

    case "vote":
      return `${new Vote(data)}`;

    case "chart":
      return `chart`;

    case "diagram":
      return `diagram`;

    case "activity":
      return `activity`;

    default:
      return `<h1 class="headline">Неподдерживаемый шаблон</h1>`;
  }
}

declare global {
  interface Window {
    renderTemplate: typeof renderTemplate;
  }
}

if (window) {
  window.renderTemplate = renderTemplate;

  addEventListener("load", (ev) => {
    const urlParams = new URLSearchParams(location.search);
    const slideIndex = parseInt(urlParams.get("slide") || "1");
    const theme = urlParams.get("theme") || "dark";
    const mountPoint = document.querySelector("#app");
    const currentSlide =
      slideIndex <= 11 && slideIndex >= 1 ? data[slideIndex - 1] : data[0];

    changeFavicon(theme === "dark" ? "dark" : "light");

    if (mountPoint) {
      mountPoint.classList.add(theme === "dark" ? "theme_dark" : "theme_light");

      mountPoint.innerHTML = renderTemplate(
        currentSlide.alias,
        currentSlide.data
      );
    } else {
      throw new Error("Не найдена точка монтирования");
    }
  });
}
