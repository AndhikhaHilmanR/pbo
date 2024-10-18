// Definisi antarmuka sebagai kelas abstrak
class PerangkatElektronikInterface {
    fungsi() {
        throw new Error("Metode 'fungsi()' harus diimplementasikan.");
    }
}

// Kelas yang mengimplementasikan antarmuka
class Tablet extends PerangkatElektronikInterface {
    fungsi() {
        console.log("Tablet digunakan untuk menonton video dan membaca e-book.");
    }
}

// Kelas yang mengimplementasikan antarmuka
class Smartphone extends PerangkatElektronikInterface {
    fungsi() {
        console.log("Smartphone digunakan untuk berkomunikasi dan bersosial.");
    }
}

// Penggunaan
const tablet = new Tablet();
tablet.fungsi(); // Output: Tablet digunakan untuk menonton video dan membaca e-book.

const smartphone = new Smartphone();
smartphone.fungsi(); // Output: Smartphone digunakan untuk berkomunikasi dan bersosial.
