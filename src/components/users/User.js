import React, { Component } from 'react';
import Spinner from '../layout/Spinner';

export class User extends Component {
  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }

  render() {
    if (this.props.user != null) {
      const {
        name,
        avatat_url,
        location,
        bio,
        blog,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
      } = this.props.user;

      return <div>{name}</div>;
    }

    return <Spinner />;
  }
}

export default User;
