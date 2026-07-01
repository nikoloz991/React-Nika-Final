import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useFetch } from "../../../hooks/useFetch";
import { getRandom } from "../../../api/cocktailApi";
import { Modal } from "../../common/Modal/Modal";
import { Spinner } from "../../common/Spinner/Spinner";
import styles from "./SurpriseModal.module.scss";

export function SurpriseModal({ isOpen, onClose }) {
  const { t } = useTranslation();
  const { data: drink, loading } = useFetch(
    () => (isOpen ? getRandom() : Promise.resolve(null)),
    [isOpen],
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={t("nav.surprise")}>
      {loading || !drink ? (
        <Spinner label={t("common.loading")} />
      ) : (
        <Link
          to={`/drink/${drink.idDrink}`}
          onClick={onClose}
          className={styles.link}
        >
          <img
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            className={styles.image}
          />
          <h3 className={styles.name}>{drink.strDrink}</h3>
        </Link>
      )}
    </Modal>
  );
}
