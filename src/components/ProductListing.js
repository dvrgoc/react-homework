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
            productCartIDs: [4,2], //push, pop
            cartTotal: 0
        };
    }

    renderProductsInCart() {
        let subtotal = 0;
        const productsData = this.state.productsData;

        const productsCartData = productsData.filter(productData => this.state.productCartIDs.includes(productData.id));

        productsCartData.map(productData => {
            subtotal += productData.price;
        });

        return(
            <table style={{width: '100%'}}>
                <tbody>
                {productsCartData.map(productCartdata => {
                    return <tr key={productCartdata.id}>
                        <td>{productCartdata.name}</td>
                        <td>
                            <button>Remove from Cart</button>
                        </td>
                    </tr>
                })}

                </tbody>
                <tfoot>
                <tr>
                    <td>Total</td>
                    <td>{subtotal} {CURRENCY}</td>
                </tr>
                </tfoot>
            </table>
        )
    }

    renderProductsAll() {
        return (
            <table style={{width: '100%'}}>
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
                {this.state.productsData.map(function (product) {
                    return <tr key={product.id}>
                        <td>{product.name}</td>
                        <td>{product.rating}</td>
                        <td>{product.categories}</td>
                        <td>{product.qty}</td>
                        <td>{product.price} {CURRENCY}</td>
                        <td>
                            <button>Add to Cart</button>
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
}

export default ProductListing;