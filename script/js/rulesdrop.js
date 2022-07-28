(function($){				
    jQuery.fn.lightTabs = function(options){
        
        var createTabs = function(){
            tabs = this;
            i = 0;
            
            showPage = function(i){
                $(tabs).children(".tabs__drop").children(".tabs__drop__info").hide();
                $(tabs).children(".tabs__drop").children(".tabs__drop__info").eq(i).show("1000");
                $(tabs).children(".tabs__menu").children(".tabs-item").removeClass("active");
                $(tabs).children(".tabs__menu").children(".tabs-item").eq(i).addClass("active");
            }
            
            showPage(0);				
            
            $(tabs).children(".tabs__menu").children(".tabs-item").each(function(index, element){
                $(element).attr("data-page", i);
                i++;                        
            });
            
            $(tabs).children(".tabs__menu").children(".tabs-item").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });				
        };		
        return this.each(createTabs);
    };	
})(jQuery);
$(document).ready(function(){
    $(".tabs").lightTabs();
});