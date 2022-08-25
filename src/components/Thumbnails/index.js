import './index.css'

const Thumbnails = props => {
  const {onClickThumbnail, eachImg} = props
  const {id, thumbnailUrl} = eachImg

  const onThumbnailBtn = () => {
    onClickThumbnail(id)
  }

  return (
    <li className="thumbnail">
      <button type="button" className="thumb-btn" onClick={onThumbnailBtn}>
        <img className="img2" src={thumbnailUrl} alt="thumbnail" />
      </button>
    </li>
  )
}

export default Thumbnails
