import Main from "features/contextAdvanced";
import IntersectionSection from "features/useIntersactionObserver";
import Layout from "features/imageCompare";
import MobileMenu from "features/infinityMobileMenu";
import ReactHookFormMain from "features/react-hook-form";
import MainUseTransition from "features/useTransition";
import MainUseDeferredValue from "features/useDeferredValue";
import MainProgressiveImage from "features/progressiveImage";
import MainAccordion from "features/accordion";

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
  {
    title: "useDeferredValue",
    description: "Пример оптимизации с помощью useDeferredValue",
    items: [
      {
        name: "Main",
        component: <MainUseDeferredValue />,
      },
    ],
  },
  {
    title: "Progressive Image",
    description: "Emulate 3G in DevTools for test",
    items: [
      {
        name: "Main",
        component: <MainProgressiveImage />,
      },
    ],
  },
  {
    title: "Accordion",
    description: "Using Compound Components Pattern",
    items: [
      {
        name: "Main",
        component: <MainAccordion />,
      },
    ],
  },
];

export default componentsMenu;
