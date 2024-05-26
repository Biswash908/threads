import { useMemo } from "react";
import styles from "./avatar-big-icon.module.css";

const AvatarBigIcon = ({ avatarBigIconOverflow, avatarBigIconPosition }) => {
  const avatarBigIconStyle = useMemo(() => {
    return {
      overflow: avatarBigIconOverflow,
      position: avatarBigIconPosition,
    };
  }, [avatarBigIconOverflow, avatarBigIconPosition]);

  return (
    <img
      className={styles.avatarBigIcon}
      alt=""
      src="/avatar-big.svg"
      style={avatarBigIconStyle}
    />
  );
};

export default AvatarBigIcon;
