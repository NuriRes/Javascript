//Koşul yapıları


// let sayı1 = 22;
// let sayı2 ;

// if (sayı1>55) 
// {
// console.log("geçtiniz,Notunuz:"+ sayı1);    
    
// }
// else 
// {
// console.log("kaldınız,notunuz:"+sayı1);
// }

//! vize1 %30 vize2 %30 final%40

let vize1 = Number(prompt("vize 1 notunuzu giriniz"));
let vize2 = Number(prompt("vize 2 notunuzu giriniz"));
let final = Number(prompt("final notunuzu giriniz"));

let ortalama = (vize1*0.3) + (vize2*0.3) + (final*0.4);
document.write("sınav notlarınız:<br>")
document.writeln("vize1:"+vize1+"<br>");
document.writeln("vize2:"+vize2+"<br>");
document.writeln("final:"+final+"<br>");
document.writeln("genel ortalamanız:"+ortalama+"<br>")

if(ortalama>=55)
{
alert("sınavdan geçtiniz");
document.write("Sınavdan Geçtiniz");
}
else
{
alert("sınavdan kaldınız");
document.write("Sınavdan Kaldınız");
}