// Cara membuat Object pada Javascript
// 1. Object Literal

let mahasiswa1 = {
    nama = 'ALFIN',
    energi = 10,
    makan = function(porsi){
        this.energi = this.energi + porsi;
        console.log(`Hello ${this.nama}, selamat makan`);
    }
}

let mahasiswa2 = {
    nama = 'PRIANDI',
    energi = 20,
    makan = function(porsi){
        this.energi = this.energi + porsi;
        console.log(`Hello ${this.nama}, selamat makan`);
    }
}

// 2. Function Declaration

// function Mahasiswa(nama, energi){
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energi = energi;

//     mahasiswa.makan = function(porsi){
//         this.energi += porsi;
//         console.log(`Hello ${this.nama}, selamat makan`);
//     }

//     mahasiswa.main = function(jam){
//         this.energi -= jam;
//         console.log(`Hello ${this.nama}, selamat makan`);
//     }

//     return mahasiswa;
// }

// let alfin = Mahasiswa(alfin, 10);
// let priandi = Mahasiswa(priandi, 20);

const methodMahasiswa = {
     makan: function(porsi){
        this.energi += porsi;
        console.log(`Hello ${this.nama}, selamat makan`);
    },

    main: function(jam){
        this.energi -= jam;
        console.log(`Hello ${this.nama}, selamat main`);
    },

    tidur: function(jam){
        this.energi -= jam * 2;
        console.log(`Hello ${this.nama}, selamat tidur`);
    }
}

function Mahasiswa(nama, energi){
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;
    mahasiswa.makan = methodMahasiswa.makan;
    mahasiswa.main = methodMahasiswa.main;
    mahasiswa.tidur = methodMahasiswa.tidur;

    return mahasiswa;
}

let alfin = Mahasiswa(alfin, 10);
let priandi = Mahasiswa(priandi, 20);

// 3. Constructor Function 
// keyword new

function Mahasiswa(nama, energi){
    this.nama = nama;
    this.energi = energi;

    this.makan = function(porsi){
        this.energi += porsi;
        console.log(`Hello ${this.nama}, selamat makan`);
    }

    this.main = function(jam){
        this.energi -= jam;
        console.log(`Hello ${this.nama}, selamat main`);
    }
}

let alfin = new Mahasiswa(alfin, 10);
let priandi = new Mahasiswa(priandi, 20);


// 4. Object.Create()

const methodMahasiswa = {
     makan: function(porsi){
        this.energi += porsi;
        console.log(`Hello ${this.nama}, selamat makan`);
    },

    main: function(jam){
        this.energi -= jam;
        console.log(`Hello ${this.nama}, selamat main`);
    },

    tidur: function(jam){
        this.energi -= jam * 2;
        console.log(`Hello ${this.nama}, selamat tidur`);
    }
}

function Mahasiswa(nama, energi){
    let mahasiswa = Object.create(methodMahasiswa);
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    return mahasiswa;
}

let alfin = Mahasiswa(alfin, 10);
let priandi = Mahasiswa(priandi, 20);

// 5. Prototype

function Mahasiswa(nama, energi){
    this.nama = nama;
    this.energi = energi;

    // pada saat menggunakan `this`, dibelakang layar javascript membuat sebuah Object = 
    // let this = Object.create(Mahasiswa.prototype);
    // return this

    Mahasiswa.prototype.makan = function(porsi){
     this.energi += porsi;
        console.log(`Hello ${this.nama}, selamat makan`);
    }

    Mahasiswa.prototype.main: function(jam){
        this.energi -= jam;
        console.log(`Hello ${this.nama}, selamat main`);
    }

    Mahasiswa.prototype.tidur: function(jam){
        this.energi -= jam * 2;
        console.log(`Hello ${this.nama}, selamat tidur`);
    }

}

let ALFIN = new Mahasiswa('ALFIN', 10);

// 6. Class Javascript

class Mahasiswa{
    constructor(nama, energi){
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi){
     this.energi += porsi;
        console.log(`Hello ${this.nama}, selamat makan`);
    }

    main(jam){
        this.energi -= jam;
        console.log(`Hello ${this.nama}, selamat main`);
    }

    tidur(jam){
        this.energi -= jam * 2;
        console.log(`Hello ${this.nama}, selamat tidur`);
    }
}

let ALFIN = new Mahasiswa('ALFIN', 10);
let PRIANDI = new Mahasiswa('PRIANDI', 20);

// Note :
// pada saat menuliskan >>> let angka = [];
// yang terjadi javascript membuatkan >>> 
//   let angka = new Array();
//      function Array() {
//      let this = Object.create(Array.prototype);
//      }

