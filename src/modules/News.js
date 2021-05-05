import React from "react";
import Banner from "../components/Banner";
import request from "../components/request";
import Row from "../components/Row";
import Footer from "../components/Footer";

export default function News() {
  return (
    <div>
      <Banner fetchUrl={request.topHeadlinesNigeria} />
      <div className="section"></div>
      <Row
        fetchUrl={request.topHeadlinesUS}
        title="Top headlines in US"
        changeColor
      />
      <Row
        fetchUrl={request.bbcHeadlines}
        title="Top headlines from BBC"
        changeColor
      />
      <Row
        fetchUrl={request.topHeadlinesGermany}
        title="Top headlines in Germany"
      />
      <Footer />
    </div>
  );
}
