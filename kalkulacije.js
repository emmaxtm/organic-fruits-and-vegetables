
   function rezultat(izbor){
    var br1=parseFloat(document.getElementById("br1").value);
    var br2=parseFloat(document.getElementById("br2").value);
    var k;
    var i=izbor;

    switch(i){
        case '1':
            k=br1+br2;
            break;
        case '2':
            k=br1-br2;
            break;
        case '3':
            k=br1*br2;
            break;
        case '4': 
            k=br1/br2;
            break;
        default:
            break;
    }
    document.getElementById("rez").value=k;
   }

