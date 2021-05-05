import React, { useState, useEffect } from "react";
import "./styles.css";

function Row({ fetchUrl, title, changeColor }) {
  const [news, setNews] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await fetch(fetchUrl)
        .then((response) => response.json())
        .then((data) => {
          //   console.log(data);
          setNews(data.articles);
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
    <div className="ml-4">
      <br />
      <br />
      <h5>{title}</h5>
      <br />
      {isLoading === false ? (
        <div className="loader"></div>
      ) : (
        <div className="box">
          {news.map((items, i) => (
            <div
              className={changeColor ? "bg__Image2" : "bg__Image"}
              style={{ backgroundImage: `url(${items.urlToImage})` }}
            >
              <div className={changeColor ? "opacity__2" : "opacity__"}>
                <div className="contents">
                  <p key={i} style={{ fontSize: 15, fontWeight: 800 }}>
                    {items.title}
                  </p>
                  <br />
                  <p key={items.source.id}>{truncate(items.content, 200)}</p>
                  <a
                    href={items.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn button"
                  >
                    Read more
                  </a>
                  <p className="float-right">{formatTime(items.publishedAt)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
export default Row;
