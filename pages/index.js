import Navbar from "../components/navbar/navbar";
import UserInfo from "../components/userinfocol/user-info";
import AuraFeedContainer from "../components/feed/aura-feed-container";
import TrendingTopicsContainer from "../components/trending/trending-topics-container";
import styles from "./index.module.css";

const Content = () => {
  return (
    <div className={styles.content}>
      <main className={styles.feed}>
        <Navbar />
        <section className={styles.contentcontainer}>
          <UserInfo />
          <AuraFeedContainer />
          <TrendingTopicsContainer />
        </section>
      </main>
    </div>
  );
};

export default Content;
