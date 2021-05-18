import React from 'react'
import './Academics.css'

function Academics() {
  return (
    <section id='academics' className='py-5 px-2 py-auto'>
      <div className='container'>
        <div className='container'>
          <div class='info-header mt-3'>
            <h1 class='text-gray  text-center' style={{ color: 'gray' }}>
              Academics 🎓
            </h1>
            <hr />
          </div>
        </div>
        <ul class='nav nav-tabs active' id='myTab' role='tablist'>
          <li class='nav-item'>
            <a
              class='nav-link active'
              id='home-tab'
              data-toggle='tab'
              href='#home'
              role='tab'
              aria-controls='home'
              aria-selected='true'
            >
              Under Graduation
            </a>
          </li>


        </ul>
        <div class='tab-content' id='myTabContent'>
          <div
            class='tab-pane fade show active'
            id='home'
            role='tabpanel'
            aria-labelledby='home-tab'
          >
            <div className='container '>
              <div className='row'>
                <p className='lead display-block py-2'>
                  • Submitted a Term Paper report on “TIME-FREQUENCY ANALYSIS AS PROBABILISTIC
                  INFERENCE” in 6th semester. <br />
                  • Designed a “SUPER SENSITIVE INTRUDER ALARM” for security purpose, in 3rd year for Model
                  Exhibition conducted in Department of E.C.E., G.M.R.I.T. <br />
                  • Designed a “POLE CLIMBING ROBOT FOR SURVEILLANCE APPLICATION WITH VOICE
                  AND IMAGE RECORDING” as part of Mini Project. <br />
                  • For Final project we worked on “PERFORMANCE EVALUATION OF COMPLEMENTARY
                  CODES IN DOPPLER DOMAIN.”
                </p>
              </div>
            </div>
          </div>
          <div
            class='tab-pane fade'
            id='profile'
            role='tabpanel'
            aria-labelledby='profile-tab'
          >
            <div className='container '>
              <div className='row'>
                <p className='lead display-block  py-2'>
                  • Team Leader for the projects in our academic curriculum. <br />
                  • Acted as a Resource Person for National level workshop conducted on “M.A.T.L.A.B.” at our college
                  fest STEPCONE 2015. <br />
                  • Presented a Technical Paper on “VIDEO WATERMARKING FOR PIRATE DETECTION” in,
                  IIT BHUBHANESWAR. <br />
                  • Presented a Technical Paper on “MOBILE JAMMERS” in STEPCONE 2015, G.M.R.I.T. <br />
                  • Presented a Technical Paper on “BRAIN COMPUTER INTERFACE” in, J.N.T.U., Kakinada and
                  G.I.T.A.M. University, Visakhapatnam. <br />
                  • Active Member in technical bodies like I.S.T.E, I.E.T.E and I.E. <br />
                </p>
              </div>
            </div>
          </div>
          <div
            class='tab-pane fade'
            id='contact'
            role='tabpanel'
            aria-labelledby='contact-tab'
          >
            <div className='container '>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Academics
