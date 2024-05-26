import Navbar from "../components/Navbar/navbar";
import UserInfo from "../components/user-info";
import AuraFeedContainer from "../components/Feed/aura-feed-container";
import TrendingTopicsContainer from "../components/Trending/trending-topics-container";
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
