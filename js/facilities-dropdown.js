$(document).ready(function(){
  // Show hide popover
  $("#facilities-btn").click(function(){
      $(this).find(".facilities-dropdown-content").slideToggle("fast");
  });
});
$(document).on("click", function(event){
  var $trigger = $("#facilities-btn");
  if($trigger !== event.target && !$trigger.has(event.target).length){
      $(".facilities-dropdown-content").slideUp("fast");
  }            
});