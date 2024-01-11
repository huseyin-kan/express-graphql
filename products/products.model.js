const Products = [
    {
        id: 'redshoe',
        description: 'Red Shoe',
        price: 42.12,
        reviews: []
    },
    {
        id:'bluejean',
        description: 'Blue Jean',
        price: 10.32,
        reviews: []
    }
]

//simiulating
function getAllProducts(){
    return Products
}

function getProductsByPrice(min,max){
    return Products.filter(product => {
        return product.price <= max && product.price >= min
    })
}

function getProductById(id){
    return Products.find(product => product.id === id)
}

function addNewProduct(id, description,price){
    const newProduct = {
        id,
        description,
        price,
        reviews: []
    }
    Products.push(newProduct)
    return newProduct
}

function addNewProductReview(id,rating,comment){
    const product =  getProductById(id)
    if(product){
        const review = {
            rating,
            comment
        }
        product.reviews.push(review)
        return review
    }
}

module.exports = {
    getAllProducts,
    getProductsByPrice,
    getProductById,
    addNewProduct,
    addNewProductReview
}