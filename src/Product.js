function Product(props){
    return(
        <tr>
            <td>{props.product.code}</td>
            <td>{props.product.name}</td>
            <td>{props.product.description}</td>
            <td>{props.product.category}</td>
            <td>{props.product.price}</td>
            <td>{props.product.amount}</td>
            <td>{props.product.provider_name}</td>
            <td>{props.product.provider_cif}</td>
            
            
            <td><button className="btn btn-primary" onClick={()=>props.onEdit(props.product)}>Edit</button></td>
            <td><button className="btn btn-primary" onClick={()=>props.onDelete(props.product)}>Delete</button></td>
        </tr>
    )
    
}

export default Product; 