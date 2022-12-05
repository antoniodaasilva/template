import { Router } from "./router.js";

const router = new Router();
router.add("/", "src/pages/Home/index.html");
router.add("/register", "src/pages/NewUser/index.html");


router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();