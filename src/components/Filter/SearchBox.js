import React from 'react'

export default function SearchBox({ placeholder, value,  onClick, onKeyUp, onChange }) {
    return (
        <div className="rounded overflow-hidden flex w-min text-lg">
            <input value={value} onKeyUp={onKeyUp} onChange={onChange} type="text" className="px-4 py-3 border" placeholder={placeholder}></input>
            <button onClick={onClick} className="flex items-center justify-center px-4 border">
                <svg className="h-5 w-5 text-grey-dark" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" /></svg>
            </button>
        </div>
    )
}
