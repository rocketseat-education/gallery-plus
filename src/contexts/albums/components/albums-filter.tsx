import type React from "react";
import Button from "../../../components/button";
import Text from "../../../components/text";
import type { Album } from "../models/album";
import cx from "classnames";
import Skeleton from "../../../components/skeleton";
import usePhotos from "../../photos/hooks/use-photos";

interface AlbumsFilterProps extends React.ComponentProps<"div"> {
  albums: Album[];
  loading?: boolean;
}

export default function AlbumsFilter({
  albums,
  loading,
  className,
  ...props
}: AlbumsFilterProps) {
  const { filters } = usePhotos();

  return (
    <div
      className={cx("flex items-center gap-3.5 overflow-x-auto", className)}
      {...props}
    >
      <Text variant="heading-small">Álbuns</Text>
      <div className="flex gap-3">
        {!loading ? (
          <>
            <Button
              size="sm"
              className="cursor-pointer"
              variant={filters.albumId === null ? "primary" : "ghost"}
              onClick={() => filters.setAlbumId(null)}
            >
              Todos
            </Button>
            {albums.map((album) => (
              <Button
                key={album.id}
                size="sm"
                className="cursor-pointer"
                variant={filters.albumId === album.id ? "primary" : "ghost"}
                onClick={() => filters.setAlbumId(album.id)}
              >
                {album.title}
              </Button>
            ))}
          </>
        ) : (
          Array.from({ length: 5 }).map((_, index) => (
            <Skeleton className="w-28 h-7" key={`album-loading-${index}`} />
          ))
        )}
      </div>
    </div>
  );
}
