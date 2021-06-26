import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../../api';
import { getAllPosts } from '../../store/actions';


const HomePosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(state => state.posts);
  console.log('posts:', posts);

  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch])

  return (
    <>
      <h1>Hello from homePosts</h1>
    </>
  );
}

export default HomePosts;

