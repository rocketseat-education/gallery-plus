import { useParams } from "react-router";
import Text from "../components/text";

export default function PagePhotoDetails() {
  const { id } = useParams();

  return (
    <>
      <Text variant="heading-medium">Página detalhe da foto</Text>
      <hr />
      <Text variant="heading-medium">ID da foto: {id}</Text>
    </>
  );
}
