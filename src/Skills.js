import React from 'react'
import './Skills.css'
import { SiJavascript, SiCplusplus, SiMysql, SiJava } from 'react-icons/si'
import { GrReactjs, GrMysql } from 'react-icons/gr'
import { FaC, FaAws, FaNodeJs } from 'react-icons/fa'
import { DiMongodb } from 'react-icons/di'

function Skills() {
  return (
    <section id='skills' className='py-5 py-auto'>
      <div className='container'>
        <div class='info-header mt-3'>
          <h1 class='text-gray  text-center' style={{ color: 'gray' }}>
            Skills 💪
          </h1>
          <hr />
        </div>

        {/* JAVASCRIPT */}
        <div className='row '>
          <div className='col-md-6 '>
            <h3 className='text-center p-2 mt-4  align-middle'>
              <SiJavascript
                style={{ color: 'yellow', backgroundColor: 'black' }}
              />
              &nbsp; JavaScript
            </h3>
            <div class='progress border border-dark'>
              <div
                class='progress-bar bg-success'
                role='progressbar'
                style={{
                  width: '85%',
                  ariavaluenow: '85',
                  ariavaluemin: '0',
                  ariavaluemax: '100',
                }}
              ></div>
            </div>
          </div>
          <div className='col-md-6 '>
            <h3 className='text-center p-2 mt-4  align-middle'>
              <GrReactjs
                style={{ color: '#61DAFB', backgroundColor: 'white' }}
              />
              &nbsp; React
            </h3>
            <div class='progress  border border-dark'>
              <div
                class='progress-bar bg-success'
                role='progressbar'
                style={{
                  width: '40%',
                  ariavaluenow: '43',
                  ariavaluemin: '0',
                  ariavaluemax: '100',
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* CPP */}

        <div className='row  '>
          <div className='col-md-6 '>
            <h3 className='text-center p-2 mt-4  align-middle'>
              <SiCplusplus />
              &nbsp; C++
            </h3>
            <div class='progress border border-dark'>
              <div
                class='progress-bar bg-success'
                role='progressbar'
                style={{
                  width: '40%',
                  ariavaluenow: '40',
                  ariavaluemin: '0',
                  ariavaluemax: '100',
                }}
              ></div>
            </div>
          </div>
          <div className='col-md-6 '>
            <h3 className='text-center p-2 mt-4  align-middle'>
              <FaNodeJs
                style={{ color: '#83CD29', backgroundColor: 'white' }}
              />
              &nbsp; Node.js
            </h3>
            <div class='progress  border border-dark'>
              <div
                class='progress-bar bg-success'
                role='progressbar'
                style={{
                  width: '50%',
                  ariavaluenow: '50',
                  ariavaluemin: '0',
                  ariavaluemax: '100',
                }}
              ></div>
            </div>
          </div>
        </div>

        {/* Mongo DB */}

        <div className='row  '>
          <div className='col-md-6 '>
            <h3 className='text-center p-2 mt-4 align-middle'>
              <DiMongodb
                style={{ color: '#54AC4D', backgroundColor: 'white' }}
              />
              &nbsp; Mongo DB
            </h3>
            <div class='progress  border border-dark'>
              <div
                class='progress-bar bg-success'
                role='progressbar'
                style={{
                  width: '40%',
                  ariavaluenow: '40',
                  ariavaluemin: '0',
                  ariavaluemax: '100',
                }}
              ></div>
            </div>
          </div>
          <div className='col-md-6 '>
            <h3 className='text-center p-2 mt-4  align-middle'>
              <SiMysql />
              &nbsp; MySQL
            </h3>
            <div class='progress  border border-dark'>
              <div
                class='progress-bar bg-success'
                role='progressbar'
                style={{
                  width: '40%',
                  ariavaluenow: '40',
                  ariavaluemin: '0',
                  ariavaluemax: '100',
                }}
              ></div>
            </div>
          </div>
        </div>

        <div className='row  '>
          <div className='col-md-6 '>
            <h3 className='text-center p-2 mt-4 align-middle'>
              <SiJava
                style={{ color: '', backgroundColor: 'white' }}
              />
              &nbsp; Java
            </h3>
            <div class='progress  border border-dark'>
              <div
                class='progress-bar bg-success'
                role='progressbar'
                style={{
                  width: '60%',
                  ariavaluenow: '60',
                  ariavaluemin: '0',
                  ariavaluemax: '100',
                }}
              ></div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Skills
