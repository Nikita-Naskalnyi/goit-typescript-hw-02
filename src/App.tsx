import { useEffect, useState } from "react";
import Container from "./components/Container/Container";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreButton from "./components/LoadMoreButton/LoadMoreButton";
import SearchBar from "./components/SearchBar/SearchBar";
import { ErrorResponse, Photo } from "./types";
import { getPhotos } from "./components/api";
import ModalImage from "./components/ModalImage/ModalImage";
import { AxiosError } from "axios";

function App() {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [pictures, setPictures] = useState<Photo[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [isEmpty, setIsEmpty] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<Photo | null>(null);

  const fetchImages = async () => {
    setIsLoading(true);
    try {
      const { results, totalPages } = await getPhotos(query, page);
      setPictures((prev) => [...prev, ...results]);
      if (!totalPages) {
        setIsEmpty(true);
        return;
      }
      setTotalPages(totalPages);
    } catch (err) {
      const axiosError = err as AxiosError<ErrorResponse>;
      if (axiosError.response) {
        setError(
          axiosError.response.data?.message || "Server responded with an error"
        );
      } else if (axiosError.request) {
        setError("No response received from server");
      } else {
        setError(axiosError.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!query) return;
    fetchImages();
  }, [query, page]);

  const handleSubmit = (query: string) => {
    setIsEmpty(false);
    setQuery(query);
    setPictures([]);
    setPage(1);
    setError("");
    setTotalPages(1);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (image: Photo | null) => {
    setModalImage(image);
  };

  return (
    <Container>
      <SearchBar onSubmit={handleSubmit} />
      {pictures.length > 0 && (
        <ImageGallery openModal={openModal} pictures={pictures} />
      )}
      {error && <ErrorMessage message={error} />}
      {isLoading && <Loader />}
      {isEmpty && "Please enter a valid search query"}
      {pictures.length > 0 && page < totalPages && (
        <LoadMoreButton onClick={handleLoadMore} />
      )}
      <ModalImage
        picture={modalImage}
        modalIsOpen={Boolean(modalImage)}
        closeModal={() => openModal(null)}
      />
    </Container>
  );
}

export default App;
