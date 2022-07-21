import React from 'react'
import { useState } from 'react'
import "./Price.css"

const Price = () => {

  const [teamSize,setTeamSize] = useState(1)


  return (
    <div>
        <div className="price-header">
            <h1> Pricing</h1>
            <p>All plans include free 30-day trial. No credit card required!</p>
        </div>
        <div>
          <div>{teamSize}</div>
          <input className="iline" type="range" value={teamSize} min="1" max="200" name="" onChange={(e)=>setTeamSize(e.target.value)} id="" />
          <div className='carddiv'>

              <div className="B-part">
                <h1>Business</h1>
                <a>${7*teamSize} /month</a>
 
                                        
                                          <div class="feature-item">✅Time tracking</div>
                                          <div class="feature-item">✅Unlimited projects and clients</div>
                                          <div class="feature-item">✅Reporting</div>
                                          <div class="feature-item">✅Timer button in 50+ web apps</div>
                                          <div class="feature-item">✅Calendar integrations: Google, Outlook</div>
                                          <div class="feature-item">✅Billable rates and money tracking</div>
                                          <div class="feature-item">✅Budgeting for projects</div>
                                          <div class="feature-item">✅Invoicing</div>
                                          <div class="feature-item">✅Task management</div>
                                          <div class="feature-item">✅Activity levels for employees</div>
                                          <div class="feature-item">✅Apps and sites usage reports</div>
                                          <div class="feature-item">✅Screenshots capturing</div>
                                          <div class="feature-item">✅Client logins for access to reports</div>
                                          <div class="feature-item">✅Paid time off tracking</div>
                                          <div class="feature-item">✅Payroll for employees</div>
                                          <div class="feature-item">✅Time tracking permissions</div>
                                          <div class="feature-item">✅Time-sync with Jira and QuickBooks</div>
                                          <div class="feature-item">✅Time-sync with GitLab and Redmine</div>
                                          <div class="feature-item">✅Time Off Calendar</div>
                                          <div class="feature-item">✅Work Schedule</div>
                                          <div class="feature-item">✅Team Dashboard</div>
                   </div>
              <div className="B-part">
              <h1>Professional</h1>
              <a>${5*teamSize} /month</a>
              
                                          <div class="feature-item">✅Time tracking</div>
                                          <div class="feature-item">✅Unlimited projects and clients</div>
                                          <div class="feature-item">✅Reporting</div>
                                          <div class="feature-item">✅Timer button in 50+ web apps</div>
                                          <div class="feature-item">✅Calendar integrations: Google, Outlook</div>
                                          <div class="feature-item">✅Billable rates and money tracking</div>
                                          <div class="feature-item">✅Budgeting for projects</div>
                                          <div class="feature-item">✅Invoicing</div>
                                          <div class="feature-item">✅Task management</div>
                                          <div class="feature-2">❌Activity levels for employees</div>
                                          <div class="feature-2">❌Apps and sites usage reports</div>
                                          <div class="feature-2">❌Screenshots capturing</div>
                                          <div class="feature-2">❌Client logins for access to reports</div>
                                          <div class="feature-2">❌Paid time off tracking</div>
                                          <div class="feature-2">❌Payroll for employees</div>
                                          <div class="feature-2">❌Time tracking permissions</div>
                                          <div class="feature-2">❌Time-sync with Jira and QuickBooks</div>
                                          <div class="feature-2">❌Time-sync with GitLab and Redmine</div>
                                          <div class="feature-2">❌Time Off Calendar</div>
                                          <div class="feature-2">❌Work Schedule</div>
                                          <div class="feature-2">❌Team Dashboard</div>
              </div>
              
              <div className="B-part">
                <h1>Free</h1>
                <a>${0*teamSize} /month</a>
                                          <div class="feature-item">✅Time tracking</div>
                                          <div class="feature-item">✅Unlimited projects and clients</div>
                                          <div class="feature-item">✅Reporting</div>
                                          <div class="feature-item">✅Timer button in 50+ web apps</div>
                                          <div class="feature-2">✅Calendar integrations: Google, Outlook</div>
                                          <div class="feature-2">✅Billable rates and money tracking</div>
                                          <div class="feature-2">✅Budgeting for projects</div>
                                          <div class="feature-2">✅Invoicing</div>
                                          <div class="feature-2">✅Task management</div>
                                          <div class="feature-2">❌Activity levels for employees</div>
                                          <div class="feature-2">❌Apps and sites usage reports</div>
                                          <div class="feature-2">❌Screenshots capturing</div>
                                          <div class="feature-2">❌Client logins for access to reports</div>
                                          <div class="feature-2">❌Paid time off tracking</div>
                                          <div class="feature-2">❌Payroll for employees</div>
                                          <div class="feature-2">❌Time tracking permissions</div>
                                          <div class="feature-2">❌Time-sync with Jira and QuickBooks</div>
                                          <div class="feature-2">❌Time-sync with GitLab and Redmine</div>
                                          <div class="feature-2">❌Time Off Calendar</div>
                                          <div class="feature-2">❌Work Schedule</div>
                                          <div class="feature-2">❌Team Dashboard</div>
              </div>
           </div>
        </div>
      
    </div>
    
    
  )
}

export default Price