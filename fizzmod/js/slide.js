let indice = 1;

function slideRender(){
    slides.forEach(element=>{
        const div = document.createElement("div");
        const img = document.createElement("img");
        const a = document.createElement("a");
        div.classList.add("slider");
        img.src = `img/${element.imgName}`;
        a.href = element.href;
        a.appendChild(img);
        div.appendChild(a);
        slide.appendChild(div)
    });
    slider[0].style.display = 'block';
}

function moveSlide(){
    if(indice > slider.length){indice = 1;}
    if(indice < 1){indice = slider.length;}
    for(i=0; i<slider.length; i++){slider[i].style.display='none';}}

arrowLeft.addEventListener("click",()=>{
    indice -= 1;
    moveSlide();
    slider[indice-1].style.display='block';
});

arrowRight.addEventListener("click",()=>{
    indice += 1;
    moveSlide();
    slider[indice-1].style.display='block';
});