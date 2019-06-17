// import Clock from '../components/Clock.jsx';
import ProjectsWatch from '../components/ProjectsWatch.jsx';

export default () => {
  return (
    <>
      {/* <Clock /> */}
      <ProjectsWatch />
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
