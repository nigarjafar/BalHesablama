$( document ).ready(function() {

    $("#avg-form").submit(function(e){
    	e.preventDefault();
    	var sdi= $("#sdi").val();
	    var msdf= $("#msdf").val();
	    var ff= $("#ff").val();
	 	var radio=$("input[name='optradio']:checked").val();
	 
    	var avgBeforeFin= sdi*0.2+msdf*0.2+ff*0.1;

    	switch(radio){
    		case "A":
    			finalMark=(90.5-avgBeforeFin)*2;
    			break;
    		case "B":
    			finalMark=(80.5-avgBeforeFin)*2;
    			break;
    		case "C":
    			finalMark=(70.5-avgBeforeFin)*2;
    			break;
    		case "D":
    			finalMark=(60.5-avgBeforeFin)*2;
    			break;
    		case "E":
    			finalMark=(50.5-avgBeforeFin)*2;
    			break;
    	}

    	$(".final-mark").empty()
    	if( Math.ceil(finalMark)>100){
    		$(".final-mark").append( 
    "<h1>Sizin "+radio+" almağınız mümkün deyil. </h1>" );
    	}

    	else{
    		if(finalMark<34)
    			finalMark=34;
    		$(".final-mark").append( 
    "<h3>"+radio+" üçün finalda toplamalı olduğunuz minimum bal:<h1>"+Math.ceil(finalMark)+"</h1>" );
    	}


	    $(".final-mark").show();
    })
   
    
});