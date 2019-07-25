export default {
    SET_SERIES(state, payload) {
        state.series = payload;
    },
    SET_ONE_SHOW(state, payload) {
        state.show = payload;
    },
    CLEAR_BG_IMAGE(state) {
        state.show = {};
    }
}