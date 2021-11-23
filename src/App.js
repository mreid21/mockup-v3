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
  const test = () => {
    const courses = Array.from(courseMap.values())
    let all = []

    for(let i = 0; i < 5; i++){

      let semester = []

      for(let j = 0; j < 5; j++){
        courses.forEach(course => {
          if(!coursesTaken.find(c => c.courseId === course.courseId)){
            const update = [...coursesTaken, course]
            setTaken(update)
            semester.push(course)
          }
        })
      }
      all.push(semester)
    }

    return all
  }

  const semesters = test()

  const mapped = semesters.map((entry) => <Semester key={Math.floor(Math.random())} courses={entry}/>)

  return (
    <main className="container">
      <div className="course-container">
        {mapped}
      </div>
    </main>
  );
}

export default App;
