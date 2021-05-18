import React from 'react'
import './Home.css'
import { BiDownload } from 'react-icons/bi'
import Resume from './Resume.pdf'

function Home({ org, role }) {
  return (
    <section className='home py-3 px-auto mx-auto mt-5' id='home'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-5  p-5 '>
            <div class='text-center'>
              <img
                src='photo.jpg'
                class='img-thumbnail my-auto'
                alt='{Profile Picture}'
              />
            </div>
            <div className='container text-center p-3 '>
              <a
                href={Resume}
                class='btn btn-light border border-gray'
                role='button'
                aria-pressed='true'
                download='Resume_Sarat.pdf'
              >
                <BiDownload />
                &nbsp; Download Resume
              </a>
            </div>
          </div>
          <div className='col-md-7 justify-content-center '>
            <h1 className='  p-4' style={{ color: 'gray', fontSize: '60px' }}>
              <br />
              <div className="mx-3">Welcome to my Portfolio Website</div>
              <hr />
              <p style={{ fontSize: '20px', fontStyle: 'italic' }}>
                {role},{org} <br />
              </p>
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
