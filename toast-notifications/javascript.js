let toastBox = document.getElementById('toast-box');
let successMsg = '<i class="fa-solid fa-circle-check"></i> Succesfully submitted'
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> Please, try again later'
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input, check again'

function showToast(msgType){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML = msgType;
    toastBox.appendChild(toast);

    if(msgType == errorMsg){
        toast.classList.add('error');
    }
    if(msgType == invalidMsg){
        toast.classList.add('invalid');
    }


    setTimeout(()=>{
        toast.remove();
    },5000)
}