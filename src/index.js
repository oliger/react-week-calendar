import React from 'react';
import ReactDOM from 'react-dom';
import Week from './Calendar/Week';

import './style.scss';

const DAYS = [
  [
    { start: 50, end: 200 },
    { start: 860, end: 980 },
    { start: 870, end: 950 },
    { start: 1010, end: 1150 }
  ],
  [
    { start: 30, end: 140 },
    { start: 1210, end: 1300 }
  ],
  [
    { start: 710, end: 790 },
    { start: 1010, end: 1150 }
  ],
  [
    { start: 530, end: 600 },
    { start: 560, end: 620 },
    { start: 610, end: 670 }
  ],
  [
    { start: 330, end: 400 },
    { start: 360, end: 420 }
  ],
  [
    { start: 30, end: 140 },
    { start: 30, end: 170 }
  ],
  [
    { start: 560, end: 620 },
    { start: 610, end: 670 },
    { start: 1210, end: 1300 }
  ]
];

ReactDOM.render(<Week days={DAYS} />, document.getElementById('root'));
