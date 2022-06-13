const mateMatika = 78;
const bahasaIndonesia = 78;
const bahasaInggris = 90;
const ipA = 80;

const jumlahData = mateMatika + bahasaIndonesia + bahasaInggris + ipA;
const NilaiRataRata = jumlahData / 4;
console.log(`Rata-rata = ${NilaiRataRata}`);

if (NilaiRataRata > 100) {
  console.log("Nilai Limited");
} else if (NilaiRataRata >= 90) {
  console.log("Grade A");
} else if (NilaiRataRata >= 80) {
  console.log("Grade B");
} else if (NilaiRataRata >= 70) {
  console.log("Grade C");
} else if (NilaiRataRata >= 60) {
  console.log("Grade D");
} else {
  console.log("Grade E");
}
