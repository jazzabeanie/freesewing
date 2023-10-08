/*
 * This page is auto-generated. Do not edit it by hand.
 */
import { Bent } from '@freesewing/bent'
// Dependencies
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { nsMerge } from 'shared/utils.mjs'
import { workbenchInlineDocs } from 'shared/mdx/docs.mjs'
// Components
import { PageWrapper, ns as pageNs } from 'shared/components/wrappers/page.mjs'
import { Workbench, ns as wbNs } from 'shared/components/workbench/new.mjs'
import { WorkbenchLayout } from 'site/components/layouts/workbench.mjs'

// Translation namespaces used on this page
const ns = nsMerge('bent', wbNs, pageNs)

const NewBentPage = ({ page, docs }) => (
  <PageWrapper {...page} title="Bent" layout={WorkbenchLayout} header={null}>
    <Workbench
      {...{
        design: 'bent',
        Design: Bent,
        docs,
      }}
    />
  </PageWrapper>
)

export default NewBentPage

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ns)),
      docs: await workbenchInlineDocs({
        Design: Bent,
        design: 'bent',
        locale,
      }),
      page: {
        locale,
        path: ['new', 'bent'],
        title: 'Bent',
      },
    },
  }
}
