
import '../styles/App.scss'
import Course from './Course';

const Semester = ({courses, term}) => {

    

    const mapped = courses.map((course) => <Course key={course.UUID} course={course}/>)

    return(
        <section className="glass-box course-box">
            <div className="course-box__content">
                <header className="course-box__header">
                    <p>{term}</p>
                    <p>X</p>
                </header>
                {mapped}
            </div>
        </section>
    )
}

export default Semester;