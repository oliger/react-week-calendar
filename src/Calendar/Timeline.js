import React, { Component } from 'react';
import padStart from 'lodash/padStart';
import { HOURS_PER_DAY } from './constants';
import style from './style.scss';

const Timeline = () => {
  let steps = [];
  for (var i = 0; i < HOURS_PER_DAY; i++) {
    let h = i > 0 ? `${padStart(i, 2, 0)}:00` : null;
    steps.push(
      <div key={`step-${i}`} className={style.timelineStep}>{h}</div>
    );
  }

  return (
    <div className={style.timelineContainer}>
      <div className={style.timeline}>
        <div className={style.timelineStepsContainer}>{steps}</div>
      </div>
    </div>
  );
};

export default Timeline;
