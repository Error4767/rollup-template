import React from 'react';
import ReactDOM from 'react-dom';

import debounce from '@/common/debounce.js';

import Search from './Search/Search.js';

import './public.module.css';

console.log(debounce);

ReactDOM.render(<Search></Search>, document.querySelector('.root'));