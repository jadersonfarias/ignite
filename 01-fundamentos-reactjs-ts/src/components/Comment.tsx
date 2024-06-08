import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./avatar";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteCommit() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    setLikeCount((state) => {
                        // desta forma ele aceite pegar um argumento com o valor mais recente
      return state + 1; // ## Sempre que vc for atualizar uma informação e está depente  do valor que ela tinha anterior mente é sempre bom fazer ela assim
    });                 //ex antigo = setLikeCount(likeCount + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/jadersonfarias.png" alt="foto user"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Jaderson Farias</strong>
              <time title="11 de Maio ás 08:13" dateTime="2024-05-11 08:13:30">
                cerca de uma hora atrás
              </time>
            </div>

            <button onClick={handleDeleteCommit} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Apludir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
