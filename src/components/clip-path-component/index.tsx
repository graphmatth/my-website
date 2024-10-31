import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import "./style-clip-path.css";

const ClipPathComponent = () => {
  return (
    <div
      style={{
        border: "2px dashed var(--border-color-card)",
        borderRadius: 8,
      }}
    >
      <svg width="0" height="0">
        <defs>
          <clipPath id="scaled-clip">
            <path
              id="clipPathPath"
              transform="scale(0.8)"
              d="M408.329-43.587c-70.61.01-141.241-1.071-211.819.276C99.028-41.454 22.164 19.784 4.334 107.508c-19.367 95.227 26.947 182.282 123.347 219.231 38.257 14.665 27.795 24.279 7.018 43.719-27.063 25.287-53.352 51.55-78.613 78.651-74.543 79.957-73.589 197.711 1.441 271.8 74.119 73.176 189.95 76.126 267.196.753 147.823-144.24 293.24-290.963 438.499-437.793 59.32-59.943 72.878-132.79 41.066-210.083C772.136-4.272 708.894-41.73 625.447-43.311c-72.348-1.369-144.738-.276-217.118-.276z"
            />
          </clipPath>
        </defs>
      </svg>

      <img
        className="img-clip-path"
        style={{ clipPath: "url(#scaled-clip)" }}
        src="https://images.prismic.io/goodmed/a6bb2148-697c-4057-92d8-a8a96f03292e_AdobeStock_365997725-2.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=100&w=779&h=779"
      />
    </div>
  );
};

export default ClipPathComponent;
