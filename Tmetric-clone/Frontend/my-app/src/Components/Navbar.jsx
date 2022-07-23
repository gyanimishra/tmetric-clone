import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiChevronDown } from 'react-icons/bi'
import { BsGlobe2 } from 'react-icons/bs'
import { DropdownWhyTMatric } from './DropdownWhyTMatric';
import { useNavigate } from 'react-router-dom'
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
    const navigate = useNavigate()
    return (
        <div className='NavbarMainDiv'>
            <div className='NavbarImage'>
                <img onClick={() => navigate('/')} src="https://tmetric.com/images/tmetric_logo_with_text.svg" width="147" height="54" alt="TMETRIC" />
                <button><BsGlobe2 /> EN</button>
            </div>
            <div className={`NavbarPageName ${whyTMetricDropdown && 'dropdownSelected'}`}><span onClick={WhyTMatricClick}>Why TMetric</span><BiChevronDown className='NavbarDownArrow' /></div>
            <div className={`NavbarPageName ${appsDropdown && 'dropdownSelected'}`} ><span onClick={AppClick}>Apps & Integrations</span><BiChevronDown className='NavbarDownArrow' /></div>
            <div className='NavbarPageName'><Link to={'/pricing'}>Pricing</Link></div>
            <div className='NavbarPageName'><Link to={'/support'}>Support</Link></div>
            <div className='NavbarPageName'><Link to={'/blog'}>Blog</Link> </div>

            <div className="NavbarLoginSignup">
                <Link to="/">Log In</Link>
                <button>Sign Up</button>
            </div>
            {whyTMetricDropdown && <DropdownWhyTMatric />}
            {appsDropdown && <DropdownApp />}
        </div>
    )
}
