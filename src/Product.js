function Product(props){
    return(
        <tr>
            <td>{props.product.name}</td>
            <td> {props.product.description}</td>
        </tr>
    )
    
}

export default Product; 