import { data } from './data.js'

const { compras } = data()

const monthInput = document.querySelector('#month')
const tableElement = document.querySelector('#table')

const getPurchasesByMonth = (monthSelected) => {
  return compras.filter(compra => {
    const getOnlyMonth = compra.created.split('-')[1].substring(0, 2)
    return getOnlyMonth === String(monthSelected)
  })
}

monthInput.addEventListener('input', (e) => {
  e.preventDefault()
  const monthSelected = monthInput.value.split('-')[1]
  const purchases = getPurchasesByMonth(monthSelected)
  
  tableElement.innerHTML = ''

  const tr = document.createElement('tr')

  if(purchases.length <= 0) {
    const notFoundElement = document.createElement('td')
    notFoundElement.innerHTML = 'Nenhum dado localizado, tente outra data.'
    tr.appendChild(notFoundElement)
    return tableElement.appendChild(tr)
  } 

  const firstTh = document.createElement('th')
  const secondTh = document.createElement('th')
  const thirdTh = document.createElement('th')

  firstTh.innerHTML = 'Nome'
  secondTh.innerHTML = 'Produto'
  thirdTh.innerHTML = 'Quantidade'
  
  tr.appendChild(firstTh)
  tr.appendChild(secondTh)
  tr.appendChild(thirdTh)
  
  tableElement.appendChild(tr)
  
  purchases.forEach(purchase => {
    const tr = document.createElement('tr')

    const nameRow = document.createElement('td')
    const productRow = document.createElement('td')
    const ammountRow = document.createElement('td')

    nameRow.innerHTML = purchase.userName
    productRow.innerHTML = purchase.productId
    ammountRow.innerHTML = purchase.ammount

    tr.appendChild(nameRow)
    tr.appendChild(productRow)
    tr.appendChild(ammountRow)

    tableElement.appendChild(tr)
  })
})