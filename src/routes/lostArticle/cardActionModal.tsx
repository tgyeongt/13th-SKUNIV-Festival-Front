import { useNavigate } from "react-router";
import { ModalBackdrop, ActionModal, ModalBigButton } from "./modals.style";

interface Props {
  id: number;
  onDelete: () => void;
  onClose: () => void;
}

const CardActionModal = ({ id, onDelete, onClose }: Props) => {
  const navigate = useNavigate();

  const handleEditClick = () => {
    // 수정 클릭 시, URL에 id를 포함한 edit 페이지로 이동
    navigate(`/edit?id=${id}`);
  };

  return (
    <ModalBackdrop onClick={onClose}>
      <ActionModal onClick={(e) => e.stopPropagation()}>
        <ModalBigButton onClick={handleEditClick}>수정</ModalBigButton>
        <ModalBigButton onClick={onDelete}>삭제</ModalBigButton>
      </ActionModal>
    </ModalBackdrop>
  );
};

export default CardActionModal;
