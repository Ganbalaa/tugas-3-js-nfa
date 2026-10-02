// 1. Data Awal produk toko
let produkToko = [
   {id: 1, nama: "Laptop", harga: 7000000, stok: 5},
   {id: 2, nama: "Mouse", harga: 200000, stok: 10},
   {id: 3, nama: "Keyboard", harga: 350000, stok: 7}
];

// 2. tambah produk
function tambahProduk(nama, harga, stok) {
    let idBaru = produkToko.length > 0 ? produkToko[produkToko.length - 1].id + 1 : 1;
    
    let produkBaru = {
        id: idBaru,
        nama: nama,
        harga: harga,
        stok: stok
    };
    
    // input produk baru ke array produk Toko
    produkToko.push(produkBaru);
    console.log(`[SUKSES] Produk '${nama}' berhasil ditambahkan!`);
}

// 3. hapus produk berdasarkan ID
function hapusProduk(id) {
    let indeks = produkToko.findIndex(produk => produk.id === id);
    
    if (indeks !== -1) {
        let produkDihapus = produkToko.splice(indeks, 1);
        console.log(`[SUKSES] Produk '${produkDihapus[0].nama}' berhasil dihapus!`);
    } else {
        console.log(`[GAGAL] Produk dengan ID ${id} tidak ditemukan.`);
    }
}

// 4. menampilkan daftar produk
function tampilkanProduk() {
    console.log("\n=== DAFTAR PRODUK TOKO ===");
    produkToko.forEach(produk => {
        console.log(`${produk.id}.${produk.nama} - Rp${produk.harga.toLocaleString('id-ID')} (Stok:${produk.stok})`);
    });
    console.log("==========================\n");
}

// ==========================================
// TESTING
// ==========================================

console.log("Menampilkan produk awal:");
tampilkanProduk();

console.log("Menambahkan produk baru (Stand Laptop):");
tambahProduk("Stand Laptop", 150000, 3);
tampilkanProduk();

console.log("Menghapus produk dengan ID 2 (Mouse):");
hapusProduk(2);
tampilkanProduk();