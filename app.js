//chapter Array
//q1
 var studentName=[];
//q3
 var arr=["anglee","arif","welcome"];
 console.log(arr);
//q4
 var newArr=[12,23,67,98];
 console.log(newArr);
//q5
 var bol=[true,false];
 console.log(bol);
//q6
 var arr1=["hello", "world", true, 13];
 console.log(arr1);
  //q7
 var arr2=["avaiable"];
 console.log(arr2);
//q8
var qulaification=["SSC", "HSC", "BCS","BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("qulaification <br> ");
document.write(qulaification[0]+"<br>");
document.write(qulaification[1]+"<br>");
document.write(qulaification[2]+"<br>");
document.write(qulaification[3]+"<br>");
document.write(qulaification[4]+"<br>");
document.write(qulaification[5]+"<br>");
document.write(qulaification[6]+"<br>");
document.write(qulaification[7]+"<br>");

//q9
 var namee=["Micheal","John","Tony"];
 var score=[320,230,480]
 var totalMarks=500;
 var percentage;
 percentage2=(score[0]*100/totalMarks);
 console.log("score of "+" "+namee[0]+" "+"is"+" "+score[0]+":"+ " "+percentage+"%");
 var percentage2;
 percentage=(score[1]*100/totalMarks);
 console.log("score of "+" "+namee[1]+" "+"is"+" "+score[1]+":"+ " " + percentage2 +"%");
 var percentage3;
 percentage3=(score[2]*100/totalMarks);
 console.log("score of "+" "+namee[2]+" "+"is"+" "+score[2]+":"+ " "+percentage3+"%");
//q10
  var color=["red","blue","yellow"];
 console.log(color);
  color.push(prompt("Enter a color"));
 console.log(color);
 //c
 color.unshift(prompt("Enter a color"), prompt("enter one more color"));
  console.log(color);
 //e
 color.pop();
 console.log(color);
//f
 var startingIn=+prompt("Enter the index of color");
  var endIn=prompt("Enter the color");
 color.splice(startingIn,0,endIn);
 console.log(color);
//g
 var targetElement=+prompt("Enter the index of color you want to delete");
 var numOfdel=+prompt("Enter the number of elements you want to delete");
 color.splice(targetElement,numOfdel);
 console.log(color);
//q10
 var marks=[320,230,480,120];
 marks.sort();
 console.log(marks);
//q11
 var city=["Karachi","Lahore","Islamabad","Quetta","Muree"];
 console.log(city);
 var selectedCities=city.slice(0,3);
 console.log(selectedCities);
 //q12
 var arr = ["This" ,  "is" , " my" ,  "cat"];
  var convert=arr.join();
  console.log(convert);
//q13
var devices=[];
var count=devices.push("keyboard","mouse","printer","monitor");
console.log(devices);
//q14
var devices=[];
var count=devices.push("keyboard","mouse","printer","monitor");
devices.reverse();
console.log(devices);


  
