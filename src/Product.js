function Product(props){
    return(
        <tr>
            <td>{props.product.name}</td>
            <td> {props.product.description}</td>
            <td><button className="btn btn-primary">Edit</button></td>
            <td><button className="btn btn-primary">Delete</button></td>
        </tr>
    )
    
}

export default Product; 