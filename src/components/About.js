import React from 'react'
// import User from './User'
import UserClass from './UserClass'
import UserContext from '../utils/UserContext'

const About = () => {
  return (
    <div>
        <h1>About</h1>
        <h2>This is about page</h2>
        <UserContext.Consumer>
          {({loggedInUser}) => <h1 className='font-bold'>{loggedInUser}</h1>}
        </UserContext.Consumer>
        {/* <User name={"Priyank (fun)"} /> */}
        <UserClass name={"Priyank (Class)"} />
    </div>
  )
}

export default About