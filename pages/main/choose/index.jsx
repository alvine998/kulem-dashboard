import Head from 'next/head'
import React, { Fragment } from 'react'
import { BsHospitalFill, BsHouseAddFill } from 'react-icons/bs'

export default function Choose() {
    const typeOptions = [
        { value: "hotel", label: "Hotel" },
        { value: "guesthouse", label: "Guest House" },
        { value: "motel", label: "Motel" }
    ]
    return (
        <div>
            <Head>
                <title>Choose</title>
            </Head>
            <div className='bg-blue-300 h-[100vh] w-full'>
                <div className='flex gap-5 justify-center items-center h-screen'>
                    {
                        typeOptions?.map((v, i) => (
                            <Fragment key={i}>
                                <div className='border-2 my-auto border-white hover:border-gray-200 rounded-lg p-4'>
                                    <button className='flex flex-col justify-center items-center'>
                                        {
                                            v.value == 'hotel' ?
                                                <BsHospitalFill className='text-white' size={100} />
                                                : <BsHouseAddFill className='text-white' size={100} />
                                        }
                                        <p className='text-white text-2xl'>{v?.label}</p>
                                    </button>
                                </div>
                            </Fragment>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
