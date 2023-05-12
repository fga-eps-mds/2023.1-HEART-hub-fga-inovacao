import React, { useState, useEffect } from 'react';
import { FiHome,
    FiUsers,
    FiAward,
    FiCalendar,
    FiBookOpen,
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

    const [searchValue, setSearchValue] = useState('');

    const handleToggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        if (!isOpen) {
          setSearchValue('');
        }
    }, [isOpen]);

    const menuItem=[
        {
            path:"/",
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
            icon:<FiAward/>
        },
        {
            path:"/disciplinas",
            name:"Disciplinas",
            icon:<FiBookOpen/>
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
                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Heart</h1>
                    <div style={{marginLeft: isOpen ? "150px" : "6px"}} className="bars">
                        {isOpen ? (
                            <FiX onClick={toggle} />
                        ) : (
                            <FiMenu onClick={toggle} />
                        )}
                    </div>
                </div>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                <input
                    className="search"
                    style={{ width: isOpen ? '272px' : '48px' }}
                    type="text"
                    placeholder={isOpen ? 'Pesquisar' : ''}
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    readOnly={!isOpen}
                />
                {!isOpen && searchValue === '' && (
                    <div className='search-icon'>
                        <FiSearch 
                            style={{ cursor: 'pointer' }}
                            onClick={handleToggleSidebar}
                        />
                    </div>
                )}
                </div>
                <hr style={{ borderColor: '#eaeaea'}}/>
                {
                    menuItem.map((item, index)=>
                    <NavLink to ={item.path} key={index} className="link" activeclassName="active">
                        <div className="icon">{item.icon}</div>
                        <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                    </NavLink>
                    )
                }
                <hr style={{ borderColor: '#eaeaea'}}/>
            </div>
            <main>{children}</main>
        </div>
    );
};

export default Sidebar;