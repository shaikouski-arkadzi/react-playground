import { useState } from "react";
import styles from "./MobileMenu.module.css";
import { menuItems } from "../data/menu";

import IconArrowLeft from "../assets/icon-arrow-left.svg?react";
import IconArrowRightFilled from "../assets/icon-arrow-right-filled.svg?react";
import IconClose from "../assets/icon-close.svg?react";

function MobileMenu() {
  const [isOpened, setIsOpened] = useState(false);
  const [level, setLevel] = useState(1);
  const [currentMenu, setCurrentMenu] = useState([menuItems]);

  const selectLevel = (level, menu) => {
    setLevel(level);
    setCurrentMenu((current) => {
      current[level] = menu;
      return current;
    });
  };

  const backLevel = () => {
    setCurrentMenu((current) => {
      current[level] = [];
      return current;
    });
    setLevel((level) => level - 1);
  };

  return (
    <div className={styles.menuWrapper}>
      <button className={styles.buttonOpen} onClick={() => setIsOpened(true)}>
        Открыть меню
      </button>
      <nav className={styles.menu} role="navigation">
        <div
          onClick={() => setIsOpened(false)}
          className={`${styles.cover} ${isOpened && styles.coverShow}`}
        ></div>
        <div
          className={`${styles.mobileMenuLayout} ${
            isOpened && styles.mobileMenuLayoutShow
          }`}
        >
          <div className={styles.menuHeader}>
            {level === 1 && <div className={styles.backButton}>Главная</div>}
            {level > 1 && (
              <button className={styles.backButton} onClick={backLevel}>
                <IconArrowLeft /> Назад
              </button>
            )}
            <button
              className={styles.closeButton}
              onClick={() => setIsOpened(false)}
            >
              <IconClose />
            </button>
          </div>
          <div
            className={styles.level}
            style={{
              transform: `translateX(calc(-100% * ${level - 1} - 24px * ${
                level - 1
              }))`,
            }}
          >
            {currentMenu.map((item, index) => (
              <div key={index}>
                {item.map((m, i) => (
                  <div key={i}>
                    {m.children && (
                      <button
                        className={styles.item}
                        onClick={() => selectLevel(level + 1, m.children)}
                      >
                        {m.name} <IconArrowRightFilled />
                      </button>
                    )}
                    {m.link && (
                      <a className={styles.item} href={m.link}>
                        {m.name}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default MobileMenu;
