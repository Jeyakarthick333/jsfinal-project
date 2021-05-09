$(document).ready(function(){
    console.log("Document ready")
    
})

$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product",function(products){
    console.log(products)

   for(var i=0; i< products.length; i++){
    if(products[i].isAccessory == false)
    {
        var cardContainer = $("#clothing-cards")
    var card = $("<div>").attr({
        class:"cards"
        })
 
    $(cardContainer).append(card); 
    console.log(cardContainer)

    var anchor = document.createElement("a");
    anchor.href= "/product.html?p="+products[i].id;
    console.log(anchor)
    $(card).append(anchor)
 
    var productImage = $("<img>").attr({
        src:products[i].preview,
        class:"image"
    })
    $(anchor).append(productImage)

    var infoBox = $("<div>").attr("class","info-box")
    $(card).append(infoBox)
    var title= $("<h3>").html(products[i].name)
    $(title).attr({
        class:"element1"
    })
    $(infoBox).append(title)

    var brand = $("<p>").html(products[i].brand)
    $(brand).attr({
        class:"element2"
    })
    $(infoBox).append(brand)

    var price = $("<a>").attr("class","price")
    $(price).attr({
        class:"element3"
    })
    $(price).html("Rs " + products[i].price)
    $(infoBox).append(price)
   }

   else{
    var cardContainer = $("#accessories-cards")
    var card = $("<div>").attr({
        class:"cards"
        })
 
    $(cardContainer).append(card); 
    console.log(cardContainer)

    var anchor = document.createElement("a");
    anchor.href= "/product.html?p="+products[i].id;
    console.log(anchor)
    $(card).append(anchor)
 
    var productImage = $("<img>").attr({
        src:products[i].preview,
        class:"image"
    })
    $(anchor).append(productImage)

    var infoBox = $("<div>").attr("class","info-box")
    $(card).append(infoBox)
    var title= $("<h3>").html(products[i].name)
    $(title).attr({
        class:"element1"
    })
    $(infoBox).append(title)

    var brand = $("<p>").html(products[i].brand)
    $(brand).attr({
        class:"element2"
    })
    $(infoBox).append(brand)

    var price = $("<a>").attr("class","price")
    $(price).attr({
        class:"element3"
    })
    $(price).html("Rs " + products[i].price)
    $(infoBox).append(price)

   }
    }

    

    
})
