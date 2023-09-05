//window.addEventListener('load', OnWindowLoad);
 // function OnWindowLoad() {
// }
    
const kitap = {
    ad: "Fırtına",
    yazar: "Shakespeare",
    tarih: 1610,
}

const bookTable = `
    <table border>
        <tbody>
            <tr> 
                <td> Kitap </td>
                <td> ${kitap.ad} </td>
            </tr>
            <tr> 
                <td> Yazar </td>
                <td> ${kitap.yazar} </td>
            </tr>
            <tr> 
                <td> Tarih </td>
                <td> ${kitap.tarih} </td>
            </tr>
        </tbody>
    </table border>
`;
document.body.innerHTML = bookTable ;
