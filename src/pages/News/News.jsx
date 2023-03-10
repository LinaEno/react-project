import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const backendNews = axios.create({ baseURL: 'https://newsapi.org/v2/' });
const apiKey = 'dc07261234074052abfe19974114fe88';

const newsApi = async () => {
  const news = await backendNews.get(
    `top-headlines/sources?q=business&apiKey=${apiKey}&language=en`
  );
  console.log(news.data);
  return news.data;
};

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getNews = async () => {
      try {
        setLoading(true);
        const { sources } = await newsApi();
        setNews(sources);
        setError('');
      } catch (error) {
        setError('Oops. Something went wrong 😭');
      } finally {
        setLoading(false);
      }
    };
    getNews();
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return (
    <>
      {!loading && (
        <div>
          <h2>News</h2>
          <ul>
            {news.map(({ id, description, url, name }) => {
              return (
                <li key={id}>
                  <p>{name}</p>
                  <p>{description}</p>
                  <a href={url}>Go to news</a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

export default News;
