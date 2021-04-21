function gerar() {
    let num = document.getElementById('tnum')
    let res = document.getElementById('seltab')
    if (num.value == "") {
        alert('Não foi possível calcular. Insirar um número!')
    } else {
        let n = Number(num.value)
        res.innerHTML = ""
        for (let c = 1; c <= 10; c++) {
            let item = document.createElement ('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `${c}`
            res.appendChild(item)
        }
    }
}