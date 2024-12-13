$(document).ready(function(){
					
				/*	
					 inputHeight =   $(".input1").height();
					
					 $(".input1").css({"height":inputHeight*1.4+"px"});	 
					 
					*/
	window.ua = navigator.userAgent.toLowerCase();
	window.isAndroid = ua.indexOf("android") > -1;	
	 if(isAndroid) {
		 $(".AndroidSet").css({"font-size":"1.45em","font-weight":"100","vertical-align":"-0.23em","line-height":"20%"})
		
		 
                        }
						
						
			function isMobileDevice() {
			return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
			};
			
			window.checkMobile=isMobileDevice();	
			
			
					
			InputAndDone_Width =   $(".InputAndDoneTbl").width();
			InputAndDone_height =   $(".InputAndDoneTbl").height();
			remark_height =   $(".remark").height();
			remark_padding = (InputAndDone_height-remark_height)/2;
			inputAndDoneSpace_Width =   $(".inputAndDoneSpace").width();
			inputAndDoneSpaceFordevice_Width =   $(".inputAndDoneSpaceFordevice").width();
			inputDiv_Top =   $(".inputDiv").css("margin-top");
			inputDiv_Top = inputDiv_Top.split("px").join("")
			
			
			inputAndDoneSpaceFordevice_Left =   $(".inputAndDoneSpaceFordevice").css("margin-left");
			inputAndDoneSpaceFordevice_Left = inputAndDoneSpaceFordevice_Left.split("px").join("")
			
			
			prompt_New_width =   $(".prompt_New").width();
			AreaForKeypadAndInputInDevice_Width =   $(".AreaForKeypadAndInputInDevice").width();
			AreaForKeypadAndInputInDevice_height = $(".AreaForKeypadAndInputInDevice").height();
			$(".AreaForKeypadAndInputInDevice").show();
			keypadKeysDevice_height = $(".KeyPadKeyBoundaryDevice").height();
			$(".AreaForKeypadAndInputInDevice").hide();
			container_Width =   $(".container").width();
			InputAndDone_Width_Pixel = (InputAndDone_Width/100)*AreaForKeypadAndInputInDevice_Width;
			prompt_New_Left = container_Width-InputAndDone_Width_Pixel+Number(inputAndDoneSpaceFordevice_Left);
			
			prompt_New_Left_Tab = (container_Width-InputAndDone_Width_Pixel)-prompt_New_width;
			
			
			
			if(checkMobile == false)
			{
			remark_width = 100-InputAndDone_Width;
			$(".remark").css({"width":remark_width-0.2+"%","margin-left":"0","margin-right":"0","padding-left":"0","padding-right":"0"});
			}
			else if(checkMobile)
			{
			remark_width = 100-InputAndDone_Width;
			$(".remark").css({"width":remark_width-0.2+"%","margin-left":"0","margin-right":"0","padding-left":"0","padding-right":"0"});
			if(window.innerHeight>window.innerWidth)
			{
				$(".prompt_New").css({"margin-top":AreaForKeypadAndInputInDevice_height+10+"px","margin-left":prompt_New_Left+"px"});
			}
			else
			{
					$(".prompt_New").css({"margin-top":Number(keypadKeysDevice_height)+Number(inputDiv_Top)+Number(5)+"px","margin-left":prompt_New_Left_Tab-40+"px"});
			}
			}			
						
					
					
					
			function isMobileDevice() {
                    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
                           };
		
	                       window.checkMobile=isMobileDevice();
					
					
			sol_var=0;		
			
			
				 $(".newSet").click(function(){
											 
							sol_var=0;						 
											 
											 
											 })
				 
					
		 $(".solution").click(function(){
					sol_var++;
				
					$(".solutionMainSteps").css("display","block");
								//alert(sol_var)
					if(sol_var==1){
					
							
								
							   //alert("hii")
							   if(window.innerHeight < window.innerWidth){
									
							   forAutoWidth =   $(".forAutoWidth").width();
							 
							   $(".solutionMainSteps").css({"width":forAutoWidth+"px","margin-left":"auto","margin-right":"auto","display":"block"});
							   
							  
								  }
								  else{ forAutoWidth =   $(".forAutoWidth").width();
							 
							   $(".solutionMainSteps").css({"width":forAutoWidth+"px","margin-left":"auto","margin-right":"auto","display":"block"});}
							   
							     if( checkMobile == false){
															
								
									 var hk=$(".middle").height();
									 var hk1=$(".container").height()
									 
									 //alert(hk1+"     hk1    "+hk);
									 
									 var mar = (hk1-hk)/2;
									 if(hk < hk1){
									// $(".middle").css("margin-top",mar+"px")
									 
									  solutionText = $(".solutionText").height();
									     $(".middle").css("margin-top",solutionText*0.2+"px")
									 }else{
										 solutionText = $(".solutionText").height();
									     $(".middle").css("margin-top",solutionText*0.2+"px")
									 }
									 
								}else if(checkMobile){
									
									solutionText = $(".solutionText").height();
									 $(".middle").css("margin-top",solutionText*1.3+"px")
								}
					}
							})
						   })