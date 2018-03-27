import React from 'react'
import Link from 'gatsby-link'

import User from '../../components/users'

export default () => (
    <div>
        <h1>About CSS Modules</h1>
        <p>CSS Modules are cool</p>
        <User
            username="Jane Doe"
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg"
            excerpt="I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
        <Link to="/about/users/jane">Jane</Link>

        <User
            username="Bob Smith"
            avatar="https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg"
            excerpt="I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit."
        />
    </div>
)