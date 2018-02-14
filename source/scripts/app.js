import $router from 'wee-routes';
import './bootstrap';
import sidebar from '../components/sidebar';

console.log('here');
$router.map([
    {
        path: '/',
        handler: sidebar,
    },
]).run();
