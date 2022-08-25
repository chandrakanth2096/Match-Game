import './index.css'

const TabItem = props => {
  const {eachTab, onClickTabBtn, isClick} = props
  const {tabId, displayText} = eachTab
  const isClicked = isClick ? 'clicked' : null

  const onTabBtn = () => {
    onClickTabBtn(tabId)
  }

  return (
    <li className="tab">
      <button
        type="button"
        className={`tab-button ${isClicked}`}
        onClick={onTabBtn}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
