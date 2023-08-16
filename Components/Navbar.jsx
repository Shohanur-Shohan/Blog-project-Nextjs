
import Link from 'next/link';
import style from './Navbar.module.css'

export default function Navbar() {
    return (
        <div className="flex justify-between px-10 py-5 mb-5 shadow-md">
            <div className="my-auto text-3xl">Blog</div>
            <div className="flex my-auto text-lg">
                <Link className={style.link} href='/'>Home</Link>
                <Link className={style.link} href='/blog'>Blog</Link>
                <Link className={style.link} href='/post'>Post</Link>
            </div>
        </div>
    );
}