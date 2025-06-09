import React from "react";

function EmojisItem({ emojisArray, handleEmojiClick, counts }) {
  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
      {emojisArray.map((emoji, id) => (
        <div key={id} style={{ textAlign: "center" }}>
          <button className="btn" onClick={() => handleEmojiClick(emoji)} style={{ fontSize: "2rem" }}>
            {emoji}
          </button>
          <div>
            {emoji === "🙂" && counts.countHappy}
            {emoji === "😐" && counts.countModerate}
            {emoji === "😡" && counts.countAngry}
          </div>
        </div>
      ))}
    </div>
  );
}

export default EmojisItem;
