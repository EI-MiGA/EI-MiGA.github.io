


$( document ).ready(function() {
    var arr = ['bg_eimiga.jpg'];

    var i = 0;
    $(".full-bg").css('background-image', 'url(../assets/images/' + arr[i] + ')');

    setInterval(function(){
        if(i == arr.length - 1){
            i = 0;
        }else{
            i++;
        }
        var img = 'url(../assets/images/'+arr[i]+')';
        $(".full-bg").css('background-image',img);

    }, 4000)

});



