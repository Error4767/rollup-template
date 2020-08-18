import React,{useState, useEffect} from 'react';
import style from './SearchInput.module.css';
import searchEngineInformations from './defaultSearchEngineInformations.js';
import jsonp from './jsonp.js';
//* 传入参数searchSetting,结构如下
//* searchSetting = searchSetting || {
//*   searchEngine: 'google',
//*   mirrorSetting: {//镜像设置
//*     useMirror: true,//启用
//*     index: 0//镜像链接在数组中的坐标
//*   },
//* };

function randomID(){
  return Math.random().toString(16).substr(2, 12);
}


window.jsonp = jsonp;
let searchSetting;
const input = React.createRef();
const searchCompletion = React.createRef();
let searchCompletionData,setSearchCompletionData;

const jsonpCallbackFnID = '__JSONP' + randomID();
window.jsonpHandle = {};
window.jsonpHandle[jsonpCallbackFnID] = (data)=> {
  if(data.g instanceof Array) {
    setSearchCompletionData(data.g.map(v=>v.q));
  }
}

function search(value) {
  searchSetting = searchSetting || {
    searchEngine: 'baidu',
    mirrorSetting: {
      useMirror: false,
      index: 0
    },
  };
  let searchEngineInformation = searchEngineInformations[searchSetting.searchEngine];
  if(searchEngineInformation) {
    if(searchSetting.mirrorSetting.useMirror === true) {
      value ? window.open(searchEngineInformation.mirrors[searchSetting.mirrorSetting.index].searchURL + value) : window.open(searchEngineInformation.mirrors[searchSetting.mirrorSetting.index].homePage);
    }else {
      value ? window.open(searchEngineInformation.searchURL + value) : window.open(searchEngineInformation.homePage);
    }
  }
}
function inputKeyDown(e) {
  if(e.keyCode === 13) {
    e.persist();
    const {value} = e.target;
    search(value);
  }
}
function inputChange(e) {
  const searchCompletionInterfaceURL = searchEngineInformations[searchSetting.searchEngine].searchCompletionInterfaceURL;
  if(searchCompletionInterfaceURL) {
    e.persist();
    jsonp(searchCompletionInterfaceURL + e.target.value , `jsonpHandle.${jsonpCallbackFnID}`);
  }else {
    searchCompletionData && setSearchCompletionData(false);
  }
}

function iconClick() {
  search(input.current.value);
}
function SearchInput(props) {
  [searchCompletionData, setSearchCompletionData] = useState(false);
  searchSetting = props.searchSetting;
  useEffect(()=> {
    if(searchCompletion) {
      const left = input.current.offsetLeft + 80;
      const top = input.current.offsetTop + input.current.clientHeight;
      if(searchCompletion.current.offsetLeft !== left || searchCompletion.current.offsetTop !== top) {
        searchCompletion.current.style.cssText += `left: ${left}px;top: ${top}px;`;
      }
    }
  })
  return (
    <>
      <div className={style.container}>
        <input type='text' ref={input} onKeyDown={inputKeyDown} onChange={inputChange} className={style.searchInput} placeholder='Search'></input>
        <div className={style.searchIcon} onClick={iconClick}></div>
        <div ref={searchCompletion} className={style.searchCompletion} style={{display: searchCompletionData ? 'block' : 'none'}}>
          {
            searchCompletionData ?
            searchCompletionData.map(v=> {
              return (
              <div className={style.searchCompletionItem} key={v} onClick={search.bind(null, v)}>{v}</div>
              )
            })
            : null
          }
        </div>
      </div>
    </>
  )
}

export default SearchInput;