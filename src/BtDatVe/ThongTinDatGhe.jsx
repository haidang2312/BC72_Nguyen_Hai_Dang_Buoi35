import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import actions from './redux/action'
export default function ThongTinDatGhe() {
    const dispatch = useDispatch();
    const { danhSachGheDangDat } = useSelector(state => state.BtDatVeReducer);
    return (
        <div>
            <div className='mt-5'>
                <button className='gheDuocChon'></button> <span className='text-light' style={{ fontSize: "30px" }}>Ghế đã đặt</span>
                <br />
                <button className='gheDangChon'></button> <span className='text-light' style={{ fontSize: "30px" }}>Ghế đang đặt</span>
                <br />
                <button className='ghe' style={{ marginLeft: 0 }}></button> <span className='text-light' style={{ fontSize: "30px" }}>Ghế chưa đặt</span>
            </div>

            <div className='mt-5'>
                <table className='table' border="2">
                    <thead>
                        <tr className='text-light' style={{ fontSize: "35px" }}>
                            <th>Số ghế</th>
                            <th>Giá</th>
                            <th>Huỷ</th>
                        </tr>
                    </thead>
                    <tbody>
                        {danhSachGheDangDat.map((ghe, index) => {
                            return (
                                <tr key={index} className='text-warning' style={{ fontSize: '20px' }}>
                                    <td>{ghe.soGhe}</td>
                                    <td>{ghe.gia.toLocaleString()}</td>
                                    <td>
                                        <button
                                            onClick={() => {
                                                dispatch(actions.huyGheAction(ghe.soGhe))
                                            }}
                                            className="btn text-danger"
                                            style={{ fontSize: '20px', fontWeight: 'bold' }}
                                        >
                                            X
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr className='text-warning' style={{ fontSize: '20px' }}>
                            <td>Tổng tiền</td>
                            <td colSpan="2">
                                {danhSachGheDangDat.reduce((tongTien, ghe) => {
                                    return tongTien + ghe.gia;
                                }, 0).toLocaleString()}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}
