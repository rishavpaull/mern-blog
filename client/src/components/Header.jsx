import React from 'react'
import { Button, Navbar , TextInput } from 'flowbite-react'
import { Link } from 'react-router-dom'
import {AiOutlineSearch } from 'react-icons/ai'
import {FaMoon} from 'react-icons/fa'
import { useLocation } from 'react-router-dom'

import { NavLink } from 'react-router-dom'
export default function Header() {
  const path = useLocation().pathname;

  // Function to close the navbar collapse
  // const closeNavbar = () => {
  //   document.querySelector('.navbar-toggle').click();
  // };

  return (
    <Navbar className='border-b-2 '>
        <Link to="/" className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-800 via-purple-600 to-green-300 rounded-lg text-white ' >Rishav's</span>
            Blog
        </Link>
        <form >
            <TextInput
                type='text'
                placeholder='Search...'
                rightIcon={AiOutlineSearch}
                className='hidden lg:inline'
            />
        </form>
        <Button className='w-12 h-10 lg:hidden ' color='gray' pill>
          <AiOutlineSearch/>
        </Button>
        <div className='flex gap-2 md:order-2'>
          <Button className='w-12 h-10 hidden sm:inline' color='gray' pill>
            <FaMoon/>
          </Button>
          <Link to='/sign-in'>
            <Button gradientDuoTone='purpleToBlue' pill outline>
              Sign In
            </Button>
          </Link>
          <Navbar.Toggle/>
        </div>

        <Navbar.Collapse>
        <NavLink to='/' >
          <Navbar.Link active={path === "/"} as={'div'} >
            Home
          </Navbar.Link>
          </NavLink>
          <NavLink to='/about' >
            <Navbar.Link active={path === "/about"} as={'div'} >
              About
              {/* style={{ cursor: 'pointer' }} */}
            </Navbar.Link>
          </NavLink>
          
          <NavLink to='/projects' >
            <Navbar.Link active={path === "/projects"} as={'div'}>
              Projects
            </Navbar.Link>
          </NavLink>
      </Navbar.Collapse>

    </Navbar>
  )
}
