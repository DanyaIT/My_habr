# My_habr
 Приложение находится в стадии разработки. Палнируется создать аналок Habr.
# Cтек: Node.js, React, Redux/Toolkit, TypeScript, Webpack, Feature-Sliced Design.
# Старт
 1. "build": "webpack --env mode=development";
 2. "build:prod": "webpack --env mode=production";
 3. "start:dev:server": "node ./json-server/index.js";
 4. "start": "webpack serve --env port=3000";
 5  -------------------------------------------------------------
 6  "lint:ts": "npx eslint **/*.{tsx,ts,js}",
 7  "lint:ts:fix": "npx eslint **/*.{tsx,ts,js} --fix",
 8  "lint:scss": "npx stylelint  \"**/*.scss\"",
 9  "lint:scss:fix": "npx stylelint  **/*.{scss} --fix",
 10 "test:unit": "jest --config ./config/jest/jest.config.ts",
 11 "test:ui": "npx loki test",
 12 "test:ui:report": "npm run test:ui:json && npm run test:ui:html",
 13 "test:ui:json": "node scripts/generate-visual-json-report.js",
 14 "test:ui:html": "npx reg-cli -g --from .loki/report.json --report .loki/report.html",
 15 "test:ui:ci": "concurrently --kill-others --raw --success first \"npm run storybook\" \"npm run test:ui\" \"deelay\"",
 16 "test:ui:ok": "npx loki approve",
 17 "storybook": "storybook dev -p 6006 -c ./config/storybook",
 18 "storybook:build": "storybook build -c ./config/storybook"
# Интерфейс
Главаня страница: ![image](https://github.com/DanyaIT/My_habr/assets/105100908/25ed04e3-19f3-4ba3-8f2b-573e31651b55)


 
