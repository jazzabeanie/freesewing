/*
 * This page is auto-generated. Do not edit it by hand.
 */
import { Carlita } from '@freesewing/carlita'
// Dependencies
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { nsMerge } from 'shared/utils.mjs'
import { workbenchInlineDocs } from 'shared/mdx/docs.mjs'
// Components
import { PageWrapper, ns as pageNs } from 'shared/components/wrappers/page.mjs'
import { Workbench, ns as wbNs } from 'shared/components/workbench/new.mjs'
import { WorkbenchLayout } from 'site/components/layouts/workbench.mjs'

// Translation namespaces used on this page
const ns = nsMerge('carlita', wbNs, pageNs)

const NewCarlitaPage = ({ page, docs }) => (
  <PageWrapper {...page} title="Carlita" layout={WorkbenchLayout} header={null}>
    <Workbench
      {...{
        design: 'carlita',
        Design: Carlita,
        docs,
      }}
    />
  </PageWrapper>
)

export default NewCarlitaPage

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ns)),
      docs: await workbenchInlineDocs({
        Design: Carlita,
        design: 'carlita',
        locale,
      }),
      page: {
        locale,
        path: ['new', 'carlita'],
        title: 'Carlita',
      },
    },
  }
}
