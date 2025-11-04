function hitung() {
  // menampung nilai harga
  let harga = Number(document.getElementById("harga").value)
  
  // menampung nilai jumlah 
  let jumlah = Number(document.getElementById("jumlah").value)
  
  // menampung nilai diskon 
  let diskon = Number(document.getElementById("diskon").value)
  
// langkah 1: hitung subtotal
let subtotal = harga * jumlah 

//langkah 2: menghitung diskon
// langlah 3: menghitung pajak
// lanhkah 4: hitung total

// langkah 5: menampilkan hasil
document.getElementById("hasil").innerHTML = `
Subtotal: Rp ${subtotal} <br>
`
}