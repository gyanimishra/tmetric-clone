import React from 'react'
import '../styles/WhyTMatric.css'
import { BsArrowRightShort } from 'react-icons/bs'
export const DropdownWhyTMatric = () => {
    return (
        <div className='WhyTMatricMainDiv'>
            <div>
                <div>
                    <div className='WhyTMatricHeading'>Overview</div>
                    <div className='WhyTMatricSmallDiv'>
                        <div className='WhyTMatricTitle'>Industry</div>
                        <span className='WhyTMatricText'>Made for all industries. Check benefits of usage</span>
                    </div>
                    <div className='WhyTMatricSmallDiv'>
                        <div className='WhyTMatricTitle'>Customers</div>
                        <span className='WhyTMatricText'>See why business use TMetric for time tracking and workflow management</span>
                    </div>
                </div>
            </div>
            <div>
                <div className='WhyTMatricHeading'>Features</div>
                <div className='WhyTMatricGrid'>
                    <div>
                        <div className='WhyTMatricSmallDiv'>
                            <img className='WhyTMatricIcon' src="https://tmetric.com/media/qojb5snq/icon-timer-gray.svg" alt="" />
                            <div>
                                <div className='WhyTMatricTitle'>Time Tracking</div>
                                <span className='WhyTMatricText'>Capture and control every task you work on</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='WhyTMatricSmallDiv'>
                            <img className='WhyTMatricIcon' src="https://tmetric.com/media/5r1l1s4g/icon-invoice-gray.svg" alt="" />
                            <div>
                                <div className='WhyTMatricTitle'>Billing & Invoicing</div>
                                <span className='WhyTMatricText'>Set billable rates and easily create invoices</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='WhyTMatricSmallDiv'>
                            <img className='WhyTMatricIcon' src="https://tmetric.com/media/kqgpqtvh/icon-project-gray.svg" alt="" />
                            <div>
                                <div className='WhyTMatricTitle'>Project Management</div>
                                <span className='WhyTMatricText'>Create projects, set rates and budgets</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='WhyTMatricSmallDiv'>
                            <img className='WhyTMatricIcon' src="https://tmetric.com/media/isxcp2ip/icon-team-gray.svg" alt="" />
                            <div>
                                <div className='WhyTMatricTitle'>Team Management</div>
                                <span className='WhyTMatricText'>Monitor productivity and activity level of your team</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='WhyTMatricSmallDiv'>
                            <img className='WhyTMatricIcon' src="https://tmetric.com/media/g3jc0dsg/icon-reports-gray.svg" alt="" />
                            <div>
                                <div className='WhyTMatricTitle'>Task Management</div>
                                <span className='WhyTMatricText'>Manage tasks and set up an effective workflow</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='WhyTMatricSmallDiv'>
                            <img className='WhyTMatricIcon' src="https://tmetric.com/media/bxylkc2s/icon-time-off-gray.svg" alt="" />
                            <div>
                                <div className='WhyTMatricTitle'>Time Off</div>
                                <span className='WhyTMatricText'>Simple ask for days off and control teams attendence</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='WhyTMatricAllFeatures'><span>View all features </span><BsArrowRightShort /></div>
            </div>
        </div>
    )
}