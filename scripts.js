const clientes = [
    {
      cliente: 'Maurício Bezerra',
      posição: '1'
    },
    {
      cliente: 'Antônio Luís Costa',
      posição: '2'
    },
    {
      cliente: 'Renato Melo',
      posição: '3'
    },
    {
      cliente: 'Angelo Cavalcante',
      posição: '4'
    },
    {
      cliente: 'Bruno Costa',
      posição: '5'
    }
  ]

  const tbody = document.getElementsByClassName('planilha__body')
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