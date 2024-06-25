import React, { useState } from 'react'
import { Range, getTrackBackground } from "react-range";

const CustomRange = ({value,step,min,max,onChange}) => {
  const [isThumbHovered, setIsThumbHovered] = useState(false);

  return (

        <Range
            values={[value]}
            step={step}
            min={min}
            max={max}
            onChange={values=>onChange(values[0])}
            renderTrack={({ props, children }) => (
              <div
                onMouseDown={props.onMouseDown}
                onTouchStart={props.onTouchStart}
                style={{
                  ...props.style,
                  height: "36px",
                  display: "flex",
                  width: "100%",
                }}
              >
                <div
                  ref={props.ref}
                  style={{
                    height: "5px",
                    width: "100%",
                    borderRadius: "4px",
                    background: getTrackBackground({
                      values: [value],
                      colors: ["#1db954", "#535353"],
                      min: min,
                      max: max,
                    }),
                    alignSelf: "center",
                  }}
                >
                  {children}
                </div>
              </div>
            )}
            renderThumb={({ props, isDragged }) => (
              <div
                {...props}
                style={{
                  ...props.style,
                  height: "12px",
                  width: "12px",
                  cursor: "pointer",
                  borderRadius: "25px",
                  backgroundColor: "#FFF",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  boxShadow: "0px 2px 6px #AAA",
                  opacity: isThumbHovered || isDragged ? 1 : 0,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={() => setIsThumbHovered(true)}
                onMouseLeave={() => setIsThumbHovered(false)}
              >
                {/* You can add any content inside the thumb if needed */}
              </div>
            )}
          />
  
  )
}

export default CustomRange
