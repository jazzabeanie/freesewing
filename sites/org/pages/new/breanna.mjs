/*
 * This page is auto-generated. Do not edit it by hand.
 */
import { Breanna } from '@freesewing/breanna'
// Dependencies
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { nsMerge } from 'shared/utils.mjs'
import { workbenchInlineDocs } from 'shared/mdx/docs.mjs'
// Components
import { PageWrapper, ns as pageNs } from 'shared/components/wrappers/page.mjs'
import { Workbench, ns as wbNs } from 'shared/components/workbench/new.mjs'
import { WorkbenchLayout } from 'site/components/layouts/workbench.mjs'

// Translation namespaces used on this page
const ns = nsMerge('breanna', wbNs, pageNs)

const NewBreannaPage = ({ page, docs }) => (
  <PageWrapper {...page} title="Breanna" layout={WorkbenchLayout} header={null}>
    <Workbench
      {...{
        design: 'breanna',
        Design: Breanna,
        docs,
      }}
    />
  </PageWrapper>
)

export default NewBreannaPage

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ns)),
      docs: await workbenchInlineDocs({
        Design: Breanna,
        design: 'breanna',
        locale,
      }),
      page: {
        locale,
        path: ['new', 'breanna'],
        title: 'Breanna',
      },
    },
  }
}
