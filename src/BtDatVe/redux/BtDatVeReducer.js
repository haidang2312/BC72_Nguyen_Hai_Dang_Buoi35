

const initialState  = {
    danhSachGheDangDat:[],
};


const BtDatVeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'DAT_GHE': {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.ghe.soGhe);
            
            if (index !== -1) {
                // Nếu ghế đã có trong mảng thì xóa đi
                danhSachGheDangDatUpdate.splice(index, 1);
            } else {
                // Nếu ghế chưa có trong mảng thì thêm vào
                danhSachGheDangDatUpdate.push(action.ghe);
            }
            
            return {...state, danhSachGheDangDat: danhSachGheDangDatUpdate}
        }
        case 'HUY_GHE': {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat];
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.soGhe);
            
            if (index !== -1) {
                danhSachGheDangDatUpdate.splice(index, 1);
            }
            
            return {...state, danhSachGheDangDat: danhSachGheDangDatUpdate}
        }
        default: return {...state}
    }
}


export default BtDatVeReducer;