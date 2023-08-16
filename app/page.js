
import Link from 'next/link';
// import data from '@/data/blogData.json';

export default function Home() {

  return ( 
    <div>
        <div className='mt-10 text-center'>
        <h2>Welcome to my website</h2>
        <Link href='/blog'>
          <button  className="gap-2 px-10 py-3 mt-5 text-sm font-semibold text-blue-500 transition-all bg-blue-100 border border-transparent rounded-md hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-blue-500 focus:ring-offset-2">Click here</button>
        </Link>

        <a href='https://github.com/Shohanur-Shohan/Blog-project-Nextjs' className='block mt-5 underline'>https://github.com/Shohanur-Shohan/Blog-project-Nextjs</a>
      </div>
    </div>   
    
    
  )
}
