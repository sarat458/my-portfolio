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
                src='https://lh3.googleusercontent.com/-AXN4uNGiw9vG7OYrkRHCnpgJNmhhlB8yiWFQyjSDZjKwRbt3EDqsJcGrLRFRX5HwesAI1SEjVtGedjHrZcYqsof-gx8SxA1sggW3LfBg-MZxrX0c8l1YENgNapFJgUQGvdA351mv5spOk-83qy7epkBYFZHEzCe0fyco-vRI29SJDuU3QzuI5ZDA-VYeXrJkwzUap_ae7gotVsRYjeiP-GE39TixofsyKQk5LDkE9z2eCarT4PD3skor7Awu1c0Mwzs6Nbqyqx4O-i1k_HyJhcLL4pB8m-R30pUuQHb_oD7W_bngnnKNby6Mm-N92IZ88RiM0R8o_rdEge4rJf-2bT6QpLuAOz4_2Sbw2ENgjDVn3Y99653xf5wY6f5RSlo0Nk_w5yo58wc8ofUjxrvS4WeohFODPtaBr86slPOCxR8VMXZTXNyovx1IM7YoSo1pCM2B86Z3Q6wWaB87mDz754hSNhF9f299iFy8F0cCIDPBvshNnecs1OIhCidljpbexJSE2wU8o2Wua0mD3_l2V8q12ggUu440p9volS07oGKKzMn9v2P_hNT8HtvRC3Nm3GNBgDrH_thRF3KJJIklzi-NpoEL7roEzRVk7ot33kFXi3yJwqxhBkKhKxmjjeDkeq7n8GLDJ27Y6NUl01V9iEfZv_fjRIQT8aSStVDRVXmkvR8vWxLf3XzWJsbxA=w768-h954-no?authuser=0'
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
            <h1 className='  p-5' style={{ color: 'gray', fontSize: '50px' }}>
              Hello !!!
              <br />
              Welcome to my Portfolio Website
              <hr />
              <p style={{ fontSize: '15px', fontStyle: 'italic' }}>
                I'm Working as a {role} in {org} <br />
                <br />
                <br />
                <p className='text-muted'>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Culpa deleniti suscipit, ea impedit reiciendis repellendus
                  labore quia dicta similique sequi.
                </p>
              </p>
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
