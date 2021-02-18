import "./scss/index.scss";
import data, { availableAliases } from "./data";

function renderTemplate(alias: string, data: Record<string, any>): string {
  if (!availableAliases.includes(alias)) {
    throw new Error("Неподдерживаемы шаблон");
  }

  console.dir(data);

  return `<h1>${alias}</h1>`;
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
