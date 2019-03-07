import React from 'react';
import { render } from 'react-dom';

import createStore from './redux/utils/createStore';
import Root from './components/Root';

const store = createStore();

render(<Root store={store} />, document.getElementById('root'));
