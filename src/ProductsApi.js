class ProductsApi{
    static API_BASE_URL="/api/v1";

    static requestHeaders(){
        return {}
    }

    static async getAllProducts(){
        const headers= this.requestHeaders();
        const request= new Request(ProductsApi.API_BASE_URL+"/products",{
            method: 'GET',
            headers: headers
        });

        const response = await fetch(request); 

        if(! response.ok){
            throw Error("Response not valid"+ response.status);
        }
    
        return response.json();

    }

}

export default ProductsApi;