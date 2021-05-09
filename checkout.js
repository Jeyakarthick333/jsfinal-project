$(document).ready(function(){
    console.log("code ready");
})

function cardCreation(product)
{
    
    var cardBody = $("<div>").attr("class","card-body")
      

    var imageContainer =$("<div>").attr("class","image-container")
    var productImage =$('<img>').attr
        ({
        class:"product-image",
        src:product.preview
        })

    var infoContainer =$("<div>").attr("class","info-container")
    var heading = $("<h4>").attr("class","product-title")
         $(heading).html(product.name)
    var productCount = $("<p>").attr("class", "product-count")
         $(productCount).html("X"+product.count)
    var price = $("<p>").attr("class", "price")
         $(price).html("Price Rs: ")
    var amount =$("<span>").attr("class","amount")
         $(price).html("Rs "+product.count * product.price)

    $(cardBody).append(imageContainer)
    $(imageContainer).append(productImage)
    $(cardBody).append(infoContainer)
    $(infoContainer).append(heading)
    $(infoContainer).append(productCount)
    $(infoContainer).append(price)
    $(price).append(amount)

    return cardBody
}

var productList = window.localStorage.getItem('product-List');
    productList = productList === null || productList === '' ? [] : productList;
    productList = productList.length > 0 ? JSON.parse(productList) : [];
    console.log(productList)


var grandTotal=0;
    {
        for(var i=0; i<productList.length;i++)
        {
           $("#card-container").append(cardCreation(productList[i])) 

            var totalForCurrentProduct = productList[i].count * productList[i].price

            grandTotal = grandTotal + totalForCurrentProduct;
            
        }
    }

   $("#total-iteam").html("Total iteam "+productList.length)

   $("#total-amount").html("Amount Rs ")
   var tamount = $("<span>").attr("id","ta")
   $("#total-amount").append(tamount)
   $(tamount).html(grandTotal)

    $("#place-order-btn").click(function(){
       
        var orderArray=[];
        for(var i = 0 ; i<productList.length; i++){
            var prodObj= {
                "id": productList[i].id,
                "brand": productList[i].brand,
                "name": productList[i].name,
                "price": productList[i].price,
                "preview": productList[i].preview,
                "isAccessory": productList[i].isAccessory
            }
            orderArray.push(prodObj)
        }
      var dataObj={
          amount: grandTotal,
          products: orderArray
      }
   
      $.post("https://60868825a3b9c200173b62a0.mockapi.io/Shoplane_data", dataObj, function(){
          alert("Order Placed /Successfully");
          localStorage.setItem('product-List', [])
          location.assign("./thankyou.html")
          
      })
        
    })