function verif() {
    var Name = document.getElementById('name').value;
    var Dat = document.getElementById('date').value;
    var Num = document.getElementById('number').value;
    var cvc = document.getElementById('cvc').value;

    if(Name.trim() === "" || Name.indexOf(" ") === -1 ){
        alert("Please verify your name");
        return false;
    }
    if(Dat.length !== 5 || Dat[2] !== '/' || Dat.trim() === ""){
        alert("Please verify your expiration date (MM/YY)");
        return false;
    }
    if(Num.length !== 19 || Num[4] !== '-' || Num[9] !== '-' || Num[14] !== '-'){
        alert("Please verify your card number (xxxx-xxxx-xxxx-xxxx)");
        return false;
    }
    if(isNaN(cvc) || cvc.length !== 3){
        alert("Please verify your CVC (3 digits)");
        return false;
    }

    return true; 
}
