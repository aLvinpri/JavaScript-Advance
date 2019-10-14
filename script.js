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

function Mahasiswa(nama, energi){
    let mahasiswa = {};
    mahasiswa.nama = nama;
    mahasiswa.energi = energi;

    mahasiswa.makan = function(porsi){
        this.energi += porsi;
        console.log(`Hello ${this.nama}, selamat makan`);
    }

    mahasiswa.main = function(jam){
        this.energi -= jam;
        console.log(`Hello ${this.nama}, selamat makan`);
    }

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
        console.log(`Hello ${this.nama}, selamat makan`);
    }
}

let alfin = new Mahasiswa(alfin, 10);
let priandi = new Mahasiswa(priandi, 20);

