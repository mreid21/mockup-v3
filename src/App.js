import { useState } from 'react';
import './styles/App.scss';
import Semester from './components/Semester';
import CourseGraph from './assets/CourseGraph';

function App() {

  const [coursesTaken, setTaken] = useState([])

  const courseMap = new Map()
  let courseGraph = new CourseGraph()

  courseMap.set('COP2220', {courseId: 'COP2220', name: 'Programming I', credits: 3, prereqs: []})
  courseMap.set('COT3100', {courseId: 'COT3100', name: 'Computational Structures', credits: 4, prereqs: []})
  courseMap.set('COP3503', {courseId: 'COP3503', name: 'Programming II', credits: 3, prereqs: ['COP2220']})
  courseMap.set('CDA3100', {courseId: 'CDA3100', name: 'Intro to Architecture', credits: 4, prereqs: ['COP2220']})
  courseMap.set('COP3210', {courseId: 'COP3210', name: 'Theory of Computation', credits: 3, prereqs: ['COT3100']})
  courseMap.set('COP3530', {courseId: 'COP3530', name: 'Data Structures', credits: 3, prereqs: ['COP3503']})
  courseMap.set('COT4400', {courseId: 'COT4400', name: 'Design and Analysis of Algo', credits: 3, prereqs: ['COP3503', 'COT3100']})

  courseGraph.constructGraph(courseMap)
  courseGraph.display()

  //TODO: fix this to do something right for once

  return (
    <main className="container">
      <div className="course-container">
        
      </div>
    </main>
  );
}

export default App;
