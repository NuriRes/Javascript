let ad =prompt("İsminizi giriniz :");

let tckn = prompt("TCKN giriniz: ");

kontrolEt(ad,tckn);

function kontrolEt (ad, tckn){
if(ad!="")
{
if(tckn.length ==11)
{
document.write("İsim ve tckn problemsiz girildi");
}else
{
document.write("Lütfen tc nizi 11 karakter olarak giriniz")
}
}else
{
document.write("Lütfen isim alanını boş bırakmayın!!!");
}
}