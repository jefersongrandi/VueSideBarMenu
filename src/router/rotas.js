import Home from "../components/Home.vue";
import Hello from "../components/HelloWorld.vue";

const rotas = [
  { path: "/", component: Home, name: "home" },
  { path: "/hello", component: Hello, name: "hello" }
];

export default rotas;
