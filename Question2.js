function ExtractRent(info)
{
    var RegexParMois = /.\d+\s*(eur.*|€)\s*(\/\s*mois|par\s*mois)/i;
    var RegexParMois2 = /.loyer.*\d+.?(eur..|€)/i;
    var RegexParAn = /\d+.*(\/|par)\s*an.*/i;

    if(info.match(RegexParMois))
    {
        var subString = (RegexParMois.exec(info)[0])
        var price = subString.match(/(\d+)/)
        var totalPrice = price[0]*12
    }
    else if(info.match(RegexParMois2))
    {
        var subString = (RegexParMois2.exec(info)[0])
        var price = subString.match(/(\d+)/)
        var totalPrice = price[0]*12
    }
    else if(info.match(RegexParAn))
    {
        var subString = (RegexParAn.exec(info)[0])
        var totalPrice = subString.match(/(\d+)/)
        totalPrice = totalPrice[0]
    }
    return totalPrice
    
}

var info = "cet appartement au premier étage est actuellement loué 400 euros par mois"
var price = ExtractRent(info)
console.log(price)