import React from 'react'
import './Work.css'
import { SiTata } from 'react-icons/si'

function Work() {
  return (
    <section id='work-ex' className='py-5 px-3 text-center'>
      <div className='container'>
        <div className='row'>
          <div className='container p-3 '>
            <div class='info-header mt-3'>
              <h1 class='text-gray  text-center' style={{ color: 'gray' }}>
                Work Experience 🏂
              </h1>
            </div>
            <hr />
          </div>
          <div className='container'>
            <div className='row p-2 '>
              <h2 className='align-middle mx-auto'>
                <SiTata style={{ color: '#0773BB' }} className='align-middle' />
                &nbsp;
                <span style={{ color: 'gray' }}>Tata Consultancy Services</span>
              </h2>
            </div>
            <div className='row'>
              <b className='lead text-left mb-3'>Dot Net Developer</b>
              <p className='lead text-left mb-5'>
                • Developed an Online Flight management system using ASP.net framework and MySQL as backend database. Functionalities include user authentication and CRUD operations on the database. <br />
                • This project is mainly about designing a web application online flight management system. It is used to create, edit, and delete the flight schedule and redeem bonus miles master. We can also view the flight details. <br />
                • Worked as a backend engineer in developing RESTFUL API services to connect to backend servers to fetch the user data and perform CRUD operations.
              </p>
            </div>
            <div className='row'>
              <strong className='lead text-left mb-3'>
                Automations and Monitoring
              </strong>
              <p className='lead text-left mb-5'>
                • Developed Splunk dashboards for critical German applications involving invoices transfer. These dashboards help clients proactively monitor the invoice failure and take quick action. <br />
                • Developed various automation scripts using the TOSCA tool to save manual efforts for SAP and non-SAP applications.
              </p>
            </div>

            <div className='row'>
              <strong className='lead text-left mb-3'>EDI Consultant</strong>
              <p className='lead text-left mb-5'>
                •Worked as an E.D.I. analyst for German clients implementing B2B solutions for C.P.G. customer MARS using OpenText/G.X.S. and BAI tools.
              </p>
            </div>


          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
