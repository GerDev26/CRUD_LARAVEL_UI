import { useEffect, useState } from "react";
import { API_PRODUCT_ALL_ENDPOINT, API_PRODUCT_SEARCH_ENDPOINT } from "../services/myApi";

function formatProducts(request){
    if(request){
        let products = request.map(product => ({
            id: product.id,
            title: product.title,
            description: product.description,
            price: product.price,
            brand: product.brand,
            model: product.model,
            img: product.img,
            updateDate: product.update_at,
            CreateDate: product.created_at
        }))
    
        return products
    }
}

export function useAllProducts() {

    let [request, setRequest] = useState(null)

    useEffect(() => {
      fetch(API_PRODUCT_ALL_ENDPOINT)
       .then(res => res.json())
       .then(data => {
        console.log(data)
        let formatedData = formatProducts(data.data)
        setRequest(formatedData)
       })
       .catch(error => {
        console.log(error)
       })
    }, [])
    return request
}

export function useSearchProducts(initialSearch = "") {
    let [request, setRequest] = useState(null)
    let [search, setSearch] = useState(initialSearch)
    let [category, setCategory] = useState("title")

    useEffect(() => {
      fetch(API_PRODUCT_SEARCH_ENDPOINT + "?"+ category + "=" + search)
       .then(res => res.json())
       .then(data => {
        let formatedData = formatProducts(data)
        setRequest(formatedData)
       })
       .catch(error => {
        console.log(error)
       })
    }, [search, category])

    let searchProduct = (newSearch) => {
        setSearch(newSearch);
    }

    let changeCategory = (newCategory) => {
        setCategory(newCategory)
    }

    return [request, searchProduct, changeCategory]
}