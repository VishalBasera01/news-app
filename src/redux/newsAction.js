export const FETCH_NEWS = "FETCH_NEWS";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const FETCH_NEWS_FAILURE = "FETCH_NEWS_FAILURE";

export const fetchNewsRequest = () => {
  return {
    type: FETCH_NEWS,
  };
};
export const fetchNewsRequestSuccess = (news) => {
  return {
    type: FETCH_NEWS_SUCCESS,
    payload: news,
  };
};
export const fetchNewsRequestFailure = (error) => {
  return {
    type: FETCH_NEWS,
    payload: error,
  };
};
export const fetchNews = () => {
  return (dispatch) => {
    dispatch(fetchNewsRequest());
    fetch(
      "https://gnews.io/api/v4/search?q=example&lang=en&country=in&max=10&apikey=196b80398f7c6c116cd467a799037833"
    )
      .then((res) => res.json())
      .then((response) => {
        const news = response.articles.map((article) => {
          return {
            title: article.title,
            url: article.url,
            description: article.description,
            image: article.image,
          };
        });
        dispatch(fetchNewsRequestSuccess(news));
      })
      .catch((error) => {
        dispatch(fetchNewsRequestFailure(error.message));
      });
  };
};
