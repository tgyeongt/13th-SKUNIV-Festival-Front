import styled from "@emotion/styled";
import MainSection from "./MainSection";
import Section from "./Section";
import TimeTable from "./TimeTable";
import LineUp from "./LineUp";
import Booth from "./Booth";
import About from "./About";
import Emergency from "./Emergency";
import Intro from "./Intro";
import useLanguage from "../../shared/hooks/useLanguage";
import useHeader from "../../shared/hooks/useHeader";
import { useTranslation } from "react-i18next";
import { AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router";

export default function Home() {
  const [lang, setLang] = useLanguage();

  const handleLangSelect = (selectedLang: string) => {
    setLang(selectedLang);
  };

  useHeader({
    title: null,
    showHamburger: true,
    transparent: true,
  });

  const { t } = useTranslation("main");
  const navigate = useNavigate();

  return (
    <HomeWrapper langSelected={!!lang}>
      <MainSection onSelectLang={handleLangSelect} langSelected={!!lang} />
      <AnimatePresence>
        {lang && (
          <>
            <Section key="0" title={t("introduction_title")} content={<Intro />} />
            <Section key="1" title={t("schedule_title")} content={<TimeTable />} />
            <Section key="2" title={t("line_up")} content={<LineUp />} />
            <Section key="3" title={t("booth_guide")} content={<Booth />} />
            <Section key="4" title={t("evacuation_aed")} content={<Emergency />} />
            <Section
              key="5"
              title="About"
              content={<About onGoCredit={() => navigate("/credit")} />}
            />
          </>
        )}
      </AnimatePresence>
      <Copyright>© 2025 SKU LIKELION. All rights reserved.</Copyright>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div<{ langSelected: boolean }>`
  height: ${({ langSelected }) => (langSelected ? "auto" : "100vh")};
  background: ${({ langSelected }) =>
    langSelected ? "linear-gradient(180deg, #1e3dc7 35.58%, #97f5ff 100%)" : "#1E3DC7"};
`;

const Copyright = styled.small`
  display: block;
  padding-block: 8px;
  color: #fff;
  text-align: center;
  font-size: 8px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  white-space: nowrap;
`;
