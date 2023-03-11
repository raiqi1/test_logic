function faktorisasi(num) {
  let hasil = 1;
  for (let i = num; i >= 1; i--) {
    hasil *= i;
  }
  return hasil;
}

console.log(faktorisasi(4)); // Output: 24
console.log(faktorisasi(8)); // Output: 40320

// Buatlah fungsi sebagai berikut :
// 	Apabila terdapat int = 4, maka outputnya 24 (prosesnya : 4*3*2*1)
// 	Apabila terdapat int = 8, maka outputnya 40320 (prosesnya : 8*7*6*5*4*3*2*1)

/* 
    Jawab                                               
*/
/*
Untuk menghitung faktorial dari angka 8, kita dapat menggunakan fungsi factorial yang sudah dibuat sebelumnya:


factorial(8);
Hasil output dari fungsi ini adalah 40320, yang merupakan hasil perkalian dari angka 8 dengan semua bilangan bulat positif yang kurang dari atau sama dengan 8. Prosesnya adalah sebagai berikut:

misalkan hasil = 1 
maka loop pertama akan 1 x 4  => 4, 4x3 => 12, 12x2 => 24, 24x1 => 24
misalkan hasil = 1
maka loop pertama akan 1 x 8 => 8, 8x7 => 56, 56x6 => 336, 336x5 => 1680, 1680x4 => 6720, 6720x3 => 20160, 20160x2 => 40320, 40320x1 => 40320
 */


/* ------------------------------------------------------ Nomer 2 ------------------------------------------------
Buatlah fungsi untuk reverse sebuah string
Apabila input = “abcde”, maka outputnya = “edcba”
Dilarang menggunakan function reverse, buatlah logika sendiri

 */

function pembalikan(abjad) {
    let huruf = '';
    for (let i = abjad.length - 1; i >= 0; i--) {
        huruf += abjad[i];
    }
    return huruf;
  }
  
  console.log(pembalikan("abcde")); // Outputnya nanti akan menjadi  "edcba"
 /* Loop for dimulai dengan menginisialisasi variabel i dengan nilai panjang string abjad dikurangi 1 (abjad.length - 1). Ini dilakukan agar loop dimulai pada indeks paling belakang pada string str. */



/* ------------------------------------------------------ Nomer 3 -----------------------------------------------*/
// bingung kak


/* ------------------------------------------------------ Nomer 4 -----------------------------------------------*/

let a = 3;
let b = 7;

a = a + b;
b = a - b;
a = a - b;

console.log("a =", a); // outputny adalah : a = 7
console.log("b =", b); // outputnya adalah : b = 3


/* ------------------------------------------------------ Nomer 5 -----------------------------------------------*/

function numberToWords(num) {
    if (num < 1 || num > 100) {
      return "silahkan masukkan bilangan 1-100";
    }
  
    const words = [
      "", "satu", "dua", "tiga", "empat", "lima", "enam", "tujuh", "delapan", "sembilan", "sepuluh", 
      "sebelas", "dua belas", "tiga belas", "empat belas", "lima belas", "enam belas", "tujuh belas", 
      "delapan belas", "sembilan belas"
    ];
    
    const tens = [
      "", "", "dua puluh", "tiga puluh", "empat puluh", "lima puluh", "enam puluh", "tujuh puluh", 
      "delapan puluh", "sembilan puluh"
    ];
  
    if (num < 20) {
      return words[num];
    } else if (num < 100) {
      return tens[Math.floor(num / 10)] + " " + words[num % 10];
    } else if (num === 100) {
      return "seratus";
    }
  }
  
console.log(numberToWords(4)); // hasilnya akan empat
console.log(numberToWords(20)); // hasilnya akan dua puluh
console.log(numberToWords(39)); // hasilnya akan tiga puluh sembilan
console.log(numberToWords(104)); // hasilnya akan silahkan masukkan bilangan 1-100



/* ------------------------------------------------ Nomer 6 -------------------------------------------------- */

let data = [1, 4, 7, 9, 12];
let low = 2;
let high = 15;
let hasilnya = [];

for (let i = 0; i < data.length; i++) {
  if (data[i] >= low && data[i] <= high) {
    hasilnya.push(data[i]);
  }
}

console.log(hasilnya); // Output: [4, 7, 9, 12]
