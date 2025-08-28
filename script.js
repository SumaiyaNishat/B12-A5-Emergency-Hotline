// heart icon

function heartIcon(icon) {
     document.getElementById(icon).addEventListener('click',function(){
        document.getElementById(icon).style.color = 'red'
        const currentHeart = document.getElementById('count-title')
        let Count = parseInt(currentHeart.innerText);
         Count++ ;
         currentHeart.innerText = Count;

})
}
heartIcon('btn-icon')
heartIcon('btn-icon1')
heartIcon('btn-icon2')
heartIcon('btn-icon3')
heartIcon('btn-icon4')
heartIcon('btn-icon5')
heartIcon('btn-icon6')
heartIcon('btn-icon7')
heartIcon('btn-icon8')


// copy button 


function copyElement(id,number1){
    document.getElementById(id).addEventListener('click',function(){
    const countCopy = document.getElementById('copy-title');
     let currentCount = parseInt(countCopy.innerText);
     currentCount++ ;
     countCopy.innerText = currentCount;
     const number = document.getElementById(number1).innerText
        navigator.clipboard.writeText(number).then(() => {
            alert("Copied " + number)

    })
})
}
copyElement("btn-copy", "copy-number")
copyElement("btn-copy1", "copy-number1")
copyElement("btn-copy2", "copy-number2")
copyElement("btn-copy3", "copy-number3")
copyElement("btn-copy4", "copy-number4")
copyElement("btn-copy5", "copy-number5")
copyElement("btn-copy6", "copy-number6")
copyElement("btn-copy7", "copy-number7")
copyElement("btn-copy8", "copy-number8")


// Coin 

function coinReduce (id,emergency,number1){
    document.getElementById(id).addEventListener('click',function(){
        const reduceCoin = document.getElementById('reduce')

    if (reduceCoin.innerText < 20 ){
        alert("You don't have enough Coin")
        return ;
    }

    let currentCoin = parseInt(reduceCoin.innerText)
    currentCoin-= 20 ;

   reduceCoin.innerText = currentCoin ;

    const title = document.getElementById(emergency).innerText
    const number= document.getElementById(number1).innerText

    alert("📞 Calling" +" " + title +" "+ number)

    })
}
coinReduce("call","title", "copy-number")
coinReduce("call1","title1", "copy-number1")
coinReduce("call2" ,"title2", "copy-number2")
coinReduce("call3", "title3", "copy-number3")
coinReduce("call4", "title4", "copy-number4")
coinReduce("call5" ,"title5", "copy-number5")
coinReduce("call6" ,"title6", "copy-number6")
coinReduce("call7" ,"title7", "copy-number7")
coinReduce("call8" ,"title8", "copy-number8")
