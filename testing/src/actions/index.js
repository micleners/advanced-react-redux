import axios from 'axios';
import { SAVE_COMMENT } from 'actions/types';
import { FETCH_COMMENTS } from 'actions/types';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment,
  };
}

export function fetchComments(comment) {
  const response = axios.get('https://jsonplaceholder.typicode.com/comments');
  return {
    type: FETCH_COMMENTS,
    payload: response,
  };
}
