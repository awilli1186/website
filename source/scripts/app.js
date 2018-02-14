import $router from 'wee-routes';
import './bootstrap';
import sidebar from '../components/sidebar';

$router.map([
    {
        path: '/',
        handler: sidebar,
    },
]).run();
