function ComputeJoinPoint(s1,s2)
{
    var joinPoint = 0
    while(s1 <20000000 && s2< 20000000 && joinPoint < 20000000 && joinPoint==0)
    {
        s1Str = s1.toString()
        s2Str = s2.toString()
        s1Length = s1.toString().length
        s2Length = s2.toString().length
        var addToS1 = 0
        var addToS2 = 0
        
        //update s1
        for(i=0;i<s1Length;i++)
        {
            addToS1 = addToS1 + Number(s1Str[i])
        }
        s1 = s1 + addToS1
       

        //update s2
        for(i=0;i<s2Length;i++)
        {
            addToS2 = addToS2 + Number(s2Str[i])
        }
        s2 = s2 + addToS2

        if(s1 == s2)
        {
            joinPoint = s1
        }
        
    }

    return joinPoint
}

joinPoint = ComputeJoinPoint(471,480)
console.log("join point =  " + joinPoint)