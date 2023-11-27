// JavaScript functionality for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

  
.profile{
  width: 200px;
  border: 8px solid rgb(251, 255, 19);
  border-radius: 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 670px;
  top: 850px;
  box-shadow: 0px 0px 20px 10px #48abe0;
animation: shadows 1.5s infinite;
}

@keyframes shadows {
0% {
text-shadow: #0593df 0 0 10px;
box-shadow: 0px 0px 20px 10px #48abe0;
}
50% {
text-shadow: rgb(43, 110, 226) 0 0 10px;
box-shadow: 0px 0px 20px 10px rgb(43, 205, 226);
}
75% {
text-shadow: rgb(8, 223, 238))67) 0 0 10px;
box-shadow: 0px 0px 20px 10px rebeccapuprle;
}
100% {
text-shadow: #48abe0 0 0 10px;
box-shadow: 0px 0px 20px 10px #48abe0;
}
}
