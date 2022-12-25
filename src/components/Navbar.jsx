import React, { useEffect, useState } from 'react'
function Navbar() {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
        document.getElementById('inp').className = theme
        document.getElementById('btn').className = theme
    }, [theme]);
    return (
        <div>
            <div className='navbar'>
                <div className='navbartitle'>Where in the world?</div>
                <div className='navbardarkmode ' onClick={toggleTheme}><i class="fa-solid fa-moon"></i>Dark Mode</div>
            </div>
            <div className='searchfilter'>
                <div className='search'>
                    <i class="fa-solid fa-magnifying-glass"></i>
                    <input id='inp' type="text" placeholder="Search for country..." />
                </div>
                <div className='filter'>
                    <div id="dropdown">
                        <button id='btn' class="btn  dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown button
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" >Africa</a></li>
                            <li><a className="dropdown-item" >Americas</a></li>
                            <li><a className="dropdown-item" >Asia</a></li>
                            <li><a className="dropdown-item" >Europe</a></li>
                            <li><a className="dropdown-item" >Oceania</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar


