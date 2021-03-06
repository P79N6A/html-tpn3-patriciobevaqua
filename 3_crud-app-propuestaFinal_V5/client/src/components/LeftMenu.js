import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';

class LeftMenu extends Component {

    render() {
        return (
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                        
                    <li className="nav-item">
                                    <NavLink exact={true} className="nav-link" to={'/'}>
                                        Inicio
                            </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink exact={true} className="nav-link" to={'/todos'}>
                                        Todos
                            </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink exact={true} className="nav-link" to={'/productos'}>
                                        Productos
                            </NavLink>
                                </li>

                                <li className="nav-item">
                                    <NavLink exact={true} className="nav-link" to={'/#'}>
                                        Servicios
                            </NavLink>
                                </li>
                                <li className="nav-item" >
                                    <NavLink exact={true} className="nav-link"  to={'/#'}>
                                        Esto es un Entity
                            </NavLink>
                                </li>


                    </ul>
                </div>
            </nav>
        )
    }
}

export default LeftMenu;
