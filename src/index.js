/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

/**
 * FALTA OPTIMIZACIÓN. Cada vez que se realiza el fetch se está 
 * reemplazando el contenedor anterior con uno nuevo y se crean 
 * cada uno de los items de nuevo
 */
const baseUrl = 'https://myheroacademiaapi.com/api'

const appParent = document.querySelector('#appParent')
const firstAppNode = document.querySelector('#app')


async function fetchMyHeroAcademy(page) {
    const appNode = document.querySelector('#app')
    const result = await window.fetch(`${baseUrl}/character?page=${page}`)
    const responseJson = await result.json()
    const todosLosItems = [];
    responseJson.result.forEach(item => {

        const image = document.createElement('img')
        image.src = item.images[0]
        image.className = 'rounded-full  h-40 mt-3 m-2'

        const name = document.createElement('h3')
        name.textContent = `Nombre: ${item.name ?? 'Desconocido'}`
        // title.style.fontSize = '3rem'
        name.className = 'text-2xl text-blue-500 m-1'

        const affiliation = document.createElement('h4')
        affiliation.textContent = `Afiliación: ${item.affiliation ?? 'Desconocido'}`
        // title.style.fontSize = '3rem'
        affiliation.className = ' '

        const occupation = document.createElement('h5')
        occupation.textContent = `Ocupación: ${item.occupation ?? 'Desconocido'}`
        // title.style.fontSize = '3rem'
        occupation.className = ' text-green-500 '

        const container = document.createElement('div')
        container.className = 'grid justify-items-center cursor-pointer hover:bg-gray-100'

        container.append(image, name, affiliation, occupation)
        todosLosItems.push(container)
    })
    appNode.append(...todosLosItems)
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max)+1;
}

const loadButton = document.createElement("button")
loadButton.innerHTML = "Cargar nuevos personajes"
loadButton.className = 'bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded	'
loadButton.onclick = () => {
    const appNode = document.querySelector('#app')
    const newAppNode = document.createElement('div')
    newAppNode.className = 'grid grid-flow-row grid-cols-3 grid-rows-3 gap-5 mt-8'
    newAppNode.id = 'app'
    newAppNode.append(loadButton)
    appParent.replaceChild(newAppNode, appNode);
    fetchMyHeroAcademy(getRandomInt(16))
}

firstAppNode.append(loadButton)

fetchMyHeroAcademy(getRandomInt(16))


