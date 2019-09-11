function productsRender(array){
    array.forEach(element => {
        let discount =  element.price.listPrice - element.price.sellingPrice;
        let porcentaje = discount * 100;
        let porcentajeProducto = porcentaje / element.price.listPrice;
        let div = document.createElement("div");
        let p = document.createElement("p");
        let img = document.createElement("img");
        let h1 = document.createElement("h1");
        let percent=Math.round(porcentajeProducto);
        let h2 = document.createElement("h2");
        let h3 = document.createElement("h3");
        div.classList.add("producto");
        p.classList.add("decripcion");
        p.innerText=element.title;
        img.src = `img/${element.image}`;
        h1.classList.add("descuento");
        h1.innerText=`-${percent}%`;
        h2.classList.add("list-price");
        h2.innerText= `$${element.price.listPrice}`;
        h3.classList.add("sell-price");
        h3.innerText=`$${element.price.sellingPrice}`;
        div.append(h1,img,p,h2,h3);
        productos.append(div);
        main.appendChild(productos);
        
        if(percent==0){
            h2.style.visibility="hidden";
            h1.style.visibility="hidden";}
    });
}