// newsAction.js
export const FETCH_NEWS = "FETCH_NEWS";
export const FETCH_NEWS_SUCCESS = "FETCH_NEWS_SUCCESS";
export const FETCH_NEWS_FAILURE = "FETCH_NEWS_FAILURE";

export const fetchNewsRequest = () => {
  return { type: FETCH_NEWS };
};

export const fetchNewsRequestSuccess = (news) => {
  return { type: FETCH_NEWS_SUCCESS, payload: news };
};

export const fetchNewsRequestFailure = (error) => {
  return { type: FETCH_NEWS_FAILURE, payload: error };
};

export const fetchNews = (category) => {
  return (dispatch) => {
    dispatch(fetchNewsRequest());
    fetch(
      `https://gnews.io/api/v4/top-headlines?country=${category}&category=general&apikey=6ee9bfa1deb4a23feb35cca332a96772`
    )
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        const news = response.articles.map((article) => ({
          title: article.title,
          url: article.url,
          description: article.description,
          image: article.image,
        }));
        dispatch(fetchNewsRequestSuccess(news));
      })
      .catch((error) => {
        dispatch(fetchNewsRequestFailure(error.message));
      });
  };
};
