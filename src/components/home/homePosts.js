import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllPosts } from '../../store/actions';
import { Button, Spinner } from 'react-bootstrap';
import Masonry from 'react-masonry-css'
import Moment from 'react-moment';
import { LinkContainer } from 'react-router-bootstrap'

const HomePosts = () => {
  const dispatch = useDispatch();
  const homePosts = useSelector(state => state.posts);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    dispatch(getAllPosts({}, 1, "desc", 6));
  }, [dispatch])

  const loadMorePosts = () => {
    const prevState = homePosts;
    const incrementPage = homePosts.page + 1
    setLoading(true)
    dispatch(getAllPosts(prevState, incrementPage, "desc", 6))
      .then(() => setLoading(false))
  }

  return (
    <>
      <Masonry
        breakpointCols={{
          default: 3,
          1100: 3,
          800: 2,
          500: 1
        }}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column">
        {
          homePosts.posts ?
          homePosts.posts.map(post =>(
            <div key={post.id}>
              <img 
                style={{width: '100%', height: '200px'}}
                src={post.image} 
                alt="image" 
              />
              <div className="author">
                <span>{post.author} -</span>
                <Moment format="DD MMMM">
                  {post.createdAt}
                </Moment>
              </div>
              <div className="content">
                <div className="title">{post.title}</div>
                <div className="excerpt ">{post.excerpt}</div>
                <LinkContainer 
                  to={`/article/${post.id}`}
                  className="mt-3"
                >
                  <Button variant="light">Read more</Button>
                </LinkContainer>
              </div>  
            </div>
          )) : <Spinner animation="grow" />
        }
      </Masonry>
      {loading ?
        <div style={{ textAlign: 'center'}}>
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </div>
        : null
      }
      {homePosts.end === false ?
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

