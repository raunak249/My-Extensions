
document.getElementById("sbutton").addEventListener("click",doSomething);


function doSomething(){
	var x=document.getElementById('word').value;
    var url="http://www.dictionary.com/browse/"+x+"?s=t";
	browser.tabs.create({url:url});
}

