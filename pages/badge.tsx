import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';

import { HandleTheme } from '../utils/theme';
import { Navbar } from './components/navbar';

const Home: NextPage = () => {
  const [isDark, setIsDark]= useState<Boolean>(false);
  const { data: session } = useSession();

  useEffect(() => {
    HandleTheme();
    setIsDark(localStorage?.theme == 'dark');
  }, []);

  return (
    <div className="relative bg-white dark:bg-slate-900 dark:text-white overflow-hidden min-h-screen transition-all">
      <Navbar isDark={isDark} setIsDark={setIsDark} userData={session?.user} />
        <div className='p-10'>
          <div className="relative grid justify-items-center items-center shadow-2xl backdrop-blur-3xl bg-black/[.2] p-5 rounded-sm">
            <div className='bg-white max-w-[350px] h-[500px] w-full grid rounded-lg p-2 overflow-hidden relative shadow-md'>
              <div className='relative'>
                <img src='/bg_badge.png' className='absolute top-0'/>
                <div className='relative z-10 top-14 grid justify-items-center h-full'>
                  <img src={session?.user?.image} className='w-48 rounded-sm border-white border-4 shadow-md' />
                  <p className='text-black font-medium text-3xl'>
                    {session?.user?.name}
                  </p>
                </div>
              </div>
              <img src='/logo_nl.svg' className='h-auto w-40 absolute bottom-2 justify-self-center' />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home
