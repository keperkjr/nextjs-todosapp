import React from 'react'

export async function generateStaticParams() {
    // const response = await fetch("https://example.com/movies.json");
    // const data = await response.text();
    // return data;

    return [{id: "one"}, {id: "two"}, {id: "three"}];
}

function page({params}) {
  return (
    <div>Params ID: {params.id}</div>
  )
}

export default page