let items = document.querySelectorAll('.item')

var tab = [

    [0,1,2,3,4,5,6,7,8,9],
    [0,1,2,3,4,5,6,7,8,9],
    [0,1,2,3,4,5,6,7,8,9],
    [0,1,2,3,4,5,6,7,8,9],
    [0,1,2,3,4,5,6,7,8,9],
    [0,1,2,3,4,5,6,7,8,9],
    [0,1,2,3,4,5,6,7,8,9],
    [0,1,2,3,4,5,6,7,8,9],
    [0,1,2,3,4,5,6,7,8,9],
    [0,1,2,3,4,5,6,7,8,9],
]

var tab1 = []




function generate_tab(){

    var first_line = [0]

    for( j = 0; j < 9 ; j++){
        first_line.push(items[j])    
    }


    tab1.push(first_line)

    console.log(first_line)


    var count = 9
    
    for( i = 1; i < 10 ; i++ ) {


        var stock = []
        
        for( j = 0; j < 10 ; j++){


            stock.push(items[count + j])


        }

        tab1.push(stock)
        count += 10
    }

    console.log(tab1)

}

generate_tab()

items.forEach( item => {
    item.addEventListener('mouseover', overitem)
});

items.forEach( item => {
    item.addEventListener('mouseout', outitem)
});

function overitem(){

    if( this.dataset.col == 0){

        for(i = 0; i < tab.length ; i++){

            var el = tab1[this.dataset.row][i]
            el.classList.add('coloors')
        }

    }else if(this.dataset.row == 0 ){
    
        for(i = 0; i < tab.length ; i++){

            var el = tab1[i][this.dataset.col]
            el.classList.add('coloors')

        }

    }else{
    
        this.classList.add('coloors')

        tab1[this.dataset.row][0].classList.add('coloors')
        tab1[0][this.dataset.col].classList.add('coloors')

    }

}

function outitem() {

    
    items.forEach(item => {

        item.classList.remove('coloors')
    })

}