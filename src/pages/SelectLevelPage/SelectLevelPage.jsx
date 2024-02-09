import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { Checkbox } from "../../components/Checkbox/Checkbox";
import useMode from "../../hooks/useMode";
import { Button } from "../../components/Button/Button";
export function SelectLevelPage() {
  const { changeMode } = useMode();

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/3">
              1
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/6">
              2
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/9">
              3
            </Link>
          </li>
        </ul>
        <Checkbox className={styles.mode} onClick={changeMode}>
          Легкий режим (3 жизни)
        </Checkbox>
        <Button>Играть</Button>
      </div>
    </div>
  );
}
