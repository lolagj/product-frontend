const axios= require('axios').default;
class ProductsApi{
    static API_BASE_URL="/api/v1";

    static requestHeaders(){
        return {}
    }

    static async getProductByName(value){
        const headers= this.requestHeaders();
        const request= new Request(ProductsApi.API_BASE_URL+"/product?search="+value,{
            method: 'GET',
            headers: {
                headers,
                apikey: process.env.API_KEY || "7144308f-364a-4f26-b480-c72f02ff23a7"
                
            }
        });

        const response = await fetch(request); 

        if(! response.ok){
            throw Error("Response not valid"+ response.status);
        }
    
        return response.json();


    }
/*
    static async getProductByName(value){
        axios.get(ProductsApi.API_BASE_URL+"/product?search="+value,
        {headers:{
            apikey: process.env.API_KEY || "7144308f-364a-4f26-b480-c72f02ff23a7"
            
        }}
        
        ).then(res=>{
            return res.json; 
        }).cath(error=>{
            console.error(error)
            throw Error("Response not valid"+ error);
        })
        
    }*/

    static async getAllProducts(){
        const headers= this.requestHeaders();
        const request= new Request(ProductsApi.API_BASE_URL+"/products",{
            method: 'GET',
            headers: {
                headers,
                apikey: process.env.API_KEY || "7144308f-364a-4f26-b480-c72f02ff23a7"
            }
        });

        const response = await fetch(request); 

        if(! response.ok){
            throw Error("Response not valid "+ response.status);
        }
    
        return response;
        // return response.json();

    }
 

    static async deleteById(value){
        axios.delete(ProductsApi.API_BASE_URL + "/products/"+ value,
        {headers:{
            apikey: process.env.API_KEY || "7144308f-364a-4f26-b480-c72f02ff23a7"
        }}).then(res=>{
            return res;
        }).cath(error=>{
            console.error(error)
            throw Error("Response not valid"+ error);
        })
    }

    
    static async postProduct(value){
        axios.post(ProductsApi.API_BASE_URL + "/products/", value,
        {headers:{
            apikey: process.env.API_KEY || "7144308f-364a-4f26-b480-c72f02ff23a7"
        }}).then(res=>{
            return res.data;
        }).cath(error=>{
            console.error(error)
            throw Error("Response not valid"+ error);
        });
    }



    static async getProductByCategory(value){
        axios.get(ProductsApi.API_BASE_URL+"products?category="+value,
        {headers:{
            apikey: process.env.API_KEY || "7144308f-364a-4f26-b480-c72f02ff23a7"
        }}).then(res=>{
            return res.data.json;
        }).cath(error=>{
            console.error(error)
            throw Error("Response not valid"+ error);
        });
    }

    static async updateProduct(value, body){
        axios.put(ProductsApi.API_BASE_URL+"/products/"+value, body,
        {headers:{
            apikey: process.env.API_KEY || "7144308f-364a-4f26-b480-c72f02ff23a7"
        }}).then(res=>{
            return res;
        }).cath(error=>{
            console.error(error)
            throw Error("Response not valid"+ error);
        });
}
    

}

export default ProductsApi;