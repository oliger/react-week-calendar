import React from 'react';
import style from './style.scss';

const Event = ({ width, height, top, left }) => {
  let s = {
    width: `${width * 100}%`,
    height: `${height * 100}%`,
    top: `${top * 100}%`,
    left: `${left * 100}%`
  };

  return (
    <div className={style.eventContainer} style={s}>
      <div className={style.eventPadding}>
        <div className={style.event}>
          <div className={style.eventTitle}>Sample item</div>
          <div className={style.eventLocation}>Sample location</div>
        </div>
      </div>
    </div>
  );
};

export default Event;
