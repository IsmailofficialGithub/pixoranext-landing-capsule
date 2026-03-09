import React from 'react'
import logo from "../../assets/logo.png"

const Logo = () => {
    return (
        <div className='relative z-50'>
            <div className="w-20 absolute top-[2vw] left-7">
                <img src={logo} alt="Pixoranest Logo" className="w-full h-auto" />
            </div>
        </div>
    )
}

export default Logo