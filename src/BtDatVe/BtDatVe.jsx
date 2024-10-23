import React from 'react';
import './main.css';
import ThongTinDatGhe from './ThongTinDatGhe';
import danhSachGheData from "./Data/danhSachGhe.json"
import HangGhe from './HangGhe';
export default function BtDatVe() {
    let renderHangGhe = () => {
        return danhSachGheData.map((hangGhe, index) => {
            return (
                <div key={index}>
                    <HangGhe hangGhe={hangGhe} soHangGhe={index}/>
                </div>
            )
        })
    }
    return (
        <div className='bookingMovie' style={{ position: "fixed", width: "100%", height: "100%", backgroundImage: "url(./img/bgmovie.jpg)", backgroundSize: "100%" }}>
            <div style={{ backgroundColor: "rgba(0,0,0,0.8)", position: "fixed", width: "100%", height: "100%" }}>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8 text-center">
                            <div className='text-warning display-4'>ĐẶT VÉ XEM PHIM</div>
                            <div className='mt-5 text-light' style={{ fontSize: "25px" }}>Màn hình</div>
                            <div className='mt-2' style={{ display: "flex", flexDirection: 'column', justifyContent: "center" }}>
                                <div className='screen'></div>
                            </div>
                            {renderHangGhe()}
                        </div>
                        <div className="col-4">
                            <div className='text-light mt-2' style={{ fontSize: "35px" }}>DANH SÁCH GHẾ CHỌN</div>
                            <ThongTinDatGhe />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
