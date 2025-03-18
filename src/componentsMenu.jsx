import Main from "./features/contextAdvanced";
import IntersectionSection from "./features/useIntersactionObserver";
import Layout from "./features/imageCompare";

const componentsMenu = [
  {
    title: "useIntersectionObserver",
    description: "Применение useSyncExternalStore на IntersectionObserver",
    items: [
      {
        name: "Main",
        component: <IntersectionSection />,
      },
    ],
  },
  {
    title: "Context Advanced",
    description: "Оптимизация контекста",
    items: [
      {
        name: "Main",
        component: <Main />,
      },
    ],
  },
  {
    title: "Image compare",
    items: [
      {
        name: "Main",
        component: <Layout />,
      },
    ],
  },
];

export default componentsMenu;
