const contactForm=document.getElementById('contactForm');

contactForm.addEventListener('submit',function(e){
e.preventDefault();
const btn=contactForm.querySelector('button');
btn.innerText="Message Sent ✓";
contactForm.reset();

setTimeout(()=>{
    btn.innerText="Send Message";
},
3000);
});

document.getElementById('downloadBtn').onclick=function(){
    this.innerText="Downloading...";
    setTimeout(()=>{this.innerText="Download PDF";},2000);
};

window.addEventListener('scroll',function(){
    const nav=document.querySelector('nav');
    if(window.scrollY>50){
        nav.style.background='rgba(15,23,42,0.95)';
    }else{
        nav.style.background='rgba(15,23,42,0.9)';
    }
});
