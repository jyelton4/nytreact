import axios from "axios";
// require('dotenv').config();

const queryConstructor = (obj) => {
  let paramsString = "";
  let searchParams = new URLSearchParams(paramsString);
  searchParams.append("fq=headline:\"", obj.searchTerm + "\")");
  if (obj.startYear) {
    searchParams.append("&begin_date=", obj.startYear + "0101");
  }
  if (obj.endYear) {
    searchParams.append("&end_date=", obj.endYear + "0101")
  }
  return searchParams;
};

export default {
  // Fetches articles from NYT
  getArticles: function(params) {
    let queryString = queryConstructor(params);
    return axios.get('http://api.nytimes.com/svc/search/v2/articlesearch.json?' + queryString + '&api-key=1a68ca123e6d4eceb3b06a7fc9a1a655');
  }
  // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/articles/" + id);
  // },
  // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/articles/" + id);
  // },
  // Saves a book to the database
  // saveBook: function(articleData) {
  //   return axios.post("/api/articles", articleData);
  // }
};
