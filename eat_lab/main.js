// //不彈性
// $(function(){
//     $("input").on("click",function(){
//     // alert("賈霸沒?");
//     $("h1").text($("li").eq(Math.floor(Math.random()*3)).text());
//     });
//     });


let foodImages = [
    "https://storage.googleapis.com/www-cw-com-tw/article/202101/article-5ff76e12dff12.jpg",
    "https://tokyo-kitchen.icook.network/uploads/recipe/cover/156685/96a7420fa7879c00.jpg",
    "https://shopping.udn.com/blog/public/uploads/edImages/20210423062930967.jpg"
];

    $(function(){
        $("input").on("click",function(){
        // alert("賈霸沒?");
        var numberOfListItem = $("#choice li").length;
        var randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("img").attr("src",foodImages[randomChildNumber]);//20行 已經確定是0,1,2/且foodimages 矩陣已經固定了0,1,2
        $("h1").text($("#choice li").eq(randomChildNumber).text());
        
        });
        });

     
        
     

  