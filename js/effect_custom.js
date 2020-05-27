function refrClock() {
	var d=new Date();
	var s=d.getSeconds();
	var m=d.getMinutes();
	var h=d.getHours();
	var day=d.getDay();
	var date=d.getDate();
	var month=d.getMonth();
	var year=d.getFullYear();
	var days=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
	var months=new Array("1","2","3","4","5","6","7","8","9","10","11","12"); var am_pm;
	if (s<10) {s="0" + s}
		if (m<10) {m="0" + m}
			if (h>12)
				{h-=12;AM_PM = "PM"}
			else {AM_PM="AM"}
				if (h<10) {h="0" + h}
	document.getElementById("clock").innerHTML=days[day] + ", " + date + "/" +months[month] + "/" + year + ". Now is "+ " [" + h + ":" + m + ":" + s + "] " + AM_PM; 
setTimeout("refrClock()",1000); 
} 
refrClock();

const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["HTML", "CSS", "Javascript", "Python", "Flutter"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

$(".skill-per").each(function() {
  var $this = $(this);
  var per = $this.attr("per");
  $this.css("width", per + "%");
  $({ animatedValue: 0 }).animate(
    { animatedValue: per },
    {
      duration: 1000,
      step: function() {
        $this.attr("per", Math.floor(this.animatedValue) + "%");
      },
      complete: function() {
        $this.attr("per", Math.floor(this.animatedValue) + "%");
      }
    }
  );
});

document.getElementById('assign').addEventListener("click", function() {
 alert("Assign!") 
});

document.getElementById('unassign').addEventListener("click", function() {
 alert("Unassign!") 
});