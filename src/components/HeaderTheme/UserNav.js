import { LoginOutlined, LogoutOutlined, UserOutlined } from "@ant-design/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserInforAction } from "../../redux/actions/action";
import { localStorageService } from "../../services/localStorageService";

export default function UserNav() {
  let userInfor = useSelector((state) => state.userReducer.userInfor);
  console.log("userInfor: ", userInfor);
  let dispatch = useDispatch();

  let handleLogout = () => {
    dispatch(setUserInforAction(null));
    // GP01 - GP08;
    localStorageService.removeUserInfor();
    window.location.href = "/";
  };
  let handleLogin = () => {
    dispatch(setUserInforAction(null));

    window.location.href = "/login";
  };
  let handleRegister = () => {
    dispatch(setUserInforAction(null));
    localStorageService.getUserInfor();
    window.location.href = "/register";
  };

  return (
    <div>
      {userInfor ? (
        <div className="space-x-3">
          Xin Chào,{" "}
          <span className="hover:text-orange-600 text-greenxh font-bold text-xl underline">
            {userInfor?.hoTen}!
          </span>
          <span className="border-l-2 py-1 text-grayxh"></span>
          <a
            href
            className="py-2 rounded font-medium leading-5 text-grayxh lg:text-lg hover:text-orange-600"
            onClick={handleLogout}
          >
            <LogoutOutlined className="inline-flex p-1 mr-2 border rounded-full bg-grayxh lg:text-xl text-white " />
            Đăng xuất
          </a>
        </div>
      ) : (
        <div className="space-x-3  ">
          <a
            href
            className="py-2 rounded font-medium leading-5 text-grayxh lg:text-lg hover:text-orange-600"
            onClick={handleLogin}
          >
            <LoginOutlined className="inline-flex lg:text-xl p-1 mr-2 border rounded-full bg-grayxh text-white " />
            Đăng nhập
          </a>
          <span className="border-l-2 py-1 text-grayxh"></span>
          <a
            href
            className="py-2 rounded font-medium leading-5 text-grayxh lg:text-lg hover:text-orange-600"
            onClick={handleRegister}
          >
            <UserOutlined className="inline-flex lg:text-xl p-1 mr-2 border rounded-full bg-grayxh text-white " />
            Đăng ký
          </a>
        </div>
      )}
    </div>
  );
}
