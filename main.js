let correctword;
let isTrue;

function xarliano(){
    isTrue = true;
    let setwordnorm = document.getElementById("translate").value;
    let setword = setwordnorm.toLowerCase();
    let correctword = undefined;

    if(setword == "bee"){ // A section
        correctword = "abelo";
    }else if(setword == "age"){
        correctword = "ac";
    }else if(setword == "aid" || setword == "help"){
        correctword = "ad";
    }else if(setword == "add" || setword == "addition"){
        correctword = "adis";
    }else if(setword == "flight" || setword == "air"){
        correctword = "aer";
    }else if(setword == "consider"){
        correctword = "akord";
    }else if(setword == "water" || setword == "sea"){
        correctword = "agu";
    }else if(setword == "to water"){
        correctword = "aoir";
    }else if(setword == "at" || setword == "in"){
        correctword = "al(u im)"
    }else if(setword == "agreement" || setword == "permission" || setword == "allow"){
        correctword = "aksept";
    }else if(setword == "height" || setword == "elevation" || setword == "rise"){
        correctword = "alt";
    }else if(setword == "doing" || setword == "verb" || setword == "action" ){
        correctword = "akxin";
    }else if(setword == "friend" || setword == "love"){
        correctword = "am";
    }else if(setword == "year"){
        correctword = "an";
    }else if(setword == "after"){
        correctword = "apred";
    }else if(setword == "to be late"){
        correctword = "aprcir";
    }else if(setword == "late"){
        correctword = "apri";
    }else if(setword == "teach" || setword == "inform"){
        correctword = "apren";
    }else if(setword == "forest" || setword == "fauna" || setword == "tree"){
        correctword = "abro";
    }else if(setword == "stop" || setword == "pause" || setword == "still"){
        correctword = "arest";
    }else if(setword == "eagle" || setword == "mighty"){
        correctword = "arjol";
    }else if(setword == "sit" || setword == "seat"){
        correctword = "asej";
    }else if(setword == "ear" || setword == "listen" || setword == "hear"){
        correctword = "audi";
    }else if(setword == "fool" || setword == "idiot"){ // B section
        correctword = "baquen";
    }else if(setword == "blue"){
        correctword = "blu";
    }else if(setword == "arm" || setword == "wing"){
        correctword = "bru";
    }else if(setword == "paper" || setword == "note" || setword == "sheet"){
        correctword = "bumag";
    }else if(setword == "person" || setword == "human" || setword == "culture"){ // C section
        correctword = "can";
    }else if(setword == "hold" || setword == "press"){
        correctword = "cem";
    }else if(setword == "marriage"){
        correctword = "cen";
    }else if(setword =="gender" || setword == "sex"){
        correctword = "cendr";
    }else if(setword == "generation" || setword == "kin"){
        correctword = "cenerasi";
    }else if(setword == "press" || setword == "button"){
        correctword = "cimat"
    }else if(setword == "fix" || setword == "repair"){
        correctword = "cini";
    }else if(setword == "yes" || setword == "affirmative"){ // D section
        correctword = "da";
    }else if(setword == "length" || setword == "distance" || setword == "far"){
        correctword = "dal";
    }else if(setword == "of"){
        correctword = "de";
    }else if(setword == "again"){
        correctword = "deca";
    }else if(setword == "repeat"){
        correctword = "decir";
    }else if(setword == "hold" || setword == "keep" || setword == "heirloom"){
        correctword = "derc";
    }else if(setword == "hate" || setword == "despise"){
        correctword = "despis";
    }else if(setword == "god" || setword == "deity"){
        correctword = "deu";
    }else if(setword == "praise" || setword == "pray"){
        correctword = "deir";
    }else if(setword == "talk"){
        correctword = "di";
    }else if(setword == "direct" || setword == "exact"){
        correctword = "direkt";
    }else if(setword == "division" || setword == "segregation" || setword == "seperation"){
        correctword = "divis";
    }else if(setword == "before"){
        correctword = "do";
    }else if(setword == "to be early"){
        correctword = "docir";
    }else if(setword == "sweet"){
        correctword = "doc";
    }else if(setword == "sweeten"){
        correctword = "docir";
    }else if(setword == "home" || setword == "house" || setword == "rest" || setword == "dormitory"){
        correctword = "dom";
    }else if(setword == "give" || setword == "gift"){
        correctword = "donat";
    }else if(setword == "must" || setword == "mission"){
        correctword = "dos";
    }else if(setword == "defend" || setword == "defense" || setword == "protect"){
        correctword = "defend";
    }else if(setword == "right"){
        correctword = "du";
    }else if(setword == "think" || setword == "ponder" || setword == "wonder" || setword == "intrest"){
        correctword = "dumaj";
    }else if(setword == "have" || setword == "belonging"){ // E section
        correctword = "e";
    }else if(setword == "equal" || setword == "same"){
        correctword = "egal";
    }else if(setword == "elderly" || setword == "old"){
        correctword = "eld";
    }else if(setword == "enter" || setword == "entrance"){
        correctword = "entri";
    }else if(setword == "soul" || setword == "essence" || setword == "life"){
        correctword = "espirit";
    }else if(setword == "be" || setword == "exist"){
        correctword = "est";
    }else if(setword == "go" || setword == "travel"){
        correctword = "et";
    }else if(setword == "state" || setword == "country"){
        correctword = "etat";
    }else if(setword == "strange" || setword == "foreign"){
        correctword = "etran";
    }else if(setword == "extreme" || setword == "serious"){
        correctword = "extrem";
    }else if(setword == "fog " || setword == "cloud" || setword == "mystery"){ // F section
        correctword = "fa";
    }else if(setword == "conceal" || setword == "hide"){
        correctword = "fair"; 
    }else if(setword == "woman" || setword == "feminine"){
        correctword = "fam";
    }else if(setword == "way" || setword == "way of things" || setword == "order" || setword == "government"){
        correctword = "fason";
    }else if(setword == "end" || setword == "finish" || setword == "border"){
        correctword = "fen";
    }else if(setword == "make" || setword == "do"){
        correctword = "fer";
    }else if(setword == "flower" || setword == "flora" || setword == "bloom"){
        correctword = "flor";
    }else if(setword == "formality" || setword == "formal" || setword == "respect" || setword == "nice"){
        correctword = "formal";
    }else if(setword == "power" || setword == "force"){
        correctword = "fors";
    }else if(setword == "might" || setword == "strength"){
        correctword = "forto";
    }else if(setword == "fruit"){
        correctword = "frut";
    }else if(setword == "to be good"){
        correctword = "frutir";
    }else if(setword == "future"){
        correctword = "futuro";
    }else if(setword == "anger" || setword == "fire"){
        correctword = "fuoro";
    }else if(setword == "guarantee" || setword == "promise"){ // G section
        correctword = "garant";
    }else if(setword == "chart" || setword == "graph"){
        correctword = "gid";
    }else if(setword == "global" || setword == "world"){
        correctword = "global";
    }else if(setword == "grain"|| setword == "seed"){
        correctword = "grajn";
    }else if(setword == "grand" || setword == "great" || setword == "big"){
        correctword = "grand";
    }else if(setword == "grey"){
        correctword = "grau";
    }else if(setword == "big" || setword == "fat"){
        correctword = "gros";
    }else if(setword == "group" || setword == "ministry" || setword == "collection"){
        correctword = "grup";
    }else if(setword == "idea"){ // I section
        correctword = "ide";
    }else if(setword == "smart" || setword == "intelligent" || setword == "intelligence"){
        correctword = "inteligent";
    }else if(setword == "game" || setword == "play"){
        correctword = "igr";
    }else if(setword == "in" || setword == "at"){
        correctword = "im(u al)";
    }else if(setword == "child" || setword == "infant" || setword == "juvenile"){
        correctword = "infent";
    }else if(setword == "incarcerate" || setword == "slave" || setword == "prisoner"){
        correctword = "inkarserad";
    }else if(setword == "find" || setword == "search" || setword == "locate"){
        correctword = "iskir";
    }else if(setword == "east"){
        correctword = "ist";
    }else if(setword == "history" || setword == "story"){
        correctword = "istori";
    }else if(setword == "describe"){
        correctword = "kac"; // K section
    }else if(setword == "dog"){
        correctword = "kan";
    }else if(setword == "bark"){
        correctword = "kanir(u koc d'arbom)";
    }else if(setword == "skin" || setword == "peel"){
        correctword = "koc";
    }else if(setword == "start" || setword == "commence" || setword == "begin"){
        correctword = "komens";
    }else if(setword == "compassion" || setword == "pity" || setword == "empathy"){
        correctword = "kompax";
    }else if(setword == "happy" || setword == "satisfy"){
        correctword = "kontent";
    }else if(setword == "rope" || setword == "string"){
        correctword = "kord";
    }else if(setword == "cow" || setword == "livestock"){
        correctword = "korv";
    }else if(setword == "body" || setword == "corpse"){
        correctword = "korp";
    }else if(setword == "cream" || setword == "ice cream"){
        correctword = "kremo";
    }else if(setword == "surround" || setword == "circle"){
        correctword = "krug";
    }else if(setword == "labour" || setword == "hardship" || setword == "diligence" || setword == "effort"){ // L section
        correctword = "labor";
    }else if(setword == "liberty" || setword == "freedom"){
        correctword = "libert";
    }else if(setword == "language" || setword == "tongue"){
        correctword = "lingvem";
    }else if(setword == "the"){
        correctword = "lo";
    }else if(setword == "place" || setword == "area"){
        correctword = "loci";
    }else if(setword == "put"){
        correctword = "locir";
    }else if(setword == "here" || setword == "present"){
        correctword = "lom";
    }else if(setword == "be present"){
        correctword = "lonir";
    }else if(setword == "spoon"){
        correctword = "lox";
    }else if(setword == "law"){
        correctword = "lu";
    }else if(setword == "sale" || setword == "sell"){ // M section
        correctword = "macas";
    }else if(setword == "butter" || setword == "oil"){
        correctword = "maxl";
    }else if(setword == "hand" || setword == "grab"){
        correctword = "manj";
    }else if(setword == "big"){
        correctword = "meg";
    }else if(setword == "monarch" || setword == "king" || setword == "queen"){
        correctword = "melk";
    }else if(setword == "same" || setword == "both"){
        correctword = "mem";
    }else if(setword == "mercy"){
        correctword = "mers";
    }else if(setword == "small"){
        correctword = "min";
    }else if(setword == "word"){
        correctword = "mot";
    }else if(setword == "death"){
        correctword = "mord";
    }else if(setword == "many" || setword == "plurality"){
        correctword = "mult";
    }else if(setword == "new"){ // N section
        correctword = "n";
    }else if(setword == "swim"){
        correctword = "nac";
    };


    if(correctword == undefined){
        document.getElementById("dictword").innerHTML = "Sit moto non est Anglio u sit moto non est im Xarliano.";
        console.error("Non est relataj moto");
    }else{
        document.getElementById("dictword").innerHTML = "Im Xarliano, '" + setwordnorm + "' est " + correctword +".";
        console.log(correctword + " est " + setword)
    }
    
    };


function english(){
    document.getElementById("dictword").innerHTML = "Coming soon! Ave temporia!";
}

function removetext(){
    document.getElementById("dictword").innerHTML = "";
}