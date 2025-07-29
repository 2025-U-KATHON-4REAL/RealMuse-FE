import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleLogin = () => {
    axios
      .post(`https://team4real.r-e.kr/auth/login`, {
        email,
        password,
      })
      .then((response) => {
        console.log("response :", response);
        if (response.status === 200) {
          // 로그인 성공 시 로직
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("refreshToken", response.data.refreshToken);
          navigate("/home");
        } else {
          // 로그인 실패 시 로직
          alert("로그인 실패! 이메일 혹은 비밀번호를 확인해주세요.");
        }
      })
      .catch((error) => {
        console.error("로그인 에러", error.response?.data);
        const message =
          error.response?.data?.message || "알 수 없는 오류입니다.";
        alert("로그인 중 문제 발생: " + message);
      });
  };

  const goToSignUp = () => {
    navigate("/signup");
  };

  return (
    <div>
      <div>로그인하기</div>
      <input
        type="email"
        placeholder="이메일 입력"
        value={email}
        onChange={handleEmailChange}
      />
      <input
        type="password"
        placeholder="비밀번호"
        value={password}
        onChange={handlePasswordChange}
      />
      <button onClick={handleLogin}>로그인</button>
      <p onClick={goToSignUp}>회원가입</p>
    </div>
  );
};

export default Login;
