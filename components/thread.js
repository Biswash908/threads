import { useMemo } from "react";
import styles from "./thread.module.css";

const Thread1 = ({
  authorImage,
  threadContent,
  like,
  comment,
  repost,
  likes,
  avatarIconHeight,
  likesWidth,
  username,
  timeSpentSincePublish,
}) => {
  const threadStyle = useMemo(() => {
    return {
      height: avatarIconHeight,
    };
  }, [avatarIconHeight]);

  const reactionsStyle = useMemo(() => {
    return {
      width: likesWidth,
    };
  }, [likesWidth]);

  return (
    <div className={styles.thread}>
      <div className={styles.thread1}>
        <div className={styles.thread2} style={threadStyle}>
          <img className={styles.avatarIcon} alt="" src={authorImage} />
        </div>
        <div className={styles.infosActions}>
          <div className={styles.info}>
            <div className={styles.headingInfos}>
              <div className={styles.username}>{username}</div>
              <div className={styles.rightInfos}>
                <div className={styles.min}>{timeSpentSincePublish}</div>
                <div className={styles.dots}>
                  <div className={styles.dotsChild} />
                  <div className={styles.dotsChild} />
                  <div className={styles.dotsChild} />
                </div>
              </div>
            </div>
            <div className={styles.iveBeenExploring}>{threadContent}</div>
          </div>
          <div className={styles.actions}>
            <img className={styles.likeIcon} alt="" src={like} />
            <img className={styles.likeIcon} alt="" src={comment} />
            <img className={styles.likeIcon} alt="" src={repost} />
            <img className={styles.sendIcon} alt="" src="/send-1.svg" />
          </div>
          <div className={styles.reactions} style={reactionsStyle}>
            <div className={styles.likes}>{likes}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thread1;
