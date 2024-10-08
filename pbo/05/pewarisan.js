// Definisi kelas induk
class Mobil {
    constructor(namaMobil, kecepatanMobil) {
        this.namaMobil = namaMobil;
        this.kecepatanMobil = kecepatanMobil;
    }

    tampilkanInformasiMobil() {
        console.log(`Nama Mobil: ${this.namaMobil}, Kecepatan Mobil: ${this.kecepatanMobil} km/h`);
    }
}

// Definisi kelas turunan
class MobilBalap extends Mobil {
    constructor(namaMobil, kecepatanMobil, nomorSeriMobil) {
        super(namaMobil, kecepatanMobil);
        this.nomorSeriMobil = nomorSeriMobil;
    }

    tampilkanInformasiMobil() {
        super.tampilkanInformasiMobil(); // Memanggil metode dari kelas induk
        console.log(`Nomor Seri Mobil: ${this.nomorSeriMobil}`);
    }
}

class MobilKeluarga extends Mobil {
    constructor(namaMobil, kecepatanMobil, nomorSeriMobil) {
        super(namaMobil, kecepatanMobil);
        this.nomorSeriMobil = nomorSeriMobil;
    }

    tampilkanInformasiMobil() {
        super.tampilkanInformasiMobil(); // Memanggil metode dari kelas induk
        console.log(`Nomor Seri Mobil: ${this.nomorSeriMobil}`);
    }
}

// Menggunakan kelas dengan data yang telah ditentukan
const mobilBalap1 = new MobilBalap("Ferrari", 350, "B1234XYZ");
const mobilKeluarga1 = new MobilKeluarga("Toyota", 160, "K5678ABC");

// Menampilkan informasi mobil
mobilBalap1.tampilkanInformasiMobil();   // Output: Nama, Kecepatan, dan Nomor Seri Mobil untuk Mobil Balap
mobilKeluarga1.tampilkanInformasiMobil(); // Output: Nama, Kecepatan, dan Nomor Seri Mobil untuk Mobil Keluarga
