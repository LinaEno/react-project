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
  baseURL: 'https://api.worldnewsapi.com/search-news',
});
const apiKey = '1ea1dfcd65a843c58fc95d0f9ae2dab9';

const newsApi = async () => {
  const news = await backendNews.get(`?api-key=${apiKey}&text=finance`);
  console.log(news.data);
  return news.data;
};

const News = () => {
  const [newsAPi, setNewsApi] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getNews = async () => {
      try {
        setLoading(true);
        const { news } = await newsApi();
        setNewsApi(news);
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
            {newsAPi.map(({ id, title, url, author }) => {
              return (
                <ListItem key={id}>
                  <Newsman>
                    <Title>{author}</Title>
                    <Link
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                    >
                      Follow
                    </Link>
                  </Newsman>
                  <Content>{title}</Content>
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
