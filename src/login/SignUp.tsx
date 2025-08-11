import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Radio } from "antd";
import * as S from "./loginsignup.style";

const SignUp = () => {
  const navigate = useNavigate();

  type Role = "CREATOR" | "BRAND";

  const [role, setRole] = useState<Role>("CREATOR");
  const [name, setName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleNicknameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
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
        `${process.env.REACT_APP_BACKEND_URL}/auth/signup`,
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

  const goToLogin = (): void => {
    navigate("/");
  };

  return (
    <>
      <S.HeaderContainer>
        <S.BackIconImg onClick={goToLogin} />
        <S.Header>회원가입하기</S.Header>
      </S.HeaderContainer>
      <S.ScreenContainer>
        <Radio.Group
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            marginBottom: "32px",
          }}
        >
          <Radio value="CREATOR" style={{ fontSize: "18px" }}>
            크리에이터
          </Radio>
          <Radio value="BRAND" style={{ fontSize: "18px" }}>
            기업
          </Radio>
        </Radio.Group>
        <S.inputBox
          type="text"
          placeholder="본명 입력"
          value={name}
          onChange={handleNicknameChange}
        />
        <S.inputBox
          type="tel"
          placeholder="전화번호 입력"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
        />
        <S.inputBox
          type="email"
          placeholder="이메일 입력"
          value={email}
          onChange={handleEmailChange}
        />
        <S.inputBox
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={handlePasswordChange}
        />
        <S.MainButton onClick={handleSignUp}>회원가입</S.MainButton>
      </S.ScreenContainer>
    </>
  );
};

export default SignUp;
