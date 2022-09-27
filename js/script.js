/*************************** POSTOS.HTML - MAP ***************************/
function mostraMap(id){
	if (id == 'mp-uir') {
		document.getElementById('mp-uir').style.display = 'block';
		document.getElementById('mp-apa').style.display = 'none';
		document.getElementById('mp-jeq').style.display = 'none';
	} 
	if (id == 'mp-apa') {
		document.getElementById('mp-uir').style.display = 'none';
		document.getElementById('mp-apa').style.display = 'block';
		document.getElementById('mp-jeq').style.display = 'none';
	}
	if (id == 'mp-jeq'){
		document.getElementById('mp-uir').style.display = 'none';
		document.getElementById('mp-apa').style.display = 'none';
		document.getElementById('mp-jeq').style.display = 'block';
	}
}