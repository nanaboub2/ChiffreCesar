var key;
var TextClair;
var TextChiffre;
 
var setupEvents = function() {  //Fonction de déclaration et initialisation des variables
 
	key = document.getElementById("key");  
        TextClair = document.getElementById("TextClair");
	TextChiffre = document.getElementById("TextChiffre");
 
	var boutonCrypter = document.getElementById("boutonCrypter");
	var boutonDecrypter = document.getElementById("boutonDecrypter");
	boutonCrypter.addEventListener("click", actualiserMessage2Chiffrer);
	boutonDecrypter.addEventListener("click", actualiserMessage2Dechiffrer);
};
 
window.addEventListener("load", setupEvents);
 
var actualiserMessage2Chiffrer = function()  //Fonction d'affichage du résultat
{
	var nombrekey = parseFloat(key.value);
	var messageUn = TextClair.value;
    var onChiffre = chiffrer(messageUn, nombrekey);  //Chiffrement
	TextChiffre.innerHTML = onChiffre;          // Affichage
 };
 
var actualiserMessage2Dechiffrer = function()
{
 var nombrekey = parseFloat(key.value);
 var messageUn = TextClair.value;
 var onDechiffre = dechiffrer(messageUn, nombrekey);
 TextChiffre.innerHTML = onDechiffre;
};
 
 
 
var chiffrer = function(TextClair, key) {  // Fonction de chiffrement de césar
    var TextChiffre = "";
	var taille = TextClair.length;
    for(var i = 0; i < taille; i++) 
	{
        var messageUnCaractere = TextClair.charCodeAt(i);
        if(messageUnCaractere >= 97 && messageUnCaractere <= 122) 
		{
            TextChiffre += String.fromCharCode((messageUnCaractere - 97 + key) % 26 + 97);
        } 
		else if(messageUnCaractere >= 65 && messageUnCaractere <= 90) 
		{
            TextChiffre += String.fromCharCode((messageUnCaractere - 65 + key) % 26 + 65);
        } 
		else 
		{
            TextChiffre += String.fromCharCode(messageUnCaractere);
        }
    }
    return TextChiffre;
};
 
var dechiffrer = function(TextClair, key) { // Fonction de de chiffrement
    var TextChiffre = "";
	var taille = TextClair.length;
    for(var i = 0; i < taille; i++) 
	{
        var messageDeuxCaractere = TextClair.charCodeAt(i);
        if(messageDeuxCaractere >= 97 && messageDeuxCaractere <= 122) 
		{
            TextChiffre += String.fromCharCode((messageDeuxCaractere - 97 - key + 26) % 26 + 97);
        } 
		else if(messageDeuxCaractere >= 65 && messageDeuxCaractere <= 90) 
		{
            TextChiffre += String.fromCharCode((messageDeuxCaractere - 65 - key + 26) % 26 + 65);
        } 
		else 
		{
            TextChiffre += String.fromCharCode(messageDeuxCaractere);
        }
    }
    return TextChiffre;
};
