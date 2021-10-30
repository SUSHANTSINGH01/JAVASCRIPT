
	var a = 10;
    var b = 20;
    
    var linebreak = "\n";
    console.log(linebreak);
	console.log("a is : ",a)
    console.log(linebreak);
	console.log("b is : ",b)
	console.log(linebreak);

    result = (a == b);
	console.log("(a == b) = ",result);
	console.log(linebreak);
    
    result = (a < b);
	console.log("(a < b) = ",result);
    console.log(linebreak);

    result = (a > b);
	console.log("(a > b) = ",result);
	console.log(linebreak);
	
    result = (a != b);
    console.log("(a != b) = ",result);
	console.log(linebreak);
	
    result = (a >= b);
    console.log("(a >= b) = ",result);
	console.log(linebreak);
	
    result = (a <= b);
    console.log("(a <= b) = ",result);
	console.log(linebreak);
	
    result = (a & b);
    console.log("(a & b) = ",result);
    console.log(linebreak);
	
    result = (a | b);
    console.log("(a | b) = ",result);
	console.log(linebreak);

    result = (a ^ b);
	console.log("(a ^ b) = ",result);
	console.log(linebreak);
	
    
    result = (a << b);
    console.log("(a << b) = ",result);
	console.log(linebreak); 

    result = (~b);
    console.log("(~b) = ",result);
	console.log(linebreak);
	
    result = (a >> b);
    console.log("(a >> b) = ",result);
	console.log(linebreak);
	
	var c = 10;
	var d = "string";
	
    result = (typeof d == "string" ? "d is String" : "d is Numeric");
	console.log("Result = ",result);
	console.log(linebreak);
	
    result = (typeof c == "string" ? "c is String" : "c is Numeric");
	console.log("Result = ",result);
	console.log(linebreak);
