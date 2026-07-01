import { Button } from "../../components/common/Button/Button";
import { Tag } from "../../components/common/Tag/Tag";
import { Card } from "../../components/common/Card/Card";
import { Spinner } from "../../components/common/Spinner/Spinner";
import { Skeleton } from "../../components/common/Skeleton/Skeleton";
import { SearchInput } from "../../components/common/SearchInput/SearchInput";
import styles from "./Styleguide.module.scss";

const COLORS = [
  "--color-bg",
  "--color-surface",
  "--color-primary",
  "--color-accent",
  "--color-text",
  "--color-text-muted",
];
const SIZES = ["sm", "md", "lg"];

export function Styleguide() {
  return (
    <div className={styles.guide}>
      <section>
        <h2>Colors</h2>
        <div className={styles.swatches}>
          {COLORS.map((token) => (
            <div key={token} className={styles.swatch}>
              <span
                className={styles.chip}
                style={{ background: `var(${token})` }}
              />
              <code>{token}</code>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2>Typography</h2>
        <h1>Heading One</h1>
        <h2>Heading Two</h2>
        <p>Body text in Inter.</p>
      </section>

      <section>
        <h2>Buttons</h2>
        <div className={styles.row}>
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          {SIZES.map((size) => (
            <Button key={size} size={size}>
              {size}
            </Button>
          ))}
        </div>
      </section>

      <section>
        <h2>Tags & Cards</h2>
        <div className={styles.row}>
          <Tag>Accent</Tag>
          <Tag tone="primary">Primary</Tag>
        </div>
        <Card className={styles.card}>Card surface</Card>
      </section>

      <section>
        <h2>Inputs & Loaders</h2>
        <SearchInput value="" onChange={() => {}} placeholder="Search" />
        <div className={styles.row}>
          <Spinner />
          <Skeleton width="120px" height="40px" />
        </div>
      </section>
    </div>
  );
}
