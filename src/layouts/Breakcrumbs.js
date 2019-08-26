import NavLink from 'umi/navlink';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import router from '../router/router';
console.log(router, '-----')
export default withBreadcrumbs(router.routes)(({ breadcrumbs }) => {
  console.log(breadcrumbs, '----')
  return (
    <div>
      {breadcrumbs.map((breadcrumb, index) => (
        router.routes.find((v) => v.path === breadcrumb.match.url) && (
          <span key={breadcrumb.key}>
            <NavLink to={breadcrumb.match.url}>
              {breadcrumb.breadcrumb}
            </NavLink>
            {(index < breadcrumbs.length - 1) && <i> / </i>}
          </span>
        )
      ))}
    </div>
  )
});