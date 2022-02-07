import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: "#FFCCD2",
                secondary: "#FF9292",
                accent: "#454545",
                error: "#d9534f",
                info: "#3da9de",
                success: "#509950",
                warning: "#f0ad4e"
            }
        }
    },
    icons: {
        iconfont: 'mdi'
    }
})