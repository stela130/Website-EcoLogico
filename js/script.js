/*************************** POSTOS.HTML - MAP ***************************/
function mostraMap(id){
	if (id == "mp-uir") {
		document.getElementById("mp-uir").style.display = "block";
		document.getElementById("mp-apa").style.display = "none";
		document.getElementById("mp-jeq").style.display = "none";
	} 
	if (id == "mp-apa") {
		document.getElementById("mp-uir").style.display = "none";
		document.getElementById("mp-apa").style.display = "block";
		document.getElementById("mp-jeq").style.display = "none";
	}
	if (id == "mp-jeq"){
		document.getElementById("mp-uir").style.display = "none";
		document.getElementById("mp-apa").style.display = "none";
		document.getElementById("mp-jeq").style.display = "block";
	}
}

/*************************** CADASTRO.HTML - VALIDA INPUT VAZIO ***************************/

/*VALIDAR SE OS IMPUT ESTÃO PREENCHIDOS E EMITE UM ALERTA E ALTERA O STYLE*/
function valCmp(){
	// verifica se o campo nome completo está vazio
	if (document.getElementById("txt-nm").value==""){
		alert ("Nome Completo não informado");
		document.getElementById("ico-nm").style.color = "#ff0000";
		document.getElementById("txt-nm").style.border = "4px solid #ff0000";
		document.getElementById("txt-nm").focus();
		return;
	}
	// verifica se o campo endereço completo está vazio
	if (document.getElementById("txt-end").value==""){
		alert ("Endereço não informado");
		document.getElementById("ico-end").style.color = "#ff0000";
		document.getElementById("txt-end").style.border = "4px solid #ff0000";
		document.getElementById("txt-end").focus();
		return;
	}
	// verifica se o campo telefone completo está vazio
	if (document.getElementById("txt-tel").value==""){
		alert ("Telefone não informado");
		document.getElementById("ico-tel").style.color = "#ff0000";
		document.getElementById("txt-tel").style.border = "4px solid #ff0000";
		document.getElementById("txt-tel").focus();
		return;
	}
	// verifica se o campo e-mail completo está vazio
	if (document.getElementById("txt-mail").value==""){
		alert ("E-mail não informado");
		document.getElementById("ico-mail").style.color = "#ff0000";
		document.getElementById("txt-mail").style.border = "4px solid #ff0000";
		document.getElementById("txt-mail").focus();
		return;
	}
	// verifica se o campo login completo está vazio
	if (document.getElementById("txt-lgn").value==""){
		alert ("Login não informado");
		document.getElementById("ico-lgn").style.color = "#ff0000";
		document.getElementById("txt-lgn").style.border = "4px solid #ff0000";
		document.getElementById("txt-lgn").focus();
		return;
	}
	// verifica se o campo senha completo está vazio
	if (document.getElementById("txt-pwd").value==""){
		alert ("Senha não informado");
		document.getElementById("ico-pwd").style.color = "#ff0000";
		document.getElementById("txt-pwd").style.border = "4px solid #ff0000";
		document.getElementById("txt-pwd").focus();
		return;
	}
	alert("Cadastro realizado com sucesso!");
	/*atualiza a página para limpar dos os campos*/
	window.location.reload();
}

/*SE O CAMPO FOR PREENCHIDO VOLTA O STYLE NORMAL*/
function rtnCmp(){
	//verificar se o campo nome completo não está vazio 
	if (document.getElementById("txt-nm").value!=""){
		document.getElementById("ico-nm").style.color = "#317f54";
		document.getElementById("txt-nm").style.border = "1px solid #317f54";
	}
	//verificar se o campo endereço não está vazio 
	if (document.getElementById("txt-end").value!=""){
		document.getElementById("ico-end").style.color = "#317f54";
		document.getElementById("txt-end").style.border = "1px solid #317f54";
	}	
	//verificar se o campo telefone não está vazio 
	if (document.getElementById("txt-tel").value!=""){
		document.getElementById("ico-tel").style.color = "#317f54";
		document.getElementById("txt-tel").style.border = "1px solid #317f54";
	}	
		//verificar se o campo e-mail não está vazio 
	if (document.getElementById("txt-mail").value!=""){
		document.getElementById("ico-mail").style.color = "#317f54";
		document.getElementById("txt-mail").style.border = "1px solid #317f54";
	}
	//verificar se o campo login não está vazio 
	if (document.getElementById("txt-lgn").value!=""){
		document.getElementById("ico-lgn").style.color = "#317f54";
		document.getElementById("txt-lgn").style.border = "1px solid #317f54";
	}
	//verificar se o campo senha não está vazio 
	if (document.getElementById("txt-pwd").value!=""){
		document.getElementById("ico-pwd").style.color = "#317f54";
		document.getElementById("txt-pwd").style.border = "1px solid #317f54";
	}
}



