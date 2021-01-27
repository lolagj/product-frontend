//import { Alert } from 'bootstrap';
import { Fragment, useEffect, useState } from 'react';
import Alert from './Alert.js';
import NewProduct from './NewProduct.js';
import EditableProduct from './EditableProduct.js';
import ProductsApi from './ProductsApi.js';


function Products (props){
    const [message, setMessage] =useState(null);
    const [products, setProducts]= useState([]);
    const[searchName, setSearchName]=useState("");

    useEffect(()=>{
        async function fetchProducts(){
            try{
                const p = await ProductsApi.getAllProducts();
                
                setProducts(p);
                
            }catch(error){
                
                setMessage('Could not contact with the server'+ error);
            }            
        }
        fetchProducts();
    }, []);


    function onChangeSearchName(e) {
        const searchName=e.target.value;
        setSearchName(searchName);
    }

    function findByName() {
        async function findProduct(){
            try{
                const p = await ProductsApi.getProductByName(searchName);
                
                setProducts(p);
                
            }catch(error){
                
                setMessage('Could not contact with the server'+ error);
            }            
        }
        findProduct();
    }

    function onAlertClose(){
        setMessage(null);
    }

    function onProductEdit(newProduct, oldProduct) {
        const validation=validateProductCode(newProduct);
        if(!validation){
            return false;
        }
        
        if(newProduct.code !==oldProduct.code){
            setMessage('Cannot change the code');
            return false;
        }

        async function editProducts(){
            try{
                
                await ProductsApi.updateProduct(oldProduct.code, newProduct);
                
                
                
            }catch(error){
                
                setMessage('Could not contact with the server'+ error);
            }            
        }
        editProducts();

        
        setProducts((prevProducts)=>{



            const newProducts= prevProducts.map((c)=> c.code=== oldProduct.code ? newProduct : c);            
            return newProducts;
        })
        
        return true;
    }

    function onProductDelete(product){

        async function deleteProduct() {
            try {
                await ProductsApi.deleteById(product.code); 

            } catch(error) {
                console.log(error)
                //setMessage('Could not connect with the server');
            }
        }
        deleteProduct();


        setProducts((prevProducts)=>{
            return prevProducts.filter((c)=>c.code !== product.code);
        });
    }

    function validateProductCode(product){
        if(product.code===''){
            setMessage('You have to introduce the code of the product');
            return false;

        }
        return true;       
    }

    function onAddProduct(product) {
        
        const validation= validateProductCode(product);
        if(!validation){
            return false;
        } 
        if(products.find(c=> c.code=== product.code)){
            setMessage('Duplicated product');
            return false;
        }     


        async function addProduct() {
            try {
                await ProductsApi.postProduct(product);

            } catch(error) {
                console.log(error)
                //setMessage('Could not connect with the server');
            }
        }
        addProduct();


        
        
        setProducts((prevProducts)=>{
            if(!prevProducts.find(c=>c.code ===product.code)){
                
                return [...prevProducts, product]; //De esta forma cogemos la lista y añadimos el nuevo producto

            }else{
                setMessage('Duplicated produtc');
                return prevProducts;
            }
            
        });

        return true;
        
    }


    return(
     
        



        <Fragment>
            
            <div className="col-md-8">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search by Name"
                        value={searchName}
                        onChange={onChangeSearchName}
                    />
                    <div className="input-group-append">
                        <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={findByName}
                        >
                        Search
                        </button>
                    </div>
                </div>
            </div>
            
            <Alert message={message} onClose={onAlertClose}/>
            <table className="table">
            <thead>
                <tr>


                    <th>Code</th>
                    <th>Name</th>
                    
                    <th>Description</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Amount</th>
                    <th>Provider Name</th>
                    <th>Provider CIF</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>

                <NewProduct onAddProduct={onAddProduct}/>
                {products.map((product)=>
                    <EditableProduct key={product.code} product={product} onEdit={(newProduct)=>onProductEdit(newProduct, product)} onDelete={onProductDelete}/>
                )}
            </tbody>
            </table>

        </Fragment>
        
    )
}

export default Products;