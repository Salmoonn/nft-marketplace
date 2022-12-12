import '../style/TabBar.css'

const TabBar = ({ tab, cb, active }) => {

  return (
    <div className='tab-bar'>
      <div className='tab-bar-body wrapper'>
        {tab.map(e => (
          <button key={e.title} className={"tab-bar-button" + (active === e.title ? ' active' : '')}
            onClick={() => cb(e.title)}>
            <div className="tab-bar-text work-sans">{e.title}</div>
            <div className="tab-bar-num space-mono not-mobile">{e.value}</div>
          </button>
        ))}
      </div>
    </div>
  )
}

export { TabBar }