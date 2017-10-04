var $=jQuery.noConflict();

$(document).ready(function(){
    
    
/* Codes specifically for closing & opening Sidebar Nav Menu */
    
    // When clicking on the "X" icon, it will close the sidebar
    $(".fa-times").click(function(){        
        $(".sidebar").addClass("hide-menu");
        $(".toggling").removeClass("hide");
        
    });
    
    // When clicking on the hamburger icon, it will open the sidebar
    $(".toggling").click(function(){
        $(".sidebar").removeClass("hide-menu");
        $(".toggling").addClass("hide");
        
    });
    
    
/* Codes specifically for user selection of menu items */
    $("nav li.sidebar-item a").click(function(){
        $(".info > section").removeClass("active");
        var href=$(this).attr("href");
        $(href).addClass("active");
        console.log("href ",href);
        
        $("nav li.sidebar-item a h5").removeClass("select")
        $(this).find("h5").addClass("select");
        
        // Close the sidebar
        $(".sidebar").addClass("hide-menu");
        $(".toggling").removeClass("hide");
        
        
/* Codes to animate the other section */
        if ($(href).hasClass("active")){
            animationSection(href);
        }
    
    });

/* Animate the first section upon opening website */
    animationSection('#section1');
    
}); // end -- $(document).ready(function(){})


/* function to animate Section elements (h1, h3, p, and form) */
function animationSection(section){
    if (section == "#section1"){
        $(section +' img').addClass('animated rubberBand');
        $( section +' h1').addClass('animated slideInRight');
    }
    $( section +' .introduction h3').addClass('animated fadeInDown');
    $( section +' .introduction p').addClass('animated fadeInUp');  
    $( section +' form div').addClass('animated fadeInDown');  
    $( section +' .introduction .web img:nth-of-type(odd)').addClass('animated4 tada');
    $( section +' .introduction .web img:nth-of-type(even)').addClass('animated2 shake');  
}