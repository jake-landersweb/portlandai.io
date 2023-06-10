import { BsLinkedin } from 'react-icons/bs'

export default function Footer() {
    return <div className="py-6 px-4 bg-dk-700 text-lt-400 flex items-center justify-between z-50">
        <span className="text-sm text-gray-300 sm:text-center">
            © 2023 Portland AI™. All Rights Reserved.
        </span>
        <a href="https://www.linkedin.com/company/sapphire-nw/" target="_blank" rel="noopener noreferrer"><BsLinkedin size={30} className="text-gray-600 hover:text-gray-500 transition-colors" /></a>
    </div>
}