var convert={
input:'two thousand ninty nine',
digit:["one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],
hundred:["twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninty",],
check:["one","two","three","four","five","six","seven","eight","nine","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],
};

function toNum(input){
    var len=input.length;
    var sp=input.split(" ");
    console.log(sp);
    var num_digit=[];
    for(var i=0;i<sp.length;i++)
        {
         if(convert.digit.indexOf(sp[i])>-1)
            {
         //console.log(sp[i]);
         num_digit.push(convert.digit.indexOf(sp[i])+1);
            }
         if(convert.hundred.indexOf(sp[i])>-1)
            {
         //console.log(sp[i]);
         num_digit.push((convert.hundred.indexOf(sp[i])+2)*10);
            }
        if(sp[i]==="hundred")
            {
         num_digit.push(100);
            }
        if(sp[i]==="thousand")
            {
         num_digit.push(1000);       
            }  
       
          
        }
    var sum=0,number=1,multiply=1;
    for(var j=num_digit.length-1;j>=0;j--)
    {
        number=1;
        multiply=1;
      if(convert.check.indexOf(num_digit[j])>-1)
        {
         number=num_digit[j];
        }else{
            multiply=num_digit[j];
        }
        
        sum+=multiply*number;
    } 
     console.log(num_digit);
     console.log(sum);
    
}


