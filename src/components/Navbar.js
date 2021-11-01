import React from 'react'

export const Navbar = () => {
    return (
        <div>
         <header> 
             <nav className="cf">
                 <ul className="cf">
                     <li className="hide-on-small">
                         <a href="/#" className="bold">Test Band</a>
                    </li>
                    <li className="hide-on-small">
                         <a href="/#" className="bold">Shows</a>
                    </li>
                    <li className="hide-on-small">
                         <a href="/#" className="bold">Socials</a>
                     </li>
                 </ul>
                 <a href="/#" id="openup">Test Band</a>
             </nav>
         </header>

        </div>
    )
}
