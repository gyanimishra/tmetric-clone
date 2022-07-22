import React from 'react'
import './HomePage.css'
import { BsPlayFill, BsArrowRightShort } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { useState } from 'react'
import teamEffectivelyImage from './Images/team effectively image.png'
import profitabilityBusinessImage from './Images/profitability business image.png'
export const HomePage = () => {
    const [timeTracking, setTimeTracking] = useState(true)
    const [projectManagement, setProjectManagement] = useState(false)
    const [teamManagement, setTeamManagement] = useState(false)
    const [billing, setBilling] = useState(false)
    const [reporting, setReporting] = useState(false)
    const [timeOff, setTimeOff] = useState(false)
    const HomePageContainer3 = (a) => {
        if (a === "timeTracking") {
            setTimeTracking(true)
            setProjectManagement(false)
            setTeamManagement(false)
            setBilling(false)
            setReporting(false)
            setTimeOff(false)
        }
        else if (a === "projectManagement") {
            setTimeTracking(false)
            setProjectManagement(true)
            setTeamManagement(false)
            setBilling(false)
            setReporting(false)
            setTimeOff(false)
        }
        else if (a === "teamManagement") {
            setTimeTracking(false)
            setProjectManagement(false)
            setTeamManagement(true)
            setBilling(false)
            setReporting(false)
            setTimeOff(false)
        }
        else if (a === "billing") {
            setTimeTracking(false)
            setProjectManagement(false)
            setTeamManagement(false)
            setBilling(true)
            setReporting(false)
            setTimeOff(false)
        }
        else if (a === "reporting") {
            setTimeTracking(false)
            setProjectManagement(false)
            setTeamManagement(false)
            setBilling(false)
            setReporting(true)
            setTimeOff(false)
        }
        else if (a === "timeOff") {
            setTimeTracking(false)
            setProjectManagement(false)
            setTeamManagement(false)
            setBilling(false)
            setReporting(false)
            setTimeOff(true)
        }
    }
    return (
        <div className='HomePageMainDiv'>
            <div className='HomePageContainer1'>
                <div>
                    <div>Make the best use of your time</div>
                    <p>TMetric is a smart choice for time tracking to see work in progress and keep team, cost and quality under control</p>
                    <div className='HomePageContainer1_EmailDiv'>
                        <div>
                            <MdEmail />
                        </div>
                        <input type="text" placeholder='Enter your email address' />
                    </div>
                    <div className='HomePageContainer1_StartBtn'>
                        <button>Get Started</button>
                        <div>Fully Functional 30-Day Trial</div>
                    </div>
                </div>
                <div>
                    <img src="https://tmetric.com/media/w53hmkzd/img-video-cover.png" alt="" />
                    <div>
                        <BsPlayFill />
                    </div>
                </div>
            </div>
            <div className='HomePageContainer2'>
                <div>
                    <img src="https://tmetric.com/media/zlalggkp/saasworthy_2021_main_page.png" alt="" />
                </div>
                <div>
                    <img src="https://tmetric.com/media/w4mhgaul/time-tracking-software.png" alt="" />
                </div>
                <div>
                    <img src="https://tmetric.com/media/mg3fi1e4/crozdesk_2022_main_page.png" alt="" />
                </div>
                <div>
                    <img src="https://tmetric.com/media/c2eewysw/g2_2022_main_page.png" alt="" />
                </div>
                <div>
                    <img src="https://tmetric.com/media/a00doqsb/icon-customer-rating.png" alt="" />
                </div>
                <div>
                    <img src="https://tmetric.com/media/0mxfl3xw/icon-customer-choice.png" alt="" />
                </div>
                <div>
                    <img src="https://tmetric.com/media/jfxavlps/getapp-logotype.svg" alt="" />
                </div>
            </div>
            <div className='HomePageContainer3'>
                <div>
                    <h2>What makes TMetric your best business companion</h2>
                </div>
                <div className='HomePageContainer3_Child2'>
                    <div>
                        {timeTracking && <img src="https://tmetric.com/media/e5enfaae/img-advantages.png" alt='' />}
                        {projectManagement && <img src="https://tmetric.com/media/d2dhexfq/img-advantages-project-management.png" alt='' />}
                        {teamManagement && <img src="https://tmetric.com/media/b3abexjt/img-advantages-team-management.png" alt='' />}
                        {billing && <img src="https://tmetric.com/media/nmmhl5l3/img-advantages-invoice.png" alt='' />}
                        {reporting && <img src="https://tmetric.com/media/bpli5hts/img-advantages-reporting.png" alt='' />}
                        {timeOff && <img src="https://tmetric.com/media/kuqjgrfl/img-advantages-time-off.png" alt='' />}
                    </div>
                    <div className='HomePageContainer3_Lists'>
                        <div onClick={() => HomePageContainer3("timeTracking")} className={timeTracking ? 'HomePageContainer3_SelectedListDiv' : 'HomePageContainer3_ListDiv'}>
                            <div>
                                {timeTracking ? <img src='https://tmetric.com/media/2p4n4oyc/icon-timer-blue.svg' alt='' /> : <img src='https://tmetric.com/media/qojb5snq/icon-timer-gray.svg' alt='' />}
                            </div>
                            <div>
                                <h3>Time Tracking</h3>
                                {timeTracking && <p>Capture every task you work on. Take control over time intervals by simple time tracking</p>}
                                {timeTracking && <div><span>Learn More</span> <BsArrowRightShort /></div>}
                            </div>
                        </div>
                        <div onClick={() => HomePageContainer3("projectManagement")} className={projectManagement ? 'HomePageContainer3_SelectedListDiv' : 'HomePageContainer3_ListDiv'}>
                            <div>
                                {projectManagement ? <img src='https://tmetric.com/media/1niddz51/icon-project-blue.svg' alt='' /> : <img src='https://tmetric.com/media/kqgpqtvh/icon-project-gray.svg' alt='' />}
                            </div>
                            <div>
                                <h3>Project Management</h3>
                                {projectManagement && <p>Create projects, set rates and budgets. Keep tracking of hours spent on tasks and see the project progress at a glance, collaborate easily, keep deadlines and prevent over budgeting</p>}
                                {projectManagement &&
                                    <div><span>Learn More</span> <BsArrowRightShort /></div>
                                }
                            </div>
                        </div>
                        <div onClick={() => HomePageContainer3("teamManagement")} className={teamManagement ? 'HomePageContainer3_SelectedListDiv' : 'HomePageContainer3_ListDiv'}>
                            <div>
                                {teamManagement ? <img src='https://tmetric.com/media/2gxihhdu/icon-team-blue.svg' alt='' /> : <img src='https://tmetric.com/media/isxcp2ip/icon-team-gray.svg' alt='' />}
                            </div>
                            <div>
                                <h3>Team Management</h3>
                                {teamManagement && <p>Measure productivity and activity level of your team, assign tasks in a click, monitor workflow and distribute the workload. Syncs your teams’ work and improves efficiency.</p>}
                                {teamManagement &&
                                    <div><span>Learn More</span> <BsArrowRightShort /></div>
                                }
                            </div>
                        </div>
                        <div onClick={() => HomePageContainer3("billing")} className={billing ? 'HomePageContainer3_SelectedListDiv' : 'HomePageContainer3_ListDiv'}>
                            <div>
                                {billing ? <img src='https://tmetric.com/media/s4koycnp/icon-invoice-blue.svg' alt='' /> : <img src='https://tmetric.com/media/5r1l1s4g/icon-invoice-gray.svg' alt='' />}
                            </div>
                            <div>
                                <h3>Billing & Invoicing</h3>
                                {billing && <p>With the accurate billing system, set billable rates and easily create an invoice based on tracked time and expenses, and get paid promptly.</p>}
                                {billing &&
                                    <div><span>Learn More</span> <BsArrowRightShort /></div>
                                }
                            </div>
                        </div>
                        <div onClick={() => HomePageContainer3("reporting")} className={reporting ? 'HomePageContainer3_SelectedListDiv' : 'HomePageContainer3_ListDiv'}>
                            <div>
                                {reporting ? <img src='https://tmetric.com/media/yoblhiut/icon-reports-blue.svg' alt='' /> : <img src='https://tmetric.com/media/g3jc0dsg/icon-reports-gray.svg' alt='' />}
                            </div>
                            <div>
                                <h3>Reporting</h3>
                                {reporting && <p>With a flexible reporting system, you have a choice to get insights into your projects and team productivity, analyze incomes and keep costs under control</p>}
                                {reporting &&
                                    <div><span>Learn More</span> <BsArrowRightShort /></div>
                                }
                            </div>
                        </div>
                        <div onClick={() => HomePageContainer3("timeOff")} className={timeOff ? 'HomePageContainer3_SelectedListDiv' : 'HomePageContainer3_ListDiv'}>
                            <div>
                                {timeOff ? <img src='https://tmetric.com/media/cajpa4uy/icon-time-off-blue.svg' alt='' /> : <img src='https://tmetric.com/media/bxylkc2s/icon-time-off-gray.svg' alt='' />}
                            </div>
                            <div>
                                <h3>Time Off</h3>
                                {timeOff && <p>Add a PTO policy for your organization, simply ask for days off, control missed workdays, manage balances and teams attendance hassle-free</p>}
                                {timeOff &&
                                    <div><span>Learn More</span> <BsArrowRightShort /></div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='HomePageContainer4'>
                <div>
                    <h2>Manage your team effectively</h2>
                    <ul typeof='disc'>
                        <li>timekeeping</li>
                        <li>sites and apps monitoring</li>
                        <li>activity tracking</li>
                        <li><a href="/">screenshots capturing</a></li>
                        <li>task management</li>
                        <li><a href="/">50+ integrations</a></li>
                        <li><a href="/">work schedule</a></li>
                    </ul>
                    <button>Start Free Trial</button>
                </div>
                <div>
                    <img src={teamEffectivelyImage} alt="" />
                </div>
            </div>
            <div className='HomePageContainer5'>
                <div>
                    <img src={profitabilityBusinessImage} alt="" />
                </div>
                <div>
                    <h2>Ensure the profitability of your business</h2>
                    <ul typeof='disc'>
                        <li>project management</li>
                        <li>project budgeting</li>
                        <li>billing and invoicing</li>
                        <li>accurate payroll</li>
                        <li>detailed reports</li>
                    </ul>
                    <button>Start Free Trial</button>
                </div>
            </div>
        </div>
    )
}