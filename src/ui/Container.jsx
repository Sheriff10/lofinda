import React from 'react'

export default function Container({ children }) {
    return (
        <div className="wrap container mx-auto">
            {children}
        </div>
    )
}
