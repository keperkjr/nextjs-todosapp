import { notFound } from 'next/navigation';
import React from 'react'

export async function generateStaticParams() {
    // const response = await fetch("https://example.com/movies.json");
    // const data = await response.json();
    // return data;

    return [{id: "one"}, {id: "two"}, {id: "three"}];
}

function page({params}) {
    if (parseInt(params.id) === 1) {
        notFound();
    }

    return (
        <div>Params ID: {params.id}</div>
    )
}

export default page