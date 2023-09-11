 // jquerry == $ 

// $('selector').action()...... This syntax of jquery!

    // console.log($)

    // $('p').click();
           // that means click on p

// this is be must, first document must be ready agfter then excute the jquery.Means we have to must be written all jquery syntax under this statement... 
// this is the statement $(document).ready(function(){.......})
// $(document).ready(function() == $(function())......this is shortcut

// _________________________________________________________________________________________________




// Events in JQuery

// MouseEvent = click, doubleclick,mouseenter,mouseleave,mousedown/up event,hover.

// ________________________________________________________________________________________

// $(document).ready(function(){

//     $('p').click(function(){       
//        console.log('You clicked on p tag')
//         //   $(this).hide();
            

// });
// }); click event

// $(document).ready(function(){

//     $('p').dblclick(function(){       
//        console.log('You double clicked on p tag');
//         //   $(this).hide();
            

// });
// });//double click event

// $(document).ready(function(){

//         $('p').mouseenter(function(){       
//            console.log('You entered on p tag');
//             //   $(this).hide();
                
    
//     });
//     }); Mouse enter Evenet

// $(document).ready(function(){

//     $('p').mouseleave(function(){       
//        console.log('You leave mouse from p tag');
//         //   $(this).hide();
            

// });
// }); Mouse Leave Events 

// $(document).ready(function(){

//     $('p').mousedown(function(){       
//        console.log('You down the mouse from p tag');
//         //   $(this).hide();
            

// });
// });//Mouse down Event 

// $(document).ready(function(){
//     $("p").mouseup(function(){
//       $(this).after("<p style='color:green;'>Mouse button released.</p>");
//     });
//     $("p").mousedown(function(){
//       $(this).after("<p style='color:purple;'>Mouse button pressed down.</p>");
//     });
//   });//Mouse down/up Event

// $(document).ready(function(){

//     $('p').hover(function(){       
//        console.log('You hovered on p tag');
//         //   $(this).hide();
            

// });
// }); //hover Event

// on click Events>>>>>>.....

// $(document).ready(function(){

//     //     $('p').on('click',function(){       
//     //        console.log('You clicked on p tag');
//     //         //   $(this).hide();
                
    
//     // }); //This is only one event handling..Example
     
//     // Very main thing is that one:-

//     $('p').on(
//         { 
//             click: function() { 
//                console.log('You clicked on p tag');
//                 //   $(this).hide();
//                      },
//                      mouseleave:function() { 
//                         console.log('You leave the mouse from p tag');
//                      }
//                     });//This is multiple event handling ..Example

//     }); 

// _________________________________________________________________________________________________

// Hide & Show() Methods:-
// _________________________________________________________________________________________________


// $(document).ready(function(){

//     //         $('#wiki').hide(1000, function(){       
//     //            console.log('Hidden successfully...!!');
//     //             //   $(this).hide();
                    
        
//     //     });
//     //     //this takes two arguments 1st is time in miliseconds & 2nd is a callback fuction when its comes true or successfull.
     
//     //     $('#wiki').show(1000, function(){       
//     //         console.log('Show successfully...!!');
//     //          //   $(this).hide();
                 
     
//     //  });//this takes two arguments 1st is time in miliseconds & 2nd is a callback fuction when its comes true or successfull.
//     //    $('#btn').on('click', function(){
//     //     $('#wiki').toggle(1000);
//     //    });//this is a toggle func. hide = on click = show & show = on click = hide;
//      });

// _____________________________________________________________________________________________

// fadeout(), fadein(), fadeto(),fadetoggle():-

// $(document).ready(function(){
// $('#btn').on('click', function(){
// //     //         $('#wiki').fadeOut(2000);
// //     //        //fade this invisible....

// //     // $('#wiki').fadeIn(1000)
// //     // //fade this visible....

// //     // $('#wiki').fadeToggle("fast");
// //     // $('#wiki').fadeToggle("slow","linear");
// //     $('#wiki').fadeToggle(2000);

// //     // The fadeToggle() method toggles between the fadeIn() and fadeOut() methods.
// // // If the elements are faded out, fadeToggle() will fade them in.
// // // If the elements are faded in, fadeToggle() will fade them out.

// // $('#wiki').fadeTo("slow", 0.5);
// // The jQuery fadeTo() method allows fading to a given opacity (value between 0 and 1).
// });
//        });


// _________________________________________________________________________________________________

// Slide mthods :- slideUp(),slideDown(),slideToggle().
// _________________________________________________________________________________________________

// $(document).ready(function(){
//     $('#btn').on('click', function(){
//         // $('#wiki').slideUp(1000);
//  //The jQuery slideUp() method is used to slide up an element. Syntax:$(selector).slideUp(speed,callback);
  
// //  $('#wiki').slideDown(1000);
// //  The optional speed parameter specifies the duration of the effect. It can take the following values: "slow", "fast", or milliseconds.

// // $('#wiki').slideToggle(1000);
// // The jQuery slideToggle() method toggles between the slideDown() and slideUp() methods.
// // If the elements have been slid down, slideToggle() will slide them up.
// // If the elements have been slid up, slideToggle() will slide them down.

//     });
//   });

// _________________________________________________________________________________________________

// Animate functions:- 
// _________________________________________________________________________________________________

// $(document).ready(function(){
//     $('#btn').on('click', function(){
//         // $('#wiki').animate({
//         //     opacity: 0.3,
//         //     height: '200px',
//         //     width: '150px',
//         // }, 2000);//syntax : $(selector).animate({params},speed,callback);

//         //Queue functionality.....
//         // This means that if you write multiple animate() calls after each other, jQuery creates an "internal" queue with these method calls. Then it runs the animate calls ONE by ONE

//         // $('#wiki').animate({height: '300px', opacity: '0.4'}, "slow");
//         // $('#wiki').animate({width: '300px', opacity: '0.8'}, "slow");
//         // $('#wiki').animate({height: '100px', opacity: '0.4'}, "slow");
//         // $('#wiki').animate({width: '100px', opacity: '0.8'}, "slow");

//     });
//  });
// stop() method :- The jQuery stop() method is used to stop an animation or effect before it is finished.

// $(document).ready(function(){
//     $("#btn").click(function(){
//       $("#wiki").animate({opacity: '0.6'}, 5000);
//       $("#wiki").animate({fontSize: '3em'}, 5000);
//     });
    
//     $("#stop").click(function(){
//     //   $("#wiki").stop();//STop current animation... QUeue animation are continue
//     //   $("#wiki").stop(true);//STop all  animation...also Queue animation be also stop
//         });
//     });
// _________________________________________________________________________________________________

// jQuery Method Chaining
// _________________________________________________________________________________________________

// However, there is a technique called chaining, that allows us to run multiple jQuery commands, one after the other, on the same element(s).

// $(document).ready(function(){
//     $("#btn").click(function(){
//       $("#wiki").css("color", "red").slideUp(2000).slideDown(2000);
//     });
//   });

  // _________________________________________________________________________________________________

//   jQuery DOM Manipulation(HTML):-

// _________________________________________________________________________________________________

// text() - Sets or returns the text content of selected elements
// html() - Sets or returns the content of selected elements (including HTML markup)
// val() - Sets or returns the value of form fields

  // _________________________________________________________________________________________________


// Keyboard Event = keypress,keydown,keyup.

// _________________________________________________________________________________________



// $(document).ready(function(){

//         $('').keypress(function(){       
//            console.log('You leave mouse from p tag');
//             //   $(this).hide();
                
    
//     });
//     });

// _________________________________________________________________________________________________

// Forms Event = SubmitEvent, blur, change, focus.
// _________________________________________________________________________________________________


// $(document).ready(function(){
//     $("input").focus(function(){
//       $(this).css("background-color", "yellow");
//     });//The function is executed when the form field gets focus:
//     $("input").blur(function(){
//       $(this).css("background-color", "green");
//     });//The function is executed when the form field loses focus:


//     $('#sub').on('click',function(){
//         $("form").on("submit",function(){
//             alert("form is submitted");
//     });//The submit event occurs when a form is submitted.
// // This event can only be used on <form> elements.
// //  The submit() method triggers the submit event, or attaches a function to run when a submit event occurs.
//     });//ssubmit()

//   });//Focus/ Blur()


// $(document).ready(function(){
//     $("input").change(function(){
//       alert("The text has been changed.");
//     });//change() method
//   });//The change event occurs when the value of an element has been changed (only works on <input>, <textarea> and <select> elements).


// _________________________________________________________________________________________________


// document/window Event = load, resize, upload, scroll.

// _________________________________________________________________________________________________

// $(document).ready(function(){
//     $("#btn").click(function(){
//       $("#wiki").load("w3schools.com");
//     });
//   });//load()

// _________________________________________________________________________________________________

// there are mainly 3 types of selectors=>
// 1. element selector :-
               //   whole tags selecting just like: p,h1-h6,span,etc.
// 2. id selector:- 
               // selecting by id name just like: #basic,#unique,etc.
// 3. class selector:-
               // selecting by class name just like: .basic,.unique,etc.
 
// _________________________________________________________________________________________________





               // Most important thihngs....!!

//   $('p').click(function(){       // that means do this event on click p...
//         console.log('You clicked on p tag')
//         // $('p').hide();
//                  //this will hide under p tag all item when we will clicked on p tag  
//               $(this).hide();
//              // this.hide is a selector that comes in use when we clicked which p tag, this will hide only that one p tag
            
//              //  $(#id).hide();

//             // $(.class).hide();
//     });
// _________________________________________________________________________________________________