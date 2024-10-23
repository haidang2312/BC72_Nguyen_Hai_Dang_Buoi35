const actions = {
    datGheAction: (ghe) => {
        return {
            type: 'DAT_GHE',
            ghe
        }
    },
    huyGheAction: (soGhe) => {
        return {
            type: 'HUY_GHE',
            soGhe
        }
    }
};

export default actions;
