let yenisatir = "\r\n";
let bakiye = 1000;

let metin = "1-Bakiye Görüntüleme" + yenisatir
  + "2-Para Çekme" + yenisatir
  + "3-Para Yatırma" + yenisatir
  + "4-Çıkış" + yenisatir
  + "Lütfen bir değer seçiniz.";

let secim = prompt(metin);

switch (secim) {

  case "1":
    alert("Bakiyeniz: " + bakiye);
    break;

  case "2":
    let cekilecekTutar = Number(prompt("Çekmek istediğiniz tutarı giriniz"));
    if (cekilecekTutar <= bakiye) {
      bakiye = bakiye - cekilecekTutar;
      alert("Kalan bakiye: " + bakiye);
    } else {
      alert(
        "Bakiyenizden fazla para çekemezsiniz!" + yenisatir
        + "Bakiyeniz: " + bakiye + " " + "Çekilecek tutar: " + cekilecekTutar
      );
    }
    break;

  case "3":
    let yatirilicakTutar = Number(prompt("yatırılacak tutarı giriniz"))
    bakiye = bakiye + yatirilicakTutar
    alert("günceş bakiiyeniz :"+ bakiye)


  case "4":
    alert("Tekrar görüşmek üzere!");
    break;

  default:
    alert("Geçersiz seçim!");
}
