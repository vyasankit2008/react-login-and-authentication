import React, { useState } from "react";
import { FaBars, FaRegChartBar, FaShoppingBag, FaTh, FaUserAlt } from 'react-icons/fa';
import { NavLink } from "react-router-dom";

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);

    const menuItem = [
        {
            path: '/app/dashboard',
            name: 'dashboard',
            icon: <FaTh />,
        },
        {
            path: '/app/about',
            name: 'about',
            icon: <FaUserAlt />,
        },
        {
            path: '/app/product',
            name: 'product',
            icon: <FaShoppingBag />,
        },
        {
            path: '/app/analytics',
            name: 'analytics',
            icon: <FaRegChartBar />,
        }
    ];

    return (<>
        {/* // <div className="container"> */}
            <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
                <div className="top_section">
                    {/* <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">AV</h1> */}
                    {/* <div style={{ display: isOpen ? "block" : "none" }} >
                        <img src="../assets/Ankit Vyas.png" alt="Ankit Vyas" width={'50vh'} />
                    </div> */}
                    <div style={{ display: isOpen ? "block" : "none" }} >Ankit Vyas</div>
                    <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
                        <FaBars onClick={toggle} />
                    </div>
                </div>
                {
                    menuItem.map((item, index) => (
                        <NavLink to={item.path} key={index} className="link">
                            <div className="icon">{item.icon}</div>
                            <div style={{ display: isOpen ? "block" : "none" }} className="link_text">{item.name}</div>
                        </NavLink>
                    ))
                }
            </div>
            {/* <div className="main">
                {children}
            </div> */}
        {/* // </div> */}
        </>
    );
}

export default Sidebar;