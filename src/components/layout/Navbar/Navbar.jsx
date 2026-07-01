import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, Shuffle, X } from "lucide-react";
import { ThemeToggle } from "../../common/ThemeToggle/ThemeToggle";
import { LanguageToggle } from "../../common/LanguageToggle/LanguageToggle";
import { Container } from "../../common/Container/Container";
import { Button } from "../../common/Button/Button";
import styles from "./Navbar.module.scss";

export function Navbar({ onSurprise }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: t("nav.home"), end: true },
    { to: "/browse", label: t("nav.browse") },
    { to: "/favorites", label: t("nav.favorites") },
    { to: "/about", label: t("nav.about") },
  ];

  return (
    <header className={styles.header}>
      <Container className={styles.bar}>
        <Link to="/" className={styles.brand}>
          {t("app.name")}
        </Link>

        <nav className={`${styles.links} ${open ? styles.open : ""}`}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              className={({ isActive }) =>
                isActive ? `${styles.link} ${styles.active}` : styles.link
              }
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className={styles.actions}>
          <Button variant="ghost" size="sm" onClick={onSurprise}>
            <Shuffle size={16} aria-hidden="true" /> {t("nav.surprise")}
          </Button>
          <LanguageToggle />
          <ThemeToggle />
          <button
            className={styles.burger}
            onClick={() => setOpen((value) => !value)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>
    </header>
  );
}
