import React from 'react';
import map from 'lodash/map';
import BackgroundTimeline from './BackgroundTimeline';
import Day from './Day';
import Timeline from './Timeline';
import style from './style.scss';

const Week = ({ days }) => {
  return (
    <div>
      <Timeline />
      <div className={style.eventsContainer}>
        <BackgroundTimeline>
          {
            map(days, (d, i) => {
              return <div key={`day-${i}`} className={style.weekDay}><Day events={d} /></div>;
            })
          }
        </BackgroundTimeline>
      </div>
    </div>
  );
}

export default Week;
