import React, {useState} from 'react';
import style from './Search.module.css';
import SearchInput from './SearchInput.js';
import SelectSearchEngine from './SelectSearchEngine.js';
function Search() {
  //read localStorage
  let storagedSearchSetting = localStorage.getItem('searchSetting');
  if(storagedSearchSetting) {
    try {
      storagedSearchSetting = JSON.parse(storagedSearchSetting);
    } catch (err) {
      storagedSearchSetting = null;
    }
  }
  let [searchSetting, setSearchSetting] = useState(storagedSearchSetting || {
    searchEngine: 'google',
    mirrorSetting: {
      useMirror: true,
      index: 0
    }
  });
  //change Hook add setStorage
  let originSetSearchSetting = setSearchSetting;
  setSearchSetting = (v)=> {
    originSetSearchSetting(v);
    localStorage.setItem('searchSetting', JSON.stringify(v));
  }
  return (
    <div className={style.search}>
      <SelectSearchEngine searchSetting={searchSetting} switchSearchEngine={setSearchSetting}></SelectSearchEngine>
      <SearchInput searchSetting={searchSetting}></SearchInput>
    </div>
  )
}
export default Search;