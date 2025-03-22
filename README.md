# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Установка алиасов

### 1. Установите зависимости

Если у вас TypeScript:

```sh
npm install eslint-import-resolver-typescript --save-dev
```

Если без TypeScript:

```sh
npm install eslint-import-resolver-node --save-dev
```

---

### 2. Настройка `.eslintrc.js`

#### **Если у вас TypeScript**

Добавьте в `.eslintrc.js`:

```js
module.exports = {
  settings: {
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json",
      },
    },
  },
};
```

---

#### **Если у вас JavaScript (без TypeScript)**

Используйте `eslint-import-resolver-node`:

```js
module.exports = {
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"],
        moduleDirectory: ["node_modules", "src"],
      },
    },
  },
};
```

---

### 3. Дополнительные правки

Если используете TypeScript, убедитесь, что `tsconfig.json` содержит:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "components/*": ["src/components/*"]
    }
  }
}
```
