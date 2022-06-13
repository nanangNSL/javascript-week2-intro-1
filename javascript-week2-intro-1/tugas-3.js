function printSegitiga(value) {
  if (!Number.isInteger(value) || value == undefined) {
    console.log("Masukan nomor");
  } else {
    let hasil = "",
      nilaiAwal,
      nilaiSatu;

    for (nilaiAwal = 1; nilaiAwal <= value; value--) {
      for (nilaiSatu = 1; nilaiSatu <= value; nilaiSatu++) {
        hasil += nilaiSatu;
      }
      hasil += "\n";
    }
    console.log(hasil);
  }
}

printSegitiga(5);
