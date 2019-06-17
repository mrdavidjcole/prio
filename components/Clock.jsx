import React, { useState } from 'react';
import useInterval from '../hooks/useInterval.js';

const Clock = (props) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useInterval(() => {
    setCurrentTime(new Date());
  }, 1000);

  return (
    <>
      <span>{currentTime.toLocaleTimeString()}</span>
      <ul>
        <li>
          Hours: {currentTime.getHours()}
        </li>
        <li>
          Minutes: {currentTime.getMinutes()}
        </li>
        <li>
          Seconds: {currentTime.getSeconds()}
        </li>
        <li>
          Milliseconds: {currentTime.getMilliseconds()}
        </li>
      </ul>
      <div className='circle'>
        <div className='hours_hand hand'>
          <div className='hours_number number'>
            {(currentTime.getHours() + 24) % 12 || 12}
          </div>
        </div>
        <div className='minutes_hand hand'>
          <div className='minutes_number number'>
            {currentTime.getMinutes()}
          </div>
        </div>
        <div className='seconds_hand hand'>
          <div className='seconds_number number'>
            {currentTime.getSeconds()}
          </div>
        </div>
      </div>
      <style jsx>{`
        .circle {
          border: 2px solid #fff;
          border-radius: 50%;
          width: 500px;
          height: 500px;
          position: relative;
        }

        .hand {
          border: 1px solid white;
          height: 100%;
          left: 0;
          position: absolute;
          top: 0;
          width: 40px;
          transition: transform .9s ease-out;
        }

        .number {
          width: 100%;
          font-family: monospace;
          font-size: 2em;
          text-align: center;
        }

        .hours_hand {
          transform: translateX(228px) rotate(${currentTime.getHours() * 30}deg);
        }

        .hours_number {
          background-color: rgba(255, 255, 255, 0);
        }

        .minutes_hand {
          transform: translateX(228px) rotate(${currentTime.getMinutes() * 6}deg);
        }

        .minutes_number {
          background-color: rgba(255, 255, 255, .2);
        }

        .seconds_hand {
          transform: translateX(228px) rotate(${(currentTime.getSeconds() * 6) || 360}deg);
        }

        .seconds_number {
          background-color: rgba(255, 255, 255, .4);
        }
      `}</style>
    </>
  );
}

export default Clock;
