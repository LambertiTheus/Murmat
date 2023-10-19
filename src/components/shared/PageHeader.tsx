import Head from 'next/head'
import React, { ReactNode } from 'react';

type PageHeaderProps = {
    title: string
    children?: ReactNode
}

function PageHeader({ title, children }: PageHeaderProps) {
    return (
      <div>
        <Head>
          <meta name="description" content="" />
          <title>{title}</title>
          <link rel="icon" type="image/png" href="/favicon.png" />
        </Head>
        {children}
      </div>
    );
  }

export default PageHeader