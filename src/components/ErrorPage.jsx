import { useRouteError } from 'react-router-dom'

function ErrorPage() {

    const error = useRouteError()

    console.log(error)

    return (
        <>
            <p>Oops! Something wrong. Please try another page. </p>
            <p>{error.status}</p>
            <p>{error.statusText || error.message || error.data}</p>
        </>
    )

}

export default ErrorPage