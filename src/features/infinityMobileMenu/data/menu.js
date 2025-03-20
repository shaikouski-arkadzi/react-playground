export const menuItems = [
  {
    name: "Главная",
    link: "/",
  },
  {
    name: "О нас",
    children: [
      {
        name: "О компании",
        children: [{ name: "Еще меню 2", link: "/about/company" }],
      },
      {
        name: "Команда",
        link: "/about/command",
      },
      {
        name: "Прочее",
        children: [{ name: "Еще меню", link: "/about/company" }],
      },
    ],
  },
];
