let over2 = document.querySelectorAll('.fenetre')


over2.forEach(fenetre => {
        fenetre.addEventListener('onmouseover', over)
});

function over(perso){
        console.log(perso)
        for( i = 0; i < over2.length ; i++){

                if(perso == over2[i].id){
                over2[i].classList.add("active1")
                
        }

        }
        

}
function out(perso){

        for( i = 0; i < over2.length ; i++){

                if(perso == over2.id){
                        over2[i].classList.remove("active1")
                }
        
        }
}
