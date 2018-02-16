$(document).ready(
function()
{
	$("#nav_1 ul li").hover(
		function() {
		$('.list',this).show("fast");
		},
		function() {
		$('.list',this).hide("fast");	
		}
	);
}
);

