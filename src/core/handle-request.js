import { showInvalid, resetInvalid } from './form-validation'
import { toastify } from './toastify'

export const get = async (url, opt = {}) => {
    resetInvalid()
    var html = $('*[data-form-loading]').html()
    $('*[data-form-loading]').html('Loading...').attr('disabled', true)
    var data = []

    Pace.restart();
    const res = await fetch(API_URL + '/' + url, {
        headers: {
            Accept: 'application/json'
        },
        mode: 'cors',
    })

    $('*[data-form-loading]').html(html).removeAttr('disabled')
    if(res.status == 200) {
        if(!opt.hideSuccessNotification) {
            data = await res.json()
            toastify('success', data.message || 'Success')
        }
    } else {
        toastify('danger', 'Opps! terjadi kesalahan')
    }

    return {status: res.status, data: data}
}

export const post = async (url, fd, opt = {}) => {
    resetInvalid()
    var html = $('*[data-form-loading]').html()
    $('*[data-form-loading]').html('Loading...').attr('disabled', true)
    var data = []

    Pace.restart()
    const res = await fetch(API_URL + '/' + url, {
        method: 'post',
        headers: {
            Accept: 'application/json'
        },
        body: generateFormData(new FormData(fd))
    })

    $('*[data-form-loading]').html(html).removeAttr('disabled')
    if(res.status == 200) {
        if(!opt.hideSuccessNotification) {
            data = await res.json()
            toastify('success', data.message || 'Success')
        }
    } else {
        if(res.status == 422) {
            const data = await res.json()
            showInvalid(data.errors)
        } else {
            toastify('danger', 'Opps! terjadi kesalahan')
        }
    }

    return {status: res.status, data: data}
}

export const del = async (url, opt = {}) => {
    resetInvalid()
    var html = $('*[data-form-loading]').html()
    $('*[data-form-loading]').html('Loading...').attr('disabled', true)
    var data = []

    Pace.restart();
    const res = await fetch(API_URL + '/' + url, {
        method: 'delete',
        headers: {
            Accept: 'application/json'
        },
    })

    $('*[data-form-loading]').html(html).removeAttr('disabled')
    if(res.status == 200) {
        if(!opt.hideSuccessNotification) {
            data = await res.json()
            toastify('success', data.message || 'Data telah dihapus')
        }
    } else {
        toastify('danger', 'Opps! terjadi kesalahan')
    }

    return {status: res.status, data: data}
}

const generateFormData = (formData) => {
    var fd = new FormData()

    formData.forEach((val, key) => {
        fd.append(key, val)
    })

    return fd
}