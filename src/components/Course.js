
const Course = ({course}) => {

    return(
        <div class="course-box__course">
            <p class="course-box__course--code">{course.name}</p>
            <p>{course.credits}</p>
        </div>
    )
}

export default Course;