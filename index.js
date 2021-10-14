

// let jam = Math.floor(detik / 3600)
// let sisaDetik = detik % 3600
// let menit = Math.floor(sisaDetik / 60)
// sisaDetik = sisaDetik % 60
let alert = document.getElementsByClassName('alert')
let year = new Date()
alert[0].className += ' alert-dark text-center'
document.getElementById('hasil').innerHTML = `&copy; ${year.getFullYear()} bloodywaybloodfallen.`

cetak = () => {
    let detik = document.getElementById('detik').value
    let jam = Math.floor(detik / 3600)
    let sisaDetik = detik % 3600
    let menit = Math.floor(sisaDetik / 60)
    sisaDetik = Math.floor(sisaDetik % 60)
    if(isNaN(detik)) {
        alert = document.getElementsByClassName('alert')
        alert[0].className = 'alert alert-danger'
         document.getElementById('hasil').innerText = `Input mengandung nilai NaN!`
         for(i = 0; i < detik.length; i++) {
             if(isNaN(parseInt(detik[i]))) {
                 console.log(detik[i])
                //  document.getElementById('hasil').innerText = `Input mengandung nilai NaN `
                document.getElementById('hasil').innerText += `${detik[i]}, `
             }
         }
    }
    else {
        alert = document.getElementsByClassName('alert')
        alert[0].className = 'alert alert-primary'
        document.getElementById('hasil').innerText = `${detik} detik = ${jam} jam : ${(menit < 10 ? '0' + menit : menit)} menit : ${sisaDetik} detik`
    }

}


// console.log(`${input} detik = ${jam} jam : ${(menit < 10 ? '0' + menit : menit)} menit : ${sisaDetik} detik`)

// document.querySelector('h5').innerText = `${input} detik = ${jam} jam : ${(menit < 10 ? '0' + menit : menit)} menit : ${sisaDetik} detik`
