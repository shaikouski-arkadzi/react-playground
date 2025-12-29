import { useAccordionContext } from "./Accordion";
import { useAccordionItemContext } from "./AccordionItem";
import styles from "../styles/style.module.css";

export default function AccordionContent({ className, children }) {
  const { openItemId } = useAccordionContext();
  const id = useAccordionItemContext();

  const isOpen = openItemId === id;

  return (
    <div
      className={
        isOpen ? `${className ?? ""} ${styles.open}` : `${className ?? ""}`
      }
    >
      {children}
    </div>
  );
}
