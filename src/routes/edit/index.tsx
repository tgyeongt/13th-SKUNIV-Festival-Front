import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import TitleInput from "./titleInput";
import ImageUploader from "./imageUploder";
import DateSelector from "./dateSelector";
import LocationInput from "./locationInput";
import SubmitButton from "./submitButton";
import { Container } from "./style";
import { postLostItem, putLostItem, getLostItem } from "./editAPI";
import useHeader from "../../shared/hooks/useHeader";

const EditPage = () => {
  const [name, setName] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null); // 이미지 파일 상태
  const [foundPlace, setFoundPlace] = useState("");
  const [foundDate, setFoundDate] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useHeader({
    title: "분실물",
    showBack: true,
    showHamburger: true,
  });

  // URL에서 id 추출
  const itemId = new URLSearchParams(location.search).get("id");

  useEffect(() => {
    if (itemId) {
      // 아이템 id가 있을 경우, 해당 아이템의 정보를 불러오기
      const fetchLostItem = async () => {
        try {
          const lostItem = await getLostItem(Number(itemId));
          setName(lostItem.data.name);
          setFoundPlace(lostItem.data.foundPlace);
          setFoundDate(lostItem.data.foundDate);
        } catch (error) {
          console.error("아이템 조회 실패:", error);
        }
      };

      fetchLostItem();
    }
  }, [itemId]); // id가 바뀔 때마다 호출되도록

  const handleSubmit = async () => {
    if (!name || !foundPlace || !foundDate || !imageFile) {
      alert("모든 항목을 채워주세요!");
      return;
    }

    // FormData 객체 생성
    const formData = new FormData();
    formData.append("dto", JSON.stringify({ name, foundPlace, foundDate })); // DTO 객체를 JSON 문자열로 전송
    formData.append("file", imageFile); // 이미지 파일 추가

    try {
      if (itemId) {
        // 수정일 때는 PUT 요청
        await putLostItem(Number(itemId), formData);
      } else {
        // 새로 등록할 때는 POST 요청
        await postLostItem(formData);
      }
      navigate("/lostandfound");
    } catch (e) {
      console.error("아이템 등록/수정 실패:", e);
    }
  };

  return (
    <Container>
      <TitleInput value={name} setValue={setName} />
      <ImageUploader onImageChange={setImageFile} /> {/* 이미지 파일만 받기 */}
      <DateSelector selectedDate={foundDate} setSelectedDate={setFoundDate} />
      <LocationInput value={foundPlace} setValue={setFoundPlace} />
      <SubmitButton onSubmit={handleSubmit} />
    </Container>
  );
};

export default EditPage;
