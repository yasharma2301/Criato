import React from 'react'

export default function Button({ onClick, success, name }) {
    return (
        <button
            type="button"
            className={`inline-flex justify-center px-4 py-2 text-sm font-semibold 0 border border-transparent rounded-md duration-300 ${success ? 'hover:bg-green-200 text-green-900 bg-green-100' : 'hover:bg-red-200 text-red-900 bg-red-100'}`}
            onClick={onClick}
        >
            {name}
        </button>
    )
}
