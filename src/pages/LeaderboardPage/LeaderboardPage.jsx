import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import styles from "./Leaderboard.module.css";

export function LeaderboardPage() {
  // let leaders = [
  //   { id: 1, name: "Великий маг", time: 8 },
  //   { id: 2, name: "Карточный мастер", time: 12 },
  //   { id: 3, name: "Гениальный игрок", time: 31 },
  // ];

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.text}>Лидерборд</p>
          <Link to="/game/9">
            <Button>Начать игру</Button>
          </Link>
        </div>
        <table>
          <thead className={styles.thead}>
            <tr className={styles.leaderboard}>
              <th className={styles.position}>Позиция</th>
              <th className={styles.user}>Пользователь</th>
              <th className={styles.time}>Время</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            <tr className={styles.tablle}>
              <td>Warren</td>
              <td>Wheeler</td>
              <td>99134</td>
            </tr>
            <tr className={styles.tablle}>
              <td>Zena</td>
              <td>Hale</td>
              <td>19803</td>
            </tr>
            <tr className={styles.tablle}>
              <td>Julia</td>
              <td>Haupt</td>
              <td>24116</td>
            </tr>
            <tr className={styles.tablle}>
              <td>Rachel</td>
              <td>English</td>
              <td>58951</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
