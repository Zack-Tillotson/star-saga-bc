import React from 'react';
import InlineCss from "react-inline-css";

import styles from './styles';
import engineStates from '../../engine/states';

const GameContainer = React.createClass({

	componentDidMount() {
		this.app = new PLAYGROUND.Application({

			scale: 1,
			smoothing: true,
			container: this.refs.gameContainer,

			ready() {
				this.setState(engineStates.game);
			}
		});
		window.x = this.app;
	},

	componentWillUnmount() {
		this.app.kill()
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