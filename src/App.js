import ResumeHeader from './components/header.js';
import ResumeSection from './components/section.js';
import props from './data/resume.json';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <title>Resume</title>
        <meta name="description" content="Resume as react components"></meta>
      </header>
        <ResumeHeader {...props.header}/>
        <ResumeSection {...props.education}/>
        <ResumeSection {...props.workexperience}/>
        <ResumeSection {...props.otherskills}/>
        <ResumeSection {...props.volunteeractivities}/>
    </div>
  );
}

export default App;
