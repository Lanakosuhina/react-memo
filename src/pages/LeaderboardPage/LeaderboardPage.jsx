import { Link } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import styles from "./Leaderboard.module.css";
import { useEffect, useState } from "react";
import { getLeaders } from "../../api";
import puzzle from "./images/puzzle.svg";
import puzzleGray from "./images/puzzleGray.svg";
import vision from "./images/vision.svg";
import visionGray from "./images/visionGray.svg";

export function LeaderboardPage() {
  const [leaders, setLeaders] = useState([]);

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
              <th className={styles.achievements}>Достижения</th>
              <th className={styles.time}>Время</th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {leaders.map((leader, index) => (
              <tr className={styles.leader} key={leader.id}>
                <td className={styles.position}>#{index + 1}</td>
                <td className={styles.user}>{leader.name}</td>
                <td className={styles.achievements}>
                  {leader.achievements && (
                    <div className={styles.block_achievements}>
                      {leader.achievements.includes(1) ? <img src={puzzle} alt="" /> : <img src={puzzleGray} alt="" />}
                    </div>
                  )}
                  {leader.achievements && (
                    <div className={styles.block_achievements}>
                      {leader.achievements.includes(2) ? (
                        <img src={vision} alt="" className={styles.leaderBlock_img} />
                      ) : (
                        <img src={visionGray} alt="" className={styles.leaderBlock_img} />
                      )}
                    </div>
                  )}
                </td>
                <td className={styles.time}>{leader.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
