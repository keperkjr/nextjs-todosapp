"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

function DeleteTodo({id}) {
    const router = useRouter();

    async function handleDelete() {
        const response = await fetch("http://localhost:3000/api/todos", {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: id
            })
        });

        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        router.refresh();
    }
    return (
        <button onClick={handleDelete}>Delete</button>
    )
}

export default DeleteTodo