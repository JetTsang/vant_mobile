import { 
    Button,
    Cell,
    CellGroup,
    Popup
} from "vant"

export default {
    install(Vue){
        Vue.use(Button)
        Vue.use(Cell)
        Vue.use(CellGroup)
        Vue.use(Popup)
    }
}