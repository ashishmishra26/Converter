var convert={
input:'there are nine trains and four buses',
digit:["one","two","three","four","five","six","seven","eight","nine"],
ten:["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"],
hundred:["twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninty"],
};




function toNum(input){
    
    var len=input.length;
    console.log(len);
    var sp=input.split(" ");
    console.log(sp);
    console.log(sp.length);
    var num=[];
    for(var i=0;i<sp.length;i++)
        {
         if(convert.check.indexOf(sp[i])>-1)
            {
         console.log(sp[i]);
         num.push(convert.check.indexOf(sp[i])+1);
            }
        }
     console.log(num);

}


