const clientes = [
  {
    tipo: 'fones',
    marca: 'razer',
    modelo: 'gamer',
    preço: 'R$ 1.199,00',
    id: 'FO001'
  },
  {
    tipo: 'fones',
    marca: 'razer',
    modelo: 'rgb',
    preço: 'R$ 699,00',
    id: 'FO002'
  },
  {
    tipo: 'fones',
    marca: 'logitech',
    modelo: 'wireless',
    preço: 'R$ 599,00',
    id: 'FO003'
  },
  {
    tipo: 'fones',
    marca: 'logitech',
    modelo: 'gamer',
    preço: 'R$ 299,00',
    id: 'FO004'
  },
  {
    tipo: 'monitor',
    marca: 'samsung',
    modelo: 'uhd',
    preço: 'R$ 1.299,00',
    id: 'MO001'
  },
  {
    tipo: 'monitor',
    marca: 'samsung',
    modelo: 'ultrawide',
    preço: 'R$ 1.799,00',
    id: 'MO002'
  },
  {
    tipo: 'monitor',
    marca: 'lg',
    modelo: 'gamer',
    preço: 'R$ 899,00',
    id: 'MO003'
  },
  {
    tipo: 'monitor',
    marca: 'lg',
    modelo: 'uhd',
    preço: 'R$ 699,00',
    id: 'MO004'
  },
  {
    tipo: 'mouse',
    marca: 'redragon',
    modelo: 'gamer',
    preço: 'R$ 299,00',
    id: 'MS001'
  },
  {
    tipo: 'mouse',
    marca: 'redragon',
    modelo: 'rgb',
    preço: 'R$ 199,00',
    id: 'MS002'
  },
  {
    tipo: 'mouse',
    marca: 'dell',
    modelo: 'wireless',
    preço: 'R$ 299,00',
    id: 'MS003'
  },
  {
    tipo: 'mouse',
    marca: 'dell',
    modelo: 'rgb',
    preço: 'R$ 199,00',
    id: 'MS004'
  },
  {
    tipo: 'teclado',
    marca: 'warrior',
    modelo: 'mecânico',
    preço: 'R$ 499,00',
    id: 'TE001'
  },
  {
    tipo: 'teclado',
    marca: 'warrior',
    modelo: 'gamer',
    preço: 'R$ 199,00',
    id: 'TE002'
  },
  {
    tipo: 'teclado',
    marca: 'hyperx',
    modelo: 'rgb',
    preço: 'R$ 249,00',
    id: 'TE003'
  },
  {
    tipo: 'teclado',
    marca: 'hyperx',
    modelo: 'wireless',
    preço: 'R$ 499,00',
    id: 'TE004'
  },
 
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