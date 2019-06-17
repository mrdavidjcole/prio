import React, { useState } from 'react';
import useInterval from '../hooks/useInterval.js';
import WatchfaceNumber from '../components/WatchfaceNumber.jsx';


const ProjectsWatch = (props) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useInterval(() => {
    setCurrentTime(new Date());
  }, 100000);

  const hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let minutes = [];
  for (let i = 0; i <= 59; i = i + 5) {
    minutes.push(i);
  }

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
      <div className='present_line'></div>
      <div className='disk_container'>
        <div className='hours_disk'>
          {hours.map(hour => <WatchfaceNumber number={hour} units='hours' />)}
        </div>
      </div>
      <div className='disk_container'>
        <div className='minutes_disk'>
          {minutes.map(minute => <WatchfaceNumber number={minute} units='minutes' />)}
        </div>
      </div>
      <style jsx>{`
        .present_line {
          border: 1px solid rgb(231, 209, 8);
          height: 240px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translateY(-100%);
        }

        .disk_container {
          border: 2px solid #fff;
          border-radius: 50%;
          width: 500px;
          height: 500px;
          position: absolute;
          display: flex;
          justify-content: center;
          align-items: center;
          top: 50%;
          left: 50%;
          transform: translateY(-50%) translateX(-50%);
        }

        .hours_disk {
          flex: 0 0 auto;
          position: relative;
          height: 100%;
          width: 100%;
          transform: rotate(${-(currentTime.getHours() + (currentTime.getMinutes() / 60)) * 30}deg);
        }

        .minutes_disk {
          flex: 0 0 auto;
          position: relative;
          height: 80%;
          width: 100%;
          transform: rotate(${-(currentTime.getMinutes() + (currentTime.getSeconds() / 60)) * 6}deg);
        }
      `}</style>
    </>
  );
}

export default ProjectsWatch;
