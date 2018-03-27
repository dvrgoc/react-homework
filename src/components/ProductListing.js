import React, {Component} from 'react';

const CURRENCY = "HRK";

class ProductListing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            productsData: [{
                "id": 1,
                "name": "Watchdogs",
                "price": 100,
                "categories": "RPG, Driving, Logical",
                "rating": 6.7,
                "qty": 7
            }, {
                "id": 2,
                "name": "Watchdogs 2",
                "price": 150,
                "categories": "RPG, Driving, Logical",
                "rating": 8.2,
                "qty": 5
            }, {
                "id": 3,
                "name": "FIFA 18",
                "price": 350,
                "categories": "Football, Sports",
                "rating": 8.4,
                "qty": 2
            }, {
                "id": 4,
                "name": "Mortal Kombat X",
                "price": 120,
                "categories": "Combat, Martial Arts, Sports",
                "rating": 7.5,
                "qty": 6
            }],
            productCartIDs: [],
            cartTotal: 0
        };
    }

    renderProductsInCart() {
        let subtotal = 0;
        let self = this;
        const productsData = this.state.productsData;

        const productsCartData = productsData.filter(productData => this.state.productCartIDs.includes(productData.id));

        productsCartData.map(productData => {
            subtotal += productData.price;
        });

        return(
            <table className="App-table">
                <tbody>
                {productsCartData.map(productCartData => {
                    return (
                        <tr key={productCartData.id}>
                            <td>{productCartData.name}</td>
                            <td>
                                <button
                                    id={`remove-${productCartData.id}`}
                                    onClick={this.onRemoveFromCart.bind(this, self, productCartData.id)}
                                    >Remove from Cart</button>
                            </td>
                        </tr>
                    )
                })}

                </tbody>
                <tfoot>
                <tr>
                    <td>Total</td>
                    <td><strong>{subtotal} {CURRENCY}</strong></td>
                </tr>
                </tfoot>
            </table>
        )
    }

    renderProductsAll() {
        let self = this;
        const productsData = this.state.productsData;

        return (
            <table className="App-table">
                <thead>
                    <tr>
                        <td><strong>name</strong></td>
                        <td><strong>rating</strong></td>
                        <td><strong>categories</strong></td>
                        <td><strong>qty</strong></td>
                        <td><strong>price</strong></td>
                        <td>&nbsp;</td>
                    </tr>
                </thead>
                <tbody>
                {productsData.map(function (product) {
                    return <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.rating}</td>
                        <td>{product.categories}</td>
                        <td>{product.qty}</td>
                        <td>{product.price} {CURRENCY}</td>
                        <td>
                            <button
                                id={`add-${product.id}`}
                                onClick={self.onAddToCart.bind(this, self, product.id)}>Add to Cart</button>
                        </td>
                    </tr>
                })}
                </tbody>
            </table>
        )
    }

    render() {
        return (
            <div>
                <div className="App-clearfix">
                    <div className="App-f-left App-w-3-4">
                        <h1>Product Listing</h1>
                        {this.renderProductsAll()}
                    </div>
                    <div className="App-f-right App-w-1-4">
                        <h3>Products in Cart</h3>
                        {this.renderProductsInCart()}
                    </div>
                </div>
        </div>)
    }

    onAddToCart = (obj, ID) => {
        obj.setState(prevState => ({
            productCartIDs: [...prevState.productCartIDs, ID]
        }))
    }

    onRemoveFromCart = (obj, ID) => {
        obj.setState({
            productCartIDs: this.state.productCartIDs.filter(productID => productID !== ID)
        });
    }
}

export default ProductListing;