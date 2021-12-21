const Url =
"https://euw1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5?api_key=RGAPI-83a08047-e149-4ffb-94b7-3534c6bb91f6"

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
        
        console.log(all_div)

        for( j = 0 ; j < all_div.length; j++){
            tab.push(all_div[j].dataset.point)
        }

        tab.sort((a, b) => a - b)
        tab.reverse()
        console.log(tab)



        for( k = 0; k < tab.length; k++){

            for( l = 0 ; l < tab.length; l++){

                if(tab[k] == all_div[l].dataset.point ){

                    var div_trier = document.createElement('div')
                    document.getElementById("tableau_trier").appendChild(div_trier)

                    var img = document.createElement("img");
                    img.src = "img/Ranks/challenger.svg";
                    
                    div_trier.innerHTML = k + 1 + all_div[l].innerHTML + all_div[l].dataset.point + "LP "
                    
                    div_trier.appendChild(img)
                    
                    div_trier.classList.add('rank')
                    img.classList.add('image-rank')
                    
                }

            }

        }

    }))
}

classement()
