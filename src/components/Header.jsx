import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-black mb-4'>
            <div className='container py-3 d-flex align-items-center justify-content-between'>
                <h1 className='text-white fw-bold'>Logo</h1>
                <div className='d-flex gap-3'>
                    <Link className='text-white fw-medium' to="/Aboutpage">About</Link>
                    <Link className='text-white fw-medium' to="/Contactpage">Contact</Link>
                    <Link className='text-white fw-medium' to="/Mappage">Mappage</Link>
                </div>
            </div>
        </div>
    )
}

export default Header;