
// textview
function insert(num){
	document.form.textarea.value = document.form.textarea.value + num;
}

// Fungsi Hitung
function equal(){
	var hasil = document.form.textarea.value;
	try{
	document.form.textarea.value = eval(hasil);
	}
	catch(err){
		document.form.textarea.value = "";
		alert("invalid")
	}
}

// Clean
function clean(){
	document.form.textarea.value = "";
}

// Hapus
function back(){
	var hasil = document.form.textarea.value;
	document.form.textarea.value = hasil.substring(0,hasil.length-1);
}
