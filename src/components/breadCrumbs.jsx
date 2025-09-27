import { Link, useLocation } from 'react-router-dom'

export default function BreadCrumbs() {
  const location = useLocation();
  let currentLink = '';
  const pathnames = location.pathname.split('/')
    .filter(crumb => crumb !== '');
  
  const breadCrumbs = pathnames.map((crumb, index) => {
    currentLink += `/${crumb}`;

    const formatCrumb = crumb.charAt(0).toUpperCase() + crumb.slice(1)

    return (
      <div className='inline-block mr-1' key={crumb}>
        <Link className='flex gap-1' to={currentLink}>
          <p className='hover:text-gray-600'>{formatCrumb}</p>
          {index < pathnames.length - 1 && <span>&gt;</span>}
        </Link>
      </div>
    )
  });

  return (
    <div>
      {breadCrumbs}
    </div>
  )
}
