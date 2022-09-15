const LoginPage = '/src/views/login/index.html'
const ErrorPage = '/src/views/errors/404.html'

export const routes = [
    {
        path: '/',
        meta: {
            title: 'Login'
        },
        view: LoginPage
    },
    {
        path: '404',
        meta: {
            title: '404 Not Found',
        },
        view: ErrorPage
    }
];