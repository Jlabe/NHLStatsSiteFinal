import React from "react"
import { Link } from "gatsby"

const LanguageSwitch = ({ location }) => {
    let pageName = location.pathname

    if (pageName.includes("/el")) {
        pageName = pageName.split("/")[2]
    }

    let greekPagePath = `/el/${pageName}`

    return (
        <div>
            <Link to={pageName}>English</Link>
            <Link to={greekPagePath}>Ελληνικα</Link>
        </div>
    )
}

export default LanguageSwitch