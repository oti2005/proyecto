$(document).ready(function(){
    $('#btnBuscar').click(function(e){
        e.preventDefault();
        let nombreProducto = $('#campoBuscar').val().toLowerCase();
        if(nombreProducto){
            buscarProducto(nombreProducto);
        }
    });
    $('#btnLimpiar').click(function(e){
        e.preventDefault();
        $('#producto-container').empty();
        $('#campoBuscar').val('');
    });
    function buscarProducto(producto){
        $.ajax({
            type: "GET" ,
            url: `https://fakestoreapi.com/products`,
            datatype : "json",
            success : function(data){
                renderProducData(data)
            }
        });
    }
    function renderPokeData(data){
        let div = $("<div></div>");
        div.addClass("product card");

        let name = $("<h3></h3>");
        name.addClass("card-title");
        name.append(data.id + " " + data.name.toUpperCase());

        div.append(name);

        let img = $("<img></img>");
        img.attr("src", data.sprites.other["official-artwork"].front_default);
        img.addClass("card-img");

        div.append(img);

        let body = $("<div></div>");
        body.addClass("card-body")

        let pokeType = data.types;
        let tipos = '';
        pokeType.forEach(function(type){
            if(pokeType.length > 1 && !pokeType.length.last){
                tipos += `${type['type']['name']} - `.toUpperCase();
            }else{
                tipos += `${type['type']['name']}`.toUpperCase();
            }
        })
        body.append(`<div>Tipo: ${categoria}</div>`);
        div.append(body);

        $('#producto-container').append(div);
    }
})