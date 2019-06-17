import Clock from '../components/Clock.jsx';

export default () => {
  return (
    <>
      <Clock />
      <style global jsx>{`
        body {
          background: #000;
        }
        * {
          color: #fff;
          box-sizing: border-box;
        }
      `}</style>
    </>
  );
}
