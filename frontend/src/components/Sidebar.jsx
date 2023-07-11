import React, { useState, useEffect } from 'react';

import { FiHome,
    FiUsers,
    FiAward,
    FiCalendar,
    FiDribbble,
    FiPhone,
    FiMenu,
    FiCpu,
    FiBriefcase,
    FiSearch,
    FiX
} from "react-icons/fi";
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen (!isOpen);

    const menuItem=[
        {
            path:"/2023.1-HEART-hub-fga-inovacao",
            name:"Inicio",
            icon:<FiHome/>
        },
        {
            path:"/2023.1-HEART-hub-fga-inovacao/pedei",
            name:"P&D&I",
            icon:<FiCpu/>
        },
        {
            path:"/2023.1-HEART-hub-fga-inovacao/professores",
            name:"Professores",
            icon:<FiUsers/>
        },
        {
            path:"/2023.1-HEART-hub-fga-inovacao/empresasjuniores",
            name:"Empresas Juniores",
            icon:<FiBriefcase/>
        },
        {
            path:"/2023.1-HEART-hub-fga-inovacao/equipesdecompetição",
            name:"Equipes de Competição",
            icon:<FiDribbble/>
        },
        {
            path:"/2023.1-HEART-hub-fga-inovacao/premiações",
            name:"Premiações",
            icon:<FiAward/>
        },
        {
            path:"/2023.1-HEART-hub-fga-inovacao/editais",
            name:"Editais",
            icon:<FiCalendar/>
        },
        {
            path:"/2023.1-HEART-hub-fga-inovacao/contatos",
            name:"Contatos",
            icon:<FiPhone/>
        },
    ]

    return (
        <div className="container">
            <div style={{width: isOpen ? "360px" : "80px"}} className="sidebar">
                <div className="top_section">   
                    <a href="/2023.1-HEART-hub-fga-inovacao"><h1 style={{display: isOpen ? "block" : "none"}} className="logo">Heart</h1></a>
                    <div style={{marginLeft: isOpen ? "150px" : "6px"}} className="bars">
                        {isOpen ? (
                            <FiX onClick={toggle} />
                        ) : (
                            <FiMenu onClick={toggle} />
                        )}
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
