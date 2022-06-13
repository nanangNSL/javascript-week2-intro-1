const biodata ={
    name: "Nanang Komarudin",
    age: 23,
    Hobbies: ["Ngoding", "belajar", "tidur"],
    isMaried: true,
    schoolist: [
        {
        "nameSchool": "PKBM BINA MANDIRI CENTER",
        "yearnIn": 2015,
        "yearnOut": 2018,
        "major": "IPA"
        },
        {
        "nameSchool": "SMPN2 KIARAPEDES",
        "yearnIn": 2012,
        "yearnOut": 2015,
        "major": null
        },
        {
        "nameSchool": "SDN1 PARAKAN GAROKGEK",
        "yearnIn": 2006,
        "yearnOut": 2012,
        "major" : null
        }
    ],
    skills: [
        {
        "Teknisi-ponsel" : "advance",
        "Reverse-enginer" : "beginer",
        "full-stack PERN" : "beginer"
        }
    ],
    interestingCoding: true
};
console.log(typeof biodata.name);
console.log(typeof biodata.age);
console.log(Array.isArray(biodata.Hobbies));
console.log(typeof biodata.isMaried);
console.log(Array.isArray(biodata.schoolist));
console.log(Array.isArray(biodata.skills));
console.log(typeof biodata.interestingCoding);
console.log(biodata);
