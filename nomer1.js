console.log(" -------------------Nomer 1-------------------------")
function faktorisasi(num) {
  let hasil = 1;
  for (let i = num; i >= 1; i--) {
    hasil *= i;
  }
  return hasil;
}

console.log("Outputnya : ",faktorisasi(4)); // Output: 24
console.log("Outputnya : ",faktorisasi(8)); // Output: 40320

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


/* ------------------------------------------------------ Nomer 2 ----------------------------------------------*/
console.log(" -------------------Nomer 2-------------------------")
function pembalikan(abjad) {
    let huruf = '';
    for (let i = abjad.length - 1; i >= 0; i--) {
        huruf += abjad[i];
    }
    return huruf;
  }
  
  console.log("Outputnya : ",pembalikan("abcde")); // Outputnya nanti akan menjadi  "edcba"
 /* Loop for dimulai dengan menginisialisasi variabel i dengan nilai panjang string abjad dikurangi 1 (abjad.length - 1). Ini dilakukan agar loop dimulai pada indeks paling belakang pada string str. */



/* ------------------------------------------------------ Nomer 3 -----------------------------------------------*/
console.log(" -------------------Nomer 3-------------------------")
function printDigitValue(str) {
  let digits = str.replace(/[^0-9]/g, ''); // mengambil semua digit angka dari string
  
  // membuat array untuk menampung nilai posisi digit angka
  let positions = [1000000, 100000, 10000, 1000, 100, 10, 1]; 
  let result = '';
  
  for (let i = 0; i < positions.length; i++) {
    let value = Math.floor(digits / positions[i]); // menghitung nilai digit pada posisi tertentu
    
    // menambahkan nilai ke string hasil
    if (value > 0) {
      result += value * positions[i] + ' ';
    }
    
    digits -= value * positions[i]; // mengurangi digit pada posisi tertentu dari digit utama
  }
  
  console.log("Outputnya : ",result.trim()); // menghilangkan spasi ekstra di akhir string hasil
}

// Contoh penggunaan
printDigitValue('9.86-A5.321'); // output: 9865321 9000000 800000 60000 5000 300 20 1




/* ------------------------------------------------------ Nomer 4 -----------------------------------------------*/
console.log(" -------------------Nomer 4-------------------------")
let a = 3;
let b = 7;

a = a + b;
b = a - b;
a = a - b;

console.log("a =", a); // outputny adalah : a = 7
console.log("b =", b); // outputnya adalah : b = 3


/* ------------------------------------------------------ Nomer 5 -----------------------------------------------*/
console.log(" -------------------Nomer 5-------------------------")
function gantiAngka(num) {
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
  
console.log(gantiAngka(4)); // hasilnya akan empat
console.log(gantiAngka(20)); // hasilnya akan dua puluh
console.log(gantiAngka(39)); // hasilnya akan tiga puluh sembilan
console.log(gantiAngka(104)); // hasilnya akan silahkan masukkan bilangan 1-100



/* ------------------------------------------------ Nomer 6 -------------------------------------------------- */
console.log(" -------------------Nomer 6-------------------------")
let data = [1, 4, 7, 9, 12];
let low = 2;
let high = 15;
let hasilnya = [];

for (let i = 0; i < data.length; i++) {
  if (data[i] >= low && data[i] <= high) {
    hasilnya.push(data[i]);
  }
}

console.log("Outputnya : ",hasilnya); // Output: [4, 7, 9, 12]

/* ------------------------------------------------ Nomer 7 -------------------------------------------------- */
console.log(" -------------------Nomer 7-------------------------")
function filterRange(arr, low, high) {
  let result = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= low && arr[i] <= high) {
      result.push(arr[i]);
      count++;
    }
  }
  console.log("Outputnya : ",result);
  console.log(`Total angka: ${count}`);
}

const data1 = [1, 4, 7, 9, 12];
const low1 = 2;
const high1 = 15;

filterRange(data1, low1, high1);

/* ------------------------------------------------ Nomer 8 -------------------------------------------------- */
console.log(" -------------------Nomer 8-------------------------")
function cetakInput(n) {
  let output = "";
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      output += "EduWork";
    } else if (i % 3 === 0) {
      output += "Edu";
    } else if (i % 5 === 0) {
      output += "Work";
    } else {
      output += i;
    }
    output += "\n"; // 
  }
  console.log("Outputnya : ",output);
}

cetakInput(15);

/* ------------------------------------------------ Nomer 9 -------------------------------------------------- */
console.log(" -------------------Nomer 9-------------------------")
function rendahKeTinggi(arr) {
  let low2 = arr[0];
  let high2 = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < low2) {
      low2 = arr[i];
    } else if (arr[i] > high2) {
      high2 = arr[i];
    }
  }
  return { low2, high2 };
}

// contoh penggunaan
const arr = [4, 2, 6, 88, 3, 11];
const { low2, high2 } = rendahKeTinggi(arr);
console.log(`low2: ${low2}, high2: ${high2}`);


/* ------------------------------------------------ Nomer 10 -------------------------------------------------- */
console.log(" -------------------Nomer 10-------------------------")
function tahunKabisat(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}

let year = 2024;
if (tahunKabisat(year)) {
  console.log(year + " adalah tahun kabisat");
} else {
  console.log(year + " bukan tahun kabisat");
}
