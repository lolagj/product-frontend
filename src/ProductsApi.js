const axios= require('axios').default;
class ProductsApi{
    static API_BASE_URL="/api/v1";

    static requestHeaders(){
        return {}
    }

    static async getAllProducts(){
        const headers= this.requestHeaders();
        const request= new Request(ProductsApi.API_BASE_URL+"/products",{
            method: 'GET',
            headers: {
                headers,
                apikey: '71c379b0-ca56-4477-a5b8-f9296e5691a0'
            }
        });

        const response = await fetch(request); 

        if(! response.ok){
            throw Error("Response not valid"+ response.status);
        }
    
        return response.json();

    }

    static async deleteById(value){
        axios.delete(ProductsApi.API_BASE_URL + "providers"+ value,
        {headers:{
            apikey: '71c379b0-ca56-4477-a5b8-f9296e5691a0'
        }}).then(res=>{
            return res;
        }).cath(error=>{
            console.error(error)
            throw Error("Response not valid"+ error);
        })
    }

    static async postProduct(value){
        axios.post(ProductsApi.API_BASE_URL + "providers", value,
        {headers:{
            apikey: '71c379b0-ca56-4477-a5b8-f9296e5691a0'
        }}).then(res=>{
            return res.data;
        }).cath(error=>{
            console.error(error)
            throw Error("Response not valid"+ error);
        });
    }

}

export default ProductsApi;