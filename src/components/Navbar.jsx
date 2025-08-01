import { useState } from 'react';

function Navbar() {
    const [open,setOpen] = useState(false);

    return (
        <div>
            <header className={" shadow-lg px-10 py-4 flex justify-between items-center bg-[#e9dc9f] z-50"}>
                <div className="flex flex-row items-center gap-4">
                    <h1 className="text-3xl font-bold flex items-center text-[#810000]">Tastrition</h1>
                </div>

                
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 cursor-pointer md:hidden"
                    viewBox="0 0 640 640"
                    onClick={() => setOpen(true)}
                >
                    <path fill="#000000" d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7
                        128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 
                        192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 
                        128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 
                        512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 
                        512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 
                        448L512 448C529.7 448 544 462.3 544 480z" />
                </svg>

                
                <nav className="hidden md:flex gap-4 text-md font-bold text-gray-600">
                    <a href="https://shattereddisk.github.io/rickroll/rickroll.mp4" className='hover:text-[#810000]'>Home</a>
                    <a href="https://shattereddisk.github.io/rickroll/rickroll.mp4" className='hover:text-[#810000]'>Featured</a>
                    <a href="https://shattereddisk.github.io/rickroll/rickroll.mp4" className='hover:text-[#810000]'>Special</a>
                    <a href="https://shattereddisk.github.io/rickroll/rickroll.mp4" className='hover:text-[#810000]'>About</a>
                    <a href="https://shattereddisk.github.io/rickroll/rickroll.mp4" className='hover:text-[#810000]'>Contact</a>
                </nav>

               
                <div
                    className={`fixed top-0 right-0 h-full w-64 bg-[#cfc5bc] shadow-lg p-6 transition-transform duration-300 ease-in-out z-50 flex flex-col gap-4 font-bold text-gray-700 text-lg ${
                        open ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <button
                        className="text-right text-[#810000]"
                        onClick={() => setOpen(false)}
                    >
                        ✕
                    </button>
                    <a href="https://shattereddisk.github.io/rickroll/rickroll.mp4">Home</a>
                    <a href="https://shattereddisk.github.io/rickroll/rickroll.mp4">Featured</a>
                    <a href="https://shattereddisk.github.io/rickroll/rickroll.mp4">Special</a>
                    <a href="https://shattereddisk.github.io/rickroll/rickroll.mp4">About</a>
                    <a href="https://shattereddisk.github.io/rickroll/rickroll.mp4">Contact</a>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
