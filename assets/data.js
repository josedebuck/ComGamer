const productsData = [
    {
      id: 1,
      name: 'ASUS GTX 1660 6GB GDDR6',
      bid: 92450,
      category: 'placavideo',
      cardImg: './assets/img/products/placavideo1.png',
    },
    {
      id: 2,
      name: 'ASUS GTX 1660 6GB GDDR6',
      bid: 80900,
      category: 'placavideo',
      cardImg: './assets/img/products/placavideo2.png',
    },
    {
      id: 3,
      name: 'MSI RTX 3090 24GB GDDR6X',
      bid: 87650,
      category: 'placavideo',
      cardImg: './assets/img/products/placavideo3.png',
    },
    {
      id: 4,
      name: 'AMD Ryzen 5 1600',
      bid: 41400,
      category: 'procesadores',
      cardImg: './assets/img/products/procesador1.png',
    },
    {
      id: 5,
      name: 'AMD RYZEN 3 3200G',
      bid: 34250,
      category: 'procesadores',
      cardImg: './assets/img/products/procesador2.png',
    },
    {
      id: 6,
      name: 'Intel Pentium Gold G6400',
      bid: 12300,
      category: 'procesadores',
      cardImg: './assets/img/products/procesador3.png',
    },
    {
      id: 7,
      name: 'ASUS PRIME A520M-K',
      bid: 17350,
      user: 'ThingyCake',
      category: 'placamadre',
      cardImg: './assets/img/products/placamadre.png',
    },
    {
      id: 8,
      name: 'ASUS PRIME A320M-K',
      bid: 10900,
      user: 'NickyG',
      category: 'placamadre',
      cardImg: './assets/img/products/placamadre2.png',
    },
    {
      id: 9,
      name: 'Asrock A320M-HDV',
      bid: 10500,
      user: 'ThingyBit',
      category: 'placamadre',
      cardImg: './assets/img/products/placamadre3.png',
    },
    {
      id: 10,
      name: 'GeiL DDR4 16GB 3000MHz',
      bid: 21100,
      category: 'ram',
      cardImg: './assets/img/products/ram.png',
    },
    {
      id: 11,
      name: 'GeiL DDR4 16GB',
      bid: 17650,
      user: 'Sharkenetta',
      category: 'ram',
      cardImg: './assets/img/products/ram2.png',
    },
    {
      id: 12,
      name: 'GeiL DDR4 16GB',
      bid: 17650,
      user: 'MG9',
      category: 'ram',
      cardImg: './assets/img/products/ram3.png',
    },
    {
      id: 13,
      name: 'Glorious Model D Minus',
      bid: 7890,
      category: 'peliculas',
      cardImg: './assets/img/products/mouse.png',
    },
    {
      id: 14,
      name: 'ASUS ROG STRIX',
      bid: 7820,
      category: 'mouseteclado',
      cardImg: './assets/img/products/mouse2.png',
    },
    {
      id: 15,
      name: 'Redragon K509 Dyaus',
      bid: 3820,
      category: 'mouseteclado',

      cardImg: './assets/img/products/mouse3.png',
    },
  ];
  

  function splitProducts(size) {
    let chunk = [];
    for (let i = 0; i < productsData.length; i += size)
      chunk.push(productsData.slice(i, i + size));
    return chunk;
  }
  

  const allProducts = {
    productList: splitProducts(6),
    next: 1,
    limit: splitProducts(6).length,
  };