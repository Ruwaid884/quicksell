import imageA from "../src/assets/human.png"

const Card = ({ id, title, status, priority, tag, svg }) => {
    return (
      <>
        <div
          style={{
            display: "flex",
            margin: "10px",
            width: "90%", 
            flexDirection: "column",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            padding: "8px", 
          }}
        >
          <div style={{ width: "100%", marginBottom: "8px" }}>
            <span style={{ float: "left", fontSize: "12px" }}> {id} </span> 
            <img src={imageA}
            style={{float:"right", width: '20px', height: '20px', borderRadius: '50%', marginRight: "10px", marginLeft: "10px" }}
                    />
          </div>
  
          <div
            style={{
              clear: "both",
              marginBottom: "10px",
              fontSize: "14px", 
              lineHeight: "1.2em", 
              height: "2.4em", 
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            <img
                     src={svg}   
                        style={{float:"left", width: '16px', height: '16px', borderRadius: '50%',marginRight:"4px" }}
                    />
            {title}
          </div>
  
          <div style={{ display: "flex" }}>
            <div
              style={{
                padding: "4px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderWidth: "1px",
                borderStyle: "solid",
                borderRadius: "6px",
                fontSize: "12px", 
              }}
            >
             <img src={priority}></img>
            </div>
  
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderStyle: "solid",
                borderWidth: "1px",
                borderRadius: "4px",
                marginLeft: "8px",
                padding: "4px", 
                fontSize: "12px", 
              }}
            >
              <div
                style={{
                  display:'flex',
                  borderRadius: "4px",
                  backgroundColor: "gray",
                }}
              ></div>
              <span>{tag}</span>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Card;
  