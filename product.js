$(document).ready(function(){
    console.log("Document ready")
    var productId = window.location.search.split("=")[1];
    
    $.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product/"+productId, function(productDetail){
        console.log(productDetail)
        targetCard(productDetail)
        
    })
    
})


function targetCard(currentObj )
{
    
    var mainContainer = $("#main-container")

var leftSide= $("<div>").attr("id","leftSide");
var imagePreview = $("<img>").attr({
    id:"img",
    
});



var rightSide= $("<div>").attr("id", "rightSide");
var title = $("<h1>").attr("id" , "title")
    $(title).html(currentObj.name);
var brand = $("<p>").attr("id" , "brand")
    $(brand).html(currentObj.brand);
var price = $("<p>").attr("id" , "price")
    $(price).html("Price Rs "+currentObj.price);
var descriptionHeading = $("<p>").attr("id" , "desciption-heading")
    $(descriptionHeading).html("Description");
var description = $("<p>").attr("id" , "description")
    $(description).html(currentObj.description);
var productPreview = $("<p>").attr("id" , "productPreview")
    $(productPreview).html("Preview");
var previewContainer = $("<div>").attr("id" , "preview-container")
    for(var j=0; j < currentObj.photos.length; j++)
    {
        
        $(previewContainer).append(smallImages(j, currentObj));
        
          
    }

    function smallImages(i, obj){
        var productImages= $("<img>").attr({
            class: "small-images",
            src: obj.photos[i]
            
            })
            if(i===0)
            {
                $(productImages).addClass("active")
                $(imagePreview).attr({
                    src:obj.photos[i]
                })
            }

            $(productImages).click(function(){
                $(".small-images").removeClass("active")
                $(productImages).addClass("active")
                $(imagePreview).attr({
                    src:obj.photos[i]
                })

            })

            
            return productImages
    
    }
var cartButton = $("<button>").attr("id","cart-button")
    $(cartButton).html("ADD TO CART")

    $(cartButton).click(function(){
        
      var productList = localStorage.getItem("product-List")
      productList= productList===null? [] : productList
      productList= productList.length>0?JSON.parse(productList):[]

      var foundPosAt = -1
      for(var i=0;i<productList.length;i++)
      {
          if(productList[i].id===currentObj.id)
          {
              foundPosAt=i
          }
      }

      if(foundPosAt>-1)
      {
          productList[foundPosAt].count = productList[foundPosAt].count + 1
          console.log(productList[foundPosAt.count])
          localStorage.setItem("product-List" , JSON.stringify(productList))
      }
      else{
          currentObj.count=1;
          console.log(currentObj.count)
          productList.push(currentObj)
          localStorage.setItem("product-List" , JSON.stringify(productList))
      }
      var totalCount=0
      for(var i=0;i<productList.length; i++)
      {
          totalCount = totalCount + productList[i].count;
          console.log(totalCount)
      }
      
      $("#cart-number").html(totalCount)
      
        
    })


$(mainContainer).append(leftSide);
   $(leftSide).append(imagePreview);

$(mainContainer).append(rightSide);
   $(rightSide).append(title);
   $(rightSide).append(brand);
   $(rightSide).append(price);
   $(rightSide).append(descriptionHeading);
   $(rightSide).append(description);
   $(rightSide).append(productPreview);
   $(rightSide).append(previewContainer);
        
   $(rightSide).append(cartButton);

}
