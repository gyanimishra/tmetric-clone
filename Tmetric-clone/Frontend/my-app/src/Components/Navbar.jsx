import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiChevronDown } from 'react-icons/bi'
import { BsGlobe2 } from 'react-icons/bs'
import { DropdownWhyTMatric } from './DropdownWhyTMatric';

import './Navbar.css'
import { DropdownApp } from './DropdownApp&Integeration';
export const Navbar = () => {
    const [whyTMetricDropdown, setWhyTMetric] = useState(false)
    const [appsDropdown, setApps] = useState(false)
    const WhyTMatricClick = () => {
        setWhyTMetric(!whyTMetricDropdown)
        setApps(false)
    }
    const AppClick = () => {
        setWhyTMetric(false)
        setApps(!appsDropdown)
    }
    return (
        <div className='NavbarMainDiv'>
            <div className='NavbarImage'>
                <img src="https://tmetric.com/images/tmetric_logo_with_text.svg" width="147" height="54" alt="TMETRIC" />
                <button><BsGlobe2 /> EN</button>
            </div>
            <div className={`NavbarPageName ${whyTMetricDropdown && 'dropdownSelected'}`}><span onClick={WhyTMatricClick}>Why TMetric</span><BiChevronDown className='NavbarDownArrow' /></div>
            <div className={`NavbarPageName ${appsDropdown && 'dropdownSelected'}`} ><span onClick={AppClick}>Apps & Integrations</span><BiChevronDown className='NavbarDownArrow' /></div>
            <div className='NavbarPageName'><Link to={'/'}>Pricing</Link></div>
            <div className='NavbarPageName'><Link to={'/'}>Support</Link></div>
            <div className='NavbarPageName'><Link to={'/'}>Blog</Link> </div>
            <div className="NavbarLoginSignup">
                <Link to="/">Log In</Link>
                <button>Sign Up</button>
            </div>
            {whyTMetricDropdown && <DropdownWhyTMatric />}
            {appsDropdown && <DropdownApp />}
        </div>
    )
}
