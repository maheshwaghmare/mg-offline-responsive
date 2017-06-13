// Reset
function resetscreen(){
	$("#target").animate({ width: "100%", "height" : "1000px"}, 1000 );
	$("#result").css({	"background" : "none" ,  "padding-top": "0em", }); 
}

// Screen 320px - 480px
function screen320px_480px(){
	$("#target").animate({	width: "320px", height: "454px" }, 1000 ); 
	$("#result").css({	"background" : "url('images/iphone-portrait.png') no-repeat scroll center top transparent" ,  "padding-top": "6em", "height" : "620px"}); 
}

// Screen 480px - 320px
function screen480px_320px(){
	$("#target").animate({	width: "480px", height: "267px"	}, 1000 );
	$("#result").css({	"background" : "url('images/iphone-landscape.png') no-repeat scroll center top transparent" ,  "padding-top": "2.7em", "height" : "620px"}); 
}

// Screen 320 x 568
function screen320px_568px(){
	$("#target").animate({	width: "320px", height: "503px"	}, 1000 ); 
	$("#result").css({	"background" : "url('images/iphone-5-portrait.png') no-repeat scroll center top transparent" ,  "padding-top": "7.7em", "height" : "665px"}); 
}

// Screen 568 x 320
function screen568px_320px(){
	$("#target").animate({	width: "567px", height: "266px"	}, 1000 ); 
	$("#result").css({	"background" : "url('images/iphone-5-landscape.png') no-repeat scroll center top transparent" ,  "padding-top": "2.7em", "height" : "320px"}); 
}

// Screen 240 x 320
function screen240px_320px(){
	$("#target").animate({	width: "238px", height: "300px"	}, 1000 ); 
	$("#result").css({	"background" : "url('images/android-240x320-portrait.png') no-repeat scroll center top transparent" ,  "padding-top": "4.1em", "height" : "410px"}); 
}

// Screen 320 x 240
function screen320px_240px(){
	$("#target").animate({	width: "320px", height: "220px"	}, 1000 ); 
	$("#result").css({	"background" : "url('images/android-320x240-landscape.png') no-repeat scroll center top transparent" ,  "padding-top": "2.1em", "height" : "410px"}); 
}

// Screen 380 x 685
function screen380px_685px(){
	$("#target").animate({	width: "379px", height: "662px"	}, 1000 ); 
	$("#result").css({	"background" : "url('images/android-380x685-portrait.png') no-repeat scroll center top transparent" ,  "padding-top": "6.5em", "height" : "790px"}); 
}

// Screen 685 x 380
function screen685px_380px(){
	$("#target").animate({	width: "685px", height: "363px"	}, 1000 ); 
	$("#result").css({	"background" : "url('images/android-685x380-landscape.png') no-repeat scroll center top transparent" ,  "padding-top": "6px", "padding-top": "3em", "height" : "500px"}); 
}

// Screen 768 x 1024
function screen768px_1024px(){
	$("#target").animate({	width: "768px", height: "900px"	}, 1000 ); 
	$("#result").css({	"background" : "url('images/ipad-portrait.png') no-repeat scroll center top transparent" ,  "padding-top": "6px", "padding-top": "14.7em", "height" : "1030px"}); 
}

// Screen 1024 x 768
function screen1024px_768px(){
	$("#target").animate({	width: "1024px", height: "645px"	}, 1000 ); 
	$("#result").css({	"background" : "url('images/ipad-landscape.png') no-repeat scroll center top transparent" ,  "padding-top": "6px", "padding-top": "14em", "height" : "780px"}); 
}

// Screen 600 x 1024
function screen600px_1024px(){
	$("#target").animate({	width: "600px", height: "880px"	}, 1000 ); 
	$("#result").css({	"background" : "url('images/kindle-portrait.png') no-repeat scroll center top transparent" ,  "padding-top": "6px", "padding-top": "10.4em", "height" : "1200px"}); 
}

// Screen 1024 x 600
function screen1024px_600px(){
	$("#target").animate({	width: "1024px", height: "395px"	}, 1000 ); 
	$("#result").css({	"background" : "url('images/kindle-landscape.png') no-repeat scroll center top transparent" ,  "padding-top": "6px", "padding-top": "15.2em", "height" : "650px"}); 
}