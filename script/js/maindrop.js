(function($){				
    jQuery.fn.lightTabs = function(options){
        
        var createTabs = function(){
            tabs = this;
            i = 0;
            
            showPage = function(i){
                $(tabs).children(".menu-tab").children("#drop-div").hide();
                $(tabs).children(".menu-tab").children("#drop-div").eq(i).show("1000");
                $(tabs).children(".tabs__menu").children("#menu__drop").removeClass("active");
                $(tabs).children(".tabs__menu").children("#menu__drop").eq(i).addClass("active");
            }
            
            showPage(0);				
            
            $(tabs).children(".tabs__menu").children("#menu__drop").each(function(index, element){
                $(element).attr("data-page", i);
                i++;                        
            });
            
            $(tabs).children(".tabs__menu").children("#menu__drop").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });				
        };		
        return this.each(createTabs);
    };	
})(jQuery);
$(document).ready(function(){
    $(".tabs").lightTabs();
});