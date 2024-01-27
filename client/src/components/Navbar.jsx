import { Link } from 'react-router-dom'

const links = [
  { name: 'Home', path: '/' },
  { name: 'Single', path: '/single-column' },
  { name: 'Two', path: '/two-column' },
  { name: 'Three', path: '/three-column' },
]

const Navbar = () => {
  return (
    <div className="flex justify-around bg-gray-100 shadow-md shadow-gray-200">
      <div className="flex">
        <p>LOGO</p>
      </div>
      <div className="flex gap-4">
        {links.map((item, i) => {
          return (
            <Link className="text-sm md:text-lg" key={i} to={item.path}>
              {item.name}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Navbar
