//ASAL SAYILAR 
function findPrime(...params) {
    for (let i = 0; i < params.length; ++i) {
        let asalMi = true
        for (let j = 2; j < params[i]/2; ++j) {
            if (params[i] % j == 0) {
                asalMi = false 
                break
            }            
        }
        if (asalMi) {
            console.log(params[i], " Asaldır")
        }
        else {
            console.log(params[i], "Asal değildir")
        } 
    }
}

findPrime(2,5,8,21,13)
findPrime(3,5)
findPrime(8,4,3,78,56,11)

console.log("**************************************")

// ARKADAŞ SAYILAR

function sayilar(sayi1,sayi2) {
    let toplam1 = 0
    let toplam2 = 0

    for(let i=1;i<sayi1;i++)
    {
        if(sayi1%i == 0)
        {
            toplam1 = toplam1 + i
        }
    }

    for(let j=0;j<sayi2;j++)
    {
        if(sayi2%j == 0)
        {
            toplam2 = toplam2 +j
        }
        
    }

    if(toplam1 == sayi2 && toplam2 == sayi1)
    {
        console.log("Arkadaş sayılardır")
    }
    else{
        console.log("Arkadaş sayı değiller")
    }
}

sayilar(220,284)

console.log("**************************************")

// MÜKEMMEL SAYILAR 


let perfectNumber = () => {
    let toplam = 0

for(let i=1;i<1000;i++)
{
    for(let j=0;j<i;j++)
    {
        if(i%j == 0)
        {
            toplam = toplam + j
            // console.log("Toplam : " + toplam )
        }
    }
    if(i == toplam)
    {
        console.log(i + " mükemmel sayidir")
    }
    toplam = 0
}
}

perfectNumber()

console.log("**************************************")
// 1000'e kadar olan asal sayılar

let asalNumbers = () => {
    let sayac = 0

    for(let i=2;i<1000;i++)
    {
        for(let j=1;j<=i;j++)
        {
            if(i%j == 0)
            {
                sayac++
            }
        }

        if(sayac >2)
    {
        console.log(i + " Asal değildir")
    }
    else{
        console.log(i + " Asaldır")
    }

    sayac = 0
    }
 
}

asalNumbers()








