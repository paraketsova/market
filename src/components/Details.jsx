import React from 'react'

export default function Details({itemData}) {
    return (
        <div>
            <h2>{itemData.name}</h2>
            <p>Month to date: {itemData.mtd}</p>
        </div>
    )
}
