document.addEventListener("DOMContentLoaded", function () {

  var prev = document.querySelectorAll('.turn')[0];
  var next = document.querySelectorAll('.turn')[1];
  var img = document.querySelectorAll('.black_chair');
  var look = 0;
  var clair = document.querySelector('.box-clair');
  var clairclick = document.querySelector('.box-clair>div');
  var margerita = document.querySelector('.box-margerita')
  var margeritaclick = document.querySelector('.box-margerita>div');

  img[look].classList.add('visible');

    prev.addEventListener('click', function(){
      console.log('kliknięto '+this.innerText);
      img[look].classList.toggle('visible');
      look --;
      if (look < 0){
        look = img.length - 1;
      }
      img[look].classList.toggle('visible');
    });

    next.addEventListener('click', function(){
      console.log('kliknięto '+this.innerText);
      img[look].classList.toggle('visible');
      look ++;
      if (look == img.length){
        look = 0;
      }
      img[look].classList.toggle('visible');
    });

    clair.addEventListener('mouseover', function(){
      clairclick.classList.add('hidden');
    })

    clair.addEventListener('mouseout', function(){
      clairclick.classList.remove('hidden');
    })

    margerita.addEventListener('mouseover', function(){
      margeritaclick.classList.add('hidden');
    })

    margerita.addEventListener('mouseout', function(){
      margeritaclick.classList.remove('hidden');
    })

});
