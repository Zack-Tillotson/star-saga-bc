import React from 'react';
import InlineCss from "react-inline-css";
import styles from './styles.raw.less';

import {Link} from 'react-router';

export default React.createClass({

  render() {
    return (
      <InlineCss stylesheet={styles} componentName="component">
        <header>
          <Link to="/">
              <div className="imageContainer">
                <img src="/assets/logo.png" alt="Star Saga BC" />
              </div>
              <h1>Star Saga BC</h1>
          </Link>
          {this.props.preferencesOpen && (
            <Link to="/">
              <div className="prefLink">
                ⓧ
              </div>
            </Link>
          )}
          {!this.props.preferencesOpen && (
            <Link to="/preferences/">
              <div className="prefLink">
                ☰
              </div>
            </Link>
          )}
        </header>
      </InlineCss>
    );
  }
});