let number = /^[0-9]+$/

function kosongState() {
    let alert = document.getElementsByClassName('alert')
    let year = new Date()
    alert[0].className += ' alert-dark text-center'
    document.getElementById('hasil').innerHTML = `&copy; ${year.getFullYear()} bloodywaybloodfallen.`
}

do {
    kosongState()
} while (document.getElementById('detik').length == 0)

function cetak() {
    let detik = document.getElementById('detik').value
    let jam = Math.floor(detik / 3600)
    let sisaDetik = detik % 3600
    let menit = Math.floor(sisaDetik / 60)
    sisaDetik = Math.floor(sisaDetik % 60)

    if(isNaN(detik) && detik != '') {
        let panjangDetik = detik.length
        alert = document.getElementsByClassName('alert')
        alert[0].className = 'alert alert-danger'
         document.getElementById('hasil').innerText = `Input mengandung nilai bukan angka: `
         for(i = 0; i < panjangDetik; i++) {

            if(isNaN(detik[i]) && detik[i] != '.') {
                document.getElementById('hasil').innerHTML += `<span class='text-danger'><ins>${detik[i]}</ins></span>`
            } else {
                document.getElementById('hasil').innerHTML += `<span class='text-dark'>${detik[i]}</span>`
            }
         }
    } else if (detik.match(number) && !isNaN(detik)) {
        alert = document.getElementsByClassName('alert')
        alert[0].className = 'alert alert-primary'
        document.getElementById('hasil').innerText = `${detik} detik = ${jam} jam : ${(menit < 10 ? '0' + menit : menit)} menit : ${sisaDetik} detik`
    } else {
        kosongState()
    }
}
