import styles from "./components.module.css";

const Components = () => {
  return (
    <div className={styles.components}>
      <div className={styles.thread}>
        <div className={styles.thread1}>
          <div className={styles.thread2}>
            <img className={styles.avatarIcon} alt="" src="/avatar1.svg" />
          </div>
          <div className={styles.infosActions}>
            <div className={styles.info}>
              <div className={styles.headingInfos}>
                <div className={styles.username}>aura</div>
                <div className={styles.rightInfos}>
                  <div className={styles.min}>2min</div>
                  <div className={styles.dots}>
                    <div className={styles.dotsChild} />
                    <div className={styles.dotsChild} />
                    <div className={styles.dotsChild} />
                  </div>
                </div>
              </div>
              <div className={styles.iveBeenExploring}>
                I’ve been exploring ways of setting up variables in Figma if you
                have two different sets of global colours for light and dark
                themes with multiple brands. If you want to learn more about it,
                DM me, please
              </div>
            </div>
            <div className={styles.actions}>
              <img className={styles.likeIcon} alt="" src="/like1.svg" />
              <img className={styles.likeIcon} alt="" src="/comment1.svg" />
              <img className={styles.likeIcon} alt="" src="/repost1.svg" />
              <img className={styles.likeIcon} alt="" src="/send-1.svg" />
            </div>
            <div className={styles.reactions}>
              <div className={styles.likes}>7 Likes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Components;
