
$(document).ready(function(){
	  $(".hover1").hide(function(){
			$( "#hov1" ).hover(function(){
				$(".hover1").show(function(){
					$("#hov1").mouseleave(function(){
						$(".hover1").hide();

					});
				});
			});
	});


$(".hover2").hide(function(){
	$( "#hov2" ).hover(function(){
		$(".hover2").show(function(){
			$("#hov2").mouseleave(function(){
				$(".hover2").hide();

			});
		});
	});
});

$(".hover3").hide(function(){
	$( "#hov3" ).hover(function(){
		$(".hover3").show(function(){
			$("#hov3").mouseleave(function(){
				$(".hover3").hide();

			});
		});
	});
});
});        
$(document).ready(function(){
	$(".form1").submit(function(event){
	alert ("Hi" +" "+ $("input#name").val()+" "+ "we  have received your message");
		event.preventDefault();	
	});
	});
	
	
	        
  

				
				