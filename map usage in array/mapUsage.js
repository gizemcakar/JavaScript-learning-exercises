// kullanıcı adları içerisinde orijinal adların kalmasını sağlamak:

const USERS = ["AYSE", "MehMet", "TugCe", "AkSEL"];

// userName içerisinde orijinal isim tutulsun.
// shortName içerisinde ilk harf büyük olsun.
// newName içinde ilk harf büyük olsun.
// {userName: "ayse", shortName: "A.", newName: "Ayse"} şeklinde objeler haline getirilecekler.


const NEW_USERS = USERS.map( user => user.toLowerCase() );
console.log(NEW_USERS)

// const USERS_OBJ = USERS.map( item => 
//     {

//     return {                                                // bir obje dönmesini istediğimiz için return yazdık.
//         userName: item,                                     // sadece {} içerisinde yazılmış olsaydı ne döneceğini
//         shortName: `${item[0]}.` ,                          // bazen algılayamıyor.
//         newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`
//             }

//     }
// )



// ya da aşağıdaki gibi RETURN OLMADAN SADECE PARANTEZ İÇERİSİNE ALARAK OBJEYİ BİRŞEY DÖNDÜRÜLEBİLİR.

const USERS_OBJ = USERS.map( item => 
    (                              // return kullanılmadığında burada olduğu gibi obje{} parantezde() yazılır.
        {   userName: item, 
            shortName: `${item[0]}.` , 
            newName: `${item[0].toUpperCase()}${item.slice(1).toLowerCase()}`          
        }
    )
)
console.log(USERS_OBJ)


// başka örnekler: 1)
const sayilar = [2, 3, 4, 5, 10]
const yeniArray = sayilar.map(deger => {
    return deger * 2
})
console.log(yeniArray)


// örnekler: 2) Maaş zam hesaplama; İşçilerin aldıkları maaşlara ait bir dizi olsun. 
// Maaşı 3000 TL'nin üzerinde olanlarınkine %15, altında olanlarınkine de %25 zam yapan bir array map oluşturalım:

const maaslar = [ 1100, 13000, 2500, 4500, 1500, 25000, 2000 ];
const yeniMaaslar = maaslar.map( (e) => {
    if(e > 3000)
        return e * 1.15;
    else
        return e * 1.25;
});
console.log( yeniMaaslar );



