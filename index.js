var type = new Typed('.typing-text',{
    strings: ['web designer', 'front end developer', 'vue js programmer'],
    typeSpeed: 120,
    loop: true
});
let themeColor = document.querySelectorAll('.theme-toggler span');
themeColor.forEach(color => color.addEventListener('click', () => {
    let background = color.style.background;
    document.querySelector('body').style.background = background;
})),

function sendMail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "oyedotunay@gmail.com",
        Password : "08524070",
        To : document.getElementById('email').value,
        From : "oyedotunay@gmail.com",
        Subject : "This is the subject",
        Body : document.getElementById("firstName").value + document.getElementById("lastName").value
        + "<br>" + document.getElementById("projectTittle").value + "<br>" + document.getElementById("message").value
    }).then(
      message => alert(message))
};