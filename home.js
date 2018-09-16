
var config = {
    apiKey: "AIzaSyASuG5-QdUJdfInh13D4AyOpw9C45Op9Eg",
    authDomain: "testdata-6e10b.firebaseapp.com",
    databaseURL: "https://testdata-6e10b.firebaseio.com",
    projectId: "testdata-6e10b",
    storageBucket: "testdata-6e10b.appspot.com",
    messagingSenderId: "633835565216"
  };
  firebase.initializeApp(config);
function firsttrig(){
	var databaseRef = firebase.database().ref('users/');

  
  databaseRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {

   var childData = childSnapshot.val();
 
   document.getElementById("flowNo").innerHTML =childData.last_name;
  
    });
  });

	ping();
}
function ping(){
       $.ajax({
          url: 'http://192.168.8.1/html/home.html',
          success: function(result){
             alert('reply');
          },     
          error: function(result){
              alert('timeout/error');
          }
       });
    }
window.getCount = function(parent, getChildrensChildren){
    var relevantChildren = 0;
    var children = parent.childNodes.length;
    for(var i=0; i < children; i++){
        if(parent.childNodes[i].nodeType != 3){
            if(getChildrensChildren)
                relevantChildren += getCount(parent.childNodes[i],true);
            relevantChildren++;
        }
    }
    return relevantChildren;
}


$(function() {
$('.draggable').draggable({
  revert: "invalid",
  stack: ".draggable",
  helper: 'clone'
});
$('.droppable').droppable({
  accept: ".draggable",
  drop: function(event, ui) {
    var droppable = $(this);
    var draggable = ui.draggable;
    // Move draggable into droppable
    var drag = $('.droppable').has(ui.draggable).length ? draggable : draggable.clone().draggable({
      revert: "invalid",
      stack: ".draggable",
      helper: 'clone'
    });
    drag.appendTo(droppable);
	  $("#bin").empty();
	  var cbin = document.getElementById('bin').value;
	 alert(getCount(document.getElementById('test'), true));
    draggable.css({
      float: 'left'
		
    });
  }
	
	
});
		   
		   $('html').keyup(function(e){
			if(e.keyCode == 46) {
				
//				var cbin = document.createElement('div');
//				cbin.id = 'bin';
//				cbin.className = 'droppable';
////				var draw = document.getElementById('mainpanel').value;
//				document.body.appendChild(cbin);
////				 cbin.appendChild(draw);
////				document.body.appendChild(btn);
			var cbin = document.getElementById('bin').value;
				 if($('#bin').length > 0)         
					{
						$("#bin").show(); 
					}

				else{
					$("#bin").hide();
				}
				
				
			}
		});
					$(".droppable").click(function(){
						$("#bin").empty();
					});
		  $(".droppable#bin").click(function(){
			   
			 // $("#bin").before($("#qa").outerHTML).hide({
				  
				  $("#bin").empty();
			 // });
			  
			
		});
		$(".draggable").mouseover(function(){
     document.getElementById("nodename").style.display = "block";
		var idn = $('.draggable').attr('id');
		document.getElementById("nodename").innerHTML=idn;
		switch(String(idn )){
				
			case "q1":
				document.getElementById("nodename").innerHTML ="Hall Type Area";
				
				break;
			case 'q2':
				document.getElementById("nodename").innerHTML ="Cubicle Type Area";
				
				break;
			case "q3":
				document.getElementById("nodename").innerHTML ="Kitchen Type Area";
				
				break;
			case "q4":
				document.getElementById("nodename").innerHTML ="Study Type Area";
				
				break;
			case "q5":
				document.getElementById("nodename").innerHTML ="Passage Type Area";
				
				break;
			case "q6":
				document.getElementById("nodename").innerHTML ="staircase Type Area";
				
				break;
			case "q7":
				document.getElementById("nodename").innerHTML ="ServerRoom  Area";
				
				break;
			case "q8":
				document.getElementById("nodename").innerHTML ="Cafeteria  Area";
				
				break;
			case "q9":
				document.getElementById("nodename").innerHTML ="Parking  Area";
				
				break;
		}
});
	$(".draggable").mouseleave(function(){
     document.getElementById("nodename").style.display = "none";
});

  });

 
