import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import actions from './redux/action';

export default function HangGhe({ hangGhe, soHangGhe }) {
    const dispatch = useDispatch();
    const { danhSachGheDangDat } = useSelector(state => state.BtDatVeReducer);
    let renderGhe = () => {
        return hangGhe.danhSachGhe.map((ghe, index) => {
            if (soHangGhe === 0) {
                if (index === 0) {
                    return <button key={index} className='rowNumber' style={{marginLeft:33}}>{ghe.soGhe}</button>
                }
                return <button key={index} className='rowNumber'>{ghe.soGhe}</button>
            }
            let cssGheDaDat = '';
            if (ghe.daDat) {
                cssGheDaDat = 'gheDuocChon';
            }

            // Kiểm tra từng ghế có đang được đặt hay không
            let cssGheDangDat = '';
            let indexGheDangDat = danhSachGheDangDat.findIndex(gheDangDat => gheDangDat.soGhe === ghe.soGhe);
            if (indexGheDangDat !== -1) {
                cssGheDangDat = 'gheDangChon';
            }

            return <button 
                onClick={() => {
                    dispatch(actions.datGheAction(ghe));
                }}
                disabled={ghe.daDat}
                className={`ghe ${cssGheDaDat} ${cssGheDangDat}`} 
                key={index}>
                {ghe.soGhe}
            </button>
        })
    }
    return (
        <div className='text-light text-start mx-5 mt-2' style={{ fontSize: "25px" }}>
            {hangGhe.hang}
            {renderGhe()}
        </div>
    )
}
