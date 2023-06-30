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

    const handleInputChange = (e) => {
        e.preventDefault();
        console.log('handleInputChange', e.target.value);
    }

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen (!isOpen);

    useEffect(() => {
        if (!isOpen) {
          setSearchValue('');
        }
    }, [isOpen]);

    const menuItem=[
        {
            path:"/2023.1-HEART-hub-fga-inovacao",
            name:"Inicio",
            icon:<FiHome/>
        },
        {
            path:"/pedei",
            name:"P&D&I",
            icon:<FiCpu/>
        },
        {
            path:"/professores",
            name:"Professores",
            icon:<FiUsers/>
        },
        {
            path:"/empresasjuniores",
            name:"Empresas Juniores",
            icon:<FiBriefcase/>
        },
        {
            path:"/equipesdecompetição",
            name:"Equipes de Competição",
            icon:<FiDribbble/>
        },
        {
            path:"/premiações",
            name:"Premiações",
            icon:<FiAward/>
        },
        {
            path:"/editais",
            name:"Editais",
            icon:<FiCalendar/>
        },
        {
            path:"/contatos",
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
