// MEMBUAT JAWABAN PLAYER
var p = prompt('Pilih gunting/kertas/batu');
var hasil = '';

// MEMBUAT JAWABAN COMPUTER
var comp = Math.floor(Math.random() * 3) + 1;
// Reminder: menutup case selalu dengan break (please break)
switch(comp){
    case 1:
        comp = 'gunting';
        break;
    case 2:
        comp = 'kertas';
        break;
    case 3:
        comp = 'batu'
        break;
    default:
        alert("Somehow computer can't guess itself.")
};



// MEMBUAT ATURAN & PERBANDINGAN
if (p == 'gunting'){
    if (comp == 'kertas'){
        alert("Anda MENANG, komputer memilih " + comp + ", anda memilih " + p + ".");
        hasil = 'MENANG';
    }
    else if(comp == 'batu'){
        alert("Anda KALAH, komputer memilih " + comp + ", anda memilih " + p + ".");
        hasil = 'KALAH';
    }
    else{
        alert("Anda SERI, komputer memilih " + comp + ", anda memilih " + p + ".");
        hasil = 'SERI';
    }
}
else if (p == 'kertas'){
    if (comp == 'gunting'){
        alert("Anda KALAH, komputer memilih " + comp + ", anda memilih " + p + ".");
        hasil = 'KALAH';
    }
    else if(comp == 'batu'){
        alert("Anda MENANG, komputer memilih " + comp + ", anda memilih " + p + ".");
        hasil = 'MENANG';
    }
    else{
        alert("Anda SERI, komputer memilih " + comp + ", anda memilih " + p + ".");
        hasil = 'SERI';
    }
}
else if (p == 'batu'){
    if(comp == 'gunting'){
        alert("Anda MENANG, komputer memilih " + comp + ", anda memilih " + p + ".");
        hasil = 'MENANG';
    }
    else if(comp == 'kertas'){
        alert("Anda KALAH, komputer memilih " + comp + ", anda memilih " + p + ".");
        hasil = 'KALAH';
    }
    else{
        alert("Anda SERI, komputer memilih " + comp + ", anda memilih " + p + ".");
        hasil = 'SERI';
    }
}
else{
    alert("Tidak sesuai format");
    location.reload();
};



// TAMPILKAN
// Get Div Id game & create element h2 untuk tebakan user/computer
const game = document.getElementById('game');
// Element Guess user/computer
// Element pembatas

// Tampilkan jawaban user
const tebakan = document.createElement('h2');
const tUser = document.createTextNode(p);
tebakan.appendChild(tUser);
game.appendChild(tebakan);

// Tampilkan jawaban computer
const compGuessText = document.createElement('p');
const textComp = document.createTextNode('Tebakan computer : ');
compGuessText.appendChild(textComp);
game.appendChild(compGuessText);

const tebakanComp = document.createElement('h2')
const compGuess = document.createTextNode(comp);
tebakanComp.appendChild(compGuess);
game.appendChild(tebakanComp);

const br = document.createElement('br');
game.appendChild(br);

// Tampilkan Hasil
const hasilElement = document.createElement('p');
const hasilText = document.createTextNode('Anda ' + hasil+'!');
hasilElement.appendChild(hasilText);
hasilElement.style.color = 'red';
hasilElement.style.fontSize = '35px';
hasilElement.style.fontWeight = '700';
game.appendChild(hasilElement);



// NGULANG
var ulangi = confirm('Mau diulangi?');
if (ulangi == true){
    location.reload()
}
else{
    alert("Terima kasih!")
}