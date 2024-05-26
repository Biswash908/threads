import { useMemo } from "react";
import styles from "./avatar-big-icon.module.css";

const AvatarBigIcon = ({
  className = "",
  avatarBigIconOverflow,
  avatarBigIconPosition,
}) => {
  const avatarBigIconStyle = useMemo(() => {
    return {
      overflow: avatarBigIconOverflow,
      position: avatarBigIconPosition,
    };
  }, [avatarBigIconOverflow, avatarBigIconPosition]);

  return (
    <img
      className={[styles.avatarBigIcon, className].join(" ")}
      alt=""
      src="/avatar-big.svg"
      style={avatarBigIconStyle}
    />
  );
};

AvatarBigIcon.propTypes = {
  className: PropTypes.string,

  /** Style props */
  avatarBigIconOverflow: PropTypes.any,
  avatarBigIconPosition: PropTypes.any,
};

export default AvatarBigIcon;
