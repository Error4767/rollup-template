import baiduLogo from './img/baidu.png';
import googleLogo from './img/google.png';
import bingLogo from './img/bing.png';
import mijiLogo from './img/miji.png';
export default {
  baidu: {
    searchEngine: 'baidu',
    homePage: 'https://www.baidu.com/',
    searchURL: 'https://www.baidu.com/s?word=',
    logo: baiduLogo,
    searchCompletionInterfaceURL: 'https://www.baidu.com/sugrec?pre=1&p=3&ie=utf-8&json=1&prod=pc&from=pc_web&sugsid=30969,1469,21117,30824,26350,30717&wd='
  },
  google: {
    searchEngine: 'google',
    homePage: 'https://www.google.com/',
    searchURL: 'https://www.google.com/search?q=',
    logo: googleLogo,
    mirrors: [
      {
        homePage: 'https://www.google.com.hk/',
        searchURL: 'https://www.google.com.hk/search?q=',
        updateTime: '2020-03-25'
      },
      {
        homePage: 'https://goo.gle.workers.dev/',
        searchURL: 'https://goo.gle.workers.dev/search?q=',
        updateTime: '2020-03-25'
      },
      {
        homePage: 'https://sou.wvw.win/',
        searchURL: 'https://sou.wvw.win/search?q=',
        updateTime: '2020-03-25'
      },
      {
        homePage: 'https://2.52qu.xyz/',
        searchURL: 'https://2.52qu.xyz/search?q=',
        updateTime: '2020-03-25'
      },
      {
        homePage: 'https://gug1.icu/',
        searchURL: 'https://gug1.icu/search?q=',
        updateTime: '2020-03-25'
      },
      {
        homePage: 'https://app.essclick.com/web',
        searchURL: 'https://app.essclick.com/web',
        updateTime: '2020-05-15'
      },
      {
        homePage: 'https://gg.stdio.io/',
        searchURL: 'https://gg.stdio.io/search?q=',
        updateTime: '2020-05-15'
      },
      {
        homePage: 'https://search.sxisa.com/',
        searchURL: 'https://search.sxisa.com/search?q=',
        updateTime: '2020-05-15'
      },
      {
        homePage: 'https://g.goproxy.cf/',
        searchURL: 'https://g.goproxy.cf/search?q=',
        updateTime: '2020-05-15'
      },
      {
        homePage: 'https://2g.s70.me/',
        searchURL: 'https://2g.s70.me/search?q=',
        updateTime: '2020-05-15'
      },
      {
        homePage: 'https://1g.s70.me/',
        searchURL: 'https://1g.s70.me/search?q=',
        updateTime: '2020-05-15'
      },
      {
        homePage: 'http://g.yyuunn.cn/',
        searchURL: 'http://g.yyuunn.cn/search?q=',
        updateTime: '2020-05-15'
      },
      {
        homePage: 'https://google.vioo.workers.dev/',
        searchURL: 'https://google.vioo.workers.dev/search?q=',
        updateTime: '2020-05-15'
      }
      // {
      //   homePage: 'https://googles.now.sh/',
      //   searchURL: 'https://googles.now.sh/search?q='
      // },
      // {
      //   homePage: 'https://so.suo.fit/',
      //   searchURL: 'https://so.suo.fit/search?q='
      // },
      // {
      //   homePage: 'https://ug1.hub-sci.net/',
      //   searchURL: 'https://ug1.hub-sci.net/search?q=',
      // },
    ],
    searchCompletionInterfaceURL: ''
  },
  bing:{
    searchEngine: 'bing',
    logo: bingLogo,
    homePage: 'https://cn.bing.com/',
    searchURL: 'https://cn.bing.com/search?q=',
    searchCompletionInterfaceURL: ''
  },
  miji: {
    searchEngine: 'miji',
    logo: mijiLogo,
    homePage: 'https://mijisou.com/',
    searchURL: 'https://mijisou.com/?q=',
    searchCompletionInterfaceURL: ''
  }
}
