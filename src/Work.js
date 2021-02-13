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
              <strong className='lead text-left mb-3'>
                TOSCA Automation Developer
              </strong>
              <p className='lead text-left mb-5'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
                corporis animi dignissimos recusandae dolor tempora veniam natus
                praesentium, maiores quidem blanditiis incidunt velit provident
                nobis sapiente commodi, eius, iusto illo?
              </p>
            </div>

            <div className='row'>
              <strong className='lead text-left mb-3'>EDI Consultant</strong>
              <p className='lead text-left mb-5'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
                corporis animi dignissimos recusandae dolor tempora veniam natus
                praesentium, maiores quidem blanditiis incidunt velit provident
                nobis sapiente commodi, eius, iusto illo?
              </p>
            </div>

            <div className='row'>
              <strong className='lead text-left mb-3'>Dot Net Developer</strong>
              <p className='lead text-left mb-5'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maxime
                corporis animi dignissimos recusandae dolor tempora veniam natus
                praesentium, maiores quidem blanditiis incidunt velit provident
                nobis sapiente commodi, eius, iusto illo?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Work
