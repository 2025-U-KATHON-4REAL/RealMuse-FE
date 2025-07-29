import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();

  type Role = "CREATOR" | "BRAND";

  /*const [role, setRole] = useState<Role | "">("");*/
  const [role, setRole] = useState<Role>("CREATOR");
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setRole("CREATOR");
  };
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPhoneNumber(e.target.value);
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

  const handleSignUp = () => {
    axios
      .post(
        `https://team4real.r-e.kr/auth/signup`,
        {
          role,
          name,
          phoneNumber,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("회원가입 응답:", response.data);
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        alert("회원가입 완료");
        navigate("/");
      })
      .catch((error) => {
        console.error("회원가입 에러", error.response?.data);
        const message =
          error.response?.data?.message || "알 수 없는 오류입니다.";
        alert("회원가입 중 문제 발생: " + message);
      });
  };

  return (
    <div>
      <div>회원가입하기</div>
      <input
        type="text"
        placeholder="본명 입력"
        value={name}
        onChange={handleNicknameChange}
      />
      <input
        type="tel"
        placeholder="전화번호 입력"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
      />
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
      <button onClick={handleSignUp}>회원가입</button>
    </div>
  );
};

export default SignUp;
