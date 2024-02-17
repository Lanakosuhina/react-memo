import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import styles from "./Leaderboard.module.css";
import { useEffect, useState } from "react";
import { getLeaders } from "../../api";

export function LeaderboardPage() {
  const [leaders, setLeaders] = useState([]);
  // let leadersList = [
  //   { id: 1, name: "Великий маг", time: 8 },
  //   { id: 2, name: "Карточный мастер", time: 72 },
  //   { id: 3, name: "Гениальный игрок", time: "00:04" },
  // ];

  useEffect(() => {
    getLeaders()
      .then(data => {
        let leader = data.leaders;
        leader = leader.sort(function (a, b) {
          return a.time - b.time;
        });
        setLeaders(leader);
      })
      .catch(error => {
        console.log(error.message);
      });
  }, []);

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
            {leaders.map((leader, index) => (
              <tr className={styles.leader} key={leader.id}>
                <td className={styles.position}>#{index + 1}</td>
                <td className={styles.user}>{leader.name}</td>
                <td className={styles.time}>{leader.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
