import ClientComponent from '@/components/ClientComponent'
import React from 'react'

function ServerPage() {
    console.log("Hi, I'm rendered on the server")
  return (
    <div>
        <div>Server Page</div>
        <ClientComponent />
    </div>
  )
}

export default ServerPage