import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { SubmissionError } from 'redux-form';
import ProductForm from './ProductForm';
import { fetchProductoById, updateProducto } from '../../actions/ActionsProductos';

class EditProducto extends Component {

    state = {
        redirect: false
    };

    componentDidMount() {

        const { id } = this.props.match.params;

        if (id) {
            this.props.fetchProductoById(id);
        }
    }

    submit = (producto) => {
        return this.props.updateProducto(producto)
            .then(response => this.setState({ redirect: true }))
            .catch(err => {
                throw new SubmissionError(this.props.errors)
            })
    }

    render() {
        return (
            <div>
                <h2>Editar Producto</h2>
                <div>
                    {this.state.redirect
                        ? <Redirect to="/productos" />
                        : <ProductForm
                            producto={this.props.producto}
                            loading={this.props.loading}
                            onSubmit={this.submit} />
                    }
                </div>
            </div>
        )
    };
}

function mapStateToProps(state) {
    return {
        producto: state.productoDS.producto,
        loading: state.productoDS.loading,
        errors: state.productoDS.errors
    };
}

export default connect(mapStateToProps, { fetchProductoById, updateProducto })(EditProducto);