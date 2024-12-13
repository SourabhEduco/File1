//START:Changed from Bangalore Team
var CurrQuestionIndex = 0;
//END:Changed from Bangalore Team

$(document).ready(function(){
						   function isMobileDevice() {
    return (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
};
		
	checkMobile=isMobileDevice();		  
						  
						  
						    //////////////NFR///////////////////
						   
						    $(document).keydown(function(objEvent) {
												 
							
						  if(DoneClicked == 1)
						  {
							  
							 $(function() {
					  
									// gather all inputs of selected types
									var inputs = $('.tab,.done1,.calc'), inputTo;
									
									// bind on keydown
									inputs.on('keydown', function(e) {
																
										// if we pressed the tab
										if (e.keyCode == 9 || e.which == 9) {
											
											// prevent default tab action
											e.preventDefault();
								
											if (e.shiftKey) {
												// get previous input based on the current input
												inputTo = inputs.get(inputs.index(this) - 1);
											} else {
												// get next input based on the current input
												inputTo = inputs.get(inputs.index(this) + 1);
											}
								
											// move focus to inputTo, otherwise focus first input
											if (inputTo) {
												inputTo.focus();
											} else {
												inputs[0].focus();
											}
										}
									});
								});
						  }
						  else if(DoneClicked == 0)
						  {
							  
    
						  }
						  })
						   var DoneClicked = 0
						   $(".section1").css('display',"none");
						   $(".footer").css("pointer-events","none");
						   $(".FtrTab_Td3").css("pointer-events","auto");
						   
						   $(".newSet,.Procedure").hide();
						   $(".solution").css('visibility','hidden');
						   var attempted_num = 1;
						   var next_val = 0;
						   
						   //////////////For NFR closed//////////
						    
						  
						  
						    var sb=-10000;
							var autorunVar = 0
							
 						    $(".autorun").css('opacity','.4');
						    $(".autorun").attr('disable','true');
						    $(".autorun").css('cursor','default');
							$(".promptComma,.prompt,.blankMessage,.ReducePromt").hide();
							
 							$(".solutionMainSteps,.solutionText").hide();	
							 $(".incorrect,.correct").show();
							
				///////////////////////////////////For Print///////////////////////////////////
				
				 myFunction= function() {
					window.print();
				};
				
				//////////////////////////////For focus on text////////////////////////////////
				
				 
				 /*$(".newSet").click(function(){
											 
						 sb=-10000;///set this as initial value..
											 
				 				
								
 					$(".solutionMainSteps,.solutionText").hide();
	
					$(".input1").val('');
					$(".incorrect,.correct").hide();
 					$(".blankMessage,.ReducePromt").hide();
 					$(".prompt,.promptComma").hide();
			        $(".autorun").css('opacity','.4');
					$(".autorun").css('cursor','default');
					$(".autorun").prop('disabled',false);
					$(".input1").focus();
					
											});*/


/////////////////////////////////////////////////////////Buttons/////////////////////////////////////////////////////////////////////////////////////////////
				
				
				  $(".done1").click(function(){ 
											 
									$(".Procedure_banner").hide();				   
				        		    
									$(".done1").css({'color':'#660066','box-shadow':'0px 0px 0px #ff0000, 0px 1px 7px #ff0000,  0px 1px 0px #ff0000,  0px 0px 3px #ff0000'});
									$(".newSet,.solution,.Procedure").css({'color':'white','box-shadow':'none'});
									$(".Procedure").css({'color':'black','box-shadow':'none'});
									$(".input1").focus();
													        
														});
						 
						
						 $(".newSet").click(function(){
													 
													 ////////// for NFR//////
									DoneClicked = 0	
									CurrQuestionIndex=0
									next_val++;
									nextQuesGeneration();
									attempted_num++;
									$(".input1,.input2").val('')
									$(".done1").css("pointer-events","auto")
									$(".input1,.input2").css("pointer-events","auto")
									$(".calc").css("pointer-events","auto");
									/*$(".newSet,.solution").hide();*/
									$(".input1,.input2").attr("disabled",false)
									$(".FB_TxtBox").html("")
									//document.getElementById("FB_TxtBox").innerHTML =""
									//document.getElementById("FB_TxtBoxa").innerHTML =""
									////////// for NFR End//////
													 
									$(".autorun").css('disable','true');				 
									$(".Procedure_banner,.prompt_New,.solutionMain").hide();				   
				        		    $(".newSet").css('color','#ffff00');
									$(".newSet").css({'color':'#ffff00','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
									$(".solution,.Procedure").css({'color':'white','box-shadow':'none'});
									$(".done1").css({'color':'black','box-shadow':'none'});
									////////// for NFR //////
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});                           ////////// for NFR End ////// 
									
									
									$(".Procedure").css({'color':'black','box-shadow':'none'});
									////////// for NFR //////
									$(".input1").focus();
									////////// for NFR //////
									$(".Procedure").css({'color':'black','box-shadow':'none'});
									$(".input1,.input2").val('')
									
									$(".blankMessage_New").hide();
									$(".incomplete_New").hide();
   
												ClickToAnsDiv = 0;        
													 $(".squareRoot").hide();									
									$(".squareRootStart").show();	 	        
														});
						    
						    $(".solution").click(function(){ 
														  
									$(".input1").focus();
								
									$(".Procedure_banner,.prompt_New").hide();
				        		    $(".solution").css('color','#ffff00');
									$(".solution").css({'color':'#ffff00','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
									$(".newSet,.Procedure").css({'color':'white','box-shadow':'none'});
									$(".done1").css({'color':'black','box-shadow':'none'});
									$(".Procedure").css({'color':'black','box-shadow':'none'});
												        
														});
							
							 $(".Procedure").click(function(){ 
															
															$(".input1").focus();
															 autorunVar = 1; 
															 sb=-1;
															 
									$(".correct,.incorrect,.blankMessage,.prompt,.promptComma,.ReducePromt").hide();
									$(".solutionMainSteps,.solutionText").hide();
 									$(".autorun").css('opacity','.4');
									$(".autorun").css('disable','true');
									$(".autorun").css('cursor','default');
									$(".autorun").attr('disabled',true);
 				        		    $(".Procedure").css('color','red');
									$(".Procedure").css({'color':'red','box-shadow':'0px 0px 0px #2b638f, 0px 1px 7px #000066,  0px 1px 0px #000066,  0px 0px 3px #000066'});
									$(".newSet,.solution").css({'color':'white','box-shadow':'none'});
									$(".done1").css({'color':'black','box-shadow':'none'});
									$(".Procedure_banner").fadeIn();	
							
						});
							  
/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

						   $(".Cross_PB").click(function(){
														 
								$(".Procedure_banner").hide();	
								$(".input1").focus();
								
							});	
							 
	 					   $(".Cross_BM").click(function(){
														 
								$(".blankMessage").hide();
								$(".promptComma").hide();
								$(".prompt").hide();
								$(".ReducePromt").hide();
								$(".input1").focus();
								
							});	

/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
	
			randRange = function (min, max) {
					var randomNum = Number(Math.round(Math.random()*(max-min))+min);
					return randomNum;
				                                          }	
				
					var range_startX1 = 1000;
					var range_finX1 = 9999;
					var range_startX2 = 100000;
					var range_finX2 = 999999;
					var range_startX3 = 100000000;
					var range_finX3 = 999999999;
					var range_startX4 = 10000000;
					var range_finX4 = 99999999;
					var range_startX5 = 1000000;
					var range_finX5 = 9999999;
					var array_Range = 600;
					
					//////////////////////////
					var next_val = randRange(0,28);
				
					var array_Range = 600;
					
					
					var R1_Arr = new Array();
					var R2_Arr = new Array();
					var R3_Arr = new Array();
					var R4_Arr = new Array();
					var R5_Arr = new Array();
					var R6_Arr = new Array();
					var Figure_Arr= new Array();
					var R_Arr1 = new Array();
					
					var R_AnsArray = new Array();
				
					var ta1;
					var ta2;
					var ta3;
					
					var val1;
					var val2;
					var val3;
					var val4;
					var val5;
					var val6;
					var val7;
					var val8;
					var temp_var1;
					
					
					
					var temp1;
					var GCFnum;
					
				
		
				
				quesGeneration = function(){
					
					var array_Range = 599;
	//////////array for text boxes///////////
	 
					
				/*	
					
		            Figure_Arr = [ 
							   
							  "2008@3000@6@Aumento@2011@2008@8000@4000@2011@figs12@1", 
							  "2002@3000@2@Disminución@2005@2004@7000@8000@2004@figs13@2", 
							  "2006@4000@6@Disminución@2010@2009@7000@9000@2009@figs14@3", 
							  "2005@1000@2@Disminución@2008@2007@5000@6000@2007@figs15@4", 
							  "2006@3000@9@Aumento@2007@2006@4000@3000@2009@figs16@5", 
							  "2007@1000@6@Aumento@2010@2007@6000@2000@2010@figs17@6", 
							  "2005@3000@2@Disminución@2008@2007@7000@8000@2007@figs18@7", 
							  "2000@2000@4@Disminución@2004@2003@4000@6000@2003@figs19@8", 
							  "2003@4000@2@Aumento@2004@2003@8000@5000@2005@figs20@9", 
							  "2004@2000@1@Aumento@2007@2006@7000@3000@2007@figs21@10", 
							  "2004@2000@6@Disminución@2006@2005@3000@4000@2007@figs22@11", 
							  "2005@3000@9@Disminución@2009@2008@6000@7000@2008@figs23@12", 
							  "2002@2000@5@Aumento@2003@2002@3000@2000@2006@figs24@13", 
							  "2007@2000@6@Disminución@2011@2010@5000@7000@2010@figs25@14", 
							  "2005@3000@2@Disminución@2009@2008@6000@7000@2007@figs26@15", 
							  "2007@2000@2@Disminución@2011@2010@5000@6000@2009@figs27@16", 
							  "2006@2000@3@Aumento@2010@2008@6000@5000@2010@figs28@17", 
							  "2005@3000@1@Disminución@2007@2006@4000@5000@2008@figs29@18", 
							  "2001@3000@3@Aumento@2005@2003@7000@6000@2005@figs30@19", 
							  "2007@4000@10@Aumento@2011@2008@8000@5000@2011@figs31@20", 
							  "2007@3000@7@Disminución@2011@2009@6000@8000@2009@figs32@21", 
							  "2004@3000@9@Aumento@2006@2005@6000@4000@2007@figs33@22", 
							  "2002@3000@1@Disminución@2004@2003@4000@5000@2005@figs34@23", 
							  "2005@3000@9@Aumento@2007@2006@6000@4000@2008@figs35@24", 
							  "2002@2000@1@Disminución@2004@2003@3000@4000@2005@figs36@25", 
							  "2003@3000@8@Aumento@2005@2003@6000@4000@2005@figs37@26",
							 ];

					R2_Arr = Remove_Duplicate_Entry(Figure_Arr);
							R2_Arr = uniqueArray0(R2_Arr)
						console.log(R2_Arr+"  R2_Arr")*/
						R2_Arr = [ 
							   
							 "2012@3000@6@Aumento@2015@2012@9000@6000@2015@figs12@1",
							 "2010@3000@2@Disminución@2014@2013@6000@8000@2014@figs13@2",
							 "2012@4000@6@Disminución@2016@2015@6000@7000@2015@figs14@3",
							 "2011@1000@2@Disminución@2015@2014@7000@9000@2013@figs15@4",
							 "2012@3000@9@Aumento@2013@2012@5000@2000@2015@figs16@5",
							 "2013@1000@6@Aumento@2016@2013@7000@3000@2016@figs17@6",
							 "2011@3000@2@Disminución@2013@2014@2000@6000@2013@figs18@7",
							 "2010@2000@4@Disminución@2014@2013@6000@7000@2013@figs19@8",
							 "2012@4000@2@Aumento@2013@2012@3000@2000@2014@figs20@9",
							 "2014@2000@1@Aumento@2017@2016@9000@7000@2017@figs21@10",
							 "2010@2000@6@Disminución@2012@2011@3000@4000@2013@figs22@11",
							 "2011@3000@9@Disminución@2015@2014@5000@7000@2014@figs23@12",
							 "2013@2000@5@Aumento@2014@2013@4000@3000@3017@figs24@13",
							 /*"2014@2000@6@Disminución@2018@2017@5000@6000@2017@figs25@14",*/
							 "2015@3000@2@Disminución@2019@2018@5000@7000@2017@figs26@15"
							 ];
	};
					
			/*////////////////////R1_Arr////////////////////////////////*/
			
			var random_Select = 0;
			var sol_var = 0
		
			var loadingString = [];
				window.loadingValues = function () {
			
					//START:Changed from Bangalore Team 
					// loadingValues.fired = true;
					//END:Changed from Bangalore Team 
			
					// next_val = 25;
					loadingString = [next_val];
					//////alert(next_val+"  == next_val")
					return loadingString;
			
				}
				var dataURL;	
				
				var GCFnum;		
			/*////////////////////////////////////////////////////*/
						

			nextQuesGeneration = function(){
				  	
					if (CurrQuestionIndex != 0) {
						next_val = Number(CurrQuestionIndex);
			}
			else {
						next_val = next_val;
			}	
				
					
             if (next_val>=String(R2_Arr.length-1)) {
						next_val = 0;
					}
					temp1 = String(R2_Arr[next_val]).split("@");
					//var s = randRange(1,String(R2_Arr.length-1))
					////alert(temp1+"  temp1")
					val1=temp1[10]
					//val1=7;
					for (var i = 0; i<40; i++) {
						
						$(".figs1"+i).hide()
						$(".figs2"+i).hide()
						$(".figs3"+i).hide();
						$(".mainTable"+i).hide();
						
						
					}
					
					//alert(val1=temp1[10])
						
					
					
					if(val1==1){
						
						$(".figs11").show();
						$(".mainTable").show()
						
					}else if(val1==2){
						
						$(".figs12").show();
						$(".mainTable").show()
						
					}else if(val1==3){
						
						$(".figs13").show();
						$(".mainTable").show()
						
						
					}else if(val1==4){
						
						$(".figs14").show();
						$(".mainTable").show()
						
					}else if(val1==5){
						
						$(".figs15").show();
						$(".mainTable").show()
						
					}else if(val1==6){
						
						$(".figs16").show();
						$(".mainTable").show()
						
					}else if(val1 == 7){
						
						$(".figs17").show();
						$(".mainTable").show()
						
					}else if(val1==8){
						
						$(".figs18").show();
						$(".mainTable").show()
						
					}else if(val1==9){
						
						$(".figs19").show();
						$(".mainTable").show()
						
					}else if(val1==10){
						
						$(".figs20").show();
						$(".mainTable").show()
						
					}else if(val1==11){
						
						$(".figs21").show();
						$(".mainTable").show()
						
					}else if(val1==12){
						
						$(".figs22").show();
						$(".mainTable").show()
						
					}else if(val1==13){
						
						$(".figs23").show();
						$(".mainTable").show()
						
					}else if(val1==14){
						
						$(".figs24").show();
						$(".mainTable").show()
						
					}else if(val1==15){
						
						$(".figs25").show();
						$(".mainTable").show()
						
					}else if(val1==16){
						
						$(".figs26").show();
						$(".mainTable").show()
						
					}else if(val1==17){
						
						$(".figs27").show();
						$(".mainTable").show()
						
					}else if(val1==18){
						
						$(".figs28").show();
						$(".mainTable").show()
						
					}else if(val1==19){
					
						$(".figs29").show();
						$(".mainTable").show()
						
					}else if(val1==20){
						
						$(".figs30").show();
						$(".mainTable").show()
						
					}else if(val1==21){
						
						$(".figs31").show();
						$(".mainTable").show()
						
					}else if(val1==22){
						
						$(".figs32").show();
						$(".mainTable").show()
						
					}else if(val1==23){
						
						$(".figs33").show();
						$(".mainTable").show()
						
					}else if(val1==24){
						
						$(".figs34").show();
						$(".mainTable").show()
						
					}else if(val1==25){
						
						$(".figs35").show();
						$(".mainTable").show()
						
					}else if(val1==26){
						
						$(".figs36").show();
						$(".mainTable").show()
						
					}
					
					
			 
					
					y1=Number(temp1[0])
					y5=Number(temp1[0])+Number(4);
				
	               q1 = "El número de computadoras vendidas por una compañía desde <b>"+y1+"</b> hasta <b>"+y5+"</b> se muestra en la gráfica.";
				   var question_Rotate_Arr = new Array();
	               question_Rotate_Arr = ["<span class='brt1'></span> ¿Cuál es el por ciento de "+temp1[3]+" en ventas en <b>"+temp1[4]+"</b> sobre las ventas en <span class='sl12'> <b>"+temp1[5]+"</b>?</span>"];
	
	               q2 = question_Rotate_Arr[Number(next_val)%Number(question_Rotate_Arr.length)];
////alert(q2+"  q2")
	
					document.getElementById("variable1").innerHTML=q1;
					document.getElementById("variable2").innerHTML=q2;
					  //alert("")
					
					a1 = temp1[3]+" actual";
					(temp1[3] == "Aumento")?(a2 = temp1[6]+"  –  "+temp1[7]):(a2 = temp1[7]+"  –  "+temp1[6]);
					(temp1[3] == "Aumento")?(a3 = Number(temp1[6])-Number(temp1[7])):(a3 = Number(temp1[7])-Number(temp1[6]));
					a4 = "el por ciento de "+temp1[3];
					a5 = a3;
					a6 = temp1[7];
					a7s = (Number(a5)*100/Number(a6));
					a7ss = Number(a7s.toFixed(2));
					a7=a7ss+"%"

                    //a8 = "The "+temp1[3]+" in sales in <b>"+temp1[4]+"</b> over those in <b>"+temp1[5]+"</b> is <b><font color = '#ff0000'>"+a7+"</font></b>."
					
					
					
                   
				   document.getElementById("demo1").innerHTML=a1;
				   document.getElementById("demo2").innerHTML=a2;
				   document.getElementById("demo3").innerHTML=a3;
				   
				   
				   
				   document.getElementById("demo1a").innerHTML=a1;
				   document.getElementById("demo2a").innerHTML=a2;
				   document.getElementById("demo3a").innerHTML=a3;
				   
				   
				   
				   
				   document.getElementById("demo4").innerHTML=a4;
				   document.getElementById("demo5").innerHTML=a5;
				   document.getElementById("demo6").innerHTML=a6;
				   
				   
				   document.getElementById("demo4a").innerHTML=a4;
				   document.getElementById("demo5a").innerHTML=a5;
				   document.getElementById("demo6a").innerHTML=a6;
				  
				  
				  
				  document.getElementById("demo7").innerHTML=a7;
				   document.getElementById("demo7a").innerHTML=a7;
				   
				   document.getElementById("demo9").innerHTML=temp1[5];
				   document.getElementById("demo10").innerHTML=temp1[4];
				   
				   document.getElementById("demo11").innerHTML=temp1[6];
				   document.getElementById("demo12").innerHTML=temp1[7];
							
					
					
			}
			///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			
			
			quesGeneration();
						next_val = randRange(0, R2_Arr.length-1);
			nextQuesGeneration();  ///// Calling question..
			doneButtonMain = function(){
					 
					$(".correct,.incorrect,.blankMessage,.prompt,.promptComma,.ReducePromt,.blankMessage_New").hide();
					
	/*			 if(String(navigator.userAgent).indexOf("Mobile") == -1 ){
					var k1_text = trimSpaces(document.getElementById("inputText").value);
				 }else{
					 var k1_text = trimSpaces(document.getElementById("inputTexta").value);
				 }*/
				 
				 
				
					
					 var k1_text = document.getElementById("inputText").value;
					
					//var k3_text = trimzero(document.getElementById("inputText3").value);
					
                    ent_ans1 = trimzero(k1_text);
					
					var ans_Num = 0;
	                
					(temp1[3] == "Aumento") ? (ans_Num=Number(temp1[6])-Number(temp1[7])) : (ans_Num=Number(temp1[7])-Number(temp1[6]));
	
	
	
	
	anss = Number(ans_Num)*100/Number(temp1[7])
	anss1=Number(anss.toFixed(2))
	ans=anss1+"%";
	
	
	//alert(ans+"......ans")
	
	wt_id1 = k1_text.indexOf("%");
     if(wt_id1!=-1)
	{
		
	 ent_ans1 = Number(k1_text.substring(0,wt_id1))+"%"+k1_text.substring(wt_id1+1,k1_text.length);
	}
	else
	{
		ent_ans1 = k1_text;
	}                                      
//////////////////////////////////////////////////////////////////////////
					
					if(ent_ans1 == ""  ) {
						
						$(".prompt").hide();
						$(".blankMessage_New").show();
						$(".incomplete_New").hide();
						} else if (ent_ans1==ans){
						
								 
									
									/*$(".incorrect").doTimeout(".incorrect") 
									$(".correct").doTimeout(".correct" )
									$(".correct").doTimeout(".correct" ,200, function(){*/
												$(".remark,.correct").show().fadeOut(2000);
															
													/*		return false;
												  });*/
								}else if (wt_id1 == -1) {
								
									document.getElementById("whatValue").innerHTML = k1_text;
									$(".incomplete_New").show();
						
								
								
						
					    } else{
												 
												/* $(".correct").doTimeout(".correct" )
									$(".incorrect").doTimeout(".incorrect") 
									$(".incorrect").doTimeout(".incorrect" ,200, function(){*/
													/*
															  return false;
													});*/
									$(".remark,.incorrect").show().fadeOut(2000);
											}
								
							 }
							 
			
				 
				 
					//////////////////////////////////For FR///////////////////////////////////////////////
					//////////////////////////////////For NFR///////////////////////////////////////////////
				reviewMode = false;
				var Qid;
				var FBOpt;
				var HOpt;
				var SOpt;
				var VOpt;
				var MOpt;
				var EOpt;
				readQuesID();
				setModes();
				
				//$(".calc").css("pointer-events","auto");
				function setModes() {
					
					/*if (SOpt == 0 && FBOpt == 1 && EOpt == 1) {
						$(".solution").show();
						//show solution button
					} else {
						$(".solution").hide();
						// hide solution button
						//$(".newSet").hide();
						
					}*/
					//////////Fot NFR //////////
					   /* SOpt = 3; 
						FBOpt = 2; 
						EOpt = 1;*/
						if (SOpt == 0 && FBOpt == 1 && EOpt == 1) {
							///////quiz mode///////////////////
							$(".solution").css('visibility','hidden');
							
							$(".calc").css("pointer-events","auto");
						} else if (SOpt == 1 && FBOpt == 2 && EOpt == 1) {
							///////////////practice mode///////////////
							//$(".newSet").show();
							$(".solution").show();
							$(".solution").css('visibility','visible');
							$(".calc").css("pointer-events","auto");
						} else if (SOpt == 0 && FBOpt == 2 && EOpt == 1) {
							//////////////home work///////////////////
							$(".solution").css('visibility','hidden');
						    $(".calc").css("pointer-events","auto");
						} else if (SOpt == 2 && FBOpt == 2 && EOpt == 1) {
							//////////////////NFR/////////////////////////
							$(".solution").css('visibility','hidden');
							$(".calc").css("pointer-events","auto");
						} else if (SOpt == 1 && FBOpt == 2 && EOpt == 0) {
							  ////////////////after submit solution mode////////
								$(".solution").show();
								$(".solution").css('visibility','visible');
								$(".newSet").hide();
								
								$(".calc").css("pointer-events","none");
								$(".done1").css("pointer-events","none")
								$(".input1,.input2").css("pointer-events","none")
								$(".input1,.input2").attr("disabled",true)
								DoneClicked = 1;
								
								$(".done1").click(function(){ 
                        $(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6'});
                        });
						        $(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6'});
								
							 
						}else if (SOpt == 3 && FBOpt == 2 && EOpt == 1) {        ////////////////educo testing mode////////
							  
								$(".solution").show();
								$(".solution").css('visibility','visible');
								$(".newSet").show();
								$(".newSet").css('visibility','visible');
								$(".calc").css("pointer-events","auto");
								$(".done1").css("pointer-events","auto");
								$(".input1,.input2").css("pointer-events","auto");
								DoneClicked = 1;
								//$(".input1,.input2").attr("disabled",false);
								/*$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								$(".done1").click(function(){
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								});  */                                          ////////////////End educo testing mode////////
								
							 
						} else {
							/////////////////////rest/////////////////////
							$(".solution").hide();
							$(".calc").css("pointer-events","none");
							$(".done1").css("pointer-events","none");
							$(".input1,.input2").css("pointer-events","none");
							
					
						}
					
				}
				//////////////////
				
				// ML -- Read QuestionID
				////////alert(Qid.length+"  == Qid.length")
				if (Qid.length<=0) {
					////////alert(Qid.length+"  == Qid.length")
					setPreviewMode();
				}
				/*$(".QuesDiv").show();
				$(".LoadingDiv").hide();  */                 ///////////It should be closed while uploading the file
				//function setstuValues(ans, evals) {
				window.setstuValues = function setstuValues(ans, evals) {
					//8thMar2018 BLR Comments
					//Start
					
					
					$("#QuesDiv").show();
        			$("#LoadingDiv").hide();
					
					//End
					
					////////alert(FBOpt+" == FBOpt")
					if (FBOpt == 2) {
						if (evals == "true") {
							
							
							   $(".FB_TxtBox").html("Correcto")
							
								
							
					     } else {
							 
							   $(".FB_TxtBox").html("Incorrecto")
								
							
						 }
					}
					if (FBOpt == 1) {
						
						
						      $(".FB_TxtBox").html("Respondido")
						
						
					}
					preloadans(ans);
				}
				
				
				 //START:Changed from Bangalore Team 
					window.setQuesIndex = function setQuesIndex(QuesIndex) {
						////////alert("setQuesIndex:" + QuesIndex)
						CurrQuestionIndex = QuesIndex;
				
						//8thMar2018 BLR Comments
						//Start
					
						
						 $("#QuesDiv").show();
       					 $("#LoadingDiv").hide();
						
						//End
						
						nextQuesGeneration();
					}
					//END:Changed from Bangalore Team 

				//ExternalInterface.addCallback("setstuValues", this, setstuValues);
				//PageMethods.setstuValues();
				//setstuValues();
				function setPreviewMode() {
					reviewMode = true;
					//$(".done1").css('cursor', 'default').prop('disabled',true);
					//$("#inputText").prop("disabled",true);//or we can use document.getElementById("inputText").disabled = true;
					
					//$(".done1").css('cursor','pointer').prop('disabled',false);
					//$("#inputText").prop("disabled",false);
				
					// disable done button in review mode
					//reset.enabled = false;
					// wherever applicable
					$(".solution").show();
					$(".solution").css('visibility','visible');
					// show solution in review mode
				}
				//ExternalInterface.addCallback("setPreviewMode",this,setPreviewMode);
				//PageMethods.setPreviewMode();
				//setPreviewMode();
				function readQuesID() {
					try {
						var sQid = window.location.href.substr(window.location.href.indexOf("?"));
						var QArr;
						////////alert(sQid+"  == sQid")
						//var sQid = "http://localhost/EducoTestPrep/HTMLFRQuestionCheck/131-B0132Exp3AL.html?Qid=101$h=0$s=0$f=2"
						QArr = sQid.split("$");
						////Below code are used for opening the file without loader//////
						if (QArr.length < 2) {
									$("#QuesDiv").show();
									$("#LoadingDiv").hide();
						}
						////////////////////////////.. End ..//////////////////////////////

 						Qid = QArr[0].substr(QArr[0].indexOf("Qid")+4);
						FBOpt = QArr[3].substr(QArr[0].indexOf("f")+3);
						HOpt = QArr[1].substr(QArr[0].indexOf("h")+3);
						SOpt = QArr[2].substr(QArr[0].indexOf("s")+3);
						VOpt = QArr[4].substr(QArr[0].indexOf("v")+3);
						MOpt = QArr[5].substr(QArr[0].indexOf("m")+3);
						EOpt = QArr[6].substr(QArr[0].indexOf("e")+3);
					} catch (ex) {
					}
				}
			
				////////////////////// NFR Closed ////////////
				//////////////////////////////////////////////
		
				function preloadans(strfrmServer) {
					//////////alert(strfrmServer+"  == strfrmServer inside preloadans")
				
					//////////////For Checking Through 'Local Storage' ///////////////////////////
					//////////alert("localStorage.getItem(key) == "+localStorage.getItem("key"));
					
					/*if(localStorage.getItem("key") != null && localStorage.getItem("key") != undefined){
						var tx1 = localStorage.getItem("key").split("@serverString@");
						////////alert("tx1 1//// == "+tx1);
					}*/
					//var tx1 = localStorage.getItem("key").split("@");
					//strfrmServer = localStorage.getItem("key")
					//////////////////////////////////////////////////////////////////////////////
				
					if(strfrmServer != undefined){
						//////////alert("strfrmServer 2 == "+strfrmServer);
					
						
						var tx1 = strfrmServer.split('@serverString@');
						//////////alert("tx1  == "+tx1);
						
					   
					   $(".input1").val(String(tx1[0]));
					 
						
   						temp1 = String(tx1[1]).split(",");
						q2 = String(tx1[2]);
						
						val1=temp1[10]
					//val1=7;
					for (var i = 0; i<40; i++) {
						
						$(".figs1"+i).hide()
						$(".figs2"+i).hide()
						$(".figs3"+i).hide();
						$(".mainTable"+i).hide();
						
						
					}
					
					//alert(val1=temp1[10])
						
					
					
					if(val1==1){
						
						$(".figs11").show();
						$(".mainTable").show()
						
					}else if(val1==2){
						
						$(".figs12").show();
						$(".mainTable").show()
						
					}else if(val1==3){
						
						$(".figs13").show();
						$(".mainTable").show()
						
						
					}else if(val1==4){
						
						$(".figs14").show();
						$(".mainTable").show()
						
					}else if(val1==5){
						
						$(".figs15").show();
						$(".mainTable").show()
						
					}else if(val1==6){
						
						$(".figs16").show();
						$(".mainTable").show()
						
					}else if(val1 == 7){
						
						$(".figs17").show();
						$(".mainTable").show()
						
					}else if(val1==8){
						
						$(".figs18").show();
						$(".mainTable").show()
						
					}else if(val1==9){
						
						$(".figs19").show();
						$(".mainTable").show()
						
					}else if(val1==10){
						
						$(".figs20").show();
						$(".mainTable").show()
						
					}else if(val1==11){
						
						$(".figs21").show();
						$(".mainTable").show()
						
					}else if(val1==12){
						
						$(".figs22").show();
						$(".mainTable").show()
						
					}else if(val1==13){
						
						$(".figs23").show();
						$(".mainTable").show()
						
					}else if(val1==14){
						
						$(".figs24").show();
						$(".mainTable").show()
						
					}else if(val1==15){
						
						$(".figs25").show();
						$(".mainTable").show()
						
					}else if(val1==16){
						
						$(".figs26").show();
						$(".mainTable").show()
						
					}else if(val1==17){
						
						$(".figs27").show();
						$(".mainTable").show()
						
					}else if(val1==18){
						
						$(".figs28").show();
						$(".mainTable").show()
						
					}else if(val1==19){
					
						$(".figs29").show();
						$(".mainTable").show()
						
					}else if(val1==20){
						
						$(".figs30").show();
						$(".mainTable").show()
						
					}else if(val1==21){
						
						$(".figs31").show();
						$(".mainTable").show()
						
					}else if(val1==22){
						
						$(".figs32").show();
						$(".mainTable").show()
						
					}else if(val1==23){
						
						$(".figs33").show();
						$(".mainTable").show()
						
					}else if(val1==24){
						
						$(".figs34").show();
						$(".mainTable").show()
						
					}else if(val1==25){
						
						$(".figs35").show();
						$(".mainTable").show()
						
					}else if(val1==26){
						
						$(".figs36").show();
						$(".mainTable").show()
						
					}
					
					
			 
					
					y1=Number(temp1[0])
					y5=Number(temp1[0])+Number(4);
				
	               q1 = "El número de computadoras vendidas por una compañía desde <b>"+y1+"</b> hasta <b>"+y5+"</b> se muestra en la gráfica.";
				   var question_Rotate_Arr = new Array();
	               question_Rotate_Arr = ["<span class='brt1'></span> ¿Cuál es el por ciento de "+temp1[3]+" en ventas en <b>"+temp1[4]+"</b> sobre las ventas en <span class='sl12'> <b>"+temp1[5]+"</b>?</span>"];
	
	             //  q2 = question_Rotate_Arr[Number(next_val)%Number(question_Rotate_Arr.length)];
////alert(q2+"  q2")
	
					document.getElementById("variable1").innerHTML=q1;
					document.getElementById("variable2").innerHTML=q2;
					  //alert("")
					
					a1 = temp1[3]+" actual";
					(temp1[3] == "Aumento")?(a2 = temp1[6]+"  –  "+temp1[7]):(a2 = temp1[7]+"  –  "+temp1[6]);
					(temp1[3] == "Aumento")?(a3 = Number(temp1[6])-Number(temp1[7])):(a3 = Number(temp1[7])-Number(temp1[6]));
					a4 = "el por ciento de "+temp1[3];
					a5 = a3;
					a6 = temp1[7];
					a7s = (Number(a5)*100/Number(a6));
					a7ss = Number(a7s.toFixed(2));
					a7=a7ss+"%"

                    //a8 = "The "+temp1[3]+" in sales in <b>"+temp1[4]+"</b> over those in <b>"+temp1[5]+"</b> is <b><font color = '#ff0000'>"+a7+"</font></b>."
					
					
					
                   
				   document.getElementById("demo1").innerHTML=a1;
				   document.getElementById("demo2").innerHTML=a2;
				   document.getElementById("demo3").innerHTML=a3;
				   
				   
				   
				   document.getElementById("demo1a").innerHTML=a1;
				   document.getElementById("demo2a").innerHTML=a2;
				   document.getElementById("demo3a").innerHTML=a3;
				   
				   
				   
				   
				   document.getElementById("demo4").innerHTML=a4;
				   document.getElementById("demo5").innerHTML=a5;
				   document.getElementById("demo6").innerHTML=a6;
				   
				   
				   document.getElementById("demo4a").innerHTML=a4;
				   document.getElementById("demo5a").innerHTML=a5;
				   document.getElementById("demo6a").innerHTML=a6;
				  
				  
				  
				  document.getElementById("demo7").innerHTML=a7;
				   document.getElementById("demo7a").innerHTML=a7;
				   
				   document.getElementById("demo9").innerHTML=temp1[5];
				   document.getElementById("demo10").innerHTML=temp1[4];
				   
				   document.getElementById("demo11").innerHTML=temp1[6];
				   document.getElementById("demo12").innerHTML=temp1[7];
							
							
						
						//////////////NFR////////////////////
						final_score = String(tx1[3]);
						//////////////NFR//////////////////
						Attempted_score = String(tx1[4]);
						
						
						
						
						
					//////// For NFR //////////////
					
				
					if (SOpt == 2) {
								$(".solution").show();
								$(".calc").css("pointer-events","none");
								$(".done1").css("pointer-events","none")
								$(".input1").css("pointer-events","none")
								$(".input1").attr("disabled",true)
								
                                DoneClicked = 1;
								$(".done1").click(function(){ 
                        $(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6'});
                        });
						        $(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6'});
						
						if (final_score == 1) {
								$(".solution").css('visibility','hidden');
								$(".newSet").css('visibility','hidden');
								$(".newSet").hide();
						} else {
								$(".solution").css('visibility','visible');
								$(".solution").show();
								$(".newSet").css('visibility','visible');
								$(".newSet").show();
								$(".newSet").click(function(){
								$(".newSet,.solution").css('visibility','hidden');
								});
								
								}
		
							}
						}
						
					 
						
						/////// Closed NFR //////////////
						
						if (SOpt == 3) {        /////////for educo testing mode////////
							//////alert("hi")
								$(".solution").show();
								$(".newSet").show();
								$(".newSet,.solution").css('visibility','visible');
								$(".calc").css("pointer-events","auto");
								$(".done1").css("pointer-events","auto")
								$(".input1,.input2").css("pointer-events","auto")
								$(".input1,.input2").attr("disabled",false)
								
                                DoneClicked = 1;
								$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								$(".done1").click(function(){
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								})
								/*if (final_score == 1) {
										$(".solution").show();
										$(".newSet").show();
								} else {
										$(".solution").show();
										$(".newSet").show();
										
								}*/
		
							}                  /////////End for educo testing mode////////
				}
				////////////////////////////////////////////////////
				
				
				////////////////////////////////////////////////////
				doneButton = function() {
						
					//////////alert("In Final Submit")
					//////alert(numerator_Arr+"   ")
					var Responseflag="false";
					
					var FeedbackFlag = "false";
					var FeedbackText = "Incorrect";
					
					$(".FB_TxtBox").html("");
					/// make changes here according to question 
					feed_flag = 0;
					
					//////// For NFR //////////////
					final_score = 0;
					Attempted_score = attempted_num;
					/////// Closed NFR //////////////
					
					 $(".correct,.incorrect,.blankMessage,.prompt,.promptComma,.ReducePromt,.prompt1_New,.blankMessage_New,.blankMessage_New,.incomplete_New").hide();
					
				 if(checkMobile==false){
							var k1_text = trimSpaces(document.getElementById("inputText").value);
							
					 }else if(checkMobile){
						 	var k1_text = trimSpaces(document.getElementById("inputTexta").value)
							
					 }
  					
                   
					
					 ent_ans1 = trimzero(k1_text);
					
					var ans_Num = 0;
	                
					(temp1[3] == "Aumento") ? (ans_Num=Number(temp1[6])-Number(temp1[7])) : (ans_Num=Number(temp1[7])-Number(temp1[6]));
	
	
	
	
	anss = Number(ans_Num)*100/Number(temp1[7])
	anss1=Number(anss.toFixed(2))
	ans=anss1+"%";
	
	
	//alert(ans+"......ans")
	
	wt_id1 = k1_text.indexOf("%");
     if(wt_id1!=-1)
	{
		
	 ent_ans1 = Number(k1_text.substring(0,wt_id1))+"%"+k1_text.substring(wt_id1+1,k1_text.length);
	}
	else
	{
		ent_ans1 = k1_text;
	}                                      
//////////////////////////////////////////////////////////////////////////
					
					if(ent_ans1 == ""  ) {
						
						//alert("  ")
						
						Responseflag="false";
						
						var FeedbackText = "";
						
						
						//alert(" responce")
						
						
						
						
						$(".FB_TxtBox").html("");
						
					//if(String(navigator.userAgent).indexOf("Mobile") == -1 ){
						//document.getElementById("inputText").innerHTML="";
						//document.getElementById("inputTexta").innerHTML="";
				
					 
					//}else{
					
					
					 
					//}
						
					   
						
						//alert("  in resonce flag false  ")
						
						$(".prompt").hide();
						$(".blankMessage_New").show().delay(2500).hide(0);	
						$(".incomplete_New").hide();
						////////// for NFR //////
						$(".done1").click(function(){ 
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
												});
						/////////////for NFR/////////////
						
					}else {
						Responseflag="true";
						
						 
							
				    	if (ent_ans1==ans){


							FeedbackFlag = "true";
							FeedbackText = "Correcto";
							//////// For NFR //////////////
							final_score = 1;
							/////// Closed NFR //////////////
						} else if (wt_id1 == -1) {
								
									document.getElementById("whatValue").innerHTML = k1_text;
									$(".incomplete_New").show().delay(2500).hide(0);	
						    FeedbackFlag = "false";
							FeedbackText = "";
							feed_flag = 1;
							 
					
				        }  else {
							FeedbackFlag = "false";
							FeedbackText = "Incorrecto";
						}
						
						if(feed_flag==1) {
							
						$(".done1").click(function(){
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
												   })
						
							}
									
							/////////////////////////////////////////////
						///////////////////////////////
						//////// For NFR //////////////
						if(feed_flag!=1){
					
				if (SOpt == 2) {
										$(".solution").show();
										$(".calc").css("pointer-events","none");
										$(".done1").css("pointer-events","none")
										$(".input1,.input2").css({"pointer-events":"none"})
										$(".input1,.input2").attr("disabled",true)
										DoneClicked = 1;
								$(".done1").click(function(){ 
								$(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6'});
								});
								$(".done1").css({'color':'#000000','box-shadow':'none','background':'#e6e6e6'});
										
								$(".tab").focus();		
								
										
										
								if (final_score == 1) {
										$(".solution").css('visibility','hidden');
										$(".newSet").css('visibility','hidden');
				
								} else {
									////alert('')
										$(".solution").css('visibility','visible');
										//$(".solution").css('visibility','visible');
										$(".newSet").css('visibility','visible');
										$(".newSet,.solution").show();
										$(".newSet").click(function(){
								        $(".newSet,.solution").css('visibility','hidden');
								
															
								});
						}
				
								}
								
								
								if (SOpt == 3) {                    /////////for educo testing mode////////
							
								$(".solution").show();
								$(".newSet").show();
								$(".newSet,.solution").css('visibility','visible');
								$(".calc").css("pointer-events","auto");
								$(".done1").css("pointer-events","auto")
								$(".input1,.input2").css("pointer-events","auto")
								$(".input1,.input2").attr("disabled",false)
								
                                //DoneClicked = 1;
								$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								$(".done1").click(function(){
 									$(".done1").css({"background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)", "background": "linear-gradient(to bottom, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-gradient(  linear,  left bottom,  left top,  color-stop(19, rgb(255, 255, 0)),  color-stop(rgb(255, 153, 0)))","background-image": "-o-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-moz-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-webkit-linear-gradient(top, #ffff00 19%, #ff9900 100%)","background-image": "-ms-linear-gradient(top, #ffff00 19%, #ff9900 100%)"});
								});
								/*if (final_score == 1) {
										$(".solution").show();
										$(".newSet").show();
								} else {
										$(".solution").show();
										$(".newSet").show();
										
								 }*/
						}   
							}
						
						/////// Closed NFR //////////////
						if (feed_flag != 1) {
							////////alert(FBOpt+"  == FBOpt")
							if (FBOpt == 2 || FBOpt == undefined) {
								// if feedback is enabled
								$('.FB_TxtBox').html(FeedbackText);
								
							} else {
								
								$('.FB_TxtBox').html("Respondido");
								
							}
						}
					}
					/*Construct a string out of user answer so that 
					when this string is passed back to this file, it can be parsed
					to reproduce the user answer. Keep the string as small as possible
					*/
					//////////////For Checking Through 'Local Storage' ///ss_an1////////////////////////
					////////alert(ta1+" == ta1")
					
					
					
					/*localStorage.removeItem("key")
					//////alert(ta1+" ta1 "+ta2+" ta2 "+aa_final+" "+aa1_final+q1_text+numb)
					
					localStorage.setItem("key",$('.input1').val()+"@serverString@"+val1+"@serverString@"+final_score+"@serverString@"+Attempted_score);
					////////alert("jjjj")
					localStorage.getItem("key");*/
					
					
					//////alert("localStorage.getItem(key)..Hello  ==  "+localStorage.getItem("key"));
					
 					
			//////////////////////////////////////////////////////////////////
					
					
					
					
					if(Responseflag == "false"){
						
					
					
					
					
					}else{
					
						
						
						
				/*	localStorage.removeItem("key")
					
					
					
					localStorage.setItem("key",$('.input1').val()+"@serverString@"+temp1+"@serverString@"+q2+"@serverString@"+final_score+"@serverString@"+Attempted_score);
					////////alert("jjjj")
					localStorage.getItem("key");*/
					
					
					
					
				//	alert("localStorage.getItem(key)..Hello  ==  "+localStorage.getItem("key"));
					
					
					
					
					
					var answerString = $('.input1').val()+"@serverString@"+temp1+"@serverString@"+q2+"@serverString@"+final_score+"@serverString@"+Attempted_score;
					 
					
					
					//////////alert("answerString == "+answerString);
					//writeans(Qid,answerString,FeedbackFlag);
 					//8thMar2018 BLR Comments
					//Start
					var score = 0;
					if (FeedbackFlag == 'true')
						score = 1;
					parent.writeans(Qid, answerString, FeedbackFlag, score, Attempted_score);
					
					}
					
					//End
					
				};
						
				 			
		//   preloadans(localStorage.getItem("key"));
		
			
		
				
		
			 showSolution = function(){
				 
				 sb=0;
				 autorunVar = 1////0 when in teacher mode
				 
				     $(".correct,.incorrect,.blankMessage,.prompt,.promptComma").hide();
					 $(".autorun").css('opacity','0.4');
					 $(".autorun").attr('disabled','disabled');	
					 $(".autorun").css('cursor','default');
 					 $(".solutionMainSteps,.solutionText").hide();
					 $(".solutionMainSteps,.solutionText").hide();

 					 $(".solutionMainSteps,.solutionText").show().css({"display":"inline-block"});

					
					}
				
/*///////////////////////////////////////////////////////////////////////////*/

/*//////////////////////////////////////////////////////////////////////////*/								
		$(".calc_btn,.back,.delete,.clear,.solution").each(function (i) { $(this).attr('tabindex', -1); })					
/*/////////////////////////////////////////////////////////////////////////*/
	
}); //////end of Main/////////


