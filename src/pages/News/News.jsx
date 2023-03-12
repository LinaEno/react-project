import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { useMediaQuery } from 'react-responsive';
import { Loader } from 'components/Loader/Loader';
import { useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import {
  NewsTitle,
  Wrapper,
  ListItem,
  Newsman,
  Title,
  Link,
  Content,
  Section,
} from './News.styled';
import css from '../../components/Pagination/Pagination.module.css';

const backendNews = axios.create({
  baseURL: 'https://api.worldnewsapi.com/search-news',
});
const apiKey = 'f58d05baff494e2691c84d86891aab2d';

export async function newsAPI() {
  const news = await backendNews.get(
    `?api-key=${apiKey}&text=finance&number=100`
  );
  return news.data;
}

export const useNews = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    newsAPI().then(data => {
      setDetails(data);
    });
  }, [details]);

  return details;
};

// const apiKey = '1ea1dfcd65a843c58fc95d0f9ae2dab9';

const News = () => {
  const { news } = useNews();
  const [newsAPi, setNewsApi] = useState(
    () => JSON.parse(localStorage.getItem('newsAPi')) ?? []
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // useEffect(() => {
  //   const getNews = async () => {
  //     try {
  //       setLoading(true);
  //       const { news } = await newsApi();
  //       setNewsApi(news);
  //       setError('');
  //     } catch (error) {
  //       setError('Oops. Something went wrong 😭');
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   getNews();
  // }, []);

  useEffect(() => {
    try {
      if (!news) return;
      setNewsApi(news);
      localStorage.setItem('newsAPi', JSON.stringify(newsAPi));
    } catch (error) {
      setError('Oops. Something went wrong 😭');
    } finally {
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [news, newsAPi, 'newsAPi']);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 5;
  const endOffset = itemOffset + itemsPerPage;
  const currentNews = newsAPi.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(newsAPi.length / itemsPerPage);

  const isTablet = useMediaQuery({ query: '(min-width: 768px)' });

  const elementToScroll = useRef(null);

  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % newsAPi.length;
    setItemOffset(newOffset);
    // elementToScroll.current.scrollIntoView({ behavior: 'smooth' });
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {loading && <Loader />}
      {!loading && (
        <Section>
          <Wrapper>
            <NewsTitle ref={elementToScroll}>News</NewsTitle>
            {currentNews.map(({ id, title, url, author }) => {
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
          {isTablet ? (
            <ReactPaginate
              pageCount={pageCount}
              pageRangeDisplayed={2}
              marginPagesDisplayed={1}
              nextLabel=">"
              previousLabel="<"
              breakLabel="..."
              onPageChange={handlePageClick}
              renderOnZeroPageCount={null}
              containerClassName={css.pagination}
              pageLinkClassName={css.pageLink}
              nextLinkClassName={css.pageLink}
              previousLinkClassName={css.pageLink}
              breakLinkClassName={css.pageLink}
              activeClassName={css.active}
              disabledClassName={css.disabled}
            />
          ) : (
            <ReactPaginate
              pageCount={pageCount}
              pageRangeDisplayed={0}
              marginPagesDisplayed={1}
              nextLabel=">"
              previousLabel="<"
              breakLabel={null}
              onPageChange={handlePageClick}
              renderOnZeroPageCount={null}
              containerClassName={css.pagination}
              pageLinkClassName={css.pageLink}
              nextLinkClassName={css.pageLink}
              previousLinkClassName={css.pageLink}
              activeClassName={css.active}
              disabledClassName={css.disabled}
            />
          )}
        </Section>
      )}
    </>
  );
};

export default News;
