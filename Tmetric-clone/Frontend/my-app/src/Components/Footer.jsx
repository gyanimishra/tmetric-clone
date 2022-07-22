import React from 'react'
// import { Link } from 'react-router-dom'
import { FaEdge, FaDesktop, FaApple, FaChrome, FaFirefoxBrowser, FaOpera, FaTwitter } from 'react-icons/fa'
import { ImAndroid, ImYoutube, ImSafari, ImFacebook2, ImLinkedin } from 'react-icons/im'
import './Footer.css'
export const Footer = () => {
    return (
        <div className="FooterMainDiv">
            <div className='FooterContainer1'>
                <div>
                    <img src="https://tmetric.com/images/tmetric_logo_with_text.svg" width="147" height="54" alt="TMETRIC" />
                </div>
                <div className='FooterDiv'>
                    <span>Applications</span>
                    <div className='FooterList'>
                        <FaDesktop className='FooterIcon' />
                        <a href="/"><div>Desktop</div></a>
                    </div>
                    <div className='FooterList'>
                        <FaApple className='FooterIcon' />
                        <a href="/"><div>iOS</div></a>
                    </div>
                    <div className='FooterList'>
                        <ImAndroid className='FooterIcon' />
                        <a href="/"><div>Android</div></a>
                    </div>
                </div>
                <div className='FooterDiv FooterDivCommonMarginPadding'>
                    <span>Browser Extensions</span>
                    <div className='FooterList'>
                        <FaChrome className='FooterIcon' />
                        <a href="/"><div>Chrome</div></a>
                    </div>
                    <div className='FooterList'>
                        <FaFirefoxBrowser className='FooterIcon' />
                        <a href="/"><div>Firefox</div></a>
                    </div>
                    <div className='FooterList'>
                        <FaOpera className='FooterIcon' />
                        <a href="/"><div>Opera</div></a>
                    </div>
                    <div className='FooterList'>
                        <FaEdge className='FooterIcon' />
                        <a href="/"><div>Edge</div></a>
                    </div>
                    <div className='FooterList'>
                        <ImSafari className='FooterIcon' />
                        <a href="/"><div>Safari</div></a>
                    </div>
                </div>
                <div className='FooterDiv FooterDivCommonMarginPadding'>
                    <span>Resources</span>
                    <div className='FooterList'>
                        <a href="/"><div>Solutions</div></a>
                    </div>
                    <div className='FooterList'>
                        <a href="/"><div>Integrations</div></a>
                    </div>
                    <div className='FooterList'>
                        <a href="/"><div>Help</div></a>
                    </div>
                    <div className='FooterList'>
                        <a href="/"><div>Time Trackers Comparison</div></a>
                    </div>
                    <div className='FooterList'>
                        <a href="/"><div>Blog</div></a>
                    </div>
                </div>
                <div className='FooterDiv FooterDivCommonMarginPadding'>
                    <span>About</span>
                    <div className='FooterList'>
                        <a href="/"><div>About TMetric</div></a>
                    </div>
                    <div className='FooterList'>
                        <a href="/"><div>Terms of Service</div></a>
                    </div>
                    <div className='FooterList'>
                        <a href="/"><div>Privacy Policy</div></a>
                    </div>
                    <div className='FooterList'>
                        <a href="/"><div>Cookies Policy</div></a>
                    </div>
                </div>
            </div>
            <div className="FooterContainer2">
                <div>
                    <span>Copyright © Devart 2022</span>
                    <ImFacebook2 className='FooterIcon FooterIconMargin' />
                    <FaTwitter className='FooterIcon FooterIconMargin' />
                    <ImLinkedin className='FooterIcon FooterIconMargin' />
                    <ImYoutube className='FooterIcon FooterIconMargin' />
                </div>
            </div>
        </div>
    )
}
