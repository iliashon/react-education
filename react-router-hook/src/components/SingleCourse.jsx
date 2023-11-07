import { Link, useNavigate, useParams } from "react-router-dom"
import courses from "../data/courses"
import { useEffect } from "react";

const SingleCourse = () => {
    const params = useParams();

    const havigate = useNavigate();

    const course = courses.find((course) => course.slug === params.slug)

    useEffect(() => {
        if(!course) {
            havigate('..', {relative: 'path'})
        }
    }, [course, havigate])

    return (
        <>
            <h1>{course?.title}</h1>
            <h2>{course?.slug}</h2>
            <h3>{course?.id}</h3>
            <Link to='..' relative="path">All courses</Link>
        </>
    )
}

export default SingleCourse