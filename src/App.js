import { useState } from 'react';
import './styles/App.scss';
import Semester from './components/Semester';

function App() {

  //setTaken(coursesTaken.set('Spring 2022', ))
  //setTaken(coursesTaken.set('Fall 2022', ))

  const computingCourses = [
    {UUID: 35223553, courseId: 'COP2220', name: 'Programming I', credits: 3, prereqs: []},
    {UUID: 19024908, courseId: 'COT3100', name: 'Computational Structures', credits: 4, prereqs: []},
    {UUID: 19325081, courseId: 'COP3503', name: 'Programming II', credits: 3, prereqs: ['COP2220']},
    {UUID: 12490963, courseId: 'CDA3100', name: 'Intro to Architecture', credits: 4, prereqs: ['COP2220']},
    {UUID: 23852352, courseId: 'CIS3253', name: 'Legal and Ethical Issues in Computing', credits: 3, prereqs: ['COP2220']},
    {UUID: 30923586, courseId: 'COP3404', name: 'Systems Software', credits: 3, prereqs: ['CDA3100']},
    {UUID: 23193859, courseId: 'COP3703', name: 'Intro to Databases', credits: 3, prereqs: ['COP3503']},
    {UUID: 82358922, courseId: 'CNT4504', name: 'Computer Networks', credits: 3, prereqs: ['COP3503']},
    {UUID: 35909503, courseId: 'COP3210', name: 'Theory of Computation', credits: 3, prereqs: ['COT3100']},
    {UUID: 23267932, courseId: 'CEN4010', name: 'Software Engineering', credits: 3, prereqs: ['COP3703', 'COP3530']},
    {UUID: 13509899, courseId: 'COP3530', name: 'Data Structures', credits: 3, prereqs: ['COP3503']},
    {UUID: 13580984, courseId: 'COT4400', name: 'Design and Analysis of Algo', credits: 3, prereqs: ['COP3530', 'COT3100']},
    {UUID: 38293619, courseId: 'COP4620', name: 'Construction of Language Translators', credits: 3, prereqs: ['COP3530', 'COP3210']}
  ]
  //TODO: fix this to do something right for once
  const [taken, setTaken] = useState([])

  const autoCompleteSemester = () => {
    let sem = []
    for(let course of computingCourses){
      if(!taken.flat().find(c => c.UUID === course.UUID)){
        if(hasPrereqs(taken.flat(), course.prereqs)){
          sem.push(course)
        }
      }
    }
    console.log(sem)
    const update = [...taken, sem]
    setTaken(update)
  }

  const hasPrereqs = (coursesTaken, prereqs) => {
    return prereqs.every((course) => coursesTaken.find(c => c.courseId === course))
  }

  //stop using index as key it's an anti-pattern
  const mapped = taken.map((semester, index) => <Semester key={index} term={'Spring2023'} courses={semester}/>)

  return (
    <main className="container">
      <div className="course-container">
        {mapped}
      </div>
      <div>
      <button onClick={autoCompleteSemester}>Autofill Semester</button>
      </div>
    </main>
  );
}

export default App;
