"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation(){
    const path = usePathname();

    return(
        <div className="flex justify-center h-screen fixed inset-20">
            <nav className="w-20vw h-6vh bg-white rounded-full">
                <ul className="flex w-full h-full list-none m-0 p-0">
                    <li 
                        className={`flex-1 flex items-center justify-center rounded-full ${
                            path === "/" ? "bg-mainBlue text-white" : ""
                          }`}
                    >
                        <Link href="/" className="w-full h-full flex items-center justify-center">
                            Home
                        </Link>
                    </li>
                    <li 
                        className={`flex-1 flex items-center justify-center rounded-full ${
                            path === "/list" ? "bg-mainBlue text-white" : ""
                        }`}
                    >
                        <Link href="/list" className="w-full h-full flex items-center justify-center">
                            List
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}