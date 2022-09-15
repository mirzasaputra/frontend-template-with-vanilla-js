export const showInvalid = (errorMessages) => {
    for (const errorField in errorMessages) {
        if ($(`.form-control[name="${errorField}"]`).parent().hasClass('choices__inner')) {
            $(`.form-control[name="${errorField}"]`).parent().parent().parent().append(`<div class="small text-danger py-1 choices-invalid">${errorMessages[errorField]}</div>`);
            $(`.form-control[name="${errorField}"]`).parent().addClass("border-danger");
        } else {
            $(
                `<div class="invalid-feedback">${errorMessages[errorField]}</div>`
            ).insertAfter(`.form-control[name="${errorField}"]`);
            $(`.form-control[name="${errorField}"]`).addClass("is-invalid");
        }
    }
} 

export const resetInvalid = () => {
    for (const el of $(".form-control")) {
        $(el).removeClass("is-invalid");
        $('.choices__inner').removeClass("border-danger");
        $(el).siblings(".invalid-feedback").remove();
        $(".invalid-feedback").remove();
        $(".choices-invalid").remove();
    }
}