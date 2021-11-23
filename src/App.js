import { useState, useEffect } from 'react';
import './styles/App.scss';
import Semester from './components/Semester';

function App() {

  const [coursesTaken, setTaken] = useState(new Map())

  //setTaken(coursesTaken.set('Spring 2022', [computingCourses[0], computingCourses[1]]))
  //setTaken(coursesTaken.set('Fall 2022', [computingCourses[2], computingCourses[3]]))

  const computingCourses = [
    {UUID: 35223553, courseId: 'COP2220', name: 'Programming I', credits: 3, prereqs: []},
    {UUID: 19024908, courseId: 'COT3100', name: 'Computational Structures', credits: 4, prereqs: []},
    {UUID: 19325081, courseId: 'COP3503', name: 'Programming II', credits: 3, prereqs: ['COP2220']},
    {UUID: 12490963, courseId: 'CDA3100', name: 'Intro to Architecture', credits: 4, prereqs: ['COP2220']},
    {UUID: 35909503, courseId: 'COP3210', name: 'Theory of Computation', credits: 3, prereqs: ['COT3100']},
    {UUID: 13509899, courseId: 'COP3530', name: 'Data Structures', credits: 3, prereqs: ['COP3503']},
    {UUID: 13580984, courseId: 'COT4400', name: 'Design and Analysis of Algo', credits: 3, prereqs: ['COP3503', 'COT3100']}
  ]

  //TODO: fix this to do something right for once

  const mapped = Array.from(coursesTaken).map(([key, val]) => <Semester term={key} courses={val}/>)

  return (
    <main className="container">
      <div className="course-container">
        {mapped}
      </div>
    </main>
  );
}

export default App;
