import imageA from "../src/assets/human.svg"

const Card = ({ id, title, status, priority, tag, svg }) => {
    return (
      <>
        <div
          style={{
            display: "flex",
            width: "90%", 
            flexDirection: "column",
            backgroundColor: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
            padding: "10px", 
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
              width:"80%",
              marginBottom: "2px",
              fontSize: "14px", 
              lineHeight: "1.2em", 
              height: "2.4em", 
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
              float: "left", fontWeight: "bold" 
            }}
          >
            <img
                     src={svg}   
                        style={{float:"left", width: '16px', height: '16px', borderRadius: '50%',marginRight:"4px" }}
                    />
            {title}
          </div>
  
          <div style={{ display: "flex" }}>
            
             <img src={priority}></img>
  
            <div
  style={{
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "4px",
    marginLeft: "8px",
    padding: "4px",
    fontSize: "12px",
    border: "1px solid #d0d0d0", 
  }}
>
  <span style={{ color: '#888888' }}>{tag}</span>
</div>

          </div>
        </div>
      </>
    );
  };
  
  export default Card;
  