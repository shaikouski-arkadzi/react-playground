import Accordion from "./Accordion";
import styles from "../styles/style.module.css";

const PLACES = [
  {
    id: "african-savanna",
    title: "African Savanna",
    description: "Experience the beauty of nature.",
  },
  {
    id: "amazon-river",
    title: "Amazon River",
    description: "Get to know the largest river in the world.",
  },
  {
    id: "caribbean-beach",
    title: "Caribbean Beach",
    description: "Enjoy the sun and the beach.",
  },
  {
    id: "desert-dunes",
    title: "Desert Dunes",
    description: "Discover the desert life.",
  },
  {
    id: "forest-waterfall",
    title: "Forest Waterfall",
    description: "Listen to the sound of the water.",
  },
];

function MainAccordion() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>

        <Accordion className={styles.accordion}>
          <Accordion.Item id="experience" className={styles.accordionItem}>
            <Accordion.Title className={styles.accordionItemTitle}>
              We got 20 years of experience
            </Accordion.Title>
            <Accordion.Content className={styles.accordionItemContent}>
              <article>
                <p>You can't go wrong with us.</p>
                <p>
                  We are in the business of planning highly individualized
                  vacation trips for more than 20 years.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
          <Accordion.Item id="local-guides" className={styles.accordionItem}>
            <Accordion.Title className={styles.accordionItemTitle}>
              We are working with local guides
            </Accordion.Title>
            <Accordion.Content className={styles.accordionItemContent}>
              <article>
                <p>We are not doing this along from our office.</p>
                <p>
                  Instead, we are working with local guides to ensure a safe and
                  pleasant vacation.
                </p>
              </article>
            </Accordion.Content>
          </Accordion.Item>
        </Accordion>
      </section>
    </main>
  );
}

export default MainAccordion;
