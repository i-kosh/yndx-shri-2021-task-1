const data = require("./data.json");

function renderTemplate(alias: string, data: Record<string, unknown>): string {
  console.log(`alias: ${alias}`);
  console.log(`data: ${data}`);

  return "<h1>Привет</h1>";
}

if (window) {
  window.renderTemplate = renderTemplate;

  addEventListener("load", (ev) => {
    const mountPoint = document.querySelector("#app");

    mountPoint.innerHTML = renderTemplate("test", {});
  });
}
