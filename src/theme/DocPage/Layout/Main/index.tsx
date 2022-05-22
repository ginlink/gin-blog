import React from 'react'
import { useDocsSidebar } from '@docusaurus/theme-common'
import clsx from 'clsx'
import styles from './styles.module.css'
import GitalkComment from '@site/src/theme/GitalkComment'
export default function DocPageLayoutMain({ hiddenSidebarContainer, children }) {
  const sidebar = useDocsSidebar()
  return (
    <main
      className={clsx(styles.docMainContainer, (hiddenSidebarContainer || !sidebar) && styles.docMainContainerEnhanced)}
    >
      <div
        className={clsx(
          'container padding-top--md padding-bottom--lg',
          styles.docItemWrapper,
          hiddenSidebarContainer && styles.docItemWrapperEnhanced
        )}
      >
        {children}

        <GitalkComment />
      </div>
    </main>
  )
}
