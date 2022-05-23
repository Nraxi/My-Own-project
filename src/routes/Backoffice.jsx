import React from 'react'
import { Link } from 'react-router-dom'

function Backoffice() {
  return (
    <div>
      <h5>Backoffice</h5>
      <Link to="/Backoffice/edit"><h3>Edit</h3></Link>

    </div>

  )
}

export default Backoffice