import React, { useState, useEffect} from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styles from './ViewPage.scss';
import classNames from 'classnames/bind';
import ViewList from './../ViewList/ViewList';

import _1101_1 from './../../image/1101/1101_1.png';
import _1101 from './../../file/1101.pdf';
import _1102_1 from './../../image/1102/1102_1.png';
import _1102 from './../../file/1102.pdf';
import _1103_1 from './../../image/1103/1103_1.png';
import _1103 from './../../file/1103.pdf';
import _1104_1 from './../../image/1104/1104_1.png';
import _1104 from './../../file/1104.pdf';
import _1105_1 from './../../image/1105/1105_1.png';
import _1105 from './../../file/1105.pdf';
import _1106_1 from './../../image/1106/1106_1.png';
import _1106 from './../../file/1106.pdf';
import _1107_1 from './../../image/1107/1107_1.png';
import _1107 from './../../file/1107.pdf';
import _1108_1 from './../../image/1108/1108_1.png';
import _1108 from './../../file/1108.pdf';
import _1109_1 from './../../image/1109/1109_1.png';
import _1109 from './../../file/1109.pdf';
import _1110_1 from './../../image/1110/1110_1.png';
import _1110 from './../../file/1110.pdf';
import _1111_1 from './../../image/1111/1111_1.png';
import _1111 from './../../file/1111.pdf';
import _1112_1 from './../../image/1112/1112_1.png';
import _1112 from './../../file/1112.pdf';
import _1113_1 from './../../image/1113/1113_1.png';
import _1113 from './../../file/1113.pdf';
import _1114_1 from './../../image/1114/1114_1.png';
import _1114 from './../../file/1114.pdf';
import _1115_1 from './../../image/1115/1115_1.png';
import _1115 from './../../file/1115.pdf';
import _1116_1 from './../../image/1116/1116_1.png';
import _1116 from './../../file/1116.pdf';
import _1117_1 from './../../image/1117/1117_1.png';
import _1117 from './../../file/1117.pdf';
import _1118_1 from './../../image/1118/1118_1.png';
import _1118 from './../../file/1118.pdf';
import _1119_1 from './../../image/1119/1119_1.png';
import _1119 from './../../file/1119.pdf';
import _1120_1 from './../../image/1120/1120_1.png';
import _1120 from './../../file/1120.pdf';
import _1121_1 from './../../image/1121/1121_1.png';
import _1121 from './../../file/1121.pdf';

import _1201_1 from './../../image/1201/1201_1.png';
import _1201 from './../../file/1201.pdf';
import _1202_1 from './../../image/1202/1202_1.png';
import _1202 from './../../file/1202.pdf';
import _1203_1 from './../../image/1203/1203_1.png';
import _1203 from './../../file/1203.pdf';
import _1204_1 from './../../image/1204/1204_1.png';
import _1204 from './../../file/1204.pdf';
import _1205_1 from './../../image/1205/1205_1.png';
import _1205 from './../../file/1205.pdf';
import _1206_1 from './../../image/1206/1206_1.png';
import _1206 from './../../file/1206.pdf';
import _1207_1 from './../../image/1207/1207_1.png';
import _1207 from './../../file/1207.pdf';
import _1208_1 from './../../image/1208/1208_1.png';
import _1208 from './../../file/1208.pdf';
import _1209_1 from './../../image/1209/1209_1.png';
import _1209 from './../../file/1209.pdf';
import _1210_1 from './../../image/1210/1210_1.png';
import _1210 from './../../file/1210.pdf';
import _1211_1 from './../../image/1211/1211_1.png';
import _1211 from './../../file/1211.pdf';
import _1212_1 from './../../image/1212/1212_1.png';
import _1212 from './../../file/1212.pdf';
import _1213_1 from './../../image/1213/1213_1.png';
import _1213 from './../../file/1213.pdf';
import _1214_1 from './../../image/1214/1214_1.png';
import _1214 from './../../file/1214.pdf';
import _1215_1 from './../../image/1215/1215_1.png';
import _1215 from './../../file/1215.pdf';
import _1216_1 from './../../image/1216/1216_1.png';
import _1216 from './../../file/1216.pdf';
import _1217_1 from './../../image/1217/1217_1.png';
import _1217 from './../../file/1217.pdf';
import _1218_1 from './../../image/1218/1218_1.png';
import _1218 from './../../file/1218.pdf';
import _1219_1 from './../../image/1219/1219_1.png';
import _1219 from './../../file/1219.pdf';
import _1220_1 from './../../image/1220/1220_1.png';
import _1220 from './../../file/1220.pdf';

import _1301_1 from './../../image/1301/1301_1.png';
import _1301 from './../../file/1301.pdf';
import _1302_1 from './../../image/1302/1302_1.png';
import _1302 from './../../file/1302.pdf';
import _1303_1 from './../../image/1303/1303_1.png';
import _1303 from './../../file/1303.pdf';
import _1304_1 from './../../image/1304/1304_1.png';
import _1304 from './../../file/1304.pdf';
import _1305_1 from './../../image/1305/1305_1.png';
import _1305 from './../../file/1305.pdf';
import _1306_1 from './../../image/1306/1306_1.png';
import _1306 from './../../file/1306.pdf';
import _1307_1 from './../../image/1307/1307_1.png';
import _1307 from './../../file/1307.pdf';
import _1308_1 from './../../image/1308/1308_1.png';
import _1308 from './../../file/1308.pdf';
import _1309_1 from './../../image/1309/1309_1.png';
import _1309 from './../../file/1309.pdf';
import _1310_1 from './../../image/1310/1310_1.png';
import _1310 from './../../file/1310.pdf';
import _1311_1 from './../../image/1311/1311_1.png';
import _1311 from './../../file/1311.pdf';
import _1312_1 from './../../image/1312/1312_1.png';
import _1312 from './../../file/1312.pdf';
import _1313_1 from './../../image/1313/1313_1.png';
import _1313 from './../../file/1313.pdf';
import _1314_1 from './../../image/1314/1314_1.png';
import _1314 from './../../file/1314.pdf';
import _1315_1 from './../../image/1315/1315_1.png';
import _1315 from './../../file/1315.pdf';
import _1316_1 from './../../image/1316/1316_1.png';
import _1316 from './../../file/1316.pdf';
import _1317_1 from './../../image/1317/1317_1.png';
import _1317 from './../../file/1317.pdf';
import _1318_1 from './../../image/1318/1318_1.png';
import _1318 from './../../file/1318.pdf';
import _1319_1 from './../../image/1319/1319_1.png';
import _1319 from './../../file/1319.pdf';
import _1320_1 from './../../image/1320/1320_1.png';
import _1320 from './../../file/1320.pdf';

import _1401_1 from './../../image/1401/1401_1.png';
import _1401 from './../../file/1401.pdf';
import _1402_1 from './../../image/1402/1402_1.png';
import _1402 from './../../file/1402.pdf';
import _1403_1 from './../../image/1403/1403_1.png';
import _1403 from './../../file/1403.pdf';
import _1404_1 from './../../image/1404/1404_1.png';
import _1404 from './../../file/1404.pdf';
import _1405_1 from './../../image/1405/1405_1.png';
import _1405 from './../../file/1405.pdf';
import _1406_1 from './../../image/1406/1406_1.png';
import _1406 from './../../file/1406.pdf';
import _1407_1 from './../../image/1407/1407_1.png';
import _1407 from './../../file/1407.pdf';
import _1408_1 from './../../image/1408/1408_1.png';
import _1408 from './../../file/1408.pdf';
import _1409_1 from './../../image/1409/1409_1.png';
import _1409 from './../../file/1409.pdf';
import _1410_1 from './../../image/1410/1410_1.png';
import _1410 from './../../file/1410.pdf';
import _1411_1 from './../../image/1411/1411_1.png';
import _1411 from './../../file/1411.pdf';
import _1412_1 from './../../image/1412/1412_1.png';
import _1412 from './../../file/1412.pdf';
import _1413_1 from './../../image/1413/1413_1.png';
import _1413 from './../../file/1413.pdf';
import _1414_1 from './../../image/1414/1414_1.png';
import _1414 from './../../file/1414.pdf';
import _1415_1 from './../../image/1415/1415_1.png';
import _1415 from './../../file/1415.pdf';
import _1416_1 from './../../image/1416/1416_1.png';
import _1416 from './../../file/1416.pdf';
import _1417_1 from './../../image/1417/1417_1.png';
import _1417 from './../../file/1417.pdf';
import _1418_1 from './../../image/1418/1418_1.png';
import _1418 from './../../file/1418.pdf';
import _1419_1 from './../../image/1419/1419_1.png';
import _1419 from './../../file/1419.pdf';
import _1420_1 from './../../image/1420/1420_1.png';
import _1420 from './../../file/1420.pdf';

const cx = classNames.bind(styles);

const axios = require('axios');

const ViewPage = () => {
  let history = useHistory();
  const location = useLocation();

  const [ final, setFinal ] = useState(true);
  const [ viewId, setViewId ] = useState('');
  const [ viewPin, setViewPin ] = useState('');
  const [ num,setNum ] = useState(0);

  const [lists, setLists] = useState([
    {
      id:1,
      file: _1101,
      img: _1101_1,
      title:"1101"
    },
    {
      id:2,
      file: _1102,
      img: _1102_1,
      title:"1102"
    },
    {
      id:3,
      file: _1103,
      img: _1103_1,
      title:"1103"
    },
    {
      id:4,
      file: _1104,
      img: _1104_1,
      title:"1104"
    },
    {
      id:5,
      file: _1105,
      img: _1105_1,
      title:"1105"
    },
    {
      id:6,
      file: _1106,
      img: _1106_1,
      title:"1106"
    },
    {
      id:7,
      file: _1107,
      img: _1107_1,
      title:"1107"
    },
    {
      id:8,
      file: _1108,
      img: _1108_1,
      title:"1108"
    },

    {
      id:9,
      file: _1109,
      img: _1109_1,
      title:"1109"
    },

    {
      id:10,
      file: _1110,
      img: _1110_1,
      title:"1110"
    },
    {
      id:11,
      file: _1111,
      img: _1111_1,
      title:"1111"
    },
    {
      id:12,
      file: _1112,
      img: _1112_1,
      title:"1112"
    },
    {
      id:13,
      file: _1113,
      img: _1113_1,
      title:"1113"
    },
    {
      id:14,
      file: _1114,
      img: _1114_1,
      title:"1114"
    },
    {
      id:15,
      file: _1115,
      img: _1115_1,
      title:"1115"
    },
    {
      id:16,
      file: _1116,
      img: _1116_1,
      title:"1116"
    },
    {
      id:17,
      file: _1117,
      img: _1117_1,
      title:"1117"
    },

    {
      id:18,
      file: _1118,
      img: _1118_1,
      title:"1118"
    },

    {
      id:19,
      file: _1119,
      img: _1119_1,
      title:"1119"
    },
    {
      id:20,
      file: _1120,
      img: _1120_1,
      title:"1120"
    },
    {
      id:21,
      file: _1121,
      img: _1121_1,
      title:"1121"
    },
    {
      id:22,
      file: _1201,
      img: _1201_1,
      title:"1201"
    },
    {
      id:23,
      file: _1202,
      img: _1202_1,
      title:"1202"
    },
    {
      id:24,
      file: _1203,
      img: _1203_1,
      title:"1203"
    },
    {
      id:25,
      file: _1204,
      img: _1204_1,
      title:"1204"
    },
    {
      id:26,
      file: _1205,
      img: _1205_1,
      title:"1205"
    },
    {
      id:27,
      file: _1206,
      img: _1206_1,
      title:"1206"
    },
    {
      id:28,
      file: _1207,
      img: _1207_1,
      title:"1207"
    },
    {
      id:29,
      file: _1208,
      img: _1208_1,
      title:"1208"
    },
    {
      id:30,
      file: _1209,
      img: _1209_1,
      title:"1209"
    },
    {
      id:31,
      file: _1210,
      img: _1210_1,
      title:"1210"
    },
    {
      id:32,
      file: _1211,
      img: _1211_1,
      title:"1211"
    },
    {
      id:33,
      file: _1212,
      img: _1212_1,
      title:"1212"
    },
    {
      id:34,
      file: _1213,
      img: _1213_1,
      title:"1213"
    },
    {
      id:35,
      file: _1214,
      img: _1214_1,
      title:"1214"
    },
    {
      id:36,
      file: _1215,
      img: _1215_1,
      title:"1215"
    },
    {
      id:37,
      file: _1216,
      img: _1216_1,
      title:"1216"
    },
    {
      id:38,
      file: _1217,
      img: _1217_1,
      title:"1217"
    },
    {
      id:39,
      file: _1218,
      img: _1218_1,
      title:"1218"
    },
    {
      id:40,
      file: _1219,
      img: _1219_1,
      title:"1219"
    },
    {
      id:41,
      file: _1220,
      img: _1220_1,
      title:"1220"
    },
    {
      id:42,
      file: _1301,
      img: _1301_1,
      title:"1301"
    },
    {
      id:43,
      file: _1302,
      img: _1302_1,
      title:"1302"
    },
    {
      id:44,
      file: _1303,
      img: _1303_1,
      title:"1303"
    },
    {
      id:45,
      file: _1304,
      img: _1304_1,
      title:"1304"
    },
    {
      id:46,
      file: _1305,
      img: _1305_1,
      title:"1305"
    },

    {
      id:47,
      file: _1306,
      img: _1306_1,
      title:"1306"
    },

    {
      id:48,
      file: _1307,
      img: _1307_1,
      title:"1307"
    },
    {
      id:49,
      file: _1308,
      img: _1308_1,
      title:"1308"
    },
    {
      id:50,
      file: _1309,
      img: _1309_1,
      title:"1309"
    },
    {
      id:51,
      file: _1310,
      img: _1310_1,
      title:"1310"
    },
    {
      id:52,
      file: _1311,
      img: _1311_1,
      title:"1311"
    },
    {
      id:53,
      file: _1312,
      img: _1312_1,
      title:"1312"
    },
    {
      id:54,
      file: _1313,
      img: _1313_1,
      title:"1313"
    },
    {
      id:55,
      file: _1314,
      img: _1314_1,
      title:"1314"
    },
    {
      id:56,
      file: _1315,
      img: _1315_1,
      title:"1315"
    },
    {
      id:57,
      file: _1316,
      img: _1316_1,
      title:"1316"
    },
    {
      id:58,
      file: _1317,
      img: _1317_1,
      title:"1317"
    },
    {
      id:59,
      file: _1318,
      img: _1318_1,
      title:"1318"
    },
    {
      id:60,
      file: _1319,
      img: _1319_1,
      title:"1319"
    },
    {
      id:61,
      file: _1320,
      img: _1320_1,
      title:"1320"
    },
    {
      id:62,
      file: _1401,
      img: _1401_1,
      title:"1401"
    },
    {
      id:63,
      file: _1402,
      img: _1402_1,
      title:"1402"
    },
    {
      id:64,
      file: _1403,
      img: _1403_1,
      title:"1403"
    },
    {
      id:65,
      file: _1404,
      img: _1404_1,
      title:"1404"
    },
    {
      id:66,
      file: _1405,
      img: _1405_1,
      title:"1405"
    },

    {
      id:67,
      file: _1406,
      img: _1406_1,
      title:"1406"
    },

    {
      id:68,
      file: _1407,
      img: _1407_1,
      title:"1407"
    },
    {
      id:69,
      file: _1408,
      img: _1408_1,
      title:"1408"
    },
    {
      id:70,
      file: _1409,
      img: _1409_1,
      title:"1409"
    },
    {
      id:71,
      file: _1410,
      img: _1410_1,
      title:"1410"
    },

    {
      id:72,
      file: _1411,
      img: _1411_1,
      title:"1411"
    },

    {
      id:73,
      file: _1412,
      img: _1412_1,
      title:"1412"
    },
    {
      id:74,
      file: _1413,
      img: _1413_1,
      title:"1413"
    },
    {
      id:75,
      file: _1414,
      img: _1414_1,
      title:"1414"
    },
    {
      id:76,
      file: _1415,
      img: _1415_1,
      title:"1415"
    },
    {
      id:77,
      file: _1416,
      img: _1416_1,
      title:"1416"
    },
    {
      id:78,
      file: _1417,
      img: _1417_1,
      title:"1417"
    },
    {
      id:79,
      file: _1418,
      img: _1418_1,
      title:"1418"
    },
    {
      id:80,
      file: _1419,
      img: _1419_1,
      title:"1419"
    },

    {
      id:81,
      file: _1420,
      img: _1420_1,
      title:"1420"
    },

  ]);

  useEffect(() => {
    if (typeof (location.state) !== 'undefined' && location.state != null) {
      const { id, pin } = location.state;
      setViewId(id);
      setViewPin(pin);
    } else {
      // error handling, if message undefined
      setViewId("default");
      setViewPin("default");
    }
  }, []);

  const checkAdd = () => {
    setNum(num => num + 1);
    console.log(num);
  }

  const handleFinalSubmit = (e) => {
    e.preventDefault();

    if(num >= 5) {
      axios.post(`http://${process.env.REACT_APP_SERVER_IP}:${process.env.REACT_APP_PORT}/api/use/send`, {
        id: viewId,
        pin: viewPin
      })
      .then(function (response) {
        console.log(response.body.check);
      })
      .catch(function (error) {
        console.log(error);
      });

      setNum(0);

      history.push({
        pathname: '/',
        state: {
          final: final,
          pin: viewPin,
          id: viewId
        }
      });
    } else {
      alert("다섯개 이상 설문을 해주세요");
    }
  }

  const errorPage = () => {
    alert("잘못된 접근 방식입니다. 메인페이지로 돌아가시겠습니까?");
    history.push("/");
  }

  return (
    <div>
    { (viewPin == "tZJRc") ?
      <div className={cx('view-back')}>
        <div className={cx('view-header')}>
          <div className={cx('fixed-title')}>2020학년도 1학년 카드뉴스 수행평가</div>
          <button onClick={handleFinalSubmit}>제출</button>
        </div>
        <div className={cx('view-main')}>
          <div className={cx('view-main-title')}>
            <div className={cx('view-bar')}></div>
            <input className={cx('view-main-title-name')} value="2020학년도 1학년 카드뉴스 수행평가" readOnly/>
          </div>
          <div className={cx('view-list')}>
            <ViewList viewid={viewId} viewpin={viewPin} checkAdd={checkAdd} lists={lists}/>
          </div>
        </div>
      </div>
      :
      <div className={cx('errorpage')} onMouseMove={errorPage}>
      </div>
    }
    </div>
  );
}

export default ViewPage;
