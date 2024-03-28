/* SLIDE SHOW */

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("slide-image");
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2500); // Change image every 2 seconds */
}


/* GET FORM VALUE*/

const uName = document.getElementById("username");
const email = document.getElementById("email");
const destination = document.getElementById("destination");
const submitBtn = document.querySelector("#call-us-form");

function callUs(e){

    submitBtn.addEventListener("submit", function(e){
        e.preventDefault();
    })

    // check input validity

    if( !uName.checkValidity() || !email.checkValidity() || !destination.checkValidity()){
        alert('Mohon isi data dengan benar agar memudahkan kami menghubungi anda');
    } else{
        alert('Terimakasih Kak '+uName.value+', \nTim kami akan menghubungi melalui email : '
                +email.value+'\nTerkait Informasi rencana perjalanan kakak ke '+destination.value);
    }

}