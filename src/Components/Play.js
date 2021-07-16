import React from "react"

export default function Play({onClick, show}) {
  return<div
            className="circle"
            onClick={onClick}
            style={{ display: show ? "none" : "flex" }}
          >
            <div className="playIcon"></div>
          </div>
}