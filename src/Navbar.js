import React from 'react'
import './Navbar.css'

import { MdBrightness4 } from 'react-icons/md'

function Navbar() {
  // const [darkTheme, setDarkTheme] = useState(false)

  // const changeTheme = () => {
  //   if (document.body.style.backgroundColor === 'whitesmoke') {
  //     document.body.style.backgroundColor = '#121212'
  //     setDarkTheme('whitesmoke')
  //   } else {
  //     document.body.style.backgroundColor = 'whitesmoke'
  //     setDarkTheme('#121212')
  //   }
  // }

  return (
    <nav
      class='navbar fixed-top navbar-expand-sm navbar-dark bg-dark border-bottom'
      id='main-nav'
    >
      <div class='container'>
        <a href='#home' class='navbar-brand font-weight-bold d-flex'>
          {/*<img src={logo} alt='' style={{ height: 'auto', width: 'auto' }} />*/}
          Kaniti Sarat Kumar
        </a>
        <button
          class='navbar-toggler'
          data-toggle='collapse'
          data-target='#navbarCollapse'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarCollapse'>
          <ul class='navbar-nav ml-auto'>
            <li class='nav-item '>
              <a href='#home' class='nav-link'>
                Home
              </a>
            </li>
            <li class='nav-item'>
              <a href='#about' class='nav-link'>
                About
              </a>
            </li>
            <li class='nav-item'>
              <a href='#skills' class='nav-link'>
                Skills
              </a>
            </li>
            <li class='nav-item'>
              <a href='#academics' class='nav-link'>
                Academics
              </a>
            </li>
            <li class='nav-item'>
              <a href='#work-ex' class='nav-link'>
                Work Experience
              </a>
            </li>
            <li class='nav-item'>
              <a href='#contact' class='nav-link'>
                Contact
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link mt-1.5'>
                <MdBrightness4
                  style={{ color: 'white', cursor: 'pointer' }}
                  size={28}
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
