describe("set of tests", function () {
  beforeAll(function () {
    var temp = '<div id="main_div"> <h1 id="title">THE CONVERTER</h1> <div id="div_one"> <input type="text" id="text_one" class="textbox"> <button type="button" onclick=con.numberToString() id="button-1" class="btn" value="convert to text"><font>Number to String</font></button> </div><div id="div_two"> <input type="text" id="text_two" class="textbox"> <button type="button" onclick=con.stringToNumber() id="button-1" class="btn"><font>String to Number</font></button> </div><div id="div_three"> <p id="result" style="width:400px;"></p></div></div>';
    document.body.insertAdjacentHTML("afterbegin", temp);
  });

describe("numberToString",function(){
it("",function(){
document.getElementById("text_one").value=100;
con.numberToString();    
expect(document.getElementById("result").innerHTML).toBe("one hundred");
});
});

describe("stringToNumber",function(){
it("",function(){
document.getElementById("text_two").value="one hundred";
con.stringToNumber();    
expect(document.getElementById("result").innerHTML).toBe('100');
});
});

describe("string_to_Number test", function () {
    it("", function () {
        expect(obj.string_to_number("one hundred")).toBe(100);
    });
    it("", function () {
        expect(obj.string_to_number("one")).toBe(1);
    });
    it("", function () {
        expect(obj.string_to_number("twenty one")).toBe(21);
    });
    it("", function () {
        expect(obj.string_to_number("eleven and")).toBe(11);
    });
    it("", function () {
        expect(obj.string_to_number("hundred")).toBe(100);
    });
    it("", function () {
        expect(obj.string_to_number("one thousand")).toBe(1000);
    });
    it("", function () {
        expect(obj.string_to_number("one thousand")).toBe(1000);
    });
    it("", function () {
        expect(obj.string_to_number("one million")).toBe(1000000);
    });
    it("", function () {
        expect(obj.string_to_number("one billion")).toBe(1000000000);
    });
    it("", function () {
        expect(obj.string_to_number("one trillion")).toBe(1000000000000);
    });
});

describe("number_to_string test", function () {
    it("", function () {
        expect(obj.number_to_string(100)).toBe("one hundred");
    });
    it("", function () {
        expect(obj.number_to_string("y")).toBe(undefined);
    });
    it("", function () {
        expect(obj.number_to_string("1")).toBe("one");
    });
    
});

describe("find num test", function () {
    it("", function () {
        expect((obj.findNum("there are nine trains")).toString()).toBe(' , ,nine, ');
    });
    it("", function () {
        expect((obj.findNum("there are nine and ten trains")).toString()).toBe(' , ,nine,and,ten, ');
    });
});

describe("convert_three test", function () {
    it("", function () {
        expect(obj.convert_three(0, 0, 1)).toBe("one ");
    });
    it("", function () {
        expect(obj.convert_three(1, 0, 1)).toBe("one hundred one ");
    });
    it("", function () {
        expect(obj.convert_three(1, 1, 1)).toBe("one hundred eleven ");
    });
    it("", function () {
        expect(obj.convert_three(1, 2, 1)).toBe("one hundred twenty one ");
    });
});

describe("toValues test",function(){
    it("should pass the test",function(){
        expect((obj.toValues(["nine"," ","ten"]).toString())).toBe("nine,ten");
    });  
});

describe("toNumbers test",function(){
    it("should pass the test",function(){
        expect((obj.toNumber(["nine"]).toString())).toBe('9');
    });  
});

describe("present test",function(){
    it("should pass the test",function(){
        expect(obj.present("twenty")).toBe(true);
    });  
    it("should pass the test",function(){
        expect(obj.present("thousand")).toBe(true);
    });
    it("should pass the test",function(){
        expect(obj.present("hundred")).toBe(true);
    });  
});
describe("replace test",function(){
    it("should pass the test",function(){
        expect(typeof(obj.replace("there are nine trains"))).toBe("string");
    });  
});

describe("replace test",function(){
    it("should pass the test",function(){
        expect(typeof(obj.replace_two("83468984jgfiqgfiuqwgdiuu"))).toBe("string");
    });  
});

describe("replace test",function(){
    it("should pass the test",function(){
        expect((obj.replace_another("the one the"))).toBe("the 1 the");
    });
    it("should pass the test",function(){
        expect((obj.replace_another("the one hundred the"))).toBe("the 100 the");
    });  
});

});

