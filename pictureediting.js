function filterr()
{
    var blurval=document.getElementById("blur").value;
    var brightnessval=document.getElementById("Brightness").value;
    var contrastval=document.getElementById("Contrast").value;
    var greyscaleval=document.getElementById("greyscale").value;
    var Huerotateval=document.getElementById("Huerotate").value;
    var Invertval=document.getElementById("Invert").value;
    var Opcityval=document.getElementById("Opcity").value;
    var Saturateval=document.getElementById("Saturate").value;
    var Sepiaval=document.getElementById("Sepia").value;
    // // console.log(blurval,brightnessval);
    // console.log(blurval,brightnessval,contrastval,greyscaleval,Huerotateval,Invertval,Opcityval,Saturateval,Sepiaval);

    document.getElementById("parrot").style.filter=`blur(${blurval}px) brightness(${brightnessval}%) contrast(${contrastval}%) grayscale(${greyscaleval}%) hue-rotate(${Huerotateval}deg) invert(${Invertval}%)`
}