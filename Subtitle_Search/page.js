

/*document.getElementById("sbutton").addEventListener("keypress",function(event){
  if (event.keyCode === 13) {
	alert('HI');
  }
});
*/
document.getElementById("sbutton").addEventListener("click",doSomething);
function doSomething(){
	var x=document.getElementById('word').value;
	if (document.getElementById('r1').checked) {
		var url="https://subscene.com/subtitles/title?q="+ x + "&l=";
	}
	else if(document.getElementById('r2').checked){
		var url="https://www.opensubtitles.org/en/search2/sublanguageid-all/moviename-"+ x;
	}
	else if(document.getElementById('r3').checked){
		var url="https://www.yifysubtitles.com/search?q=" + x;
	}
	browser.tabs.create({url:url});
}
