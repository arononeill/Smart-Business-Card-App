import React from "react";

const sectionContainer = {
  textAlign: 'left',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height:'100vh'
}

export default function Section({ title, subtitle, dark, id }) {
  return (
    <div style={sectionContainer} className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        {subtitle}
      </div>
    </div>
  );
}