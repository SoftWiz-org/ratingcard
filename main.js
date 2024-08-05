
'use strict';


const rn = document.querySelectorAll('.rnumbdiv');
const btn = document.querySelector('#btn');
const thk = document.querySelector('.thkdiv');
const rating = document.querySelector('#rating');
const done = document.querySelector("#done");

let slc = 0;

for (let i = 0; i < rn.length; i++) {
    rn[i].addEventListener('click', function () {
        if (slc)
            rn[slc - 1].classList.remove("select");

        slc = Number(this.textContent);
        this.classList.add("select");

        console.log(rn[i].textContent);
    })
}

btn.addEventListener('click', function () {

    if (slc < 1) {
        console.log("Please Select Rating First");

    }
    else {
        thk.classList.add("vis");
        rating.textContent = slc;
    }

});

done.addEventListener('click', function () {
    thk.classList.remove("vis");
    rn.classList.remove("select");
})

