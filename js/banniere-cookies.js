const boutonAccepterCookies = document.getElementById('btn-accepter-cookies');
const BanniereCookies = document.getElementById('banniere-cookies');
const boutonRefuserCookies = document.getElementById('btn-refuser-cookies');
const fondBanniereCookies = document.getElementById('fond-banniere-cookies');

if(!localStorage.getItem('cookies-acceptés') && !localStorage.getItem('cookies-refusés')){
    BanniereCookies.classList.add('actif');
    fondBanniereCookies.classList.add('actif');
}

boutonAccepterCookies.addEventListener('click', () => {
    fondBanniereCookies.classList.remove('actif');
    BanniereCookies.classList.remove('actif');
    localStorage.setItem('cookies-acceptés', true);
});


boutonRefuserCookies.addEventListener('click', () => {
    fondBanniereCookies.classList.remove('actif');
    BanniereCookies.classList.remove('actif');
    localStorage.setItem('cookies-refusés', true);
});