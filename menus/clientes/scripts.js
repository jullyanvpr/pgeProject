const clientes = [
    {
      name: 'Maurício Bezerra',
      nascimento: '04/04/1995'
    },
    {
      name: 'Antônio Luís Costa',
      nascimento: '13/08/1994'
    },
    {
      name: 'Renato Melo',
      nascimento: '15/09/2003'
    },
    {
      name: 'Angelo Cavalcante',
      nascimento: '28/12/1981'
    },
    {
      name: 'Bruno Costa',
      nascimento: '04/04/1995'
    },
    {
      name: 'Paulo Nobre',
      nascimento: '14/07/1998'
    },
    {
      name: 'Mário Freitas',
      nascimento: '11/12/1999'
    },
    {
      name: 'Jonata Gomes',
      nascimento: '30/03/1992'
    },
    {
      name: 'Aurelio Benevides',
      nascimento: '24/08/1983'
    },
    {
      name: 'Rosa Nascimento',
      nascimento: '13/02/1975'
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