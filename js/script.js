// 메뉴 선택시 이동
{
  const top = document.querySelector('.top');
  const logo = document.querySelector('.logo>a')
  const section = document.querySelector('section');
  const sections = document.querySelectorAll('article[id]')
    
  const scrollActive = () =>{
      const scrollY = window.pageYOffset

      sections.forEach(current =>{
          const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.gnb a[href*=' + sectionId + ']')

          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
              sectionsClass.classList.add('active-link')
          }else{
              sectionsClass.classList.remove('active-link')
          }                                                    
      })
  }
  window.addEventListener('scroll', scrollActive);

  logo.addEventListener('click', function(evt){
    evt.preventDefault();
    section.scrollTo({top:0, behavior:'smooth'});
  });
  top.addEventListener('click', function(evt){
      evt.preventDefault();
      section.scrollTo({top:0, behavior:'smooth'});
  });

  
}


// About 모달창
{
  const modal = document.querySelector('.modal_1');
  const open = document.querySelector(".openBtn_1");  
  const close = document.querySelector(".closeBtn_1");

  open.addEventListener('click', () => {
    modal.classList.add('show-modal');
  })

  close.addEventListener('click', () => {
    modal.classList.remove('show-modal');
  })

  window.addEventListener('click', (e) => {
    e.target === modal ? modal.classList.remove('show-modal') : false
  })
}


//Project 모달창
{
  const modal = document.querySelector('.project_modal_1');
  const open = document.querySelector(".detailBtn_1");
  const close = document.querySelector(".project_closeBtn_1");
  open.addEventListener('click', () => {
    modal.classList.add('show-modal');
  })
  close.addEventListener('click', () => {
    modal.classList.remove('show-modal');
  })
  window.addEventListener('click', (e) => {
    e.target === modal ? modal.classList.remove('show-modal') : false
  })
}
{
  const modal = document.querySelector('.project_modal_2');
  const open = document.querySelector(".detailBtn_2");
  const close = document.querySelector(".project_closeBtn_2");
  open.addEventListener('click', () => {
    modal.classList.add('show-modal');
  })
  close.addEventListener('click', () => {
    modal.classList.remove('show-modal');
  })
  window.addEventListener('click', (e) => {
    e.target === modal ? modal.classList.remove('show-modal') : false
  })
}
{
  const modal = document.querySelector('.project_modal_3');
  const open = document.querySelector(".detailBtn_3");
  const close = document.querySelector(".project_closeBtn_3");
  open.addEventListener('click', () => {
    modal.classList.add('show-modal');
  })
  close.addEventListener('click', () => {
    modal.classList.remove('show-modal');
  })
  window.addEventListener('click', (e) => {
    e.target === modal ? modal.classList.remove('show-modal') : false
  })
}
{
  const modal = document.querySelector('.project_modal_4');
  const open = document.querySelector(".detailBtn_4");
  const close = document.querySelector(".project_closeBtn_4");
  open.addEventListener('click', () => {
    modal.classList.add('show-modal');
  })
  close.addEventListener('click', () => {
    modal.classList.remove('show-modal');
  })
  window.addEventListener('click', (e) => {
    e.target === modal ? modal.classList.remove('show-modal') : false
  })
}
{
  const modal = document.querySelector('.project_modal_5');
  const open = document.querySelector(".detailBtn_5");
  const close = document.querySelector(".project_closeBtn_5");
  open.addEventListener('click', () => {
    modal.classList.add('show-modal');
  })
  close.addEventListener('click', () => {
    modal.classList.remove('show-modal');
  })
  window.addEventListener('click', (e) => {
    e.target === modal ? modal.classList.remove('show-modal') : false
  })
}
{
  const modal = document.querySelector('.project_modal_6');
  const open = document.querySelector(".detailBtn_6");
  const close = document.querySelector(".project_closeBtn_6");
  open.addEventListener('click', () => {
    modal.classList.add('show-modal');
  })
  close.addEventListener('click', () => {
    modal.classList.remove('show-modal');
  })
  window.addEventListener('click', (e) => {
    e.target === modal ? modal.classList.remove('show-modal') : false
  })
}

// Project 바로가기 버튼
{
  $(".option").click(function(){
    $(".option").removeClass("active");
    $(this).addClass("active");
  });
  $(".projectBtn_1").click(function(){
    window.open('https://poscinre.github.io/lesbasics/', '_blank');
  });
  $(".projectBtn_2").click(function(){
    window.open('https://poscinre.github.io/netflix/', '_blank');
  });
  $(".projectBtn_3").click(function(){
    window.open('https://poscinre.github.io/frontenders/', '_blank');
  });
  $(".projectBtn_4").click(function(){
    window.open('https://poscinre.github.io/gongju/', '_blank');
  });
  $(".projectBtn_5").click(function(){
    window.open('https://poscinre.github.io/strawberry/', '_blank');
  });
  $(".projectBtn_6").click(function(){
    window.open('https://poscinre.github.io/rockscissorspaper/', '_blank');
  });
}


//프로젝트 슬라이드
{
  $(function(){
    $('.carousel-item').eq(0).addClass('on');
    var total = $('.carousel-item').length;
    var current = 0;
    $('#moveRight').on('click', function(){
      var next=current;
      current= current+1;
      setSlide(next, current);
    });
    $('#moveLeft').on('click', function(){
      var prev=current;
      current = current- 1;
      setSlide(prev, current);
    });
    function setSlide(prev, next){
      var slide= current;
      if(next>total-1){
       slide=0;
        current=0;
      }
      if(next<0){
        slide=total - 1;
        current=total - 1;
      }
             $('.carousel-item').eq(prev).removeClass('on');
             $('.carousel-item').eq(slide).addClass('on');
        setTimeout(function(){},800);      
    }
  });
}
{
  $(function(){
    $('.carousel-item2').eq(0).addClass('on');
    var total = $('.carousel-item2').length;
    var current = 0;
    $('#moveRight2').on('click', function(){
      var next=current;
      current= current+1;
      setSlide(next, current);
    });
    $('#moveLeft2').on('click', function(){
      var prev=current;
      current = current- 1;
      setSlide(prev, current);
    });
    function setSlide(prev, next){
      var slide= current;
      if(next>total-1){
        slide=0;
        current=0;
      }
      if(next<0){
        slide=total - 1;
        current=total - 1;
      }
             $('.carousel-item2').eq(prev).removeClass('on');
             $('.carousel-item2').eq(slide).addClass('on');
        setTimeout(function(){  
        },800);      
    }
  });
}
{
  $(function(){
    $('.carousel-item3').eq(0).addClass('on');
    var total = $('.carousel-item3').length;
    var current = 0;
    $('#moveRight3').on('click', function(){
      var next=current;
      current= current+1;
      setSlide(next, current);
    });
    $('#moveLeft3').on('click', function(){
      var prev=current;
      current = current- 1;
      setSlide(prev, current);
    });
    function setSlide(prev, next){
      var slide= current;
      if(next>total-1){
        slide=0;
        current=0;
      }
      if(next<0){
        slide=total - 1;
        current=total - 1;
      }
             $('.carousel-item3').eq(prev).removeClass('on');
             $('.carousel-item3').eq(slide).addClass('on');
        setTimeout(function(){  
        },800);      
    }
  });
}
{
  $(function(){
    $('.carousel-item4').eq(0).addClass('on');
    var total = $('.carousel-item4').length;
    var current = 0;
    $('#moveRight4').on('click', function(){
      var next=current;
      current= current+1;
      setSlide(next, current);
    });
    $('#moveLeft4').on('click', function(){
      var prev=current;
      current = current- 1;
      setSlide(prev, current);
    });
    function setSlide(prev, next){
      var slide= current;
      if(next>total-1){
       slide=0;
        current=0;
      }
      if(next<0){
        slide=total - 1;
        current=total - 1;
      }
             $('.carousel-item4').eq(prev).removeClass('on');
             $('.carousel-item4').eq(slide).addClass('on');
        setTimeout(function(){},800);      
    }
  });
}
{
  $(function(){
    $('.carousel-item5').eq(0).addClass('on');
    var total = $('.carousel-item5').length;
    var current = 0;
    $('#moveRight5').on('click', function(){
      var next=current;
      current= current+1;
      setSlide(next, current);
    });
    $('#moveLeft5').on('click', function(){
      var prev=current;
      current = current- 1;
      setSlide(prev, current);
    });
    function setSlide(prev, next){
      var slide= current;
      if(next>total-1){
       slide=0;
        current=0;
      }
      if(next<0){
        slide=total - 1;
        current=total - 1;
      }
             $('.carousel-item5').eq(prev).removeClass('on');
             $('.carousel-item5').eq(slide).addClass('on');
        setTimeout(function(){},800);      
    }
  });
}
{
  $(function(){
    $('.carousel-item6').eq(0).addClass('on');
    var total = $('.carousel-item6').length;
    var current = 0;
    $('#moveRight6').on('click', function(){
      var next=current;
      current= current+1;
      setSlide(next, current);
    });
    $('#moveLeft6').on('click', function(){
      var prev=current;
      current = current- 1;
      setSlide(prev, current);
    });
    function setSlide(prev, next){
      var slide= current;
      if(next>total-1){
       slide=0;
        current=0;
      }
      if(next<0){
        slide=total - 1;
        current=total - 1;
      }
             $('.carousel-item6').eq(prev).removeClass('on');
             $('.carousel-item6').eq(slide).addClass('on');
        setTimeout(function(){},800);      
    }
  });
}


// 다크모드
{
  const themeButton = document.getElementById('theme-button')
  const darkTheme = 'dark-theme';
  const iconTheme = 'bx-sun';

  const selectedTheme = localStorage.getItem('selected-theme')
  const selectedIcon = localStorage.getItem('selected-icon')

  const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
  const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

  if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
  }

  themeButton.addEventListener('click', () => {
      document.body.classList.toggle(darkTheme)
      themeButton.classList.toggle(iconTheme)
      localStorage.setItem('selected-theme', getCurrentTheme())
      localStorage.setItem('selected-icon', getCurrentIcon())
  })
}