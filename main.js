$( document ).ready(function() {
	console.log("Hello")
    

    $("#avg-form").submit(function(e){
    	e.preventDefault();
    	var sdi= $("#sdi").val();
	    var msdf= $("#msdf").val();
	    var ff= $("#ff").val();
	 	var radio=$("input[name='optradio']:checked").val();
	    console.log(sdi+" "+msdf+" "+ff+" "+radio)
	   
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
    	console.log(avgBeforeFin)
    	console.log(finalMark)
    	$(".mark").remove()
    	if( Math.ceil(finalMark)>100){
    		$("body").append( 
    "<div class='col-md-4 col-md-offset-4 text-center mark'><h1>Sizin "+radio+" almağınız mümkün deyil. </h1></div>" );
    	}

    	else{
    		if(finalMark<34)
    			finalMark=34;
    		$("body").append( 
    "<div class='col-md-4 col-md-offset-4 text-center mark'><h3>"+radio+" üçün finalda toplamalı olduğunuz minimum bal:<h1>"+Math.ceil(finalMark)+"</h1></div>" );
    	}


	    	
    })
   
    
});