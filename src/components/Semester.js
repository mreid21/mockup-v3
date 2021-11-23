
import '../styles/App.scss'
import Course from './Course';

const Semester = ({courses, term}) => {

    return(
        <section class="glass-box course-box">
            <div class="course-box__content">
                <header class="course-box__header">
                    <p>{term}</p>
                    <p>X</p>
                </header>
                {courses.map((course) => <Course course={course}/>)}
            </div>
        </section>
    )
}

export default Semester;