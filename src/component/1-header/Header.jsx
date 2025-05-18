import './header.css';
import { useEffect, useState } from 'react';
const Header = () => {
    const [showmodal, setshowmodal] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem("currentMode") ?? "dark");
    useEffect(() => {
        if (theme === "light") {
            document.body.classList.remove("dark");
            document.body.classList.add("light");
        }
        else {
            document.body.classList.remove("light");
            document.body.classList.add("dark");
        }
    }, [theme]);
    return (
        <header className=" flex">
            <button onClick={() => {
                setshowmodal(true);
            }}
                className='menu icon-menu flex' />
            <div />
            <nav>
                <ul className="flex">
                    <li><a href="">About</a></li>
                    <li><a href="">Article</a></li>
                    <li><a href="">Project</a></li>
                    <li><a href="">Speaking</a></li>
                    <li><a href="">Contact</a></li>
                </ul>
            </nav>
            <button onClick={() => {
                localStorage.setItem("currentMode", theme === "dark" ? "light" : "dark");
                setTheme(localStorage.getItem("currentMode"));
            }} className='mood flex' >
                {theme ==="dark" ? (<span className='icon-moon-o'></span>) :(
                                    <span className='icon-sun'></span>

                ) }
            </button>
            {
                showmodal && (
                    <div className=" fixed">
                        <ul className="modal ">
                            <li ><button className='icon-close' onClick={() => {
                                setshowmodal(false);
                            }} /></li>
                            <li ><a href="">About</a></li>
                            <li><a href="">Article</a></li>
                            <li><a href="">Project</a></li>
                            <li><a href="">Speaking</a></li>
                            <li><a href="">Uses</a></li>
                        </ul>
                    </div>
                )
            }
        </header>
    );
}
export default Header;