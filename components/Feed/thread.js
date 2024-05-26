import styles from "./thread.module.css";

const Thread = ({
  className = "",
  threadContent,
  likes,
  avatar,
  username,
  timeSpentSincePublish,
}) => {
  return (
    <div className={[styles.thread, className].join(" ")}>
      <div className={styles.thread1}>
        <div className={styles.thread2}>
          <img className={styles.avatarIcon} alt="" src={avatar} />
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
            <img className={styles.likeIcon} alt="" src="/like.svg" />
            <img className={styles.likeIcon} alt="" src="/comment.svg" />
            <img className={styles.likeIcon} alt="" src="/repost.svg" />
            <img className={styles.likeIcon} alt="" src="/send1.svg" />
          </div>
          <div className={styles.reactions}>
            <div className={styles.likes}>{likes}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Thread.propTypes = {
  className: PropTypes.string,
  threadContent: PropTypes.string,
  likes: PropTypes.string,
  avatar: PropTypes.string,
  username: PropTypes.string,
  timeSpentSincePublish: PropTypes.string,
};

export default Thread;
