import React, { useState, useEffect } from "react";
import "./styles.css";

function Banner({ fetchUrl }) {
  const [headlines, setHeadlines] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await fetch(fetchUrl)
        .then((response) => response.json())
        .then((data) => {
          // console.log(data.articles);
          setHeadlines(
            data.articles[Math.floor(Math.random() * data.articles.length - 1)]
          );
          setLoading(true);
        });
    }
    fetchData();
  }, [fetchUrl]);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  const formatTime = (timestamp) => {
    const d = new Date(timestamp);
    const time = `${d.getDate()}-${
      d.getMonth() + 1
    }-${d.getFullYear()}, ${d.getHours()}:${d.getMinutes()}`;
    return time;
  };
  return (
    <div>
      <div
        className="banner__container"
        style={{ background: `url(${headlines.urlToImage})` }}
      >
        <div className="opacity">
          <div className="contents">
            {isLoading === false ? (
              <div className="loader"></div>
            ) : (
              <div>
                <sup style={{ fontSize: 15 }}>
                  <mark>{headlines.author}</mark>{" "}
                  {formatTime(headlines.publishedAt)}
                </sup>
                <p className="__headings">{truncate(headlines.title, 50)}</p>
                <a
                  href={headlines.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn button"
                >
                  Read more
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default Banner;
