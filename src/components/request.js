const API_KEY = "90c3cb30b968498087571d64d94e58d8";
const response = {
  topHeadlinesTechCrunch: `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${API_KEY}`,
  topHeadlinesNigeria: `https://newsapi.org/v2/top-headlines?country=ng&apiKey=${API_KEY}`,
  topHeadlinesUS: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`,
  topHeadlinesGermany: `https://newsapi.org/v2/top-headlines?country=de&apiKey=${API_KEY}`,
  bbcHeadlines: `https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=${API_KEY}`,
  gallery: `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`,
};

export default response;
