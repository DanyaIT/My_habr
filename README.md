# My_habr
 Приложение находится в стадии разработки. Палнируется создать аналок Habr.
# Cтек: Node.js, React, Redux/Toolkit, TypeScript, Webpack, Feature-Sliced Design.
# Старт
  "scripts": {
    1."build": "webpack --env mode=development",
    "build:prod": "webpack --env mode=production",
    "start:dev:server": "node ./json-server/index.js",
    "start": "webpack serve --env port=3000",
    "lint:ts": "npx eslint **/*.{tsx,ts,js}",
    "lint:ts:fix": "npx eslint **/*.{tsx,ts,js} --fix",
    "lint:scss": "npx stylelint  \"**/*.scss\"",
    "lint:scss:fix": "npx stylelint  **/*.{scss} --fix",
    "test:unit": "jest --config ./config/jest/jest.config.ts",
    "test:ui": "npx loki test",
    "test:ui:report": "npm run test:ui:json && npm run test:ui:html",
    "test:ui:json": "node scripts/generate-visual-json-report.js",
    "test:ui:html": "npx reg-cli -g --from .loki/report.json --report .loki/report.html",
    "test:ui:ci": "concurrently --kill-others --raw --success first \"npm run storybook\" \"npm run test:ui\" \"deelay\"",
    "test:ui:ok": "npx loki approve",
    "storybook": "storybook dev -p 6006 -c ./config/storybook",
    "storybook:build": "storybook build -c ./config/storybook"
# Интерфейс
Главаня страница: ![image](https://github.com/DanyaIT/My_habr/assets/105100908/25ed04e3-19f3-4ba3-8f2b-573e31651b55)


 
