const clientes = [
    {
      cliente: 'Márcio Freitas',
      produto: 'FO001',
      quantidade: '10',
      preço: 'R$ 1.199,00',
      total: 'RS 11.990,00',
      data: '29/11/2022'
    },   
    {
      cliente: 'Maurício Bezerra',
      produto: 'MO004',
      quantidade: '1',
      preço: 'R$ 899,00',
      total: 'R$ 899,00',
      data: '29/11/2022'
    },   
    {
      cliente: 'Angelo Cavalcante',
      produto: 'TE002',
      quantidade: '6',
      preço: 'R$ 199,00',
      total: 'R$ 1.194,00',
      data: '28/11/2022'
    },   
    {
      cliente: 'Bruno Costa',
      produto: 'MS001',
      quantidade: '8',
      preço: 'R$ 799,00',
      total: 'R$ 6.392,00',
      data: '24/11/2022'
    },   
    {
      cliente: 'Renato Melo',
      produto: 'MO004',
      quantidade: '4',
      preço: 'R$ 899,00',
      total: 'R$ 3.596,00',
      data: '19/11/2022'
    },   
    {
      cliente: 'Paulo Nobre',
      produto: 'TE002',
      quantidade: '4',
      preço: 'R$ 199,00',
      total: 'R$ 796,00',
      data: '14/11/2022'
    },   
    {
      cliente: 'Jonatas Gomes',
      produto: 'FO004',
      quantidade: '1',
      preço: 'R$ 249,00',
      total: 'R$ 249,00',
      data: '11/11/2022'
    },   
    {
      cliente: 'Mário Freitas',
      produto: 'MS003',
      quantidade: '3',
      preço: 'R$ 699,00',
      total: 'R$ 2.097,00',
      data: '10/11/2022'
    },   
    {
      cliente: 'Antônio Luís Costa',
      produto: 'TE004',
      quantidade: '2',
      preço: 'R$ 599,00',
      total: 'R$ 1.198,00',
      data: '06/11/2022'
    },   
    {
      cliente: 'Aurelio Benevides',
      produto: 'TE003',
      quantidade: '2',
      preço: 'R$ 799,00',
      total: 'R$ 1.598,00',
      data: '05/11/2020'
    },   
    {
      cliente: 'Maurício Bezerra',
      produto: 'MO002',
      quantidade: '4',
      preço: 'R$ 1.199,00',
      total: 'R$ 4.796,00',
      data: '01/11/2022'
    },   
    {
      cliente: 'Rosa Nascimento',
      produto: 'MS003',
      quantidade: '3',
      preço: 'R$ 699,00',
      total: 'R$ 2.097,00',
      data: '28/10/2022'
    },   
    {
      cliente: 'Angelo Cavalcante',
      produto: 'FO004',
      quantidade: '3',
      preço: 'R$ 249,00',
      total: 'R$ 747,00',
      data: '26/10/2022'
    },   
    {
      cliente: 'Renato Melo',
      produto: 'MS002',
      quantidade: '1',
      preço: 'R$ 999,00',
      total: 'R$ 999,00',
      data: '20/10/2022'
    },   
    {
      cliente: 'Bruno Costa',
      produto: 'TE002',
      quantidade: '1',
      preço: 'R$ 199,00',
      total: 'R$ 199,00',
      data: '19/10/2022'
    },   
    {
      cliente: 'Paulo Nobre',
      produto: 'MO004',
      quantidade: '2',
      preço: 'R$ 899,00',
      total: 'R$ 1.798,00',
      data: '19/10/2022'
    },   
    {
      cliente: 'Jonata Gomes',
      produto: 'TE003',
      quantidade: '4',
      preço: 'R$ 799,00',
      total: 'R$ 3.196,00',
      data: '11/10/2022'
    },   
    {
      cliente: 'Mário Freitas',
      produto: 'MO001',
      quantidade: '5',
      preço: 'R$ 1.399,00',
      total: 'R$ 6.995,00',
      data: '27/09/2022'
    },   
    {
      cliente: 'Aurelio Benevides',
      produto: 'FO001',
      quantidade: '8',
      preço: 'R$ 1.199,00',
      total: 'R$ 9.592,00',
      data: '14/09/2022'
    },   
    {
      cliente: 'Maurício Bezerra',
      produto: 'MO002',
      quantidade: '1',
      preço: 'R$ 1.199,00',
      total: 'R$ 1.199,00',
      data: '10/09/2022'
    }  
  ]

  const tbody = document.getElementsByClassName('planilha__body')
  console.log(tbody[0])
  clientes.forEach(
    function(cliente) {
        const row = document.createElement('tr')
        tbody[0].appendChild(row)
        const dados = Object.values(cliente)
        dados.forEach(function(dado) {
            const cell = document.createElement('td')
            cell.classList.add('planilha__body')
            const dataText = document.createTextNode(dado)
            cell.appendChild(dataText)
            row.appendChild(cell)
        } )

    }
  )