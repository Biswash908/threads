import styles from "./thread-input.module.css";

const ThreadInput = ({ className = "" }) => {
  return (
    <div className={[styles.threadinput, className].join(" ")}>
      <div className={styles.thread}>
        <img className={styles.avatarIcon} alt="" src="/avatar.svg" />
      </div>
      <div className={styles.infosActions}>
        <div className={styles.infos}>
          <input
            className={styles.shareSomethingCool}
            placeholder="Share something cool today"
            type="text"
          />
        </div>
        <div className={styles.actions}>
          <div className={styles.actions1}>
            <img className={styles.paperclipIcon} alt="" src="/paperclip.svg" />
          </div>
          <button className={styles.actions2}>
            <img className={styles.sendIcon} alt="" src="/send.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

ThreadInput.propTypes = {
  className: PropTypes.string,
};

export default ThreadInput;
