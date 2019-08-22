var mostLoyal = [],
    lLoyal = [],
    numberDemocrats=[],
    numberRepublicans=[],
    numberInde=[]
function updateVueTable() {
    
    function loyal(){

        function numerosMiembros(datos){
            datos.forEach(element => {
                if(element.party === "D"){
                    numberDemocrats.push(element);
                }
                else if(element.party === "R"){
                    numberRepublicans.push(element);
                }
                else if(element.party === "I"){
                    numberInde.push(element);
                }
            });
            stadistics.total_democrat = numberDemocrats.length
            stadistics.total_republican = numberRepublicans.length
            stadistics.total_inde = numberInde.length
            
        }
        numerosMiembros(app.object);

        function porcentajeVotos(arrays){
            totalVotos = 0;
    
            arrays.forEach(element => {
                totalVotos += element.votes_with_party_pct
            })
            porcentaje = totalVotos / arrays.length
            pct_voto = porcentaje.toFixed(2);
        
        }
        porcentajeVotos(numberDemocrats);
            stadistics.votes_democrat = pct_voto
        porcentajeVotos(numberRepublicans);
            stadistics.votes_republican = pct_voto
        porcentajeVotos(numberInde)
            stadistics.votes_inde = pct_voto

        function sort(a,b){
            a = a.votes_with_party_pct,
            b = b.votes_with_party_pct;
            if(a < b){
                return 1;
            }else if(a > b){
                return -1;
            }
            return 0;
        }
        appMostLoyal.object.sort(sort);
        
        arrayTop = Math.round(appMostLoyal.object.length * 0.1);
        if(appMostLoyal.object[arrayTop].votes_with_party_pct == appMostLoyal.object[arrayTop + 1].votes_with_party_pct){
            topTen = appMostLoyal.object.slice(0, arrayTop + 1);
            appMostLoyal.object = topTen;
        }else{
            topTen = appMostLoyal.object.slice(0, arrayTop)
            appMostLoyal.object = topTen;
        }

        appLeastLoyal.object.sort(sort);
        appLeastLoyal.object.reverse();

        arrayTop = Math.round(appLeastLoyal.object.length * 0.1);
        if(appLeastLoyal.object[arrayTop].votes_with_party_pct == appLeastLoyal.object[arrayTop + 1].votes_with_party_pct){
            topTen = appLeastLoyal.object.slice(0, arrayTop + 1);
            appLeastLoyal.object = topTen;
        }else{
            topTen = appLeastLoyal.object.slice(0, arrayTop)
            appLeastLoyal.object = topTen;
        }
    }
    loyal();


    //Attendance
function attendance(){
    //Ordena el array
    function sort(a,b){
        a = a.missed_votes_pct,
        b = b.missed_votes_pct;
        if(a < b){
            return 1;
        }else if(a > b){
            return -1;
        }
        return 0;
    }
    
    appLeastEngaged.object.sort(sort);
    
    //leastEngaged 
    var arrayTop = Math.round(appLeastEngaged.object.length * 0.1)
    
        if(appLeastEngaged.object[arrayTop].missed_votes_pct == appLeastEngaged.object[arrayTop + 1].missed_votes_pct){
            topTen = appLeastEngaged.object.slice(0, arrayTop + 1);
            appLeastEngaged.object = topTen;
        }else{
            topTen = appLeastEngaged.object.slice(0, arrayTop)
            appLeastEngaged.object = topTen;
        }
    
    //MostEngaged
    appMostEngaged.object.sort(sort);
    appMostEngaged.object.reverse();

    arrayTop = Math.round(appMostEngaged.object.length * 0.1);
    if(appMostEngaged.object[arrayTop].missed_votes_pct == appMostEngaged.object[arrayTop + 1].missed_votes_pct){
        topTen = appMostEngaged.object.slice(0, arrayTop + 1);
        appMostEngaged.object = topTen;
    }else{
        topTen = appMostEngaged.object.slice(0, arrayTop)
        appMostEngaged.object = topTen;
    }
}
attendance();
}