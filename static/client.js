$(document).ready(function(){
    console.log("Testing JS");    
    $(".KitchenKits, .BedroomKits, .StationeryKits, .OurStory, .ElectricalAppliance, .ShoppingCart").hide();
    
       
   $("#home").click(function(){
       console.log("home");
       $(".home").show();
       $(".KitchenKits, .BedroomKits, .StationeryKits, .OurStory, .ElectricalAppliance, .ShoppingCart").hide();
       
    }); 
    
   $("#KitchenKits ,#NavKitchenKits").click(function(){
        console.log("Testing Kitchen Click");
         $(".KitchenKits, .ElectricalAppliance").show();
        $(".home, .BedroomKits, .StationeryKits, .OurStory, .ShoppingCart").hide();
       
    });
    
        
   $("#BedroomKits, #NavBedroomKits").click(function(){
        console.log("Testing Bedroom Click");
         $(".BedroomKits, .ElectricalAppliance").show();
        $(".home, .KitchenKits, .StationeryKits, .OurStory, .ShoppingCart").hide();
       
    });
    
        
   $("#StationeryKits, #NavStationeryKits").click(function(){
        console.log("Testing stationery Click");
         $(".StationeryKits, .ElectricalAppliance").show();
        $(".home, .BedroomKits, .KitchenKits, .OurStory, .ShoppingCart").hide();
       
    });
    
        
   $("#ElectricalAppliance, #NavElectricalAppliance").click(function(){
        console.log("Testing electrical appliance Click");
         $(".ElectricalAppliance").show();
        $(".home, .BedroomKits, .StationeryKits, .OurStory, .KitchenKits, .ShoppingCart").hide();
       
    });
    
    
        
   $("#OurStory, #NavOurStory, .KnowMore").click(function(){
        console.log("Testing OurStory Click");
         $(".OurStory").show();
        $(".home, .BedroomKits, .KitchenKits, .StationeryKits, .ElectricalAppliance, .ShoppingCart").hide();
       
    });
    
    $("#ShoppingCart, #NavShoppingCart").click(function(){
        console.log("Testing ShoppingCart Click");
         $(".ShoppingCart").show();
        $(".home, .BedroomKits, .KitchenKits, .StationeryKits, .ElectricalAppliance, .OurStory").hide();
       
    });
   


});