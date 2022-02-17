const Windows = (props) => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={30}
      height={30}
      viewBox="0 0 48 48"
      style={{
        fill: '#000'
      }}
      {...props}
    >
      <path
        fill="#00b0ff"
        d="M20 25.026 5.011 25l.001 12.744L20 39.818zm2 .004v15.065L42.995 43 43 25.066zM20 8.256 5 10.38 5.014 23H20zm2-.283V23h20.995V5z"
      />
    </svg>
    <style jsx>
      {`
        svg {
          cursor: pointer;
        }
      `}
    </style>
  </>
)

export default Windows
