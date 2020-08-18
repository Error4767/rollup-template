import React, { useState } from 'react';
import style from './SelectSearchEngine.module.css';
import searchEngineInformations from './defaultSearchEngineInformations.js';
function Menu(props) {
  const { items } = props;
  const [showItems, setShowItems] = useState(false);
  function switchShow() {
    setShowItems(showItems ? false : true);
  }
  return (
    <div className={style.mirrorsMenu}>
      <div className={style.triangle} onClick={switchShow}></div>
      <div className={style.mirrorsItems} onClick={switchShow}/*event bubble*/ style={{ display: showItems ? 'block' : 'none' }}>
        <div className={style.menuTitle}>使用镜像</div>
        <>{items}</>
      </div>
    </div>
  );
}
function SelectSearchEngine(props) {
  const { switchSearchEngine, searchSetting } = props;
  const [selectorShow, setSelectorShow] = useState(false);
  function toggleShow() {
    setSelectorShow(selectorShow ? false : true);
  }
  function itemClick(searchSetting) {
    switchSearchEngine(searchSetting);
    toggleShow();
  }
  return (
    <div className={style.container}>
      <div className={style.switchButton} onClick={toggleShow}>
        <img
          src={searchEngineInformations[searchSetting.searchEngine].logo}
          alt={searchEngineInformations[searchSetting.searchEngine].searchEngine}
          className={style.logo}
        ></img>
        <div className={style.triangle}></div>
      </div>
      <div className={style.options} style={{ display: selectorShow ? 'block' : 'none' }}>
        {
          Object.values(searchEngineInformations).map((v, index) => {
            return (
              <div className={style.item} key={v.searchURL} >
                <img
                  onClick={itemClick.bind(null, {
                    searchEngine: v.searchEngine,
                    mirrorSetting: {
                      useMirror: false,
                      index: 0
                    }
                  })}
                  src={v.logo} className={style.logo}
                  alt={v.searchEngine}
                >
                </img>
                {v.mirrors ?
                  <Menu a={1} items={v.mirrors.map((mirror, i) => {
                    return (
                      <div onClick={itemClick.bind(null, {
                        searchEngine: v.searchEngine,
                        mirrorSetting: {
                          useMirror: true,
                          index: i
                        }
                      })}
                        className={style.menuItem} key={mirror.searchURL}>{mirror.homePage}</div>
                    )
                  })}
                  ></Menu>
                  : null}
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
export default SelectSearchEngine;