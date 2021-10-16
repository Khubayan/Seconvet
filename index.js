let number = /^[0-9]+$/

kosongState = () => {
    let alert = document.getElementsByClassName('alert')
    let year = new Date()
    alert[0].className += ' alert-dark text-center'
    document.getElementById('hasil').innerHTML = `&copy; ${year.getFullYear()} bloodywaybloodfallen.`
}

do {
    kosongState()
} while (document.getElementById('detik').length == 0)

cetak = () => {
    let detik = document.getElementById('detik').value
    let jam = Math.floor(detik / 3600)
    let sisaDetik = detik % 3600
    let menit = Math.floor(sisaDetik / 60)
    sisaDetik = Math.floor(sisaDetik % 60)

    if(isNaN(detik) && detik != '') {
        let panjangDetik = detik.length
        alert = document.getElementsByClassName('alert')
        alert[0].className = 'alert alert-danger'
         document.getElementById('hasil').innerText = `Input mengandung nilai NaN \"`
         for(i = 0; i < panjangDetik; i++) {
             if(isNaN(parseInt(detik[i]))) {
                //  console.log(detik[i])
                //  document.getElementById('hasil').innerText = `Input mengandung nilai NaN `
                document.getElementById('hasil').innerText += `${detik[i]}`
                if(i < panjangDetik - 1) {
                    document.getElementById('hasil').innerText += `, `
                }
             }
         }
         document.getElementById('hasil').innerText += '"!'
    }
   
    else if (detik.match(number)) {
        alert = document.getElementsByClassName('alert')
        alert[0].className = 'alert alert-primary'
        document.getElementById('hasil').innerText = `${detik} detik = ${jam} jam : ${(menit < 10 ? '0' + menit : menit)} menit : ${sisaDetik} detik`
    }
    else {
        kosongState()
    }

}

// kosong = () => {
//     console.log(detik.value)
// }

// console.log(`${input} detik = ${jam} jam : ${(menit < 10 ? '0' + menit : menit)} menit : ${sisaDetik} detik`)

// document.querySelector('h5').innerText = `${input} detik = ${jam} jam : ${(menit < 10 ? '0' + menit : menit)} menit : ${sisaDetik} detik`
