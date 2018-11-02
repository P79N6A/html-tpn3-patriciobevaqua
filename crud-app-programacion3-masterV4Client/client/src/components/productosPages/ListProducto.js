import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchProductos} from '../../actions';
import { Link } from 'react-router-dom';

class ListProducto extends Component {

    componentDidMount() {
        this.props.fetchProductos();
    }

    renderProductos() {   //arreglar detalles
        return this.props.listProductos.map(producto => {
            return (
            <tr key={producto._id}>
                <td>{producto.nombre}</td>
                <td>{producto.descripcion}</td>
                <td>{producto.name}</td>
                <td>{producto.name}</td>
                <td>
                <Link to={`/productos/${producto._id}/show`} className="">Ver</Link>&nbsp;
                <Link to={`/productos/${producto._id}/edit`} className="">Editar</Link>&nbsp;
                <Link to={`/productos/${producto._id}/delete`} className="">Eliminar</Link>
                </td>
            </tr>
            )
        });
    }

    render() {
        return (
            <div>
                
                <h2>Listando Productos</h2>

                <p>
                    <Link to="/productos/new" className="btn btn-primary">Nuevo</Link>
                </p>
                
                <div className="table-responsive">
                    <table className="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripcion</th>
                                <th>Stock</th>
                                <th>Precio</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.renderProductos()
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        listProductos: state.productos.list
    };
}

export default connect(mapStateToProps, {fetchProductos})(ListProducto);