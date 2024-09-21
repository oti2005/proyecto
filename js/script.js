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

function getId(){
    let idProducto=document.getElementById("campoBuscar").value;
    search(idProducto,data =>{
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
                
                main.append(article);
        })
    })
}

function search(idProducto,done){
    const main = document.querySelector("main");
    main.innerHTML='';
    const results = fetch(`https://fakestoreapi.com/products/${idProducto}`)
    results
         .then(respuesta => respuesta.json())
         .then(data => {done(data)
        });
}
