import React from 'react';
import InlineCss from "react-inline-css";

import {Link} from 'react-router';
import Game from '../GameContainer';

import styles from './styles';

const Homepage = React.createClass({

  render() {
    return (
      <InlineCss stylesheet={styles} componentName="container">
        <h1>Star Saga BC</h1>
        <Game />
      </InlineCss>
    );
  }
});

export default Homepage;