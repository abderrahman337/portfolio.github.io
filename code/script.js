const sections = document.querySelectorAll('.section');
const secBTN = document.querySelectorAll('.controlls');
const secbt = document.querySelectorAll('.control');
const all_sec = document.querySelector('.main-content')

function sectionTransition() {
      for (let i = 0; i < secbt.length; i++) {
        secbt[i].addEventListener("click", function () {
          let activeBtn = document.querySelector(".active-btn");
          if (activeBtn !== null) {
            activeBtn.classList.remove("active-btn");
            
          }
          this.classList += " active-btn";
        });
        
      }
      all_sec.addEventListener('click',(e)=>{
            const id = e.target.dataset.id;
            
            if(id){
                  secBTN.forEach((btn) => {
                        btn.classList.remove('active')
                  });
                  e.target.classList.add('active')
                  //hide all element section
                  sections.forEach((section)=>{
                        section.classList.remove('active')
                  });
                  const element = document.getElementById(id);
                  element.classList.add('active')
            }
      });
      const themeBTN = document.querySelector('.theme-btn');
      themeBTN.addEventListener('click', function () {
                  let element = document.body;
                  element.classList.toggle('light-mode');
            })
}
sectionTransition();







    


