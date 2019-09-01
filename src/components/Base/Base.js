import React from 'react';
import PropTypes from 'prop-types';
import Link from '/components/Link';

import { toList } from '/redux/router/actions';

const Base = ({ classes, children }) => (
  <div className={classes.wrapper}>
    <h1>
      <Link className={classes.link} to={toList()}>
        News
      </Link>
    </h1>

    {children}
  </div>
);

Base.propTypes = {
  classes: PropTypes.shape({
    wrapper: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
  children: PropTypes.node.isRequired,
};

export default Base;
