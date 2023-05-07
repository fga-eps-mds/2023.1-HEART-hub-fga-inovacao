import React, { useState } from 'react';
import {
    FaLightbulb,
    FaMedal,
    FaSuitcase,
    FaBookOpen,
    FaCalendarAlt,
    FaPhoneAlt,
    FaBars,
    FaHome,
} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/inicio",
            name:"Inicio",
            icon:<FaHome/>
        },
        {
            path:"/iniciativas",
            name:"Iniciativas",
            icon:<FaLightbulb/>
        },
        {
            path:"/competencias",
            name:"Competencias",
            icon:<FaMedal/>
        },
        {
            path:"/empresas",
            name:"Empresas",
            icon:<FaSuitcase/>
        },
        {
            path:"/disciplinas",
            name:"Disciplinas",
            icon:<FaBookOpen/>
        },
        {
            path:"/editais",
            name:"Editais",
            icon:<FaCalendarAlt/>
        },
        {
            path:"/contatos",
            name:"Contatos",
            icon:<FaPhoneAlt/>
        },
    ]
    return (
        <div className="container">
            <div style={{width: isOpen ? "343px" : "80px"}} className="sidebar">
                <div className="top_section">
                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Heart</h1>
                    
                    <div style={{marginLeft: isOpen ? "130px" : "12px"}} className="bars">
                        <FaBars onClick={toggle}/>
                    </div>
                </div>
                {
                    menuItem.map((item, index)=>
                    <NavLink to ={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                    )
                }
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;