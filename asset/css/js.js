
      const buyBtns = document.querySelectorAll('.js-buy-store ')
      const modal = document.querySelector('.js-modal')
      const modalClose = document.querySelector('.js-modal-close')

      function showBuystore(){
         modal.classList.add('open') 

      }
      function hideBuystore(){
         modal.classList.remove('open') 

      }
     
    
      
      for ( const buyBtn of buyBtns){
         buyBtn.addEventListener('click',showBuystore)
      }
    modalClose.addEventListener('click',hideBuystore)
    
  