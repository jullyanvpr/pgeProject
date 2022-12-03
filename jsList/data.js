export const data = () => {
  return {
    users: [
      {
        id: '1',
        name: 'bolso naro',
        email: 'mitomessias@gmail.com'
      },
      {
        id: '2',
        name: 'josé ramalho',
        email: ''
      },
      {
        id: '3',
        name: 'Dilma Rousseff',
        email: 'dilmae@gmail.com'
      }
    ],
    produtos: [
      {
        id: '1',
        nome: 'Caixa de leite',
        preco: '7,99',
        tipo: 'UN'
      },
      {
        id: '2',
        nome: 'Carne de lata',
        preco: '11,99',
        tipo: 'UN'
      },
      {
        id: '3',
        nome: 'Frango',
        preco: '7,99',
        tipo: 'KG'
      },
    ],
    compras: [
      {
        userId: '1',
        userName: 'bolso',
        productId: '1',
        ammount: '1',
        created: '2022-11-03T05:06:18Z'
      },
      {
        userId: '3',
        userName: 'dilma',
        productId: '1',
        ammount: '1',
        created: '2022-11-03T05:04:15Z'
      },
      {
        userId: '1',
        userName: 'bolso',
        productId: '2',
        ammount: '1',
        created: '2022-11-03T05:03:18Z'
      },
      {
        userId: '2',
        userName: 'josé',
        productId: '1',
        ammount: '3',
        created: '2022-11-03T05:04:53Z'
      },
      {
        userId: '1',
        userName: 'bolso',
        productId: '3',
        ammount: '10',
        created: '2022-10-03T05:05:45Z'
      },
      {
        userId: '2',
        userName: 'josé',
        productId: '2',
        ammount: '2',
        created: '2022-10-03T05:12:45Z'
      },
    ]
  }
}