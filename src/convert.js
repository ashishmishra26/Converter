var Convert = function () {
    this.one = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    this.digit = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
    this.tens = ["", "", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninty"];
    this.beyond = [" ", "thousand", "million", "billion", "trillion", "quadrillion", "quintillion", "sextillion", "septillion", "octillion", "nonillion", "decillion", "undecillion", "duodecillion", "tredecillion", "quattuordecillion"];
};
var obj = new Convert();

var con = {};

con.numberToString = function () {
    var number = document.getElementById("text_one").value;
    console.log(number);
    document.getElementById("result").innerHTML = obj.NtS(number);
};

con.stringToNumber = function () {
    var string = document.getElementById("text_two").value;
    document.getElementById("result").innerHTML = obj.StN(string);
};

con.replacer = function () {
    var string = document.getElementById("text_three").value;
    document.getElementById("result").innerHTML = obj.replace(string);
};
con.replacer_two = function () {
    var string = document.getElementById("text_four").value;
    document.getElementById("result").innerHTML = obj.replace_two(string);
}

Convert.prototype.string_to_number = function (word) {
    if (word === "") {
        return " ";
    }
    var word2 = word;
    var input = word2.toLowerCase();
    var sp = input.split(" ");
    //console.log(sp);
    var sum = 0,
        multiply = 1;
    for (var j = sp.length - 1; j >= 0;) {
        if (sp[j] == "and") {
            j--;
            continue;
        }
        if (this.one.indexOf(sp[j]) > -1) {
            sum += this.one.indexOf(sp[j]) * multiply;
            j--;
            continue;
        }
        if (this.digit.indexOf(sp[j]) > -1) {
            sum += (this.digit.indexOf(sp[j]) + 10) * multiply;
            j--;
            continue;
        }
        if (this.tens.indexOf(sp[j]) > -1) {
            sum += ((this.tens.indexOf(sp[j])) * 10) * multiply;
            j--;
            continue;
        }
        if (sp[j] === "hundred") {
            if (this.one.indexOf(sp[j - 1]) > -1) {
                sum += 100 * this.one.indexOf(sp[j - 1]) * multiply;
                j = j - 2;
            } else {
                sum += 100 * multiply;
                j--;
            }
            continue;
        }
        if (sp[j] === "thousand") {
            multiply = 1000;
            j--;
        }
        if (sp[j] === "million") {
            multiply = 1000000;
            j--;
        }
        if (sp[j] === "billion") {
            multiply = 1000000000;
            j--;
        }
        if (sp[j] === "trillion") {
            multiply = 1000000000000;
            j--;
        }
        if (sp[j] === "quadrillion") {
            multiply = 1000000000000000;
            j--;
        }
        if (sp[j] === "quintillion") {
            multiply = 1000000000000000000;
            j--;
        }
        if (sp[j] === "sextillion") {
            multiply = 1000000000000000000000;
            j--;
        }

    }
    return sum;

};

Convert.prototype.convert_three = function (hplace, tplace, oplace) {
    var string = "";
    if (hplace > 0) {
        string += this.one[hplace] + " hundred ";
    }
    if (tplace === 1) {
        string += this.digit[oplace] + " ";
    } else if (tplace > 1) {
        string += this.tens[tplace] + " ";
        string += this.one[oplace] + " ";
    } else {
        string += this.one[oplace] + " ";
    }
    return string;
};

Convert.prototype.number_to_string = function (number) {
    if (isNaN(number)) {
        return undefined;
    }
    if (number === "0") {
        return "zero";
    }
    var temp = number,
        digit_array = [];
    while (temp > 0) {
        digit_array.push(temp % 10);
        temp = temp / 10;
        temp = Math.floor(temp);
    }
    //console.log(digit_array);  
    for (var i = 0; i < (digit_array.length % 3); i++) {
        digit_array.push(0);
    }
    var text = [],
        position = 0;
    for (i = 2; i < digit_array.length; i += 3, position++) {
        var unit = this.convert_three(digit_array[i], digit_array[i - 1], digit_array[i - 2]);
        text.push(unit + " " + this.beyond[position]);
    }
    //console.log(text);
    var output = "";
    for (var k = text.length - 1; k >= 0; k--) {
        output += text[k] + " ";
    }
    return output.trim();
};

Convert.prototype.findNum = function (input) {
    var input2 = input;
    var statement = input2.toLowerCase();
    var splitted_string = this.splitter(statement);
    var output_array = [];
    //console.log(splitted_string);
    for (var i = 0; i < splitted_string.length; i++) {
        if (splitted_string[i] === "and") {
            if ((this.present(splitted_string[i - 1])) && (this.present(splitted_string[i + 1]))) {
                output_array.push("and");
            }
        } else if (this.present(splitted_string[i])) {
            output_array.push(splitted_string[i]);
        } else {
            output_array.push(" ");
        }
    }
    //console.log(output_array);
    return output_array;
};

Convert.prototype.findNum_replacer = function (input) {
    var input2 = input;
    var statement = input2.toLowerCase();
    var splitted_string = this.splitter(statement);
    var output_array = [];
    //console.log(splitted_string);
    for (var i = 0; i < splitted_string.length; i++) {
        if (this.present(splitted_string[i])) {
            output_array.push(splitted_string[i]);
        } else {
            output_array.push(" ");
        }
    }
    //console.log(output_array);
    return output_array;
};

Convert.prototype.present = function (string) {
    if (this.one.indexOf(string) > -1) {
        return true;
    } else if (this.digit.indexOf(string) > -1) {
        return true;
    } else if (this.tens.indexOf(string) > -1) {
        return true;
    } else if (this.beyond.indexOf(string) > -1) {
        return true;
    } else if (string === "hundred") {
        return true;
    } else {
        return false;
    }
};

Convert.prototype.toValues = function (numobj) {
    var array = [];
    console.log(numobj);
    for (var i = 0; i < numobj.length; i++) {
        if ((numobj[i] === " ") && (numobj[i - 1] != " ") && (i != 0) && (i != numobj.length - 1)) {
            array.push(" ");
        } else if (numobj[i] !== " ") {
            array.push(numobj[i]);
        }
    }

    console.log(array);
    console.log(typeof (array.join(" ")));

    var numeric_array = [],
        start_pos = 0;
    var temp = [];
    for (var j = 0; j < array.length;) {
        if (array[j] === " ") {
            console.log(start_pos, j);
            temp = [];
            temp = array.slice(start_pos, j);
            //console.log(temp.join(" "));
            numeric_array.push(temp.join(" "));
            start_pos = j + 1;
        }
        j++;
    }
    temp = array.slice(start_pos);
    //console.log(temp);
    numeric_array.push(temp.join(" "));
    return numeric_array;
};

Convert.prototype.toNumber = function (input) {
    var numbers = [];
    for (i = 0; i < input.length; i++) {
        numbers.push(this.string_to_number(input[i]).toString());
    }
    return numbers;
};

Convert.prototype.splitter = function (string) {
    var arr = string.split(" ");
    return arr;
};

Convert.prototype.replace = function (string) {
    var arr = this.findNum_replacer(string);
    var array = string.split(" ");
    var begin = 0,
        end = 0,
        lastbegin = 0,
        count = 0;
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === " ") {
            if (count > 0) {
                end = i - 1;
            }
            count = 0;
        } else if ((arr[i] !== " ") && (arr[i - 1] === " ")) {
            begin = i;
            count++;

        }
        console.log(begin, end);

        if (end >= begin && end !== 0 && begin !== 0 && (begin !== lastbegin)) {
            var s = arr.slice(begin, end + 1);
            var t = this.string_to_number(s.join(" "));
            console.log(t);
            array.splice(begin, ((end + 1) - begin), t);
            console.log(array);
            lastbegin = begin;
        }


    }
    var st = array.toString();
    var su = st.split(",");
    var sv = su.join(" ");
    return (sv);
};

Convert.prototype.StN = function (input) {
    var s = obj.findNum(input);
    var n = obj.toValues(s);
    var t = obj.toNumber(n);
    return t.join();
};



Convert.prototype.NtS = function (input) {
    var temp = input;
    var s = temp.split(" ");
    console.log(s);
    var t = [];
    for (var i = 0; i < s.length; i++) {
        if (!isNaN(parseInt(s[i]))) {
            t.push(s[i]);
        } else {
            t.push(" ");
        }
    }
    var u = [];
    for (var j = 0; j < t.length; j++) {
        if (t[j] !== " ") {
            u.push(obj.number_to_string(t[j]));
        }
    }
    return u.join();
};

Convert.prototype.replace_two = function (input) {
    var temp = input;
    var s = temp.split(" ");
    var string = temp.split(" ");
    console.log(s);
    var t = [];
    for (var i = 0; i < s.length; i++) {
        if (!isNaN(parseInt(s[i]))) {
            t.push(s[i]);
        } else {
            t.push(" ");
        }
    }

    for (var j = 0; j < t.length; j++) {
        if (t[j] !== " ") {
            string.splice(j, 1, obj.number_to_string(t[j]));

        }
    }

    return string.join(" ");

};

//console.log(obj.replace_two("there are 9 trains and 10 wathes"));