import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
// Shared components
import Logo from 'shared/components/logos/freesewing.js'
import Aside from 'shared/components/navigation/aside'
import get from 'lodash.get'
import ThemePicker from 'shared/components/theme-picker'

const PageTitle = ({ app, slug, title }) => {
  if (title) return <h1>{title}</h1>
  if (slug) return <h1>{get(app.navigation, slug.split('/')).__title}</h1>

  return <h1>FIXME: This page has no title</h1>
}

const Breadcrumbs = ({ app, slug=false, title }) => {
  if (!slug) return null
  const crumbs = []
  const chunks = slug.split('/')
  for (const i in chunks) {
    const j = parseInt(i)+parseInt(1)
    const page = get(app.navigation, chunks.slice(0,j))
    if (page) crumbs.push([page.__linktitle, '/'+chunks.slice(0,j).join('/'), (j < chunks.length)])
  }

  return (
    <ul className="flex flex-row flex-wrap gap-2 font-bold">
      <li>
        <Link href="/">
          <a title="To the homepage" className="text-base-content">
            <Logo size={24} fill="currentColor" stroke={false}/>
          </a>
        </Link>
      </li>
      {crumbs.map(crumb => (
        <React.Fragment key={crumb[1]}>
          <li className="text-base-content">&raquo;</li>
          <li>
            {crumb[2]
              ?  (
                <Link href={crumb[1]}>
                  <a title={crumb[0]} className="text-secondary hover:text-secondary-focus">
                    {crumb[0]}
                  </a>
                </Link>
              )
              : <span className="text-base-content">{crumb[0]}</span>
            }
          </li>
        </React.Fragment>
      ))}
    </ul>
  )
}

const DefaultLayout = ({ app, title=false, children=[] }) => {
  const router = useRouter()
  const slug = router.asPath.slice(1)

  return (
    <div className="m-auto flex flex-row justify-center">
      <Aside app={app} slug={slug} before={<ThemePicker app={app} className="block sm:hidden"/>}/>
      <section className="py-28 md:py-36">
        <div>
          {title && (
            <div className="px-8 xl:pl-8 2xl:pl-16">
              <Breadcrumbs app={app} slug={slug} title={title} />
              <PageTitle app={app} slug={slug} title={title} />
            </div>
          )}
          {children}
        </div>
      </section>
    </div>
  )
}

export default DefaultLayout
