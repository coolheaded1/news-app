import React from "react";
import request from "../components/request";
import Banner from "../components/Banner";
import Row from "../components/Row";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Banner fetchUrl={request.topHeadlinesTechCrunch} />
      <div className="section"></div>
      <Row
        title="Top Headlines in Nigeria"
        fetchUrl={request.topHeadlinesNigeria}
      />
      <Gallery fetchUrl={request.gallery} title="Gallery from US" />
      <Footer />
    </div>
  );
}
