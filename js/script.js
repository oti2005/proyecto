function getCharacters(done){
    const results = fetch("https://fakestoreapi.com/products")
    results
         .then(respuesta => respuesta.json())
         .then(data => {done(data)});
}

getCharacters(data => {
    data.forEach(Productos =>{
        const article = document.createRange().createContextualFragment(`
            <article>
            <div class="image-container">
                  
                <i class="fa-solid fa-tag"></i><img src="${Productos.image }" class="producto" alt="Productos">
                
                <p>${Productos.category}</p>
                <p class="titulo">${Productos.title}</p>
                <p>Precio: ${Productos.price}</p>
            </div>
            
        </article>
            `);
            const main = document.querySelector("main");
            main.append(article);
    })
})

const btnBuscar = document.getElementById("btnBuscar");
const resultadoDiv = document.querySelector("main");
btnBuscar.addEventListener('click' , () =>{
    resultadoDiv.innerHTML = '';
    const objetoId = document.getElementById('campoBuscar').value;
    fetch(`https://fakestoreapi.com/products/ ${objetoId}`)
    .then (responde => {
        if (!responde.ok){
            throw new Error('No se encontro el objeto');
        }
        return responde.json();
    })
    .then(data => {
        resultadoDiv.innerHTML = `
        <article>
            <div class="image-container">
                  
                <i class="fa-solid fa-tag"></i><img src="${data.image }" class="producto" alt="Productos">
                
                <p>${data.category}</p>
                <p class="titulo">${data.title}</p>
                <p>Precio: ${data.price}</p>
            </div>
            
        </article>
        `
    })
})

const btnLimpiar = document.getElementById("btnLimpiar");
btnLimpiar.addEventListener('click', () => {
    document.getElementById('campoBuscar').value = '';
    resultadoDiv.innerHTML = '';
    getCharacters(data => {
        data.forEach(Productos =>{
            const article = document.createRange().createContextualFragment(`
                <article>
                <div class="image-container">
                      
                    <i class="fa-solid fa-tag"></i><img src="${Productos.image }" class="producto" alt="Productos">
                    
                    <p>${Productos.category}</p>
                    <p class="titulo">${Productos.title}</p>
                    <p>Precio: ${Productos.price}</p>
                </div>
                
            </article>
                `);
                const main = document.querySelector("main");
                main.append(article);
        })
    })
})

btnMasculino = document.getElementById('boton1');
btnMasculino.addEventListener('click', () => {
    resultadoDiv.innerHTML = '';
    fetch(`https://fakestoreapi.com/products/category/men's%20clothing`)
        .then(respuesta => respuesta.json())
        .then(data => {
            data.forEach(Productos =>{
                const article = document.createRange().createContextualFragment(`
                    <article>
                    <div class="image-container">
                          
                        <i class="fa-solid fa-tag"></i><img src="${Productos.image }" class="producto" alt="Productos">
                        
                        <p>${Productos.category}</p>
                        <p class="titulo">${Productos.title}</p>
                        <p>Precio: ${Productos.price}</p>
                    </div>
                    
                </article>
                    `);
                    const main = document.querySelector("main");
                    main.append(article);
            })
        });
})
btnFenemenino = document.getElementById('boton2');
btnFenemenino.addEventListener('click', () => {
    resultadoDiv.innerHTML = '';
    fetch(`https://fakestoreapi.com/products/category/women's clothing`)
        .then(respuesta => respuesta.json())
        .then(data => {
            data.forEach(Productos =>{
                const article = document.createRange().createContextualFragment(`
                    <article>
                    <div class="image-container">
                          
                        <i class="fa-solid fa-tag"></i><img src="${Productos.image }" class="producto" alt="Productos">
                        
                        <p>${Productos.category}</p>
                        <p class="titulo">${Productos.title}</p>
                        <p>Precio: ${Productos.price}</p>
                    </div>
                    
                </article>
                    `);
                    const main = document.querySelector("main");
                    main.append(article);
            })
        });
})
btnJoyeria = document.getElementById('boton3');
btnJoyeria.addEventListener('click', () => {
    resultadoDiv.innerHTML = '';
    fetch(`https://fakestoreapi.com/products/category/jewelery`)
        .then(respuesta => respuesta.json())
        .then(data => {
            data.forEach(Productos =>{
                const article = document.createRange().createContextualFragment(`
                    <article>
                    <div class="image-container">
                          
                        <i class="fa-solid fa-tag"></i><img src="${Productos.image }" class="producto" alt="Productos">
                        
                        <p>${Productos.category}</p>
                        <p class="titulo">${Productos.title}</p>
                        <p>Precio: ${Productos.price}</p>
                    </div>
                    
                </article>
                    `);
                    const main = document.querySelector("main");
                    main.append(article);
            })
        });
})

btnElectronica = document.getElementById('boton4');
btnElectronica.addEventListener('click', () => {
    resultadoDiv.innerHTML = '';
    fetch(`https://fakestoreapi.com/products/category/electronics`)
        .then(respuesta => respuesta.json())
        .then(data => {
            data.forEach(Productos =>{
                const article = document.createRange().createContextualFragment(`
                    <article>
                    <div class="image-container">
                          
                        <i class="fa-solid fa-tag"></i><img src="${Productos.image }" class="producto" alt="Productos">
                        
                        <p>${Productos.category}</p>
                        <p class="titulo">${Productos.title}</p>
                        <p>Precio: ${Productos.price}</p>
                    </div>
                    
                </article>
                    `);
                    const main = document.querySelector("main");
                    main.append(article);
            })
        });
})

