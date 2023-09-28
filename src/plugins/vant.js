import { 
    Button,
    Cell,
    CellGroup,
    Popup,
    NavBar,
    Icon,
} from "vant"

export default {
    install(Vue){
        Vue.use(Button)
        Vue.use(Cell)
        Vue.use(CellGroup)
        Vue.use(Popup)
        Vue.use(NavBar)
        Vue.use(Icon)
    }
}