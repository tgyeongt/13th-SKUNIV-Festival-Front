import { useLocation } from "react-router";
import { Divider, Button } from "./style";

interface Props {
  onSubmit: () => void;
}

const SubmitButton = ({ onSubmit }: Props) => {
  const location = useLocation();
  const isEditMode = new URLSearchParams(location.search).has("id");

  return (
    <>
      <Divider />
      <Button onClick={onSubmit}>{isEditMode ? "수정" : "등록하기"}</Button>
    </>
  );
};

export default SubmitButton;
