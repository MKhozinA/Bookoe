import { useParams } from "react-router-dom";
import { axiosInstance } from "../Component/api";
import { useEffect, useState } from "react";

const BookDetail = () => {
  const [BookDetail, setBookDetail] = useState([]);

  const params = useParams();

  const getBookById = async () => {
    try {
      const response = await axiosInstance.get(`/books/${params.id}`);
      setBookDetail(response?.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getBookById();
  }, []);

  return (
    <div style={{ marginTop: "50px", display: "flex", paddingLeft: "140px" }}>
      <div style={{ marginBottom: "50px", marginRight: "76px", maxHeight: "587px", width: "408px" }}>
        <img
          style={{ borderRadius: "14.5px", width: "100%", height: "auto" }}
          src={BookDetail.image_url}
          alt="Book Cover"
        />
      </div>
      <div style={{ marginTop: "62px" }}>
        <h1
          style={{
            fontSize: "62px",
            color: "#1D1D1D",
            fontWeight: "600",
            lineHeight: "93px",
          }}
        >
          {BookDetail.title}
        </h1>
        <p
          style={{
            fontSize: "36px",
            lineHeight: "54px",
            fontWeight: "300",
            color: "#1D1D1D",
          }}
        >
          by {BookDetail.author ? BookDetail.author.name : ""}
        </p>
        <div
          style={{
            height: "55.8px",
            width: "279px",
            marginTop: "19px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "#FDAF17",
              borderRadius: "50px",
              height: "55.16px",
              width: "55.16px",
              marginRight: "12px",
            }}
          >
            <p
              style={{
                color: "white",
                textAlign: "center",
                padding: "12px",
                fontSize: "21.53px",
                fontWeight: "400",
              }}
            >
              {BookDetail.rating}
            </p>
          </div>
          {/* Include your Rating component here */}
        </div>
        <p
          style={{
            width: "745px",
            height: "119px",
            overflow: "hidden",
            fontSize: "20px",
            fontWeight: "400",
            lineHeight: "30px",
          }}
        >
          {BookDetail.synopsis}
        </p>
      </div>
    </div>
  );
};

export default BookDetail;
