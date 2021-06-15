/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const url = "https://platzi-avo.vercel.app/api/avo";

//web api
//conectarnos al server 
//procesar la respuesta, y convertirla en JSON 
// json -> data  -> renderizar info en browser
// primse -> async/await
window.fetch(url)
    .then(response => response.json())
    .then(responseJson => {
        const todosLosItems = [];
        responseJson.data.forEach(item => {
            const image = document.createElement('img')
            const title = document.createElement('h2')
            const price = document.createElement('div')
            
            const container = document.createElement('div')
            container.append(image, title, price)
            todosLosItems.push(container)    
        })
        document.body.append(...todosLosItems)
    })

