import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='mt-10 text-center'>
      <h2>Not Found</h2>

      <Link href="/" className='underline'>Return Home</Link>
    </div>
  )
}