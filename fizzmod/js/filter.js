function filters(){
    let brand = [];
    let category = [];
    let bothFilter = [];
    let brandFilter = Array.from(document.querySelectorAll('input[name=brand]:checked')).map( element => (element.value));
    let categoryFilter = Array.from(document.querySelectorAll('input[name=category]:checked')).map( element => (element.value));

    product.forEach(element=>{
        if(element.attributes[0].value === brandFilter[0]){brand.push(element);}
        else if(element.attributes[0].value === brandFilter[1]){brand.push(element);}
        else if(element.attributes[0].value === brandFilter[2]){brand.push(element);}
        else if(element.attributes[0].value === brandFilter[3]){brand.push(element);}
    });

    product.forEach(element=>{
        if(element.attributes[1].value === categoryFilter[0]){category.push(element);}
        else if(element.attributes[1].value === categoryFilter[1]){category.push(element);}
        else if(element.attributes[1].value === categoryFilter[2]){category.push(element);}
    });

    while (productos.hasChildNodes()){
        productos.removeChild(productos.firstChild)}

    if(brandFilter.length==0){productsRender(category);}
    else if(categoryFilter.length==0){productsRender(brand);}
    else{
        for(i=0; i < brand.length; i++){
            for(j=0; j < category.length; j++){
                if(brand[i].title === category[j].title){
                    bothFilter.push(brand[i]);}}}  
        productsRender(bothFilter);}
    if(brandFilter.length==0 && categoryFilter.length==0){productsRender(product);}}

function filter_render(){
    let filtro = document.getElementById('filters-elements');
    let filter_id=['bumblee', 'sancor','terrabusi','sin-marca','almacen','lacteos','verduras'];
    
    filter.forEach(element=>{
        let h2 = document.createElement('h2');
        let div = document.createElement('div');
        h2.innerHTML = `${element.title}:`;
        div.appendChild(h2);
        div.classList.add('filtro');
        
        element.values.forEach(value=>{
            let label = document.createElement('label');
            let input = document.createElement('input');
            let span = document.createElement('span');
            span.classList.add('icon-icn_checkbox_off')
            label.innerText = value;
            input.value = value;
            input.type = 'checkbox';
            input.id = filter_id[id_indice];
            input.name = element.field;
            id_indice += 1;
            label.appendChild(input);
            label.appendChild(span);
            div.appendChild(label);})
        filtro.appendChild(div);})
}

function get_id_filter(){
    const bumblee = document.getElementById('bumblee');
    const sancor = document.getElementById('sancor');
    const terrabusi = document.getElementById('terrabusi');
    const sin_marca = document.getElementById('sin-marca');
    const almacen = document.getElementById('almacen');
    const lacteos = document.getElementById('lacteos');
    const verduras = document.getElementById('verduras');
    
    bumblee.addEventListener("change",()=>{
        filters();
        change_style(bumblee);
    })
    sancor.addEventListener("change",()=>{
        filters();
        change_style(sancor);
    })
    terrabusi.addEventListener("change",()=>{
        filters();
        change_style(terrabusi);
    })
    sin_marca.addEventListener("change",()=>{
        filters();
        change_style(sin_marca);
    })
    almacen.addEventListener("change",()=>{
        filters();
        change_style(almacen);
    })
    lacteos.addEventListener("change",()=>{
        filters();
        change_style(lacteos);
    })
    verduras.addEventListener("change",()=>{
        filters();
        change_style(verduras);
    })

    function change_style(id_change){
        id_change.parentElement.children[1].classList.toggle('icon-icn_checkbox_off');
        id_change.parentElement.children[1].classList.toggle('icon-icn_checkbox_on');}}