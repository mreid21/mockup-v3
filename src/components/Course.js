
const Course = ({course}) => {

    return(
        <div className="course-box__course">
            <p className="course-box__course--code">{course.name}</p>
            <p>{course.credits}</p>
        </div>
    )
}

export default Course;