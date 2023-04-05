import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black grid place-items-center">
      <div className="text-center grid place-items-center">
        <h1 className='text-white font-jose text-6xl lg:text-8xl'>
          Portland AI
        </h1>
        <p className='text-gray-500'>The premiere consulting agency for Artificial Intelligence, coming soon.</p>
        <a href="https://mygpt.portlandai.io" target="_blank" rel="noopener noreferrer" className='bg-blue-400 px-4 p-2 rounded-md md:hover:opacity-50 text-white mt-2 md:hover:cursor-pointer'>Try out MyGPT &rarr;</a>
      </div>
    </div>
  )
}
