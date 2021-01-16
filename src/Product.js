function Product(props){
    return(
        <tr>
            <td>{props.product.name}</td>
            <td> {props.product.description}</td>
            <td><button className="btn btn-primary" onClick={()=>props.onEdit(props.product)}>Edit</button></td>
            <td><button className="btn btn-primary" onClick={()=>props.onDelete(props.product)}>Delete</button></td>
        </tr>
    )
    
}

export default Product; 