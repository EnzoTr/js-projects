let lightSwitch = document.getElementById('light-switch');

function darkMode(){
    if(lightSwitch.classList.contains('fa-moon')){
        lightSwitch.classList.remove('fa-moon');
        lightSwitch.classList.add('fa-sun');
    }else{
        lightSwitch.classList.remove('fa-sun');
        lightSwitch.classList.add('fa-moon');
    }

    document.body.classList.toggle('dark-theme');
}