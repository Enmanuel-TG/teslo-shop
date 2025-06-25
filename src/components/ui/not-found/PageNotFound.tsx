import { geistSans } from '@/src/config/fonts'
import Link from 'next/link';
import Image from 'next/image';
export const PageNotFound = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
      <div className="text-center px-5 mx-5">
        <h2 className={`${geistSans.className} antialiased text-9xl`}>404</h2>
        <h2>Whoops!! Pages not Found</h2>
        <p>
          <span>Return to </span>
          <Link href="/" className="font-normal hover:underline transition-all">
            Home
          </Link>
          {"  <----"}
        </p>
          </div>
          <div className='mx-5 px-5'>
              <Image className='p-5 sm:p-0' src="/imgs/starman.png" alt={'Loading...'} width="550" height="550"/>
          </div>
    </div>
  );
}
