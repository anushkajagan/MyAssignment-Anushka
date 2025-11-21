//var vs let vs const
//const browserVersion = "chrome" //global scope

function getBrowserVersion()
{
     //var browserVersion = "chrome";
if (true)
{
    const browserVersion = "edge";
    if (browserVersion == "chrome")
    {
        console.log(`Browser version inside if block is ${browserVersion}`);
    }else if (browserVersion == "edge")
    {
        console.log(`Browser version inside if block is ${browserVersion}`);
    }
}
console.log(`Browser version outside if block is ${browserVersion}`);
}

//getBrowserVersion();

var a = 10;
var a = 20;

let a = 10;
let b = a;

//const a = 10;
//const a = 20;




