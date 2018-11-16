import React from 'react'

const NotFoundPage = () => (
    <h1 className="notfound">
      Page Not Found
    </h1>
  )
  
  const NotFound = ({ location }) => (
    <div>
      <h3>No match for <code>{location.pathname}</code></h3>
    </div>
  )

  export default NotFoundPage;