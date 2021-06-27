import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllPosts } from '../../store/actions';
import { Button, Spinner } from 'react-bootstrap';
import Masonry from 'react-masonry-css'
import Moment from 'react-moment';

const HomePosts = () => {
  const dispatch = useDispatch();
  const postsHome = useSelector(state => state.posts);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getAllPosts({}, 1, "desc", 6));
  }, [dispatch])

  const loadMorePosts = () => {
    const prevState = postsHome;
    const incrementPage = postsHome.page + 1
    setLoading(true)
    dispatch(getAllPosts(prevState, incrementPage, "desc", 6))
      .then(() => setLoading(false))
  }

  return (
    <>
      {loading ?
        <div style={{ textAlign: 'center'}}>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
        : null
      }
      {postsHome.end === false ?
        <Button
          variant="outline-dark"
          onClick={() => loadMorePosts()}
        >
          Load more
        </Button> : null
      }
    </>
  );
}

export default HomePosts;

