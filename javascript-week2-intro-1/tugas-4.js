//  JAWABAN 4 YANG a
const data = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
};
const dataBaru = { ...data };
dataBaru.name = "Nanang Komarudin";
dataBaru.email = "nanangkomarudin2015@gmail.com";
// Jawaban A
const dataHobie = { ...dataBaru, hobbie: "Ngoding dan Ngopi" };
console.log(dataHobie);
// JAWABAN B
const {
  address: { street },
  address: { city },
} = dataHobie;
console.log(street);
console.log(city);
