import Container from "../components/container";
import PhotosList from "../contexts/photos/components/photos-list";

export default function PageHome() {
  return (
    <Container>
      <PhotosList
        photos={[
          {
            id: "123",
            title: "Olá mundo!",
            imageId: "portrait-tower.png",
            albums: [
              { id: "3421", title: "Album 1" },
              { id: "123", title: "Album 2" },
              { id: "456", title: "Album 3" },
            ],
          },
        ]}
      />
    </Container>
  );
}
