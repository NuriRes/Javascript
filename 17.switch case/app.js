let yeniSatir = "\r\n";
let metin = "1-Pazartesi"+yeniSatir
+"2-Salı"+yeniSatir 
+"3-Çarşamba"+yeniSatir 
+"4-Perşembe"+yeniSatir 
+"5-Cuma"+yeniSatir 
+"6-Cumartesi"+yeniSatir
+"7-Pazar" + yeniSatir
+"lütfen bir seçim yapınız";
let deger = prompt(metin); 
switch(deger)
{ case "1":
 console.log("Pazartesi Günü");
  break; 

  case "2":
 console.log("salı Günü");
  break; 

case "3":
 console.log("carşamba Günü");
  break; 

  case "4":
 console.log("Perşembe Günü");
  break; 

  case "5":
 console.log("cuma Günü");
  break; 

  case "6":
 console.log("cumartesi Günü");
  break; 

  case "7":
 console.log("pazar Günü");
  break; 


}