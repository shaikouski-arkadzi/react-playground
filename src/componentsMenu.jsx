import Main from "features/contextAdvanced";
import IntersectionSection from "features/useIntersactionObserver";
import Layout from "features/imageCompare";
import MobileMenu from "features/infinityMobileMenu";
import ReactHookFormMain from "features/react-hook-form";
import MainUseTransition from "features/useTransition";

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
  {
    title: "Mobile menu",
    description: "Мобильное меню с бесконечной вложенностью",
    items: [
      {
        name: "Main",
        component: <MobileMenu />,
      },
    ],
  },
  {
    title: "React Hook Form",
    description: "Пример работы с react-hook-form библиотекой",
    items: [
      {
        name: "Main",
        component: <ReactHookFormMain />,
      },
    ],
  },
  {
    title: "useTransition",
    description: "Пример оптимизации с помощью useTransition",
    items: [
      {
        name: "Main",
        component: <MainUseTransition />,
      },
    ],
  },
];

export default componentsMenu;
