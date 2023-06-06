import React, { Fragment } from 'react'
import Sidebar from './Sidebar'
import Head from 'next/head'

export default function Layout({ title, children }) {
    return (
        <Fragment>
            <Head>
                <title>{title}</title>
            </Head>
            <div className='flex flex-row'>
                <Sidebar />
                <div>
                    {children}
                </div>
            </div>
        </Fragment>
    )
}
