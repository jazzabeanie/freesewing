/*
 * This page is auto-generated. Do not edit it by hand.
 */
import { Sandy } from '@freesewing/sandy'
// Dependencies
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { nsMerge } from 'shared/utils.mjs'
import { workbenchInlineDocs } from 'shared/mdx/docs.mjs'
// Components
import { PageWrapper, ns as pageNs } from 'shared/components/wrappers/page.mjs'
import { Workbench, ns as wbNs } from 'shared/components/workbench/new.mjs'
import { WorkbenchLayout } from 'site/components/layouts/workbench.mjs'

// Translation namespaces used on this page
const ns = nsMerge('sandy', wbNs, pageNs)

const NewSandyPage = ({ page, docs }) => (
  <PageWrapper {...page} title="Sandy" layout={WorkbenchLayout} header={null}>
    <Workbench
      {...{
        design: 'sandy',
        Design: Sandy,
        docs,
      }}
    />
  </PageWrapper>
)

export default NewSandyPage

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ns)),
      docs: await workbenchInlineDocs({
        Design: Sandy,
        design: 'sandy',
        locale,
      }),
      page: {
        locale,
        path: ['new', 'sandy'],
        title: 'Sandy',
      },
    },
  }
}
