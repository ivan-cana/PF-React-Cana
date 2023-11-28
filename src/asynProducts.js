const products = [
    //Hombre
    {
        id:'1',
        name: 'Remera de hombre',
        price: 10000,
        category: 'hombre',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.montagne.com.ar%2Fproducto%2F2407-remera-de-hombre-marko&psig=AOvVaw1gypiTdUPzzWl72Ber10LR&ust=1701211625091000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJDWhKih5YIDFQAAAAAdAAAAABAG',
        stock: 10,
        descrip: 'Remera para hombre marca Montagne',
    },

    {
        id:'2',
        name: 'Pantalon de hombre',
        price: 12000,
        category: 'hombre',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Frusty.com.ar%2Fcollections%2Fpantalones-hombre&psig=AOvVaw27Y-Eufr3NQUd7J8xlGtQy&ust=1701211752423000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCID2z-Sh5YIDFQAAAAAdAAAAABAE',
        stock: 15,
        descrip: 'Pantalon para hombre marca Rusty',
    },

    {
        id:'3',
        name: 'Campera de hombre',
        price: 15000,
        category: 'hombre',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.interfuerzas.com.ar%2Fcampera-hombre-softshell-makalu%25C2%25AE-trekking-impermeable%2Fp%3FskuId%3D10736&psig=AOvVaw0CknYzKk2HDfo2l1QNlO9F&ust=1701211857575000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOD1_5ai5YIDFQAAAAAdAAAAABAF',
        stock: 7,
        descrip: 'Campera para hombre marca Makalu',
    },

    //Mujer
    {
        id:'4',
        name: 'Remera de mujer',
        price: 10000,
        category: 'mujer',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.reuschexclusivo.com.ar%2Fproductos%2Fremera-deportiva-microfibra-mujer%2F&psig=AOvVaw1ws545RcbSeI1mdmBTUfWp&ust=1701211963994000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMjCzcmi5YIDFQAAAAAdAAAAABAe',
        stock: 8,
        descrip: 'Remera para mujer deportiva',
    },

    {
        id:'5',
        name: 'Pantalon de mujer',
        price: 11000,
        category: 'mujer',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpieers.com%2Fmujer%2Fropa%2Fjeans.html&psig=AOvVaw1oGbTdvlBujpNqrTlpuy_9&ust=1701212067721000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOj9gfui5YIDFQAAAAAdAAAAABAJ',
        stock: 22,
        descrip: 'Pantalon jean de mujer',
    },

    {
        id:'6',
        name: 'Buzo de mujer',
        price: 15000,
        category: 'mujer',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.montagne.com.ar%2Fproducto%2F3247-buzo-de-mujer-kala&psig=AOvVaw2_mGiAw-F-lpYZVkF1m2b9&ust=1701212144273000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDTwp-j5YIDFQAAAAAdAAAAABAG',
        stock: 12,
        descrip: 'Buzo de mujer marca Montagne',
    },

    //Niño
    {
        id:'7',
        name: 'Remera de niños',
        price: 7000,
        category: 'niños',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.oncetex.com.ar%2Fproductos%2Fremera-ranglan-ninos%2F&psig=AOvVaw2YibAJlc65uOfJdpc3IWZZ&ust=1701212203073000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPj61ruj5YIDFQAAAAAdAAAAABAF',
        stock: 10,
        descrip: 'Remera para niños',
    },

    {
        id:'8',
        name: 'Pantalon de niños',
        price: 8000,
        category: 'niños',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.montagne.com.ar%2Fproducto%2F841-pantalon-de-ninos-tanny&psig=AOvVaw3kC8ssv-oMSthg_BS_bKYf&ust=1701212315507000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCSmPGj5YIDFQAAAAAdAAAAABAS',
        stock: 4,
        descrip: 'Pantalon para niños marca Montagne',
    },

    {
        id:'9',
        name: 'Campera de niño',
        price: 10000,
        category: 'niños',
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbaobabsupercamping.com.ar%2F%3Fproduct%3Dcampera-columbia-nino-powder-lite&psig=AOvVaw1ZQX5kPGIXZQgGWC4b1YD2&ust=1701212363601000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCOCriYik5YIDFQAAAAAdAAAAABAF',
        stock: 7,
        descrip: 'Campera para niños marca Columbia',
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