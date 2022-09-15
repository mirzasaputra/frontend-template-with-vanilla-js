import Toastify from 'toastify-js'

const color = {
    primary: ['#6395e6', '#86b3fc'],
    danger: ['#e03a4e', '#fc586c'],
    warning: ['#ffc70f', '#fcd03f'],
    success: ['#16ab5c', '#43de8b'],
}

export const toastify = (type, message = '') => {
    Toastify({
        text: message,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: `linear-gradient(to right, ${color[type][0]}, ${color[type][1]})`,
        },
        onClick: function(){} // Callback after click
    }).showToast();
}