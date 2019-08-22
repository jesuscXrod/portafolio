//Crear Header de la tabla
function headerTable(){
    tabla = document.getElementById("table-data");
    tblHead = document.createElement("thead");
    hileraHead = document.createElement("tr");
    
    celdaHead = document.createElement("td");
    nameHead  = document.createTextNode("Full Name");   
    celdaHead.appendChild(nameHead);    
    hileraHead.appendChild(celdaHead);  
    
    celdaHead = document.createElement("td");
    partyHead = document.createTextNode("Party");
    celdaHead.appendChild(partyHead);
    hileraHead.appendChild(celdaHead);
    
    celdaHead = document.createElement("td");
    partyHead = document.createTextNode("State");
    celdaHead.appendChild(partyHead);
    hileraHead.appendChild(celdaHead);
    
    celdaHead = document.createElement("td");
    partyHead = document.createTextNode("Seniority");
    celdaHead.appendChild(partyHead);
    hileraHead.appendChild(celdaHead);
    
    celdaHead = document.createElement("td");
    partyHead = document.createTextNode("%");
    celdaHead.appendChild(partyHead);
    hileraHead.appendChild(celdaHead);
    
    tblHead.appendChild(hileraHead);
    tabla.appendChild(tblHead);
}

headerTable();


//Crea el body de la tabla
// Editado para realizar la task4
function crear_tabla(datos){
    app.object = datos;
}
//Filtros y update de la tabla
// Editado para realizar la task4
function updateTable(datos){
    filter = [];
    aux = [];
    checkFilter = Array.from(document.querySelectorAll('input[name=checkbox]:checked')).map( elemento => (elemento.value));
    stateFilter = $("#drop-menu").val();
    
    for(j = 0; j < datos.length; j++){
        if(datos[j].party === checkFilter[0]){
            filter.push(datos[j]);
        }else if(datos[j].party === checkFilter[1]){
            filter.push(datos[j]);
        }else if(datos[j].party === checkFilter[2]){
            filter.push(datos[j]);
        }
    }

    if(stateFilter !== "All"){
        for(e = 0; e < datos.length; e++){
            if(filter[e].state === stateFilter){
                aux.push(filter[e]);
                crear_tabla(aux);
            }else{
                crear_tabla(aux);
            }
        }
    }else{
        crear_tabla(filter);
    }
}
