import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div>
        <h2>Error 404 is not found</h2>
        <Link to="/">Go Home</Link>
    </div>
  )
}
