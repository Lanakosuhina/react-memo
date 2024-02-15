import styles from "./EndGameModal.module.css";
import { Button } from "../Button/Button";
import useDifficulty from "../../hooks/useDifficulty";
import deadImageUrl from "./images/dead.png";
import celebrationImageUrl from "./images/celebration.png";
import { useEffect, useState } from "react";
import { addLeader, getLeaders } from "../../api";
import { Link } from "react-router-dom";

export function EndGameModal({ isWon, gameDurationSeconds, gameDurationMinutes, onClick }) {
  const { level } = useDifficulty();
  const [leader, setLeader] = useState("Пользователь23456");
  const [newLeader, setNewLeader] = useState(false); // меняем на true, если игрок окажется одним из лучших
  const gameTime = gameDurationSeconds + gameDurationMinutes * 60;

  useEffect(() => {
    if (level === "9" && isWon) {
      // если игрок выиграл 3 уровень сложности, получаем список лидеров
      getLeaders().then(({ leaders }) => {
        leaders = leaders.sort(function (a, b) {
          return a.time - b.time;
        });
        if (leaders.length > 0 && leaders[0].time < gameTime) {
          setNewLeader(true);
        }
      });
    }
  }, []);

  function addPlayertoLeaders() {
    addLeader({
      name: leader,
      time: gameTime,
    })
      .then(({ leaders }) => {
        console.log(leaders);
      })
      .catch(error => {
        alert(error.message);
      });
  }

  const title = isWon ? "Вы победили!" : "Вы проиграли!";

  const imgSrc = isWon ? celebrationImageUrl : deadImageUrl;

  const imgAlt = isWon ? "celebration emodji" : "dead emodji";

  return (
    <div className={styles.modal}>
      <img className={styles.image} src={imgSrc} alt={imgAlt} />
      <h2 className={styles.title}>{title}</h2>
      {newLeader ? (
        <input
          type="text"
          placeholder={"Введите ваше имя"}
          onChange={e => {
            setLeader(e.target.value);
          }}
        />
      ) : (
        <div></div>
      )}
      <p className={styles.description}>Затраченное время:</p>
      <div className={styles.time}>
        {gameDurationMinutes.toString().padStart("2", "0")}.{gameDurationSeconds.toString().padStart("2", "0")}
      </div>
      {newLeader ? (
        <Button
          onClick={() => {
            addPlayertoLeaders();
            onClick();
          }}
        >
          Начать снова
        </Button>
      ) : (
        <Button onClick={onClick}>Начать сначала</Button>
      )}
      {newLeader && (
        <Link to="/leaderboard" className={styles.linkBoard}>
          Перейти к лидерборду
        </Link>
      )}
    </div>
  );
}
