import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Footer/Footer";
import { Container } from "../../common/Container/Container";
import styles from "./Layout.module.scss";

export function Layout({ children, onSurprise }) {
  return (
    <div className={styles.shell}>
      <Navbar onSurprise={onSurprise} />
      <main className={styles.main}>
        <Container>{children}</Container>
      </main>
      <Footer />
    </div>
  );
}
