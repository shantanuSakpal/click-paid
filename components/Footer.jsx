import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link";

function Footer(props) {
    return (
        <div className="bg-white border-t-2 flex flex-row py-3 mt-10 px-10 justify-between items-center">
            <div className="font-bold ">
                ClickPaid © 2024
            </div>
            <div className="flex flex-row gap-5 items-center">
                <Link href="https://github.com/shantanuSakpal/ClickPaid-superhack-2024" className="hover:text-white"><FaGithub /></Link>
                <Link href="#" className="hover:text-white"><FaXTwitter /></Link>


            </div>
        </div>
    );
}

export default Footer;