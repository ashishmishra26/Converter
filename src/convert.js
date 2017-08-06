var Convert = function(){
this.one=["","one","two","three","four","five","six","seven","eight","nine"];
this.digit=["ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"];
this.tens=["","","twenty","thirty","fourty","fifty","sixty","seventy","eighty","ninty"];
this.beyond=[" ","thousand","million","billion","Trillion","Quadrillion","Quintillion","Sextillion","Septillion","Octillion","Nonillion","Decillion","Undecillion","Duodecillion","Tredecillion","Quattuordecillion"];
};
var obj=new Convert();

function numberToString(){
   var number=document.getElementById("text_one").value;
    document.getElementById("result").innerHTML=obj.number_to_string(number);
}

function stringToNumber(){
   var string=document.getElementById("text_two").value;
       var arr=obj.findNum(string);
   document.getElementById("result").innerHTML=arr.join();
}

Convert.prototype.string_to_number = function(word){
    var word2=word;
    var input= word2.toLowerCase();
    var sp=input.split(" ");
    console.log(sp);
    var sum=0,multiply=1;
    for(var j=sp.length-1;j>=0;)
    {
        if(sp[j]=="and"){
            j--;
            continue;
        }
        if(this.one.indexOf(sp[j])>-1)
        {
          sum+=this.one.indexOf(sp[j])*multiply;
          j--;
          continue;
        }
        if(this.digit.indexOf(sp[j])>-1){
          sum+=(this.digit.indexOf(sp[j])+10)*multiply;
          j--;
          continue;
        }
        if(this.tens.indexOf(sp[j])>-1)
        {
          sum+=((this.tens.indexOf(sp[j]))*10)*multiply;
          j--;
          continue;
        }
     if(sp[j]==="hundred"){
           if(this.one.indexOf(sp[j-1])>-1){
            sum+=100*this.one.indexOf(sp[j-1])*multiply;
            j=j-2;
        }
        else{
            sum+=100*multiply;
            j--;
        }
        continue;
     }
     if(sp[j]==="thousand"){
         multiply=1000;
         j--;
     }
     if(sp[j]==="million"){
         multiply=1000000;
         j--;
     }
     if(sp[j]==="billion"){
         multiply=1000000000;
         j--;
     }
     if(sp[j]==="trillion"){
         multiply=1000000000000;
         j--;
     }
     if(sp[j]==="Quadrillion"){
         multiply=1000000000000000;
         j--;
     }            
       
    }
   return sum;
    
};

Convert.prototype.convert_three=function (hplace,tplace,oplace){
var string="";
if(hplace>0)
    {
    string+=this.one[hplace]+" hundred "+"and"+" ";    
    }
if(tplace===1)
    {
     string+=this.digit[oplace]+" ";
    }else if(tplace>1){
     string+=this.tens[tplace]+" ";
     string+=this.one[oplace]+" ";   
    }else{
     string+=this.one[oplace]+" ";   
    }
return string;
};

Convert.prototype.number_to_string=function(number){
var temp=number,digit_array=[];
while(temp>0)
    {
        digit_array.push(temp%10);
        temp=temp/10;
        temp=Math.floor(temp);
    }
//console.log(digit_array);  
for(var i=0;i<(digit_array.length%3);i++){
    digit_array.push(0);
}
var text=[],position=0;
for(i=2;i<digit_array.length;i+=3,position++)
    {
    var unit=this.convert_three(digit_array[i],digit_array[i-1],digit_array[i-2]);
    text.push(unit+" "+this.beyond[position]);
    }
//console.log(text);
var output=""; 
  for(var k=text.length-1;k>=0;k--)
    {
      output+=text[k]+" ";   
    }
return output.trim();
};

Convert.prototype.findNum=function(input){
var input2=input;
var statement=input2.toLowerCase();
var splitted_string=statement.split(" ");
var output_array=[];
console.log(splitted_string);
for(var i=0;i<splitted_string.length;i++)
    {
         if(splitted_string[i]==="and"){
               if((this.present(splitted_string[i-1]))&&(this.present(splitted_string[i+1]))){
                   output_array.push("and");     
               }
         }else if(this.present(splitted_string[i])){
         output_array.push(splitted_string[i]);  
         }else{
             output_array.push(" ");
         }
}
        //console.log(output_array);
       return this.toValues(output_array);
        
         //return output_array; 
};

Convert.prototype.present=function(string){
    if(this.one.indexOf(string)>-1){
        return true;
    }
    else if(this.digit.indexOf(string)>-1){
        return true;
    }
    else if(this.tens.indexOf(string)>-1){
        return true;
    }
    else if(this.beyond.indexOf(string)>-1){
        return true;
    }else if(string==="hundred"){
        return true;
    }else{
        return false;
    }

};

Convert.prototype.toValues=function(numobj){
    var array=[];
    console.log(numobj);
    for(var i=0;i<numobj.length;i++)
        {
        if((numobj[i]===" ")&&(numobj[i-1]!=" ")&&(i!=0)&&(i!=numobj.length-1))
            {
              array.push(" ");
            }else if(numobj[i]!==" ")
            {
            array.push(numobj[i]);
            } 
        }
        
    console.log(array);
    console.log(typeof(array.join(" ")));
    
    var numeric_array=[],start_pos=0; 
    var temp=[];
        for(var j=0;j<array.length;)
        {
          if(array[j]===" ")
            {
                console.log(start_pos,j);
                temp=[];
                temp=array.slice(start_pos,j);
                //console.log(temp.join(" "));
                numeric_array.push(temp.join(" "));
                start_pos=j+1;
            }
            
           j++;
        }
        temp=array.slice(start_pos);
        //console.log(temp);
        numeric_array.push(temp.join(" "));
        
     return this.toNumber(numeric_array);
       //console.log(numeric_array);
};

Convert.prototype.toNumber=function (input){
    var numbers=[];   
    for(i=0;i<input.length;i++)
        {
            numbers.push(this.string_to_number(input[i]));
        }
   return numbers;



};
//obj.findNum("there are nine hundred and two buses and five thousand trains");