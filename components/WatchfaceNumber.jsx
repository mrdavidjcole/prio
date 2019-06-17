
const WatchfaceNumber = (props) => {
  const {units} = props;
  let angleMultiplier;
  switch (units) {
    case 'hours':
      angleMultiplier = 30;
      break;
    case 'minutes':
      angleMultiplier = 6;
      break;
    default:
      angleMultiplier = 6;
  }

  return (
    <>
      <div className='hours_hand hand'>
        <div className='hours_number number'>
          {props.number}
        </div>
      </div>
      <style jsx>{`
        .hand {
          /* border: 1px solid white; */
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
          font-size: ${units === 'hours' ? '2em' : '1.5em'};
          text-align: center;
          padding-top: 8px;
        }

        .hours_hand {
          transform: translateX(228px) rotate(${props.number * angleMultiplier}deg);
        }

        .hours_number {
          background-color: rgba(255, 255, 255, 0);
        }
      `}</style>
    </>
  );
}

export default WatchfaceNumber;
