// bài tập 1
function tinhDiemKhuVuc(khuVuc){
    switch (khuVuc) {
        case "A" :{
            return 2;
        } 
        case "B" :{
            return 1;
        }
         case "C" :{
            return 0.5;
        } 
        
    }
}
function tinhDiemDoiTuong(doiTuong){
    switch (doiTuong) {
        case "1":{
            return 2.5;
        } 
        case "2":{
            return 1.5;
        }
         case "3":{
            return 1;
        } 
        
    }
}
document.getElementById("tinhKQBai1").onclick = () =>{
    let diemChuan = document.getElementById("diemChuan").value;
    let khuVuc = document.getElementById("khuVuc").value;
    let doiTuong = document.getElementById("doiTuong").value;
    let diemMon1 = document.getElementById("diemMon1").value*1;
    let diemMon2 = document.getElementById("diemMon2").value*1;
    let diemMon3 = document.getElementById("diemMon3").value*1;

    let diemKhuVuc = tinhDiemKhuVuc(khuVuc);
    let diemDoiTuong = tinhDiemDoiTuong(doiTuong);

    let tongDiem = diemMon1 + diemMon2 +diemMon3 + diemKhuVuc + diemDoiTuong;

    if (tongDiem > diemChuan) {
        document.getElementById("ketQuaBai1").innerHTML = `Bạn đã đậu. Tổng điểm là: ${tongDiem}`
    }else {
        document.getElementById("ketQuaBai1").innerHTML = `Bạn đã rớt. Tổng điểm là: ${tongDiem}`
    }

}


// bài tập 2
function tinhTienDien(soKw){
    switch (true) {
        case (soKw <= 50):{
            return  soKw * 500;
        }
        case (50< soKw && soKw <= 100):{
            return    50 *500 +(soKw-50) * 650;
        }
        case (100< soKw && soKw <= 200):{
            return  50 * 500 + 50 *650 + (soKw -100) *850 ;
        }
        case (200< soKw && soKw <= 350):{
            return  50 * 500 + 50 *650 + 100 *850 + (sokw -200) * 1100 ;
        }
        case  (soKw > 350):{
            return  50 * 500 + 50 *650 + 100 *850 + 150 * 1100+ (sokw -350) * 1300 ;
        }   
    }
}
document.getElementById("tinhTienDien").onclick = ()=>{
    let hoTen = document.getElementById("hoTen").value;
    let soKw = document.getElementById("soKw").value*1;

    let tienDien = tinhTienDien(soKw);
    tienDien = tienDien.toLocaleString();
    console.log(tienDien)

    document.getElementById("tienDien").innerHTML = `Tên: ${hoTen}. Tổng tiền điện: ${tienDien} VNĐ`
    
}



// bài 3
function tinhThue(thuNhap){
    switch (true) {
        case (thuNhap <= 60e+6):{
            return  5;
        }
        case (60e+6< thuNhap && thuNhap <= 120e+6):{
            return  10;
        }
        case (120e+6< thuNhap && thuNhap <= 210e+6):{
            return  15 ;
        }
        case (210e+6< thuNhap && thuNhap <= 384e+6):{
            return  20 ;
        }
        case (384e+6< thuNhap && thuNhap <= 624e+6):{
            return  25 ;
        }
        case (624e+6< thuNhap && thuNhap <= 960e+6):{
            return  30 ;
        }
        case  (thuNhap > 960e+6):{
            return  35 ;
        }   
    }
}
document.getElementById("tinhThue").onclick = () =>{
    let hoTen = document.getElementById("hoVaTen").value;
    let thuNhap = document.getElementById("thuNhap").value *1;
    let soNg = document.getElementById("soNg").value *1;

    let thue = tinhThue(thuNhap);
    console.log(thue);
    let thueThuNhap = ((thuNhap - 4e+6 - (soNg*1600000)) * thue)/100;
    thueThuNhap = thueThuNhap.toLocaleString();

    document.getElementById("tienThue").innerHTML = `Họ tên: ${hoTen}. Tiền thuế thu nhập cá nhân: ${thueThuNhap} VNĐ`

}

// bài 4
function loaiDoanhNghiep(){
    let loaiKhachHang = document.getElementById("khachHang").value;
    let anHienInput = document.getElementById("soKetNoi");
    if (loaiKhachHang == "doanhNghiep") {
        anHienInput.style.display = "block";
    }else {
        anHienInput.style.display = "none";
    }
}
function phiHoaDon(Kh){
    switch (Kh) {
        case "nhaDan":{
            return 4.5;
        };
        case "doanhNghiep":{
            return 15;
        }; 
    }
}
function phiDichVu(Kh,ketNoi){
    switch (Kh) {
        case "nhaDan":{
            return 20.5;
        };
        case "doanhNghiep":{
            switch (true) {
                case ketNoi <=10:{
                    return 75
                }
                case ketNoi >10:{
                    return 75 + (ketNoi -10)*5
                }
                
            }
        }; 
    }
}
function phiThueKenh(Kh){
    switch (Kh) {
        case "nhaDan":{
            return 7.5
        }
        case "doanhNghiep":{
            return 50
        }
    }
}
document.addEventListener("anHienInput", ()=>{
    loaiDoanhNghiep();
});
const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
document.getElementById("tinhTienCap").onclick = () =>{
let loaiKhachHang = document.getElementById("khachHang").value;
    let ma = document.getElementById("ma").value;
    let soKenh = document.getElementById("soKenh").value *1;
    let soKetNoi = document.getElementById("soKetNoi").value *1;

    let tienPhiHoaDon = phiHoaDon(loaiKhachHang);
    let tienPhiDichVu = phiDichVu(loaiKhachHang,soKetNoi);
    let tienPhiThueKenh = phiThueKenh(loaiKhachHang);
    let tienCap = tienPhiHoaDon + tienPhiDichVu +tienPhiThueKenh*soKenh;
    USDollar.format(tienCap);
    document.getElementById("tienCap").innerHTML = `Mã khách hàng: ${ma}. Tiền cáp: ${USDollar.format(tienCap)}`
}

