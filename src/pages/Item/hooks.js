import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getPost } from '/redux/entities/posts/selectors';
import { findPost } from '/redux/entities/posts/actions';
import { getParam } from '/redux/router/selectors';

export const useData = () => {
  const id = useSelector(state => getParam(state, 'id'));
  const dispatch = useDispatch();

  return {
    id,
    findPost: useCallback(() => dispatch(findPost(id)), [dispatch, id]),
    data: useSelector(state => getPost(state, id)),
  };
};