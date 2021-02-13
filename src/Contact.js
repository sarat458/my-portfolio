import React from 'react'
import './Contact.css'
import { AiFillLinkedin, AiFillFacebook, AiFillGithub } from 'react-icons/ai'

function Contact({ social_icons_size }) {
  return (
    <section className='py-2 text-center bg-dark' id='contact'>
      <footer id='main-footer'>
        <div class='container'>
          <div class='row text-center'>
            <div className='container'>
              <div class='info-header mt-3'>
                <h3 class='text-gray  text-center' style={{ color: 'white' }}>
                  Contact Me ☎
                </h3>
                <hr className='contact_border' />
              </div>
            </div>
          </div>
          <div className='row text-center'>
            <div className='col-md-4'>
              <a
                href='https://www.linkedin.com'
                className='nav-link'
                target='_blank'
                rel="noreferrer"
              >
                <AiFillLinkedin
                  size={social_icons_size}
                  style={{ color: 'white' }}
                />
              </a>
            </div>
            <div className='col-md-4'>
              <a
                href='https://www.facebook.com'
                className='nav-link'
                target='_blank'
                rel="noreferrer"
              >
                <AiFillFacebook
                  size={social_icons_size}
                  style={{ color: 'white' }}
                />
              </a>
            </div>
            <div className='col-md-4'>
              <a
                href='https://www.github.com'
                className='nav-link'
                target='_blank'
                rel="noreferrer"
              >
                <AiFillGithub
                  size={social_icons_size}
                  style={{ color: 'white' }}
                />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Contact
