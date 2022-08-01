import React, { useEffect, useState } from "react";
import { movieService } from "../services/movieService";
import "./footerLayout.css";
export default function FooterLayout() {
  const [dataRow, setDataRaw] = useState([]);
  useEffect(() => {
    movieService
      .getMovieByTheater()
      .then((res) => {
        console.log(res);
        setDataRaw(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className=" w-full bg-blackxh pt-10" style={{ height: "500px" }}>
      <div className="container mx-auto" style={{ maxWidth: "1000px" }}>
        <div className="pb-5 flex justify-between">
          <div>
            <div>
              <h2>LIÊN KẾT</h2>
              <div className="flex justify-center">
                <a href="https://www.facebook.com/">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAAflBMVEUAAACVlZWWlpaUlJSUlJSampqVlZWVlZWXl5eWlpaXl5ewsLCVlZWXl5eVlZWVlZWioqKUlJSVlZWVlZWVlZWXl5eenp6YmJiVlZWVlZWVlZWVlZWVlZWVlZWWlpaXl5eVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWWlpaUlJRq2G1aAAAAKXRSTlMAwXf4zxX8Y0OiIwTyHNy7Ce6mlHBQDynVheCd6o1qMl85ta99Vz7LSFONebAAAAKSSURBVFjD3dnX0towEIbhz2AJ415woxn4aXv/NxggM4EEw0qydZLn2Lyj0SJAAxSlIvL92vcjUQUYS7qf5G5IL5aHthQYKlokU+rVbPYwV80S+iZua8MFF1NiOVdoq+eSlLgnvbFWhSRlF41ND2Zr0iFXQnWTHdKVlVBRZmSgSPnNKMiM63NH70Cm1t+nKS5kLiy/DTCmIeTu85obGkZ+Wnfl0lBTD30Ch4YLO/TY0BjiCm9KGsfPW9kPaSQT/MNRmlJSTLbb7eIu//hQjb/MiBfvUqVXOHglMmJtAtXFzPBipbGFfDqrXmYoiZNDPU1HnUWHQiedVRqLXqEvzS+7IJanl85SPKQhsVK9NO3wsCNWjKdJs7zL6I55byfEujzLHqmQEW6EJJbzsmhSssDNiWykE9zMraSn98HHVtJ0BgTZSU+AM/NI5t68HMaZ+1vMf+hsmUfm6MNPvwFaw/SCmyMwN0xv+M+Gg2E6J4bAxTDtECNCY5bmj4OP2DA9tZauiE2zG5J4N92zGXkPO4W0a+mgUwTHVlrgx1a6QmErHWBiKb0GSkvpBKgtpTdAENpJnwAkdtIR86x5usFNbSW9wV1sI33GXWshvcRDbSHdMt9F5mnpM3doPs3fpt2x0x1z9TdPH/DUjJvu8OQZp/nraz5iOhPM/d88PWOugeZph/l5aJ5eR2/ptBkn7eFdHX45uNM/JH11RB9vSoOt0K+UNNBPgA9mNEwS4KOdHLTmFF9cQzJWMP+idGsyI4/giIRMrK9QMJEGAxRQ0rmkJ1xAVbDNdHZ5LqBBFMpH09lDk2hD4snDHgaqBbfn66KGqbqNP88uvwYYxN/my/ds0p4DjKHqyu1xs5rn81XRLk7nCP+vXxyyUrzi8kSkAAAAAElFTkSuQmCC"
                    className="w-10 h-10 rounded mx-2"
                    alt=""
                  />{" "}
                </a>
                <a href="https://zalo.me/">
                  <img
                    className="w-10 h-10 rounded"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABdCAMAAABtopN5AAABs1BMVEUAAAAAAABKSkpfX1/f399WVlYxMTFTU1NMTExubm5cXFxnZ2cNDQ3d3d1hYWEXFxeEhITe3t49PT0gICAZGRn5+flERERJSUldXV1MTEweHh4AAAAAAABWVlZfX196enpycnJHR0dMTEw/Pz9UVFQyMjKPj482NjYoKCgqKioAAAD29vbu7u7k5OTX19fFxcVTU1NRUVHT09PQ0NBoaGirq6uioqJLS0tHR0dpaWlMTEz///9hYWFXV1f9/f1kZGRiYmL7+/v4+Pjz8/P39/ft7e3w8PDu7u76+vqBgYHr6+v19fXy8vJYWFjq6up6enpUVFSHh4eFhYWDg4NycnKGhoZeXl5nZ2d8fHx0dHR2dnZpaWlra2uMjIx/f3/Dw8Pm5uZvb294eHh+fn5mZmZWVlbo6OiKioptbW1ubm5aWlqtra28vLzi4uK1tbWWlpaTk5Pf39/Y2NjT09PNzc2hoaHJycm5ubmzs7OysrKpqambm5uYmJjGxsbb29vV1dXPz8/Ly8u+vr7c3NzR0dGrq6ujo6Oenp6QkJBZWVnKysqqqqqampqvr6+srKylpaVTU1OnzUmuAAAAO3RSTlMAB9lh4eFh2eHh4eEZ4eEm9+GrSz/5xb1hTTAQBvj359nNx6Oik5KMbloK9+/m4eHa2dbTza2kjolrYRPs118AAAZASURBVGjetZhnd9owGEbdvffee+89pGIBCbthxqyEEkLNJowASclu0ybdP7lI8cQ6bgvm8oGDJT3XeiXZJ2EkNh04sp3K6y3/x8mTpw7cZro5/eLiwcy4Fv9c3QT+mzuPr59WxR+4enA849cSCMx4QG8ce35Azj9yYdxPw1mpgd65d0rMv3UwM0rD+csG+uHYSYZw9KCfFh8IFnH1+zKQOey96A9QCAamQd9s3dsRvMzQ8p3+GjCA650JXAgEtTj9H4ER3N3LbPfT8kdxvhG8Yq76nRQWgUE8Y54GtfGRJjCKJ8wubb53BhjGoY4g0YW37TBOsJXZlZhUEwnywFhBRE2qCYwVdOXHvpiMFnjVlIDBAnV8qAAMF6QUxBLDRgv2pGIKQj+A4QJlfjTFD0AQlZloAOMFivxQqDYIQUhiImDpIcNt1heEZMZ62KO2uVDkq55gv0KQVVfIzSdleCug0uYQDJd0BRMi2YgbyJjK0bCSUJumcHgRy8J3eoKJnEh8CihYgEgN9xNosfxdkMuKhMtAwTLHqoFrvQmyYyLhT0CBZ5KDAmhDUOxJsFvKj2eT6v1R/LDBzyA2oMRQj4K4QDhmBVRGoqiTn64BzNB8ezRYKVqBZ2Wm2iUozVaCwbXVmkkliIuknfQTY01AXKCNBapHIEQIct6lAMeFPykF9u9p0gbReEklCAugDKBhmiP5c+S2mmnEEhCLgzMKQdKL14oAxz4pBGERWKEKyiQ/Qcr3MYxIumhxyufAE4FyExqrKgRpATgHKHxi8QJkyaQdQYhHw7E4RN2CxkZTfIw0wVGzJEhL+/w70MKHcD5aBpglEhL76uJXckgtSIbJfazwrq8pYpiWBKwIR5mBZZQUSHjPfYF49iXi6ppBixSIpJay+FJbFGyTBZQ1aJD8ysZ8TQk8sgEIGagSTEGy5oTPuClhlgRIgNPuohWS77UBgjuKw+YBoaAW+PFXARCauClk1QjgpAmoqZHCxqvigQghubhltSCIv2YAYUktQJIg5AYq7DGyku+kBUnhlJZQPLVgHMrVK+KmmEUSQJEwD5Q4xkmBPshHLoNT/CahXCoBqXvUKnfLmLQCrq4SfCObMjDssRE8ZjBLjLOdoRa8oZSCadLUtnTyZxDpBSiCFlBQR6RAWemNNzk/EieX/IVvTsiqBRYviU18K2RIn3iSJlC90b5DloRIwLC9wJFLECLNo2IZyk1kQ1EEEC+MCNnZatCCIwOlH8IapAQBWBWsGG7NQRWgj0BmGkGkAk7YgW1ceApBfxoh7nPnPriOqoTXdpYV2+CXIUAVcD9Uj7k59R+g5F8v5pYXD4iWHa3oxJQHgOG1XEzYyAtTOdwWz+CjQhd0v3JMSsTTUG3OL1rxThUOuE0urL3WnK+PAEATENACMAq6gPs8YAHM2YHJSDQCbgaYDPxoBTBq6BQoAm7WWMGhbgHMJcFgBdx382AFEH0FZsMw7dMKYIw3DVbATQ0NUkAOg9lhEHQBZJtmizGY6QKYW3QYJLhPF3DRBcuQAVgsD+gCyKUWhtz9C9zVXVhAN3wccvdNLbZTElA2q7U/3NbpCZ+OwGvtE3uR9b3VEWTcnj6wevjPed8bPUHLbeuHxYDv/RsdAed12ex2W0+fTnxyNux780ZPwC5Z7T3jWg76cL6eoGgd7o1OfH2Ow/F6AlTuzrf/q2Ck/oXF1dcTcPEVj0vJ8LCL513Drr9TalZYXB1dARep20ZEOoNGSkuzU6P+1XrShX9RIenJemEyj+P1BaiRtMuj+Op8w8v5MND5bbnKkyhtOF+aLgRYHymOvmBs2ebaGDeSrE6XK6G8OOq9z8eF1n6+W6wm+U4qDsa9+GR1cb5QiXJSulrwsEsQzrRXy8Visbza9oegTxolOnzrbDRYaRRmWsWVYqtcaEwFoum80E8r2MycYLuX4M3vTm8fhj7IJ/D+Pe4l9qOzfpy5wcJu8ri/MeSvMUcpp8A4w/oR5uxldnCG9UubGOYIS5kDZ1CFbjEdrqShFs6Q/MMM5syJ9GDmkD9+hiHsPZFGRhtI/l5G4PaN8yzSGt72FX/u2hlG5ujh82mWRSpYmH/bG+v5/LnDRxk1B25eubyji0ebe+PS4ZunGRpnNxnCWWXmHxyimcJXClP4AAAAAElFTkSuQmCC"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div>
              <h2 className="mt-4 mb-1">HOTLINE</h2>
              <p className=" text-2xl text-grayxh ">023 4567 8910</p>
            </div>
          </div>
          <div>
            <h2>MOBILE APP</h2>
            <div className="flex  ">
              <a href="https://www.apple.com/vn/app-store/">
                <img
                  className="w-10 h-10 rounded mx-2"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABaCAMAAADHGlvmAAAAgVBMVEUAAACVlZWnp6eWlpaVlZWhoaGVlZWWlpaXl5ebm5uUlJSVlZWenp6VlZWVlZWVlZWWlpaXl5eZmZmVlZWUlJSVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWXl5eVlZWVlZWVlZWWlpaVlZWUlJSVlZWUlJSWlpaWlpaVlZWYmJiUlJT4ZcJDAAAAKnRSTlMA+AVP8guOKx0Q7qkT472zZTIX586hiYFfx6WcRifc1nk9697Rl2pVciP1WFzxAAACV0lEQVRYw62Y6ZKqMBCFEzbZkUVARBgdt+n3f8BbtxxtenApOXx/U36VmNOdBPU5Ruusc99TOK7j038WsCk8arqSoqqzTze2mMk4EhNCKjsmxsdmNVRRDLlWNOQLUS3Zg0bCtYRqrQAaEtSAKpWqzphvWiZSOlqokvk2Mc8QVzBU6Z1CiIYqE6tEYqxWQfyw6oD2wMV9fZUB9+Xf5Tnu59NYOkGSrL5a+9Zu1lEfO6ZxHVwVvtb7PnHO77LRNlzFOl56spTKTpb4SYwLjGVEEt3c0+SdChphlU9sbUcP6KpUKdtsND1kXz9K0ZGeoXN6QWCPNutAUykyqVpENJ0+FNHeE8J6sEyvJ4wNuxIC4TtBjZr05abKfFD1zbeeI6g6ZJwsDaoGiXAwVe6yythjrp1iTExVyssQQm7LAwvhNFRtIZUlpnWG65CpIJcpXAHkCoVrjagiJeigHihdFuJKpAsq7GBGVzyjq5AuH4q9dH0TgitcBeSqhSshdCPn6tBaFNEFcsmHZIu5xIeKkDA2eI9mTLiBMdZCPMIwoh/48GDyFK4iRi85rTjJ7zp3NAN643EqYK4Py3IWl8vvQ5ReXYmJQYvcxFU6+3UZeMRWcB0xXJTwxBLF1KArne84aliEFpLlKsEGzhbj5ZNVB4M1YGB1qkYc4RUydg/fwZiFNUHliz3EEms+8EzsipV6SjC5PYwxPpMFhnolG+W/KM2tZ3vbs9ON36FvOFnE+OVWMelKE5Of1Vuy+y/i+u8awsutoewr+5WEbbXTbCozfDxoXqrqtBv/U/8AtXW2fqhv80sAAAAASUVORK5CYII="
                  alt=""
                />
              </a>
              <a href="https://play.google.com/">
                <img
                  className="w-10 h-10 rounded"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABXCAMAAAB7hEg4AAAAe1BMVEUAAACVlZWXl5eWlpaUlJSUlJSUlJSWlpaVlZWVlZWVlZWWlpaUlJSjo6OVlZWVlZWfn5+WlpaVlZWXl5eVlZWVlZWVlZWUlJSXl5eenp6VlZWtra2VlZWVlZWVlZWVlZWZmZmbm5uVlZWVlZWVlZWVlZWWlpaVlZWUlJTu8U1AAAAAKHRSTlMA51MY6UO6WiTD+JatBYDcDDvJNfHToJEuE4gI4ox4ayAQtqZ9ckhgkElVywAAAgxJREFUWMPt2NmSojAYhuHfaVAIKqtsCojrd/9XOB0DZtol8ls9B13NcySWvpVoQmnoR1m0ZNAuOK1UOPRUjJLTCuE+H/NKOMSRoaEnDjgQS7BJtvRQLlYL4jlhp6Lx7FB6XlnP4uAywwgxcaU4U1hF0ERU5nRERWyFlfi4sxL+mp1a1wkeshr2x7XBU6uQtexLmIiasSCmeGE+dJ5thJd262ETdDHAfFDLw0VS1o/WxLES6tFyQOoPlFAuMdzw1/oF9oCN2C0jeTHHDU9+BlBeb8slOtvPd91N0pWbG53m1XK/Tiuy4z3uePnJv06YzM5gOJlbUzDszVMUYLCMrRgsgak1A8uHqXUEi2Nq1d/YOk9YtvRfbSs3SkN6k52587rt7wwCUiYf8r9HD9JEDcURUBp+S3/zVqF+H/SXC35Lb5Tq600q57f0RnG/bmeb39IbZfKNLWtsja2xNbbG1u9p7dAL+S0bvZX6m94RLb9VoJfKlq2v+C3a60lJaTfI9p1W4UO6njM0n9dJFrz3OyfINhDRia4K+exbLalY0D1+q/OTWuz/HSY+GFwyCgUGS3Iyi10MtHPopcCRIvQy52KP3tSRAhqsG54+PPBujybG1tgaWyY79I7qiRK9lNtaohfe3nIbbusjgRKpa32wZgW8kj4d2Gypk1uQkpD48r0l/Kr4Z6jZRkxSw1nJX+vMF/qKdZ1sAAAAAElFTkSuQmCC"
                  alt=""
                />
              </a>
            </div>
          </div>

          <div>
            <h2 className="ml-5">ĐỐI TÁC</h2>
            <div className="grid grid-rows-2 grid-flow-col gap-4 ">
              {dataRow?.map((heThongRap, index) => {
                return (
                  <a key={index} href>
                    <img
                      src={heThongRap.logo}
                      className="w-10 h-10 mx-5"
                      alt=""
                    />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="footer-cs">
            <h2>CHÍNH SÁCH VÀ QUY ĐỊNH</h2>
            <ul className="text-grayxh ">
              <li>Quy định chung</li>
              <li>Điều khoản giao dịch</li>
              <li>Chính sách bảo mật</li>
              <li>Thông tin công ty</li>
            </ul>
          </div>
        </div>
      </div>
      <div style={{ background: "#0f4c5c" }}>
        <div className="w-48 mx-auto py-3 ">
          <h2 className="text-center">Chấp nhận thanh toán</h2>
          <div className="grid grid-rows-1 grid-cols-4 pb-3">
            <img
              src="data:image/png;base64,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"
              className="w-10 h-10 rounded "
              alt=""
            />
            <img
              src="data:image/png;base64,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"
              alt=""
              className="w-10 h-10 rounded"
            />

            <img
              src="data:image/png;base64,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"
              alt=""
              className="w-10 h-10 rounded"
            />
            <img
              src="data:image/png;base64,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"
              alt=""
              className="w-10 h-10 rounded"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-around px-64 py-8 ">
        <div className="text-white ">
          <p>
            Công Ty Cổ Phần Giải Trí Phát Hành Phim – CÔNG TY CỔ PHẦN ZION
            <br />
            Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ Chí
            Minh, Việt Nam.
            <br /> Giấy chứng nhận đăng ký kinh doanh số: 0101659783, <br />{" "}
            đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
            hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
            <br /> Số Điện Thoại (Hotline): 1900 545 436
          </p>
        </div>
        <a href="http://online.gov.vn/Home/WebDetails/51398">
          <img
            src="http://online.gov.vn/Content/EndUser/LogoCCDVSaleNoti/logoSaleNoti.png"
            alt=""
            className="w-28 h-12"
          />
        </a>
      </div>
    </div>
  );
}
