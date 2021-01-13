import Product from './Produc.js';

function Products (props){
    return(
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                {props.products.map((product)=>
                    <Product key={Product.name} product={product}/>
                )}
            </tbody>
        </table>
    )
}

export default Products;