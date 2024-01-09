/* eslint-disable react/prop-types */

const Cards = ({ bookData, renderDate, renderNumber, renderBorder }) => {
  const filteringData = bookData.slice(0, 4);

  return (
    <div style={{ marginTop: "77px", display: "flex", gap: "64px" }}>
      {filteringData.map((item, i) => (
        <div
          key={item.id}
          style={{
            width: "265px",
            height: "auto",
            // Add more CSS styles as needed for Card container
          }}
        >
          <div style={{ position: "relative" }}>
            <img
              src={item.image_url}
              style={{
                width: "260px",
                borderRadius: "8px",
                height: "340px",
                // Add more CSS styles as needed for Image
              }}
              alt="Book Cover"
            />
            {renderBorder && (
              <div
                style={{
                  height: "41px",
                  minWidth: "80px",
                  width: "fit-content",
                  backgroundColor: "#8170F2",
                  borderTopRightRadius: "50px",
                  borderBottomEndRadius: "50px",
                  position: "absolute",
                  top: "12px",
                  marginTop: "3px",
                  // Add more CSS styles as needed for Box
                }}
              >
                {renderNumber && (
                  <div
                    style={{
                      display: "flex",
                      backgroundColor: "#ffffff",
                      width: "30px",
                      height: "30px",
                      borderRadius: "50px",
                      textAlign: "center",
                      position: "absolute",
                      top: "1px",
                      right: "1px",
                      margin: "2px",
                    }}
                  >
                    <p style={{ margin: "auto" }}>{i + 1}</p>
                  </div>
                )}
                {renderDate && (
                  <div
                    style={{
                      fontSize: "18.67px",
                      color: "#ffffff",
                      lineHeight: "28px",
                      paddingLeft: "18px",
                      marginRight: "29.81px",
                      marginTop: "6px",
                    }}
                  >
                    {new Date(item.created_at).toLocaleDateString("en-GB")}
                  </div>
                )}
              </div>
            )}

            <h2
              style={{
                fontSize: "24px",
                fontWeight: "600",
                lineHeight: "32px",
                marginTop: "10px",
                width: "260px",
                overflow: "hidden",
              }}
            >
              {item.title}
            </h2>
            <p
              style={{
                fontSize: "20px",
                fontWeight: "400",
                lineHeight: "30px",
                marginTop: "6px",
              }}
            >
              by {item.author.name}
            </p>
            <div style={{ marginTop: "14px" }}>
              {/* Add your Rating component here */}
            </div>
          </div>

          <div style={{ marginTop: "10px" }}>
            <button
              style={{
                height: "50px",
                width: "260px",
                color: "#8170F2",
                backgroundColor: "transparent",
                borderRadius: "8px",
                border: "1px solid #8170F2",
                fontSize: "20px",
              }}
            >
              <a href={`/book/${item.id}`}>Read Book</a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
