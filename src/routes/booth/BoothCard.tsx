import styled from "@emotion/styled";
import { useNavigate } from "react-router";
import Br from "../../shared/components/Br";

interface CardProps {
  location: string;
  department: string;
  image: string;
  id: number;
}

export default function BoothCard({ image, location, department, id }: CardProps) {
  const navigate = useNavigate();

  return (
    <Card onClick={() => navigate(`/booth/${id}`)} image={image}>
      <TextBox>
        <p className="location">{location}</p>
        <p className="department">
          <Br content={department} />
        </p>
      </TextBox>
    </Card>
  );
}

const Card = styled.div<{ image: string }>`
  width: 170px;
  height: 170px;
  padding: 16px;
  border-radius: 10px;
  background-image:
    linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 48.69%),
    url(${(props) => props.image});

  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  color: white;
`;

const TextBox = styled.div`
  & > .location {
    color: #fff;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: -0.3px;
  }

  & > .department {
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.5px;
  }
`;
