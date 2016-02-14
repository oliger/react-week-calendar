import React from 'react';
import map from 'lodash/map';
import sortBy from 'lodash/sortBy';
import Event from './Event';
import style from './style.scss';
import { MINUTES_PER_DAY, HOURS_PER_DAY } from './constants';

function getComputedEvents(events) {
  events = sortBy(events, 'start');

  let computedEvents = [];

  function getContainerWidth(event) {
    if (computedEvents.length === 0) { return 1; }

    for (var j = 0, m = computedEvents.length; j < m; j++) {
      var r = computedEvents[j];
      if (event.start < r.end) { return r.left; }
    }

    return 1;
  }

  while (events.length > 0) {
    let e = events.shift();

    // Find overlapping events.
    let overlappingEvents = [e];
    while (events.length > 0 && e.start <= events[0].start && e.end > events[0].start) {
      overlappingEvents.push(events.shift());
    }

    // The container's width is the maximun space that we can use to render the
    // overlapping events.
    let containerWidth = getContainerWidth(e, computedEvents);

    let width = containerWidth / overlappingEvents.length;
    computedEvents.push(...map(overlappingEvents, (oe, i) => {
      return {
        ...oe,
        width,
        height: (oe.end - oe.start) / MINUTES_PER_DAY,
        top: oe.start / MINUTES_PER_DAY,
        left: width * i
      };
    }));
  }

  return computedEvents;
};

const Day = ({ events }) => {
  return (
    <div className={style.dayContainer}>
      {
        map(getComputedEvents(events), (e, i) => {
          return <Event key={`event-${i}`} {...e} />;
        })
      }
    </div>
  );
}

export default Day;
