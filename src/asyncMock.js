const products = [
    { 
        id: '1', 
        name: 'Iphone 12', 
        price: 1000, 
        category: 'celular', 
        img:'https://itechstore.com.ar/wp-content/uploads/2020/06/iphone-12-pro-gold-hero-600x710.png', 
        stock: 25, 
        description:'Descripcion de Iphone 12'
    },
    { id: '2', name: 'Iphone 14', price: 800, category: 'celular', img:'https://d2ihpvt6nd5q28.cloudfront.net/wp-content/uploads/2023/02/iPhone_14_Blue_PDP_Image_Position-1A_LAES.jpg', stock: 16, description:'Descripcion de Samsung s21'},
    { id: '3', name: 'MacBook Pro 14.2', price: 1200, category: 'notebook', img:'https://carrello.com.ar/ecom/wp-content/uploads/2021/11/LD0005898603_1_0005900594.jpg', stock: 10, description:'Descripcion de Ipad'}
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 1500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1500)
    })
}


export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId))
        }, 1500)
    })
}