"use client"
import React from 'react'

function error({error, reset}) {
  return (
    <div>
        <h2>Opps.. An error occurred processing your request</h2>
        <div>{`${error}`}</div>
        <button onClick={() => reset()}>Try again</button>
    </div>
  )
}

export default error