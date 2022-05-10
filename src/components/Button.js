import React from 'react'

export default function Button({ onClick, primary, name }) {
    return (
        <button
            type="button"
            className={`inline-flex justify-center px-4 py-2 text-lg font-semibold 0 border border-transparent rounded-md duration-300 ${primary ? 'text-white bg-red-400' : 'text-black bg-zinc-100'}`}
            onClick={onClick}
        >
            {name}
        </button>
    )
}
