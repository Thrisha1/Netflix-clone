import React from 'react'

function Navbar () {
    return (
        <div className="flex p-5 justify-between text-xl bg-black text-white items-center">
            <div className="text-2xl font-bold tracking-widest text-red-600">
                Netflix
            </div>
            <div className="flex gap-5 items-center">
                <p>Home</p>
                <p>Contact</p>
                <button className="border-2 p-2 hover:bg-red-600">signin</button>
                <button>Signup</button>
            </div>
        </div>
    )
}

export default Navbar