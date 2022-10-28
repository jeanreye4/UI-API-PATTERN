

function Content() {
  return (
      <div className="slideContainer">
        <button className="back">BACK</button>
        <div className="mario-container">
          <div className="gallery-container">
            <ul className="mario-album gallery js-gallery"></ul>
          </div>
        </div>
        <button className="next">NEXT</button>
      </div>
  )
}

export default Content;