// News.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../redux/newsAction";

const News = ({ category }) => {
  const dispatch = useDispatch();
  const { news, isLoading, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchNews(category));
  }, [dispatch, category]);

  return (
    <div className="bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto p-4">
        {isLoading && (
          <div className="text-center text-xl text-gray-600">Loading...</div>
        )}
        {error && <div className="text-center text-red-500">{error}</div>}
        <ul className="flex flex-col space-y-8">
          {news.map((article, index) => (
            <li
              key={index}
              className="bg-white p-6 rounded-lg shadow-xl transition-transform duration-300 ease-in-out transform hover:scale-105 w-full"
            >
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-blue-600 hover:underline"
              >
                {article.title}
              </a>
              <div className="mt-4 w-full h-auto overflow-hidden rounded-md border-2 border-gray-200">
                <img
                  src={article.image}
                  alt="photo"
                  className="w-full h-auto object-contain transition-opacity duration-300 hover:opacity-90"
                />
              </div>
              <p className="mt-4 text-gray-800">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Click here to see full story
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default News;
