$(document).ready(()=>{
    /*This is to animate the memu bar to open and close */
    $(document).on("click", ".menu-Icon span",  (e)=> {
        $('.navigation').removeClass('close').addClass('open');
    });

    $(document).on("click", ".menu-Icon-close .X-close ",  (e)=> {
        $('.navigation').removeClass('open').addClass('close');
    });

    // To active scroll bar in the mobile menu bar mode
    $(".menu-Icon span").click( (e)=> {
        $('body').addClass('.hidden-scrolling');
    });

    $(".menu-Icon-close img ").click( (e)=> {
    
        $('body').removeClass('.hidden-scrolling');
    });

    /*This add and remove tint from the body of the website when the menu bar is opened and closed on mobile view */
     $(document).on("click",".menu-Icon span", (e)=>{
        $('.menu-overlay').removeClass('close').addClass('open')
    });

    $(document).on("click",".menu-Icon-close .X-close ",  (e)=>{
        $('.menu-overlay').removeClass('open').addClass('close');
        
   });

  /*This  remove tint and menu bar from the body of the website when the tint div is clicked */
   $(".menu-overlay",).click( function(event){
      $(this).removeClass('open').addClass('close');

      $('.navigation').removeClass('open').addClass('close');

      $('.menu-Icon-close img').removeClass('open').addClass('close');

       // To active scroll bar in the mobile menu bar mode
      $('body').removeClass('.hidden-scrolling');
      

    });


    $(document).on("click",".navigation", function(event){

        const target=$(event.target),
        mediaSize= 991,
        homeSubList=$(event.target.parentElement),
        revealSubMenu= $(homeSubList).add('.sub-menu');

        if($(target).attr("data-toggle")&&(window.innerWidth<=mediaSize)){
            
        $(homeSubList).toggleClass("active");
       
        $( revealSubMenu).toggleClass('open');
        
        
       };
   
    }); 
    

    //----------- Gallery Image Slide------------------

    const slideImage = $(".img-slide"),
    slideImages = $('.img-slide')[0],
    numberOfImages =$(".img-slide").length,
    carDescription = $('.car-description'),
    carDescriptions =$('.car-description')[0],
    navigationsDots = $(".navigation-dot"),
    slideContainer = $('.main-container'),
    slideWidth = $('.img-slide-container')[0].clientWidth;
     
     
  // AlLIGNING IMAGE SLIDE HORIZONTALLY
   let setUpSlider = function init() {
       // set all image position
       //slide image [0] = 0
       //slide image [1] = 100%
       //slide image [2] = 200%
       //and so on.

       // To iterate and give a % value to each left of the image slide, we use the foreach loop   

       $(slideImage).each(function(i,img){

            $(img).css('left',i * 100 + "%" );
       });

       $(carDescription).each(function(i,car){

            $(car).css('left',i * 100 + "%" );
       });


       $(slideImages).addClass("active");

       $(carDescriptions).addClass("active");


       //call the function for navigator dot inside the setUpSlide function
       createImageNavDot ();

    };
    setUpSlider();

    //>>>> Activated function when (on) next and previous button clicked

   function moveSlide(slideNumber){
       
        $(slideContainer).css("transform","translateX(-" + slideWidth * slideNumber +"px");

        currentSlide=slideNumber;
        imageDescriptionNavDotActiveClass()
    }

    //>>>>The next button Return Function

    let currentSlide = 0;

    $(".next-btn").click( function(){

        currentSlide++;
       
        moveSlide(currentSlide); //why did we pass currentSlide in here

        if (currentSlide === numberOfImages){
            moveSlide(0);
            // currentSlide = 0;
            return;
        }

    
    }) 
 
    //>>>>The Previous button Return Function

    $(".previous-btn").click( function(){

        currentSlide--;
        
        moveSlide(currentSlide); //why did we pass currentSlide in here

        if (currentSlide < 0){
            moveSlide(numberOfImages-1); //numberOfImages-1 so that it has the same value of the last image array
            // currentSlide = numberOfImages-1;
            return;
        }
    })
    
    //  >>>>set the active to current imageSlide and navigationDot 

    function imageDescriptionNavDotActiveClass(){
        let //  for Image Slide
        activeImageSlide = $(".img-slide").addClass("active"),
        curentActiveImageSlide=$(slideImage)[currentSlide],

        // for Car Discription slide
        activeCarDescription = $('.car-description').addClass("active"),
        curentActiveCarDescription=$(carDescription)[currentSlide],

        // for nativagation dot slide
        activeNavigationDot = $('.single-dot').addClass("active"),
        currentActiveNavigationDot=$('.single-dot')[currentSlide];

        //for image Slide
        $(activeImageSlide).removeClass("active");
        $(curentActiveImageSlide).addClass("active");

        //for car discription slide
        $(activeCarDescription).removeClass("active");
        $(curentActiveCarDescription).addClass("active");

        // for nativagation dot slide
        $(activeNavigationDot).removeClass("active");
        $(currentActiveNavigationDot).addClass("active");
    };


   //  >>>>> create navigation dots & Slide Images on navigation dot click

    function createImageNavDot (){
    
        for( let i=0; i<numberOfImages; i++){
           
            navigationsDots.append("<div class='single-dot'></div>");// create the div with class name single-dot so the single-dot csss properties takes effect.

           let singleDot =navigationsDots.children(),
           singleDotActive =navigationsDots.children()[i];
            $(singleDotActive).on("click", function(){
               
                moveSlide(i);
            })
        };

        let singleDotPosition= $('.single-dot')[0]; //next or prev image indicator
        $(singleDotPosition).addClass("active");
    };




 //---------------------------Tab Section---------------------------

    //>>>>Heading Slides

    let tabHeader = $(".exploreCarTabHeaders").children(),
    tabIndicator = $(".tabIndicator"),
    tabBody = $(".exploreCarTabBody").children(),
    tabHeaderDivs= $(".exploreCarTabHeaders").children().length;

    // .children  fetches the divs under the parent div like ".exploreCarTabHeaders"
    
    function headingBodySlide(){
        for ( let i=0; i<tabHeaderDivs; i++){

            let divTabHeading = $(".exploreCarTabHeaders").children(),
            divOutWidth=$( divTabHeading).outerWidth()
            divOutWidthOnLoop=$( divOutWidth)[i];

            function indicatorWidth (){
                if($(divTabHeading).hasClass("active")){
                    $(".tabIndicator").css("width",   divOutWidth); 
                }
            }
            indicatorWidth();



            let tabHeadingActivate =$(".exploreCarTabHeaders").children()[i],
            tabBodyActivate =$(".exploreCarTabBody").children()[i];


            $(tabHeadingActivate).on("click",function(e){
                //slide tab heading
                $(tabHeader).removeClass("active");
                $(tabHeadingActivate).addClass("active");
                // slide tab body
                $(tabBody).removeClass("active");
                $(tabBodyActivate).addClass("active");
    
                // slide tab underline
                // on click of tabHeadingActivate the outerWidth and offset(which returns the top and left property of a border box, which excludes margins ) of the tab heading is targeted. The outerWidth Value and Offset value of the tabHeadingActivate is then given to the ".tabIndicator" and looped over.
                let tab1Target= e.target,
                outWidth = $(tab1Target).outerWidth(),
                offSetLeft =$(tab1Target).offset() ;
    
                
                if ($(tabHeader).hasClass("active")){
                 $(".tabIndicator").css("left", offSetLeft.left +"px");
                }
            });
        }
    }   
    headingBodySlide();

    // -----------------Mobile view Tab Heading---------------

    function mobileViewTab (){

        const mobileSelected= $(".mobTabDisplayCon"),
        itemsContainer =$(".mobileTabItemCon"),
        itemsContainerKids =$(".mobileTabItemCon").children(),
        itemsContainerKidsLength =$(".mobileTabItemCon").children().length,
        itemsList =$("label").length,
        itemsListLength =$(".items").children().length;

        $(mobileSelected).on("click", ()=>{
            $(itemsContainer).toggleClass("active");

            $(".mobTabDisplayCon").toggleClass("active");

        })



        for (let p=0; p<itemsList; p++){

            let  itemsConKidsActive =$(".mobileTabItemCon").children()[p],
            itemsKidsArray=$(".items")[p],
            mobileTabBodyActivate =$(".exploreCarTabBody").children()[p];
            mobileTabDisplayHtml=$(".mobileTabDisplay").text(),
            label = $("label")[p],
            labelHtml=$( label).text();


            $(itemsKidsArray).click(()=>{
            //    console.log("bbbb")
                 $("label").removeClass("active");
                 $(label).addClass("active");

                 if($("label").hasClass("active")){
                    $(".mobileTabDisplay").text(labelHtml);

                 };
                
                $(".mobileTabItemCon").removeClass("active");
                $(".mobTabDisplayCon").removeClass("active");
            })

            $( itemsConKidsActive).click(()=>{
                $(itemsContainerKids).removeClass("active");
                $(itemsConKidsActive).addClass("active");
                // slide tab body
                $(tabBody).removeClass("active");
                $(mobileTabBodyActivate).addClass("active");
           })
        }
    }
    mobileViewTab();

    // Tab Slide

  let  noOfSlidesOne = $(".tabOne").children().length,
  tabOneSlide = $(".tabOne").children(),
  tabOneSlides = $(".tabOne").children()[0],
  tabOneSlideWidth = tabOneSlides.clientWidth,
  noOfSlidesTwo = $(".tabTwo").children().length,
  tabTwoSlide = $(".tabTwo").children(),
  tabTwoSlides = $(".tabTwo").children()[0],
  tabTwoSlideWidth = tabTwoSlides.clientWidth,
  noOfSlidesThree = $(".tabThree").children().length,
  tabThreeSlide = $(".tabThree").children(),
  tabThreeSlides = $(".tabThree").children()[0],
  tabThreeSlideWidth = tabThreeSlides.clientWidth,
  noOfSlidesFour = $(".tabFour").children().length,
  tabFourSlide = $(".tabFour").children(),
  tabFourSlides = $(".tabFour").children()[0],
  tabFourSlideWidth = tabFourSlides.clientWidth;



    let tabSlideNoOne= 0,
    tabSlideNoTwo=0,
    tabSlideNoThree=0,
    tabSlideNoFour=0;

    function vehicleSlide(slide){

        $(".tabOne").css("transform","translateX(-"+tabOneSlideWidth*slide +"px");
        tabSlideNoOne=slide;

        let slidesOneActivate =$(".tabOne").children()[tabSlideNoOne];

        $(tabOneSlide).removeClass("active");
        $(slidesOneActivate).addClass("active");
    } 
        
    function  vehicleSlideTwo(slide){
        $(".tabTwo").css("transform","translateX(-"+tabTwoSlideWidth*slide +"px");
        tabSlideNoTwo=slide;

        let slidesTwoActivate =$(".tabTwo").children()[tabSlideNoTwo];

        $(tabTwoSlide).removeClass("active");
        $(slidesTwoActivate).addClass("active");
    } 

    function vehicleSlideThree(slide){
        $(".tabThree").css("transform","translateX(-"+tabThreeSlideWidth*slide +"px");
        tabSlideNoThree=slide;

        let slidesThreeActivate =$(".tabThree").children()[tabSlideNoThree];

        $(tabThreeSlide).removeClass("active");
        $(slidesThreeActivate).addClass("active");
    }

    function vehicleSlideFour(slide){
        $(".tabFour").css( "transform","translateX(-"+tabFourSlideWidth*slide +"px");
        tabSlideNoFour=slide;
    
        let slidesFourActivate =$(".tabFour").children()[tabSlideNoFour];
    
        $(tabFourSlide).removeClass("active");
        $(slidesFourActivate).addClass("active");
    }


    $(".frontBtn").click(function(){

        if($(".tabOne").hasClass("active")){
            tabSlideNoOne++;
        
            vehicleSlide(tabSlideNoOne);
            
        }else if($(".tabTwo").hasClass("active")){
            tabSlideNoTwo++;
            vehicleSlideTwo(tabSlideNoTwo);

        }else if ($(".tabThree").hasClass("active")){
            tabSlideNoThree++;
            vehicleSlideThree(tabSlideNoThree);

        }else if ($(".tabFour").hasClass("active")){
            tabSlideNoFour++;
            vehicleSlideFour(tabSlideNoFour);

        };
        
        if(tabSlideNoOne>=noOfSlidesOne){
            vehicleSlide(noOfSlidesOne);
        }
        if(tabSlideNoTwo>=noOfSlidesTwo){
            vehicleSlideTwo(noOfSlidesTwo);
        }
        if(tabSlideNoThree>=noOfSlidesThree){
            vehicleSlideThree(noOfSlidesThree);
        }
        if(tabSlideNoFour>=noOfSlidesFour){
            vehicleSlideFour(noOfSlidesFour);
        };
    });


    $(".backBtn").click(function(){

        if($(".tabOne").hasClass("active")){
            tabSlideNoOne--;
            vehicleSlide(tabSlideNoOne);
            
        }else if($(".tabTwo").hasClass("active")){
            tabSlideNoTwo--;
            vehicleSlideTwo(tabSlideNoTwo);

        }else if ($(".tabThree").hasClass("active")){
            tabSlideNoThree--;
            vehicleSlideThree(tabSlideNoThree);

        }else if ($(".tabFour").hasClass("active")){
            tabSlideNoFour--;
            vehicleSlideFour(tabSlideNoFour);

        };
        
        if(tabSlideNoOne<0){
            vehicleSlide(0);
        }
        if(tabSlideNoTwo<0){
            vehicleSlideTwo(0);
        }
        if(tabSlideNoThree<0){
            vehicleSlideThree(0);
        }
        if(tabSlideNoFour<0){
            vehicleSlideFour(0);
        };
    });  

    
    
    




});
