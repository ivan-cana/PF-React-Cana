const products = [
    //Hombre
    {
        id:'1',
        name: 'Remera de hombre',
        price: 10000,
        category: 'hombre',
        img: 'https://images.unsplash.com/photo-1574180566232-aaad1b5b8450?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UmVtZXJhJTIwZGUlMjBob21icmV8ZW58MHx8MHx8fDA%3D',
        stock: 10,
        descrip: 'Remera para hombre',
    },

    {
        id:'2',
        name: 'Pantalon de hombre',
        price: 12000,
        category: 'hombre',
        img: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UGFudGFsb24lMjBkZSUyMGhvbWJyZXxlbnwwfHwwfHx8MA%3D%3D',
        stock: 15,
        descrip: 'Pantalon para hombre',
    },

    {
        id:'3',
        name: 'Campera de hombre',
        price: 15000,
        category: 'hombre',
        img: 'https://images.unsplash.com/photo-1548883354-94bcfe321cbb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FtcGVyYXxlbnwwfHwwfHx8Mg%3D%3D',
        stock: 7,
        descrip: 'Campera para hombre',
    },

    //Mujer
    {
        id:'4',
        name: 'Remera de mujer',
        price: 10000,
        category: 'mujer',
        img: 'https://images.unsplash.com/photo-1554568218-0f1715e72254?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVtZXJhfGVufDB8fDB8fHwy',
        stock: 8,
        descrip: 'Remera para mujer',
    },

    {
        id:'5',
        name: 'Pantalon de mujer',
        price: 11000,
        category: 'mujer',
        img: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFudGFsb258ZW58MHx8MHx8fDI%3D',
        stock: 22,
        descrip: 'Pantalon para mujer',
    },

    {
        id:'6',
        name: 'Campera de mujer',
        price: 15000,
        category: 'mujer',
        img: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWJyaWdvfGVufDB8fDB8fHwy',
        stock: 12,
        descrip: 'Campera para mujer',
    },

    //Niño
    {
        id:'7',
        name: 'Remera de niños',
        price: 7000,
        category: 'niños',
        img: 'https://images.pexels.com/photos/4504010/pexels-photo-4504010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stock: 10,
        descrip: 'Remera para niños',
    },

    {
        id:'8',
        name: 'Pantalon de niños',
        price: 8000,
        category: 'niños',
        img: 'https://images.pexels.com/photos/1598507/pexels-photo-1598507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stock: 4,
        descrip: 'Pantalon para niños',
    },

    {
        id:'9',
        name: 'Buso de niño',
        price: 10000,
        category: 'niños',
        img: 'https://images.pexels.com/photos/5559989/pexels-photo-5559989.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        stock: 7,
        descrip: 'Buso para niños',
    },
]

export const getProducts = ()=>{

    return new Promise((resolve)=>{

        setTimeout(()=>{
            resolve(products)
        },500)

    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(()=>{
            resolve(products.find(prod => prod.id === productId))
        },500)
    })
}

export const getProductByCategory = (categoryId) => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(products.filter(prod => prod.category === categoryId))
        },500)
    })
}