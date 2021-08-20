const portfolio =function () {
    function typeAnimation() {
        Typed.new("#writing-text", {
            strings: [
                "am an aspiring full-stack web developer.", 
                "love everything about code", 
                "love to learn acquire lots of knowledge", 
                "am eager and excited to use my knowledge to solve problems and build great looking responsive websites.", 
                "am open to unlearn, learn and relearn."
            ],
            stringsElement: null,
            typeSpeed:1,
            contentType: 'text',
            callback: function () {
                $("writing-text").css({"color": "#fff", "background-color": "#C84128"});
            },
            preStringTyped: function(){},
            onStringTyped: function(){}
        });
    }
    return {
        // displaywordCloud: displaywordCloud,
        typeAnimation: typeAnimation
    }
}();

portfolio.typeAnimation();




const touch = document.querySelector(".get");
touch.addEventListener('click' , () => {
    console.log("you clicked me ")
})



