let turkcedogru , turkceyanlis = 0;
let matematikdogru , matematikyanlis=0;
let sosyaldogru , sosyalyanlis=0;
let fendogru,fenyanlis=0;
let puan = 0;
let okulpuanı = 0;

let yenisatır ="\r \n";
let mesaj ="tyt puan hesaplama uygulamasına hoşgeldiniz" + yenisatır
+" 1-puan hesapla "+yenisatır
+"2.çıkış yap ";

let secim = prompt(mesaj)

switch(secim)
{
    case "1":


        okulpuanı = Number(prompt("okul puanınızı giriniz"));
        turkcedogru = Number(prompt("türkçe doğru sayısı"));
        turkceyanlis = Number(prompt("türkçe yanlış sayısı"));

        matematikdogru = Number(prompt("matematik doğru  sayısı"));
        matematikyanlis = Number(prompt("matematik yanlış sayısı"));

        sosyaldogru = Number(prompt("sosyal doğru saıyısı"));
        sosyalyanlis = Number(prompt("sosyal yanlış sayısı"));

        fendogru = Number(prompt("fen doğru sayısı"));
        fenyanlis = Number(prompt("fen yanlış sayısı"));

        
        let dogrusayisi = turkcedogru+matematikdogru+sosyaldogru+fendogru;
        let yanlissayisi = turkceyanlis+matematikyanlis+sosyalyanlis+fenyanlis;
        let kalanfogrusayisi = dogrusayisi - (yanlissayisi/4);
        puan = (kalanfogrusayisi*4 ) + 100 + okulpuanı;

        alert("tyt puanınız"+puan);

        break;

        case "1":
             alert("çıkış yapmak için tamam a basın");
        break;

        default:
            alert("lütfen geçerli bir değer giriniz");
        break;


}