import { NavLink } from 'react-router-dom'

interface NavProps {
  className?: string
}

const Nav = ({ className = '' }: NavProps) => {
  return (
    <nav className={`nav flex-column gap-1 ${className}`}>
      <NavLink to='/'>
        <img
          alt='Sabor Design System'
          className='logo'
          src='/images/logos/sabor.svg'
        />
      </NavLink>

      <div className='flex-column gap-05'>
        <h3 className='my-05'>Sabor Design System</h3>
        <NavLink to='/'>Overview</NavLink>
      </div>

      <div className='flex-column gap-05'>
        <h3 className='my-05'>Foundations</h3>
        <NavLink to='/foundations/color'>Color</NavLink>
        <NavLink to='/foundations/typography'>Typography</NavLink>
        <NavLink to='/foundations/iconography'>Iconography</NavLink>
        <NavLink to='/foundations/logos'>Logos</NavLink>
      </div>

      <div className='flex-column gap-05'>
        <h3 className='my-05'>Components</h3>
        <NavLink to='/components/button'>Button</NavLink>
        <NavLink to='/components/card'>Card</NavLink>
        <NavLink to='/components/footer'>Footer</NavLink>
        <NavLink to='/components/header'>Header</NavLink>
        <NavLink to='/components/input'>Input</NavLink>
      </div>
    </nav>
  )
}

export { Nav }