import React from 'react'
import SyncLoader from "react-spinners/SyncLoader";

export default function Spinner(props) {
  return (
    <div
      style={{ position: 'fixed', top: '50%', right: '50%', zIndex: 10 }}
    >
      <SyncLoader
        size={50}
        color={"green"}
        loading={props.loading}
      />
    </div>
  )
}
