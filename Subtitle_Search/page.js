
document.getElementById("sbutton").addEventListener("click",doSomething);


function doSomething(){
	var x=document.getElementById('word').value;
    var url="https://subscene.com/subtitles/title?q="+ x + "&l=";
	browser.tabs.create({url:url});
}

