const Url =
"https://euw1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=RGAPI-9ff2ac8f-c1a7-4b8d-afac-7bcaed65b95e"
var data = []

var tab = []

function classement(){
    
    var tableau = document.getElementById('tableau')
    tableau.innerHTML = ""
    
    fetch(Url , {method: 'get' }).then( reponse => reponse.json().then(results => {
    
        for(i = 0; i < results.entries.length; i++){

            results.entries[i].leaguePoints

            console.log(results.entries[i])


            var div = document.createElement('div')
            tableau.appendChild(div)

            var para = document.createElement('p')
            div.appendChild(para)
            para.innerHTML = results.entries[i].summonerName  , "    " , results.entries[i].leaguePoints

            div.dataset.point = results.entries[i].leaguePoints
            div.classList.add('test')
            div.style.display = "none"

        }

        var all_div = document.querySelectorAll(".test")
        
        for( j = 0 ; j < all_div.length; j++){
            tab.push(all_div[j].dataset.point)
        }

        tab.sort((a, b) => a - b)
        tab.reverse()

        for( k = 0; k < tab.length; k++){

            for( l = 0 ; l < tab.length; l++){

                if( tab[k] == all_div[l].dataset.point ){

                    var div_trier = document.createElement('div')
                    div_trier.classList.add('rank')
                    document.getElementById("tableau_trier").appendChild(div_trier)

                    var para2 = document.createElement("para2");
                    para2.innerHTML = k + 1 
                    para2.classList.add('para2')
                    div_trier.appendChild(para2)

                    var para3 = document.createElement("para3");
                    para3.classList.add('para3')
                    para3.innerHTML = all_div[l].innerHTML
                    div_trier.appendChild(para3)
                    
                    var img = document.createElement("img");
                    img.src = "../img/Ranks/challenger.svg" + img.innerHTML;
                    img.classList.add('image-rank')
                    div_trier.appendChild(img)

                    var para4 = document.createElement("para4");
                    para4.innerHTML = "Challenger"
                    para4.classList.add('para4')
                    div_trier.appendChild(para4)

                    var para5 = document.createElement("para5");
                    para5.innerHTML = all_div[l].dataset.point + " LP"
                    div_trier.appendChild(para5)
                    
                }

            }

        }

    }))
}

classement()
