import ThreadInput from "./thread-input";
import Thread1 from "../thread";
import styles from "./aura-feed-container.module.css";
import { useState, useEffect } from "react";

const AurafeedContainer = () => {
  const [threads, setThreads] = useState([]);
  const getThreads = async () => {
    try {
      const request = await fetch("/api/threads");
      const data = await request.json();
      console.log("feed.js 11 | data", data);
      setThreads(data);
    } catch (error) {
      console.log("feed.js 12 | error getting threads", error);
    }
  };

  useEffect(() => {
    getThreads();
  }, []);

  return (
    <div className={styles.feed}>
      <ThreadInput getThreads={getThreads} />
      {threads &&
        threads.data?.map((thread) => {
          return (
            <Thread1
              authorImage="/avatar.svg"
              threadContent={thread.content}
              likes={`${thread.likes || 0} likes`}
              username={thread.user}
              timeSpentSincePublished={thread.timestamp}
              getThreads={getThreads}
              id={thread._id}
            />
          );
        })}
    </div>
  );
};

export default AurafeedContainer;