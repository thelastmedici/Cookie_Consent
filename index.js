
const modal = document.getElementById('modal')
const modalCloseBtn = document.getElementById('modal-close-btn')
const consentForm= document.getElementById('consent-form')
const modalText = document.getElementById('modal-text')
 
setTimeout(function(){
    modal.style.display = 'inline'
}, 1500)

modalCloseBtn.addEventListener('click', function(){
    modal.style.display = 'none'
})
consentForm.addEventListener('submit', function(e){
    e.preventDefault()
    const consentFormData = new FormData(consentForm)
    const fullname = consentFormData.get('fullname')
    console.log(fullname)
    modalText.innerHTML = 
    `
        <div class="modal-inner-loading">
        <img src="images/loading.svg" class="loading">
        <p id="upload-text">
            Uploading your data to the dark web})...
        </p>
    </div>
`
setTimeout(function(){
document.getElementById('upload-text').textContent= 
    `
        Making sure you're not a cop...
    `
}, 1500)



setTimeout(function(){
    document.getElementById('modal-inner').innerHTML = `
    <h2>Thanks <span class="modal-display-name">${fullname}</span>, you PIRATEEEEEEE! </h2>
    <p>Now we have initiated you to our dark world.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    ` 
},3000)


})