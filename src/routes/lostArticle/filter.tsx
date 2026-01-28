import { useAdminLostStore } from "../../stores/useAdminLostStore";
import { useNavigate } from "react-router";
import { AddButton, SaveText, FilterContainer, SubText, FilterWrapper } from "./filter.style";
import { useTranslation } from "react-i18next";

interface FilterProps {
  sort: "LATEST" | "OLDEST";
  onSortChange: (sort: "LATEST" | "OLDEST") => void;
}

const Filter = ({ sort, onSortChange }: FilterProps) => {
  const isAdmin = useAdminLostStore((state) => state.isLoggedIn);
  const logout = useAdminLostStore((state) => state.logout);

  const navigate = useNavigate();

  const handleClickRegister = () => {
    navigate("/edit");
  };

  const handleSortClick = () => {
    const newSort = sort === "LATEST" ? "OLDEST" : "LATEST";
    onSortChange(newSort);
  };

  const handleLogout = () => {
    logout();
    navigate("/lostandfound");
  };

  const { t } = useTranslation("lostandfound");

  return (
    <FilterContainer>
      {isAdmin ? (
        <>
          <AddButton>
            <button onClick={handleClickRegister}>등록</button>
          </AddButton>
          <SaveText onClick={handleLogout}>저장하고 나가기</SaveText>
        </>
      ) : (
        <SubText>
          <p>{t("info1")}</p>
          <p>{t("info2")}</p>
        </SubText>
      )}
      <FilterWrapper>
        <button onClick={handleSortClick}>{sort === "LATEST" ? t("latest") : t("oldest")}</button>
      </FilterWrapper>
    </FilterContainer>
  );
};

export default Filter;
