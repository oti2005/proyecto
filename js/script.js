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
                  
                <img src="${Productos.image }" class="producto" alt="Productos">
                
                <p>${Productos.category}</p>
                <p class="titulo">${Productos.title}</p>
            </div>
            
        </article>
            `);
            const main = document.querySelector("main");
            main.append(article);
    })
})