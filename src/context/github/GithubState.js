import React, { userReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
  SERACH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_USERS,
} from '../types';

const GithubState = props => {
  const initialState = {
    users: [],
    user: [],
    repos: [],
    loading: false,
  };

  const [state, dispatch] = userReducer(GithubReducer, initialState);

  // search users
  // get user
  // get repos
  // clear users
  // set loading

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
