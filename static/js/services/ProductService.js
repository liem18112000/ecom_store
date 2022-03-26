class ProductService {
    getProductById(id) {
        return fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res=>res.json())
            .catch(error => console.log(error));
    }

    getProducts(size = 10, sort = "desc") {
        return fetch(`https://fakestoreapi.com/products?limit=${size}&sort=${sort}`)
            .then(res=>res.json())
            .catch(error => console.log(error));
    }

    addProduct(product) {
        return fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(product)
        })
            .then(res=>res.json())
            .catch(error => console.log(error));
    }

    updateProduct(product) {
        return fetch(`https://fakestoreapi.com/products/${product.id}`,{
            method:"PUT",
            body:JSON.stringify(product)
        })
            .then(res=>res.json())
            .catch(error => console.log(error));
    }

    deleteProduct(id) {
        return fetch(`https://fakestoreapi.com/products/${id}`,{
            method:"DELETE"
        })
            .then(res=>res.json())
            .catch(error => console.log(error));
    }
}