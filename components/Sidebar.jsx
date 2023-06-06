import { useRouter } from 'next/router'
import React, { Fragment } from 'react'

export default function Sidebar({active}) {
    const navigate = useRouter()
    const navigations = [
        {
            name:"Dashboard",
            active: active,
            link: '/main/dashboard'
        },
        {
            name:"Properti",
            active: active,
            link: '/main/property'
        },
        {
            name:"Dashboard",
            active: active,
            link: '/main/dashboard'
        },
    ]
    return (
        <div className='bg-blue-300 w-[300px] h-[100vh] p-5'>
            <h1 className='text-white text-3xl font-bold font-sans text-center'>ADMIN KULEM</h1>
            <div className='flex flex-col mt-5'>
                {
                    navigations?.map((v,i) => (
                        <Fragment key={i}>
                            <button onClick={()=>{navigate.push(v.link)}}>
                                <p className='text-white text-lg font-bold font-sans text-left'>{v.name}</p>
                            </button>
                        </Fragment>
                    ))
                }
            </div>
        </div>
    )
}
