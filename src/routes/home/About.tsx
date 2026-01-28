import styled from "@emotion/styled";
import logo from "@icon/likelion_logo.svg";
import { Trans, useTranslation } from "react-i18next";

export default function About({ onGoCredit }: { onGoCredit: () => void }) {
  const { t } = useTranslation("main");

  return (
    <AboutWrapper>
      <p className="dot">.</p>
      <p className="dot">.</p>
      <p className="dot">.</p>
      <img className="img" src={logo} alt="logo" />
      <p className="title">SKU LIKELION 13TH</p>
      <p className="subtitle">
        <Trans i18nKey={"introduction_paragraph1"}>{t("introduction_paragraph1")}</Trans>
      </p>
      <p className="content">
        <Trans i18nKey={"introduction_paragraph2"}>{t("introduction_paragraph2")}</Trans>
      </p>
      <AboutButton onClick={onGoCredit}>{t("creator")}</AboutButton>
      <AboutButton onClick={() => window.open("https://skulikelion.com/")}>
        {t("visit_likelion")}
      </AboutButton>
    </AboutWrapper>
  );
}

const AboutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  max-width: 318px;
  margin-bottom: 100px;
  color: #1a1a1a;

  & > .dot {
    font-size: 20px;
    font-weight: 800;
    line-height: 110%;
    color: white;
  }

  & > .img {
    margin-top: 12px;
    margin-bottom: 20px;
    width: 110px;
    height: 120px;
  }

  & > .title {
    font-family: "Syncopate-Bold";
    font-size: 24px;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: -0.72px;
  }

  & > .subtitle {
    font-weight: 400;
    font-size: 12px;
    margin-top: 16px;
  }

  & > .content {
    font-size: 10px;
    font-weight: 400;
    margin-top: 8px;
    margin-bottom: 30px;
  }
`;

const AboutButton = styled.button`
  color: white;
  background-color: #1e3dc7;
  border-radius: 15px;
  height: 30px;
  border: none;
  margin-bottom: 7px;
  padding: 0 14px;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: -0.25px;
`;
