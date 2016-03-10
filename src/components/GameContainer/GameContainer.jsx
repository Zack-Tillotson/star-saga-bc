import React from 'react';
import InlineCss from "react-inline-css";

import styles from './styles';
import gameEngine from './engine';

const GameContainer = React.createClass({

	componentDidMount() {
		this.app = new PLAYGROUND.Application({
			container: this.refs.gameContainer,
			ready() {
				this.setState(gameEngine.game);
			}
		});
	},

  render() {
    return (
      <InlineCss stylesheet={styles} componentName="container">
				<div ref="gameContainer"></div>
      </InlineCss>
    );
  }
});

export default GameContainer;