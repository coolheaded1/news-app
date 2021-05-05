import React, { useState, useEffect } from "react";

function Gallery({ fetchUrl, title }) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      await fetch(fetchUrl)
        .then((response) => response.json())
        .then((data) => {
          //   console.log(data);
          setData(data.articles);
          setLoading(true);
        });
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div>
      <br />
      <br />
      <h5 className="ml-4">{title}</h5>
      <br />
      <div className="container">
        {isLoading === false ? (
          <div className="loader"></div>
        ) : (
          <div className="row">
            {data.map((items) => (
              <div className="col-md-4 col-sm-6 col-12">
                <div
                  className="gallery"
                  style={{ backgroundImage: `url(${items.urlToImage})` }}
                >
                  <div className="__opacity">
                    <p key={items.source.id}>{items.author}</p>
                  </div>
                </div>

                <br />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default Gallery;
