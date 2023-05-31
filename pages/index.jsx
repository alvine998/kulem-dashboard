import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Fragment, useState } from 'react'
import Input from '@/components/Input';
import Button from '@/components/Button';
import { logo } from '@/assets';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [register, setRegister] = useState(true);

  return (
    <Fragment>
      <div className='flex'>
        <div className='w-full relative bg-gradient-to-l from-cyan-500 to-blue-500 h-[100vh]'>
          <div className='absolute top-[10%] left-[10%]'>
            <h1 className='text-white text-3xl font-bold font-sans'>KULEM DASHBOARD</h1>
            <p className='text-white text-xl font-sans'>
              Atur Segala Kebutuhan Operasionalmu Disini <br />
              Karena Hanya Kami Yang Mengerti Kamu
            </p>
            <div className='mt-5 mx-auto'>
              <Image src={logo} width={350} height={350} className='rounded-xl' />
            </div>
          </div>
        </div>
        <div className='w-full bg-slate-100 h-[100vh]'>
          <div className='md:mt-[150px]'>
            <div className={`w-[300px] ${register ? 'h-[320px]' : 'h-[400px]'} border-2 border-gray-300 rounded-md p-3 mx-auto`}>
              {
                register ?
                  <>
                    <h1 className='text-center text-2xl font-bold'>LOGIN</h1>
                    <form action="">
                      <Input label={"Email"} isRequired type='email' placeholder={"Masukkan Email"} />
                      <Input label={"Password"} isRequired type='password' placeholder={"Masukkan Password"} />
                      <div className='w-full mt-7'>
                        <Button label={"Masuk"} type={"submit"} color={"success"} />
                        <Button label={"Daftar"} type={"button"} color={"primary"} onClick={() => {
                          setRegister(false)
                        }} />
                      </div>
                    </form>
                  </> :
                  <>
                    <h1 className='text-center text-2xl font-bold'>DAFTAR</h1>
                    <form action="">
                      <Input label={"Nama"} isRequired type='text' placeholder={"Masukkan Nama"} />
                      <Input label={"Email"} isRequired type='email' placeholder={"Masukkan Email"} />
                      <Input label={"Password"} isRequired type='password' placeholder={"Masukkan Password"} />
                      <div className='w-full mt-7'>
                        <Button label={"Daftar"} type={"submit"} color={"success"} />
                        <Button label={"Login"} type={"button"} color={"primary"} onClick={() => {
                          setRegister(true)
                        }} />
                      </div>
                    </form>
                  </>
              }
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
