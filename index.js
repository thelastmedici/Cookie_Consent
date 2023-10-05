
const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const detailsForm = document.getElementById('details')
 
setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})
detailsForm.addEventListener('submit', function(e){
    e.preventDefault()

})

