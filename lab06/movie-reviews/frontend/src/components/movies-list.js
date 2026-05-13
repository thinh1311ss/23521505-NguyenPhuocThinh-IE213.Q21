import React, { useState, useEffect } from "react";
import MovieDataService from "../services/movies";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const MoviesList = (props) => {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState("");
  const [searchRating, setSearchRating] = useState("");
  const [ratings, setRatings] = useState(["All Ratings"]);

  // Bài 3.1: thêm 2 biến trạng thái phân trang
  const [currentPage, setCurrentPage] = useState(0);
  const [entriesPerPage, setEntriesPerPage] = useState(0);

  // Bài 3.2: biến trạng thái lưu chế độ tìm kiếm hiện tại
  const [currentSearchMode, setCurrentSearchMode] = useState("");

  // Chạy lần đầu: lấy danh sách phim và ratings
  useEffect(() => {
    retrieveMovies();
    retrieveRatings();
  }, []);

  // Bài 3.2: khi currentSearchMode thay đổi → reset currentPage về 0
  useEffect(() => {
    setCurrentPage(0);
  }, [currentSearchMode]);

  // Bài 3.1: khi currentPage thay đổi → gọi retrieveNextPage()
  useEffect(() => {
    retrieveNextPage();
  }, [currentPage]);

  // Bài 3.2: gọi hàm tương ứng dựa vào currentSearchMode
  const retrieveNextPage = () => {
    if (currentSearchMode === "findByTitle") {
      findByTitle();
    } else if (currentSearchMode === "findByRating") {
      findByRating();
    } else {
      retrieveMovies();
    }
  };

  // Bài 3.1: truyền currentPage vào getAll(), lưu page và entriesPerPage từ response
  const retrieveMovies = () => {
    setCurrentSearchMode("");
    MovieDataService.getAll(currentPage)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.movies);
        setCurrentPage(response.data.page);
        setEntriesPerPage(response.data.entries_per_page);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const retrieveRatings = () => {
    MovieDataService.getRatings()
      .then((response) => {
        console.log(response.data);
        setRatings(["All Ratings"].concat(response.data));
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onChangeSearchTitle = (e) => {
    setSearchTitle(e.target.value);
  };

  const onChangeSearchRating = (e) => {
    setSearchRating(e.target.value);
  };

  // Bài 3.2: truyền currentPage vào find()
  const find = (query, by) => {
    MovieDataService.find(query, by, currentPage)
      .then((response) => {
        console.log(response.data);
        setMovies(response.data.movies);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // Bài 3.2: set currentSearchMode trước khi find
  const findByTitle = () => {
    setCurrentSearchMode("findByTitle");
    find(searchTitle, "title");
  };

  const findByRating = () => {
    setCurrentSearchMode("findByRating");
    if (searchRating === "All Ratings") {
      retrieveMovies();
    } else {
      find(searchRating, "rated");
    }
  };

  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Search by title"
                value={searchTitle}
                onChange={onChangeSearchTitle}
              />
            </Form.Group>
            <Button variant="primary" type="button" onClick={findByTitle}>
              Search
            </Button>
          </Col>
          <Col>
            <Form.Group>
              <Form.Control as="select" onChange={onChangeSearchRating}>
                {ratings.map((rating) => {
                  return (
                    <option key={rating} value={rating}>
                      {rating}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>
            <Button variant="primary" type="button" onClick={findByRating}>
              Search
            </Button>
          </Col>
        </Row>
        <br />

        {/* Bài 3.1: hiển thị trang hiện tại và nút lấy trang tiếp theo */}
        Showing page: {currentPage}.
        <Button
          variant="link"
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
        >
          Get next {entriesPerPage} results
        </Button>

        <br />
        <Row>
          {movies.map((movie) => {
            return (
              <Col key={movie._id} style={{ marginBottom: "1rem" }}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img src={movie.poster + "/100px180"} />
                  <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>Rating: {movie.rated}</Card.Text>
                    <Card.Text>{movie.plot}</Card.Text>
                    <Link to={"/movies/" + movie._id}>View Reviews</Link>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default MoviesList;