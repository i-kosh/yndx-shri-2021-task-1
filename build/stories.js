/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/index.scss":
/*!*****************************!*\
  !*** ./src/scss/index.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/scss/index.scss?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const data = __webpack_require__(/*! ./data.json */ \"./src/data.json\");\nfunction renderTemplate(alias, data) {\n    console.log(`alias: ${alias}`);\n    console.log(`data: ${data}`);\n    return \"<h1>Привет</h1>\";\n}\nif (window) {\n    window.renderTemplate = renderTemplate;\n    addEventListener(\"load\", (ev) => {\n        const mountPoint = document.querySelector(\"#app\");\n        mountPoint.innerHTML = renderTemplate(\"test\", {});\n    });\n}\n\n\n//# sourceURL=webpack://my-webpack-project/./src/index.ts?");

/***/ }),

/***/ "./src/data.json":
/*!***********************!*\
  !*** ./src/data.json ***!
  \***********************/
/***/ ((module) => {

"use strict";
eval("module.exports = JSON.parse('[{\"alias\":\"leaders\",\"data\":{\"title\":\"Больше всего коммитов\",\"subtitle\":\"Спринт № 213\",\"emoji\":\"👑\",\"users\":[{\"id\":3,\"name\":\"Дарья Ковалева\",\"avatar\":\"3.jpg\",\"valueText\":\"32\"},{\"id\":9,\"name\":\"Сергей Бережной\",\"avatar\":\"9.jpg\",\"valueText\":\"27\"},{\"id\":7,\"name\":\"Дмитрий Андриянов\",\"avatar\":\"7.jpg\",\"valueText\":\"22\"},{\"id\":6,\"name\":\"Андрей Мокроусов\",\"avatar\":\"6.jpg\",\"valueText\":\"20\"},{\"id\":8,\"name\":\"Александр Иванков\",\"avatar\":\"8.jpg\",\"valueText\":\"19\"}]}},{\"alias\":\"leaders\",\"data\":{\"title\":\"Самый большой коммит\",\"subtitle\":\"Спринт № 213\",\"emoji\":\"😮\",\"users\":[{\"id\":12,\"name\":\"Алексей Ярошевич\",\"avatar\":\"12.jpg\",\"valueText\":\"4001 строка\"},{\"id\":5,\"name\":\"Александр Николаичев\",\"avatar\":\"5.jpg\",\"valueText\":\"3845 строк\"},{\"id\":8,\"name\":\"Александр Иванков\",\"avatar\":\"8.jpg\",\"valueText\":\"3640 строк\"},{\"id\":10,\"name\":\"Яна Берникова\",\"avatar\":\"10.jpg\",\"valueText\":\"3453 строки\"},{\"id\":4,\"name\":\"Вадим Пацев\",\"avatar\":\"4.jpg\",\"valueText\":\"2852 строки\"}]}},{\"alias\":\"vote\",\"data\":{\"title\":\"Самый 🔎 внимательный разработчик\",\"subtitle\":\"Спринт № 213\",\"emoji\":\"🔎\",\"selectedUserId\":4,\"users\":[{\"id\":1,\"name\":\"Евгений Дементьев\",\"avatar\":\"1.jpg\",\"valueText\":\"22 голоса\"},{\"id\":4,\"name\":\"Вадим Пацев\",\"avatar\":\"4.jpg\",\"valueText\":\"19 голосов\"},{\"id\":10,\"name\":\"Яна Берникова\",\"avatar\":\"10.jpg\",\"valueText\":\"17 голосов\"},{\"id\":12,\"name\":\"Алексей Ярошевич\",\"avatar\":\"12.jpg\",\"valueText\":\"16 голосов\"},{\"id\":11,\"name\":\"Юрий Фролов\",\"avatar\":\"11.jpg\",\"valueText\":\"11 голосов\"},{\"id\":2,\"name\":\"Александр Шлейко\",\"avatar\":\"2.jpg\",\"valueText\":\"10 голосов\"},{\"id\":5,\"name\":\"Александр Николаичев\",\"avatar\":\"5.jpg\",\"valueText\":\"9 голосов\"},{\"id\":6,\"name\":\"Андрей Мокроусов\",\"avatar\":\"6.jpg\",\"valueText\":\"8 голосов\"},{\"id\":8,\"name\":\"Александр Иванков\",\"avatar\":\"8.jpg\",\"valueText\":\"7 голосов\"},{\"id\":7,\"name\":\"Дмитрий Андриянов\",\"avatar\":\"7.jpg\",\"valueText\":\"6 голосов\"},{\"id\":3,\"name\":\"Дарья Ковалева\",\"avatar\":\"3.jpg\",\"valueText\":\"5 голосов\"},{\"id\":9,\"name\":\"Сергей Бережной\",\"avatar\":\"9.jpg\",\"valueText\":\"4 голоса\"}]}},{\"alias\":\"leaders\",\"data\":{\"title\":\"Самый 🔎 внимательный разработчик\",\"subtitle\":\"Спринт № 213\",\"emoji\":\"🔎\",\"selectedUserId\":11,\"users\":[{\"id\":1,\"name\":\"Евгений Дементьев\",\"avatar\":\"1.jpg\",\"valueText\":\"22 голоса\"},{\"id\":4,\"name\":\"Вадим Пацев\",\"avatar\":\"4.jpg\",\"valueText\":\"19 голосов\"},{\"id\":10,\"name\":\"Яна Берникова\",\"avatar\":\"10.jpg\",\"valueText\":\"17 голосов\"},{\"id\":12,\"name\":\"Алексей Ярошевич\",\"avatar\":\"12.jpg\",\"valueText\":\"16 голосов\"},{\"id\":11,\"name\":\"Юрий Фролов\",\"avatar\":\"11.jpg\",\"valueText\":\"15 голосов\"},{\"id\":2,\"name\":\"Александр Шлейко\",\"avatar\":\"2.jpg\",\"valueText\":\"14 голосов\"},{\"id\":5,\"name\":\"Александр Николаичев\",\"avatar\":\"5.jpg\",\"valueText\":\"12 голосов\"},{\"id\":6,\"name\":\"Андрей Мокроусов\",\"avatar\":\"6.jpg\",\"valueText\":\"9 голосов\"},{\"id\":8,\"name\":\"Александр Иванков\",\"avatar\":\"8.jpg\",\"valueText\":\"8 голосов\"},{\"id\":7,\"name\":\"Дмитрий Андриянов\",\"avatar\":\"7.jpg\",\"valueText\":\"6 голосов\"},{\"id\":3,\"name\":\"Дарья Ковалева\",\"avatar\":\"3.jpg\",\"valueText\":\"5 голосов\"},{\"id\":9,\"name\":\"Сергей Бережной\",\"avatar\":\"9.jpg\",\"valueText\":\"4 голоса\"}]}},{\"alias\":\"vote\",\"data\":{\"title\":\"Самый 👪 командный разработчик\",\"subtitle\":\"Спринт № 213\",\"emoji\":\"👪\",\"offset\":8,\"users\":[{\"id\":2,\"name\":\"Александр Шлейко\",\"avatar\":\"2.jpg\",\"valueText\":\"24 голоса\"},{\"id\":3,\"name\":\"Дарья Ковалева\",\"avatar\":\"3.jpg\",\"valueText\":\"21 голос\"},{\"id\":6,\"name\":\"Андрей Мокроусов\",\"avatar\":\"6.jpg\",\"valueText\":\"19 голосов\"},{\"id\":7,\"name\":\"Дмитрий Андриянов\",\"avatar\":\"7.jpg\",\"valueText\":\"18 голосов\"},{\"id\":1,\"name\":\"Евгений Дементьев\",\"avatar\":\"1.jpg\",\"valueText\":\"16 голосов\"},{\"id\":9,\"name\":\"Сергей Бережной\",\"avatar\":\"9.jpg\",\"valueText\":\"14 голосов\"},{\"id\":8,\"name\":\"Александр Иванков\",\"avatar\":\"8.jpg\",\"valueText\":\"13 голосов\"},{\"id\":11,\"name\":\"Юрий Фролов\",\"avatar\":\"11.jpg\",\"valueText\":\"11 голосов\"},{\"id\":10,\"name\":\"Яна Берникова\",\"avatar\":\"10.jpg\",\"valueText\":\"9 голосов\"},{\"id\":12,\"name\":\"Алексей Ярошевич\",\"avatar\":\"12.jpg\",\"valueText\":\"7 голосов\"},{\"id\":5,\"name\":\"Александр Николаичев\",\"avatar\":\"5.jpg\",\"valueText\":\"6 голосов\"},{\"id\":4,\"name\":\"Вадим Пацев\",\"avatar\":\"4.jpg\",\"valueText\":\"5 голосов\"}]}},{\"alias\":\"leaders\",\"data\":{\"title\":\"Самый 👪 командный разработчик\",\"subtitle\":\"Спринт № 213\",\"emoji\":\"👪\",\"selectedUserId\":6,\"users\":[{\"id\":2,\"name\":\"Александр Шлейко\",\"avatar\":\"2.jpg\",\"valueText\":\"24 голоса\"},{\"id\":3,\"name\":\"Дарья Ковалева\",\"avatar\":\"3.jpg\",\"valueText\":\"21 голос\"},{\"id\":6,\"name\":\"Андрей Мокроусов\",\"avatar\":\"6.jpg\",\"valueText\":\"19 голосов\"},{\"id\":7,\"name\":\"Дмитрий Андриянов\",\"avatar\":\"7.jpg\",\"valueText\":\"18 голосов\"},{\"id\":1,\"name\":\"Евгений Дементьев\",\"avatar\":\"1.jpg\",\"valueText\":\"16 голосов\"},{\"id\":9,\"name\":\"Сергей Бережной\",\"avatar\":\"9.jpg\",\"valueText\":\"14 голосов\"},{\"id\":8,\"name\":\"Александр Иванков\",\"avatar\":\"8.jpg\",\"valueText\":\"13 голосов\"},{\"id\":11,\"name\":\"Юрий Фролов\",\"avatar\":\"11.jpg\",\"valueText\":\"11 голосов\"},{\"id\":10,\"name\":\"Яна Берникова\",\"avatar\":\"10.jpg\",\"valueText\":\"9 голосов\"},{\"id\":12,\"name\":\"Алексей Ярошевич\",\"avatar\":\"12.jpg\",\"valueText\":\"7 голосов\"},{\"id\":5,\"name\":\"Александр Николаичев\",\"avatar\":\"5.jpg\",\"valueText\":\"6 голосов\"},{\"id\":4,\"name\":\"Вадим Пацев\",\"avatar\":\"4.jpg\",\"valueText\":\"5 голосов\"}]}},{\"alias\":\"chart\",\"data\":{\"title\":\"Коммиты\",\"subtitle\":\"Спринт № 213\",\"values\":[{\"title\":\"203\",\"value\":108},{\"title\":\"204\",\"value\":160},{\"title\":\"205\",\"value\":126},{\"title\":\"206\",\"value\":134},{\"title\":\"207\",\"value\":112},{\"title\":\"208\",\"value\":152},{\"title\":\"209\",\"value\":128},{\"title\":\"210\",\"value\":164},{\"title\":\"211\",\"value\":118},{\"title\":\"212\",\"value\":140},{\"title\":\"213\",\"value\":182,\"active\":true},{\"title\":\"214\",\"value\":0},{\"title\":\"215\",\"value\":0},{\"title\":\"216\",\"value\":0},{\"title\":\"217\",\"value\":0},{\"title\":\"218\",\"value\":0}],\"users\":[{\"id\":3,\"name\":\"Дарья Ковалева\",\"avatar\":\"3.jpg\",\"valueText\":\"32\"},{\"id\":9,\"name\":\"Сергей Бережной\",\"avatar\":\"9.jpg\",\"valueText\":\"27\"},{\"id\":7,\"name\":\"Дмитрий Андриянов\",\"avatar\":\"7.jpg\",\"valueText\":\"22\"}]}},{\"alias\":\"chart\",\"data\":{\"title\":\"Строки кода\",\"subtitle\":\"Спринт № 213\",\"values\":[{\"title\":\"203\",\"value\":47798},{\"title\":\"204\",\"value\":68590},{\"title\":\"205\",\"value\":55472},{\"title\":\"206\",\"value\":63073},{\"title\":\"207\",\"value\":51917},{\"title\":\"208\",\"value\":65852},{\"title\":\"209\",\"value\":60693},{\"title\":\"210\",\"value\":70631},{\"title\":\"211\",\"value\":57299},{\"title\":\"212\",\"value\":62839},{\"title\":\"213\",\"value\":74156,\"active\":true},{\"title\":\"214\",\"value\":0},{\"title\":\"215\",\"value\":0},{\"title\":\"216\",\"value\":0},{\"title\":\"217\",\"value\":0},{\"title\":\"218\",\"value\":0}],\"users\":[{\"id\":12,\"name\":\"Алексей Ярошевич\",\"avatar\":\"12.jpg\",\"valueText\":\"8739\"},{\"id\":8,\"name\":\"Александр Иванков\",\"avatar\":\"8.jpg\",\"valueText\":\"7538\"},{\"id\":10,\"name\":\"Яна Берникова\",\"avatar\":\"10.jpg\",\"valueText\":\"6845\"}]}},{\"alias\":\"diagram\",\"data\":{\"title\":\"Размер коммитов\",\"subtitle\":\"Спринт № 213\",\"totalText\":\"182 коммита\",\"differenceText\":\"+42 с прошлого спринта\",\"categories\":[{\"title\":\"> 1001 строки\",\"valueText\":\"30 коммитов\",\"differenceText\":\"+8 коммитов\"},{\"title\":\"501 — 1000 строк\",\"valueText\":\"32 коммита\",\"differenceText\":\"+6 коммитов\"},{\"title\":\"101 — 500 строк\",\"valueText\":\"58 коммитов\",\"differenceText\":\"+16 коммитов\"},{\"title\":\"1 — 100 строк\",\"valueText\":\"62 коммита\",\"differenceText\":\"+12 коммитов\"}]}},{\"alias\":\"activity\",\"data\":{\"title\":\"Коммиты, 1 неделя\",\"subtitle\":\"Спринт № 213\",\"data\":{\"mon\":[0,0,0,0,1,0,0,0,0,0,2,3,2,1,0,1,0,0,0,0,0,0,0,0],\"tue\":[0,0,0,0,1,0,0,0,0,5,0,4,0,0,0,0,1,0,3,0,0,2,1,0],\"wed\":[1,0,0,0,1,0,5,0,0,4,0,0,0,5,0,2,1,0,0,0,0,0,0,1],\"thu\":[0,1,0,1,0,0,0,0,6,0,1,0,0,1,0,0,5,0,0,0,1,0,0,0],\"fri\":[0,0,0,0,0,0,0,1,3,0,0,5,0,4,0,0,3,0,0,0,0,1,0,0],\"sat\":[0,0,0,0,2,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0],\"sun\":[0,0,0,0,0,0,0,1,0,0,0,0,3,1,0,0,0,0,0,0,1,0,0,0]}}},{\"alias\":\"activity\",\"data\":{\"title\":\"Коммиты, 2 неделя\",\"subtitle\":\"Спринт № 213\",\"data\":{\"mon\":[0,1,1,1,0,0,0,0,0,4,0,0,2,0,0,0,0,1,0,0,0,2,0,2],\"tue\":[0,1,2,1,0,0,0,0,1,1,0,0,0,0,5,0,0,0,0,0,0,0,0,0],\"wed\":[0,0,0,0,2,0,1,2,0,3,0,0,0,0,0,0,0,0,0,3,1,1,0,0],\"thu\":[0,0,2,0,0,0,0,1,2,0,0,0,0,0,1,2,0,3,0,1,1,0,0,0],\"fri\":[0,0,0,1,1,0,2,0,4,0,0,0,2,0,3,2,0,0,0,0,1,1,0,1],\"sat\":[1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,0,2,2,0,2,0,0],\"sun\":[0,0,0,0,2,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1]}}}]');\n\n//# sourceURL=webpack://my-webpack-project/./src/data.json?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scss/index.scss");
/******/ 	
/******/ })()
;