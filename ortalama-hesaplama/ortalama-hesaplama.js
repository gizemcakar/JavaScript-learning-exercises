var ogrenciVize = "50";
var ogrenciFinal = "65";
var ogrenciOrtalama = (ogrenciVize*0.3) + (ogrenciFinal*0.7);

function ogrenciOrtalamasi(){
    if(ogrenciOrtalama >= 0 && ogrenciOrtalama <=30){
        document.write("Not ortalamaniz: " + ogrenciOrtalama + " FF - Kaldiniz.");
        alert("Not ortalamaniz: " + ogrenciOrtalama + " FF - Kaldiniz.");
    }
    else if(ogrenciOrtalama >=31 && ogrenciOrtalama <=49){
        document.write("Not ortalamaniz: " + ogrenciOrtalama + " DC - Kosullu Gectiniz.");
        alert("Not ortalamaniz: " + ogrenciOrtalama + " DC - Kosullu Gectiniz.");
    }
    else if(ogrenciOrtalama >=50 && ogrenciOrtalama<=84){
        document.write("Not ortalamaniz: " + ogrenciOrtalama + " CC - Gectiniz.");
        alert("Not ortalamaniz: " + ogrenciOrtalama + " CC - Gectiniz.");
    }
    else if(ogrenciOrtalama >=85 && ogrenciOrtalama <= 100){
        document.write("Not ortalamaniz: " + ogrenciOrtalama + " AA - Basarili Gectiniz.");
        alert("Not ortalamaniz: " + ogrenciOrtalama + " AA - Basarili Gectiniz.");
    }
}

ogrenciOrtalamasi();