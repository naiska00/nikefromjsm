// import { headerLogo } from '../assets/images';
// import { hamburger } from '../assets/icons';
// import {navLinks} from '../constans'

// const Nav = () => {
//     return (
//         <header className="padding-x py-8 absolute z-10 w-full">
//            <nav className="flex justify-between items-center max-container">
//            <a href="/">
//               <img 
//                 src={headerLogo}
//                 alt="Logo"
//                 width={130}
//                 height={29}
//               />  
//             </a>
//             <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
//                 {navLinks.map((item) => (
//                     <li key={item.label}>
//                         <a
//                          href={item.href}
//                          className="font-montserrat leading-normal text-lg text-slate-gray"
//                         >
//                             {item.label}
//                         </a>
//                     </li>
//                 ))}
                
//                 <a href="/" className="font-montserrat leading-normal text-lg text-slate-gray">
//                    <p>Sign in / Explore now </p> 
//                 </a>

//             </ul>
//             <div className="hidden max-lg:block">
//                 <img
//                  src={hamburger}
//                  alt="Hamburger"
//                  width={25}
//                  height={25}
//                 />
//             </div>
//            </nav>
//         </header>
//     )
// }

// export default Nav


import { useState } from "react";
import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constans";

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev); // Переключаем состояние меню
    };

    return (
        <header className="padding-x py-8 absolute z-10 w-full">
            <nav className="flex justify-between items-center max-container">
                {/* Логотип */}
                <a href="/">
                    <img
                        src={headerLogo}
                        alt="Logo"
                        width={130}
                        height={29}
                    />
                </a>

                {/* Меню для больших экранов */}
                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map((item) => (
                        <li key={item.label}>
                            <a
                                href={item.href}
                                className="font-montserrat leading-normal text-lg text-slate-gray"
                            >
                                {item.label}
                            </a>
                        </li>
                    ))}
                    <a href="/" className="font-montserrat leading-normal text-lg text-slate-gray">
                        <p>Sign in / Explore now</p>
                    </a>
                </ul>

                {/* Гамбургер и выпадающее меню */}
                <div className="relative hidden max-lg:block">
                    {/* Гамбургер */}
                    <img
                        src={hamburger}
                        alt="Hamburger"
                        width={25}
                        height={25}
                        className="cursor-pointer"
                        onClick={toggleMenu} // Управляем кликом
                    />

                    {/* Скрытое меню */}
                    {isMenuOpen && ( // Показываем меню только при открытом состоянии
                        <ul className="absolute top-8 right-0 bg-white shadow-lg rounded-lg p-4 flex flex-col gap-4">
                            {navLinks.map((item) => (
                                <li key={item.label}>
                                    <a
                                        href={item.href}
                                        className="font-montserrat leading-normal text-lg text-slate-gray hover:text-blue-500"
                                        onClick={() => setIsMenuOpen(false)} // Закрываем меню при клике на пункт
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                            <a
                                href="/"
                                className="font-montserrat leading-normal text-lg text-slate-gray hover:text-blue-500"
                                onClick={() => setIsMenuOpen(false)} // Закрываем меню при клике на "Sign in / Explore now"
                            >
                                <p>Sign in / Explore now</p>
                            </a>
                        </ul>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Nav;
