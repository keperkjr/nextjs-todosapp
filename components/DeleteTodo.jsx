"use client"

import React from 'react'
import { useRouter } from 'next/navigation'

async function DeleteTodo({id}) {

    const router = useRouter();
    const dummyWait = await new Promise((resolve) => setTimeout(resolve, 5000))

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
        // router.push("/"); // Navigate to home page
    }
    return (
        <button onClick={handleDelete}>Delete</button>
    )
}

export default DeleteTodo