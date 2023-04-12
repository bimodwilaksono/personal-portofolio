import Link from "next/link";
import React from "react";

function Navigation() {
    return (
        <div className='flex justify-start gap-3 font-bold'>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/skills"}>Skills</Link>
            <Link href={"/blog"}>Blog</Link>
            <Link href={"/contact"}>Contact</Link>
        </div>
    );
}

export default Navigation;
