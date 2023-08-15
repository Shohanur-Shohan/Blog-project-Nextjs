
import Link from 'next/link';

export default function Navbar() {
    return (
        <div className="flex justify-between px-10 mb-5 shadow-md">
            <div className="my-auto text-3xl">Blog</div>
            <div className="flex my-auto text-lg">
                <Link className='m-5' href='/'>Home</Link>
                <Link className='m-5' href='/blog'>Blog</Link>
                <Link className='m-5' href='/post'>Post</Link>
            </div>
        </div>
    );
}