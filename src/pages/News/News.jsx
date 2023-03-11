import axios from 'axios';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import {
  NewsTitle,
  Wrapper,
  ListItem,
  Newsman,
  Title,
  Link,
  Content,
} from './News.styled';

const backendNews = axios.create({
  // baseURL: 'https://api.worldnewsapi.com/search-news',
  baseURL: 'https://newsapi.org/v2/',
});
const apiKey = '4330ebfabc654a6992c2aa792f3173a3';

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
          <NewsTitle>News</NewsTitle>
          <Wrapper>
            {news.map(({ id, description, url, name }) => {
              return (
                <ListItem key={id}>
                  <Newsman>
                    <Title>{name}</Title>
                    <Link
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      Follow
                    </Link>
                  </Newsman>
                  <Content>{description}</Content>
                </ListItem>
              );
            })}
          </Wrapper>
        </div>
      )}
    </>
  );
};

export default News;
