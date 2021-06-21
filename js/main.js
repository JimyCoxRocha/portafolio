function scrollView(){
    //const body = document.querySelector("body");
    let scrollValue = document.documentElement.scrollTop;
    const navBar = document.getElementById("navBar");

    if ( (scrollValue >= 79) ){
        navBar.className ="navBar navBar-blur navBar-effect" 
    }else if( scrollValue == 0 ){
        navBar.className ="navBar" ;
    }else if(scrollValue <= 79){
        navBar.className ="navBar navBar-blur navBar-background"
    }
    
}
document.addEventListener("DOMContentLoaded",function(event){
});
