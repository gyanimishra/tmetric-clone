import React from 'react'
import '../styles/WhyTMatric.css'
import { BsArrowRightShort } from 'react-icons/bs'
export const DropdownApp = () => {
    return (
        <div className='WhyTMatricMainDiv'>
            <div>
                <div>
                    <div className='WhyTMatricHeading'>Apps</div>
                    <div className='WhyTMatricSmallDiv'>
                        <div className='WhyTMatricTitle'>Browser</div>
                        <span className='WhyTMatricText'>Extensions
                            Simple time tracking extension which helps you be more productive</span>
                    </div>
                    <div className='WhyTMatricSmallDiv'>
                        <div className='WhyTMatricTitle'>Mobile apps</div>
                        <span className='WhyTMatricText'>Install TMetric app to your phone or a tablet device. Android and iOS platforms are supported.</span>
                    </div>
                    <div className='WhyTMatricSmallDiv'>
                        <div className='WhyTMatricTitle'>Desktop apps</div>
                        <span className='WhyTMatricText'>Download TMetric app for your desktop computer or a laptop</span>
                    </div>
                </div>
            </div>
            <div>
                <div className='WhyTMatricHeading'>Features</div>
                <div className='WhyTMatricGrid'>
                    <div>
                        <div className='WhyTMatricSmallDiv'>
                            <img className='WhyTMatricIcon' src="https://tmetric.com/media/rejbvkxk/icon-jira-small.svg" alt="" />
                            <div>
                                <div className='WhyTMatricTitle'>Jira</div>
                                <span className='WhyTMatricText'>Time tracking on every task in one click</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='WhyTMatricSmallDiv'>
                            <img className='WhyTMatricIcon' src="https://tmetric.com/media/u4kphldq/icon-asana-small.svg" alt="" />
                            <div>
                                <div className='WhyTMatricTitle'>Asana</div>
                                <span className='WhyTMatricText'>Start to accurately track time of tasks
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='WhyTMatricSmallDiv'>
                            <img className='WhyTMatricIcon' src="https://tmetric.com/media/jduhrdq5/icon-todoist-small.svg" alt="" />
                            <div>
                                <div className='WhyTMatricTitle'>Todoist</div>
                                <span className='WhyTMatricText'>Track time of your lists and tasks</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='WhyTMatricSmallDiv'>
                            <img className='WhyTMatricIcon' src="https://tmetric.com/media/uq4dqcrf/icon-ms-office-small.svg" alt="" />
                            <div>
                                <div className='WhyTMatricTitle'>MS Office</div>
                                <span className='WhyTMatricText'>Get plugin for tracking time in MS Office Online
                                </span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='WhyTMatricSmallDiv'>
                            <img className='WhyTMatricIcon' src="https://tmetric.com/media/nfqj22co/icon-github-small.svg" alt="" />
                            <div>
                                <div className='WhyTMatricTitle'>GitHub</div>
                                <span className='WhyTMatricText'>Track time spent working on an issue with one mouse click</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='WhyTMatricSmallDiv'>
                            <img className='WhyTMatricIcon' src="https://tmetric.com/media/l1cply4y/icon-freshdesk-small.svg" alt="" />
                            <div>
                                <div className='WhyTMatricTitle'>Freshdesk</div>
                                <span className='WhyTMatricText'>Track time spent on every support ticket</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='WhyTMatricAllFeatures'><span>View all features </span><BsArrowRightShort /></div>
            </div>
        </div>
    )
}