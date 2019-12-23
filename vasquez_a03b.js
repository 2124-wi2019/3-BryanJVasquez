const firstName = "Bryan";
const lastName = "Vasquez";
const villainFirstName = "Zeldris";
const villainLastName = "Mael";
const companyName = "DarknessHome";
let annualSalary = 500000;
let laughString = "huaaa huaa hahaha\n";
let age = 23;
let weight = 145.23;
let counterStartValue = "5\n4\n3\n4\n1\n \nKABOOOOOOOOOOOOOOMMMMM!!!!";

console.log("Good evening, "+firstName+". "+"I'm glad to see you could join us.\nAccording to your files, you're "+age+" years old. hehe, that means next\n"+
"year you'll be "+ ++age +" years old and if I doubled your age, you'd be\n"+age*2+" years old!\n");

console.log("I found your file because your last name, '"+firstName.toLocaleUpperCase()+"' was all\ncapitalized on your folder. This is unusual because "+
"our files usually have\nlast names all lowercase. So I expected to see '"+firstName.toLocaleLowerCase()+"', which\nI did not see.\n");

console.log("Allow me to introduce myself. My name is "+villainFirstName+" "+villainLastName+"\n");

console.log("I'm the chief investigator at "+companyName+", I've been tasked with investigating you\ndue to a suspected case of fraud. "+
"It appears you embezzled 10% of your annual salary. As you\nknow, your annual salary is $"+annualSalary+" and 10% of your annual salary is $"+
annualSalary*0.10+",\nwhich is a sizeable amount for our company.\n")

console.log("I know your password. It was simple, it's just the first, third, and fourth letters of your first name:\n"+firstName.charAt(0)+" "+firstName.charAt(2)+" "+firstName.charAt(3)+"\n");

console.log("And the PIN code for your debit card was just the index value of the first, third, and fourth values of your last name:\n"+firstName.indexOf("B")+" "+firstName.indexOf("y")+" "+firstName.indexOf("a")+"\n");

console.log("Hmmm.... sometimes I ask my Google home, \"Does my last name begin with \'V\'\", and Google responds \""+firstName.startsWith("V")+"\"\n...and then I ask Google home, "+
"\"Does my last name end with \'n\'\", and Google responds \""+lastName.endsWith("n")+"\n");

console.log("And sometimes, I ask Google home if my weight is finite, and Google home responds \""+isFinite(weight)+"\", which makes me happy.\n"+
"...but when I ask if my first name is finite, Google home responds, \""+isFinite(firstName)+"\", and this makes me sad.\n");

console.log("Anyway, I've talked to much. Now, it's time for action. Somebody set up us the bomb. All your base are belong to us.\n");

console.log("Allow me to laugh five times: \n"+laughString.repeat(5)+"\n");

console.log("**Background voices**\nNow counting down:\n\n"+counterStartValue);



