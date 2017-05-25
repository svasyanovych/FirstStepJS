/* ------ BASIC -------*/

function getId(id){
    return document.getElementById(id);
}

function getTag(tag, number){
    return document.getElementsByTagName(tag)[number];
}

function getCl(ok, a){
    return document.querySelectorAll(ok)[a];
}

/* ------ BASIC -------*/
/* EDIT TEXT PANEL */
var boldt = 0;
getId("Bold").onclick = function(){
         if(boldt==0){
         getId("bodyArea").style.fontWeight="bold";
         boldt=1;
     }else{
         getId("bodyArea").style.fontWeight="normal";
         boldt=0;
     }
}

var italict = 0;
getId("Italic").onclick = function(){
    if(italict==0){
        getId("bodyArea").style.fontStyle="italic";
         italict=1;
    }else{
        getId("bodyArea").style.fontStyle="normal";
         italict=0;
    }
}

var undert = 0;
getId("Underline").onclick = function(){
    if(undert==0){
        getId("bodyArea").style.textDecoration="underline";
         undert=1;
    }else{
        getId("bodyArea").style.textDecoration="none";
         undert=0;
    }
}

function changeSize(){
    for(var i=0; i<=11; i++){
        var fontSize = document.forms.text_family.textSize[i];
        var fontSizeX = document.forms.text_family.textSize[i].value;
        if(fontSize.selected){
            getId("bodyArea").style.fontSize=""+fontSizeX+"px";
                    }
        
    }
}
    function changeFamily(x){
    for(var i=0; i<=11; i++){
        var fontFa = document.forms.text_family.fontFamily[i];
        if(fontFa.selected){
            getId("bodyArea").style.fontFamily = fontFa.value;
        }
    }
}
var lf = "left";
    var rg = "right";
    var cn = "center";
function changeAlign(x){
    
    getId("bodyArea").style.textAlign=""+x+"";
}

/****- COLOR ---*/ 

getId("Color").onclick=function(){
    getId("modal").style.visibility="visible";

    for(var i=0; i<=8; i++){
   getCl(".in_box", i).onclick=function(){
   getId('bodyArea').style.color=this.style.background;

}
}
}
getId("modal").ondblclick=function(){
    getId("modal").style.visibility="hidden";
}
getId("modalSec").ondblclick=function(){
    getId("modalSec").style.visibility="hidden";
}
getId("modalSecImg").ondblclick=function(){
    getId("modalSecImg").style.visibility="hidden";
}
getId("modalTable").ondblclick=function(){
    getId("modalTable").style.visibility="hidden";
}
getId("modalList").ondblclick=function(){
    getId("modalList").style.visibility="hidden";
}
/****----- background ------*/
    getId("Background").onclick=function(){
    getId("modalSec").style.visibility="visible";

    for(var i=0; i<=8; i++){
   getCl(".in_boxSec", i).onclick=function(){
  getId('bodyArea').style.background = this.style.background;

}
}
}


 getId("ImgBack").onclick=function(){
     getId("modalSecImg").style.visibility="visible";
     getId("modalSec").style.visibility="hidden";
     for(var i=0; i<=8; i++){
   getCl(".in_boxTHh", i).onclick=function(){
  getId('bodyArea').style.background = this.style.background;

}
}
 }
 
 getId("ColorBack").onclick=function(){
     getId("modalSec").style.visibility="visible";
     getId("modalSecImg").style.visibility="hidden";
 }
 
 
/* EDIT TEXT PANEL */

 
 /*****---- PAGE OF LIST AND TABLE   -----*/
 getId("Edit").onclick=function(){
     getId("firstPage").style.display="none";
     getId("allEditPafe").style.display="block";
     var code = getId('bodyArea').innerHTML;
    getId('editMode').value = code;

 }
 
 
  getId("Save").onclick=function(){
     getId("allEditPafe").style.display="none";
     getId("firstPage").style.display="block";
      var targ = getId('editMode').value;
    getId('bodyArea').innerHTML = targ;
      
 }
   getId("Table").onclick=function(){
     getId("modalTable").style.visibility="visible"; 
 }
  
  
  /*----- CREATE TABLE ---*/
  getId("TableOk").onclick = function(){
    
       var width = getId("TWidth").value;
       var height = getId("THeight").value;
    
        var rows = getId("TRows").value;
        var columns = getId("TColumns").value;
       
        var WidthBorder = getId("TLWidth").value;
        var TypeBord = getId("type_border").value;
        var ColorBorder = getId("color_border").value;
      
    var table = "<table style='border:"+WidthBorder+"px "+TypeBord+" "+ColorBorder+"'>";         
    

    
      for (var i = 0; i < rows; i++) {
        table+="<tr>";
        for (var q = 0; q < columns; q++) {
         table+="<td style='width:"+width+"px; height:"+height+"px; border:"+WidthBorder+"px "+TypeBord+" "+ColorBorder+"'></td>";
        
        }
          table+="</tr>";
         }
    
    table+="</table>";
  
    getId('editMode').value = table;
      getId("modalTable").style.visibility="hidden";

    }
      getId("Reset").onclick = function(){
      getId("modalTable").style.visibility="hidden";
}
      
      /*****CREATE LIST *****/
      getId("List").onclick=function(){
     getId("modalList").style.visibility="visible"; 
 }
      
      getId("ListOk").onclick = function(){
          var type = getId('type_li').value;
var NLis = "<ol type='"+type+"';>";
var punkt = getId("NL").value;
    for (var li = 0; li < punkt; li++) {
        NLis += "<li>Text</li>";
        }
    NLis +="</ol>";
    getId('editMode').value = NLis;
          
          getId("modalList").style.visibility="hidden";
      }
      
      getId("ResetList").onclick = function(){
      getId("modalList").style.visibility="hidden";
}
 /*****---- PAGE OF LIST AND TABLE   -----*/