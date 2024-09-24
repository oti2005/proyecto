const btnBuscar = document.getElementById("btnBuscar")
const resultadoDiv = document.getElementById("resultados")

btnBuscar.addEventListener('click' , () =>{
    const objetoId = document.getElementById('buscar').value;
    fetch(`https://fakestoreapi.com/products/ ${objetoId}`)
    .then (responde => {
        if (!responde.ok){
            throw new Error('No se encontro el objeto');
        }
        return responde.json();
    })
    .then(data => {
        resultadoDiv.innerHTML = `
        <h2>Resultado:</h2>
        <p>ID: ${data.id}</p>
        <p>Nombre: ${data.title}</p>
        <p>Descripción: ${data.description}</p>
        `
    })
})
