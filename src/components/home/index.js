import SectionCard from "./sectionCard";
import Hero from "./sectionHero";

import styles from "./styles.module.scss";

export default function Main() {
    return (
        <main className={styles.container}>
            < Hero />
            <SectionCard />
        </main>
    )
}