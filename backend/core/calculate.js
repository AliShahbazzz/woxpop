function cal_projected(initial, factor, key, factor2) {
    let res = {}
    if (key == 'cpc' || key == 'advertising_spend') {
        let a = initial + (initial * factor2)
        let b = a + (a * factor2)
        let c = b + (b * factor2)
        res.q2 = parseFloat(a.toFixed(2))
        res.q3 = parseFloat(b.toFixed(2))
        res.q4 = parseFloat(c.toFixed(2))
        return res
    }
    let a = initial + (initial * factor)
    let b = a + (a * factor)
    let c = b + (b * factor)
    if (key == 'ctr') {
        res.q2 = parseFloat(a.toFixed(2))
        res.q3 = parseFloat(b.toFixed(2))
        res.q4 = parseFloat(c.toFixed(2))
        return res
    }
    res.q2 = Math.round(a)
    res.q3 = Math.round(b)
    res.q4 = Math.round(c)
    return res
}

function cal_potential(initial, factor1, key, factor2, factor3) {
    let res = {}
    if (key == 'cpc' || key == 'advertising_spend') {
        let a = initial + (initial * factor2)
        let b = a + (a * factor2)
        let c = b + (b * factor2)
        res.q2 = parseFloat(a.toFixed(2))
        res.q3 = parseFloat(b.toFixed(2))
        res.q4 = parseFloat(c.toFixed(2))
        return res
    }
    if (key == 'acos') {
        let a = initial + (initial * factor3)
        let b = a + (a * factor3)
        let c = b + (b * factor3)
        res.q2 = parseFloat(a.toFixed(2))
        res.q3 = parseFloat(b.toFixed(2))
        res.q4 = parseFloat(c.toFixed(2))
        return res
    }
    let a = initial + (initial * factor1)
    let b = a + (a * factor1)
    let c = b + (b * factor1)
    if (key == 'ctr') {
        res.q2 = parseFloat(a.toFixed(2))
        res.q3 = parseFloat(b.toFixed(2))
        res.q4 = parseFloat(c.toFixed(2))
        return res
    }
    res.q2 = Math.round(a)
    res.q3 = Math.round(b)
    res.q4 = Math.round(c)
    return res
}


function calculate(quarter) {
    let result = {}

    for (const [key, val] of Object.entries(quarter)) {
        if (quarter[key] != '') {
            if (key == 'cpc' || key == 'ctr') {
                calculated_projected = cal_projected(parseFloat(val), 0.1, key, 0.2)
            } else {
                calculated_projected = cal_projected(parseInt(val), 0.1, key, 0.2)
            }
            if (key == 'cpc' || key == 'ctr') {
                calculated_potential = cal_potential(parseFloat(val), 0.3, key, 0.1, -0.22)
            } else {
                calculated_potential = cal_potential(parseInt(val), 0.3, key, 0.1, -0.22)
            }
            let x = {}
            let projected = {
                Q2: calculated_projected.q2,
                Q3: calculated_projected.q3,
                Q4: calculated_projected.q4
            }

            let potential = {
                Q2: calculated_potential.q2,
                Q3: calculated_potential.q3,
                Q4: calculated_potential.q4
            }
            x.projected = projected
            x.potential = potential
            result[key] = x
        }
    }
    return result
}

module.exports = calculate