$(function(){

	var i = true;
	var lig = "off";
	$(".check-on-off").on("click", function(){
		if (i){
			$(this).css(
				{
					"margin-left": "28px",
					"box-shadow": "0 0 0 0 #fff",
					"transition": "margin-left 0.5s ease"
				}
			);

			$(".check-on-off-content").css(
				{
					"background-color":"#35B30E",
					"border": "2px solid #35B30E",
					"transition": "background-color 0.7s ease",
				}
			);
			i = false;
			lig = "on";
		}else{
			$(this).css(
				{
					"margin-left": "0",
					"box-shadow": "1px 1px 2px 1px #d5d5d5"
				}
			);
			$(".check-on-off-content").css(
				{
					"background-color":"#fff",
					"border": "2px solid #d6d6d6",
				});
			i = true;
			lig = "off";
		}

		return lig;
		
	});





});