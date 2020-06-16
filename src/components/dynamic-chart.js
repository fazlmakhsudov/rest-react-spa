import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import { Row, Col, Image, OverlayTrigger, Tooltip, Button } from 'react-bootstrap';
import singleUpArrow from '../media/single-up-arrow.jpg';
import singleDownArrow from '../media/single-down-arrow.jpg';
import axios from 'axios';


export default function DynamicChart(props) {
  let countries = {
    AF: 'AFGHANISTAN', AL: 'ALBANIA', DZ: 'ALGERIA', AS: 'AMERICAN SAMOA', AD: 'ANDORRA', AO: 'ANGOLA', AI: 'ANGUILLA', AQ: 'ANTARCTICA',
    AG: 'ANTIGUA AND BARBUDA', AR: 'ARGENTINA', AM: 'ARMENIA', AW: 'ARUBA', AU: 'AUSTRALIA', AT: 'AUSTRIA', AZ: 'AZERBAIJAN', BS: 'BAHAMAS', BH: 'BAHRAIN',
    BD: 'BANGLADESH', BB: 'BARBADOS', BY: 'BELARUS', BE: 'BELGIUM', BZ: 'BELIZE', BJ: 'BENIN', BM: 'BERMUDA', BT: 'BHUTAN', BO: 'BOLIVIA',
    BA: 'BOSNIA AND HERZEGOVINA', BW: 'BOTSWANA', BV: 'BOUVET ISLAND', BR: 'BRAZIL', IO: 'BRITISH INDIAN OCEAN TERRITORY', BN: 'BRUNEI DARUSSALAM',
    BG: 'BULGARIA', BF: 'BURKINA FASO', BI: 'BURUNDI', KH: 'CAMBODIA', CM: 'CAMEROON', CA: 'CANADA', CV: 'CAPE VERDE', KY: 'CAYMAN ISLANDS',
    CF: 'CENTRAL AFRICAN REPUBLIC', TD: 'CHAD', CL: 'CHILE', CN: 'CHINA', CX: 'CHRISTMAS ISLAND', CC: 'COCOS (KEELING) ISLANDS', CO: 'COLOMBIA',
    KM: 'COMOROS', CG: 'CONGO', CD: 'CONGO, THE DEMOCRATIC REPUBLIC OF THE', CK: 'COOK ISLANDS', CR: 'COSTA RICA', CI: 'COTE D IVOIRE', HR: 'CROATIA',
    CU: 'CUBA', CY: 'CYPRUS', CZ: 'CZECH REPUBLIC', DK: 'DENMARK', DJ: 'DJIBOUTI', DM: 'DOMINICA', DO: 'DOMINICAN REPUBLIC', TP: 'EAST TIMOR',
    EC: 'ECUADOR', EG: 'EGYPT', SV: 'EL SALVADOR', GQ: 'EQUATORIAL GUINEA', ER: 'ERITREA', EE: 'ESTONIA', ET: 'ETHIOPIA', FK: 'FALKLAND ISLANDS (MALVINAS)',
    FO: 'FAROE ISLANDS', FJ: 'FIJI', FI: 'FINLAND', FR: 'FRANCE', GF: 'FRENCH GUIANA', PF: 'FRENCH POLYNESIA', TF: 'FRENCH SOUTHERN TERRITORIES',
    GA: 'GABON', GM: 'GAMBIA', GE: 'GEORGIA', DE: 'GERMANY', GH: 'GHANA', GI: 'GIBRALTAR', GR: 'GREECE', GL: 'GREENLAND', GD: 'GRENADA', GP: 'GUADELOUPE',
    GU: 'GUAM', GT: 'GUATEMALA', GN: 'GUINEA', GW: 'GUINEA-BISSAU', GY: 'GUYANA', HT: 'HAITI', HM: 'HEARD ISLAND AND MCDONALD ISLANDS',
    VA: 'HOLY SEE (VATICAN CITY STATE)', HN: 'HONDURAS', HK: 'HONG KONG', HU: 'HUNGARY', IS: 'ICELAND', IN: 'INDIA', ID: 'INDONESIA',
    IR: 'IRAN, ISLAMIC REPUBLIC OF', IQ: 'IRAQ', IE: 'IRELAND', IL: 'ISRAEL', IT: 'ITALY', JM: 'JAMAICA', JP: 'JAPAN', JO: 'JORDAN', KZ: 'KAZAKSTAN',
    KE: 'KENYA', KI: 'KIRIBATI', KP: 'KOREA DEMOCRATIC PEOPLES REPUBLIC OF', KR: 'KOREA REPUBLIC OF', KW: 'KUWAIT', KG: 'KYRGYZSTAN',
    LA: 'LAO PEOPLES DEMOCRATIC REPUBLIC', LV: 'LATVIA', LB: 'LEBANON', LS: 'LESOTHO', LR: 'LIBERIA', LY: 'LIBYAN ARAB JAMAHIRIYA', LI: 'LIECHTENSTEIN',
    LT: 'LITHUANIA', LU: 'LUXEMBOURG', MO: 'MACAU', MK: 'MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF', MG: 'MADAGASCAR', MW: 'MALAWI', MY: 'MALAYSIA',
    MV: 'MALDIVES', ML: 'MALI', MT: 'MALTA', MH: 'MARSHALL ISLANDS', MQ: 'MARTINIQUE', MR: 'MAURITANIA', MU: 'MAURITIUS', YT: 'MAYOTTE', MX: 'MEXICO',
    FM: 'MICRONESIA, FEDERATED STATES OF', MD: 'MOLDOVA, REPUBLIC OF', MC: 'MONACO', MN: 'MONGOLIA', MS: 'MONTSERRAT', MA: 'MOROCCO', MZ: 'MOZAMBIQUE',
    MM: 'MYANMAR', NA: 'NAMIBIA', NR: 'NAURU', NP: 'NEPAL', NL: 'NETHERLANDS', AN: 'NETHERLANDS ANTILLES', NC: 'NEW CALEDONIA', NZ: 'NEW ZEALAND',
    NI: 'NICARAGUA', NE: 'NIGER', NG: 'NIGERIA', NU: 'NIUE', NF: 'NORFOLK ISLAND', MP: 'NORTHERN MARIANA ISLANDS', NO: 'NORWAY', OM: 'OMAN', PK: 'PAKISTAN',
    PW: 'PALAU', PS: 'PALESTINIAN TERRITORY, OCCUPIED', PA: 'PANAMA', PG: 'PAPUA NEW GUINEA', PY: 'PARAGUAY', PE: 'PERU', PH: 'PHILIPPINES', PN: 'PITCAIRN',
    PL: 'POLAND', PT: 'PORTUGAL', PR: 'PUERTO RICO', QA: 'QATAR', RE: 'REUNION', RO: 'ROMANIA', RU: 'RUSSIAN FEDERATION', RW: 'RWANDA', SH: 'SAINT HELENA',
    KN: 'SAINT KITTS AND NEVIS', LC: 'SAINT LUCIA', PM: 'SAINT PIERRE AND MIQUELON', VC: 'SAINT VINCENT AND THE GRENADINES', WS: 'SAMOA', SM: 'SAN MARINO',
    ST: 'SAO TOME AND PRINCIPE', SA: 'SAUDI ARABIA', SN: 'SENEGAL', SC: 'SEYCHELLES', SL: 'SIERRA LEONE', SG: 'SINGAPORE', SK: 'SLOVAKIA', SI: 'SLOVENIA',
    SB: 'SOLOMON ISLANDS', SO: 'SOMALIA', ZA: 'SOUTH AFRICA', GS: 'SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS', ES: 'SPAIN', LK: 'SRI LANKA', SD: 'SUDAN',
    SR: 'SURINAME', SJ: 'SVALBARD AND JAN MAYEN', SZ: 'SWAZILAND', SE: 'SWEDEN', CH: 'SWITZERLAND', SY: 'SYRIAN ARAB REPUBLIC',
    TW: 'TAIWAN, PROVINCE OF CHINA', TJ: 'TAJIKISTAN', TZ: 'TANZANIA, UNITED REPUBLIC OF', TH: 'THAILAND', TG: 'TOGO', TK: 'TOKELAU', TO: 'TONGA',
    TT: 'TRINIDAD AND TOBAGO', TN: 'TUNISIA', TR: 'TURKEY', TM: 'TURKMENISTAN', TC: 'TURKS AND CAICOS ISLANDS', TV: 'TUVALU', UG: 'UGANDA', UA: 'UKRAINE',
    AE: 'UNITED ARAB EMIRATES', GB: 'UNITED KINGDOM', US: 'UNITED STATES', UM: 'UNITED STATES MINOR OUTLYING ISLANDS', UY: 'URUGUAY', UZ: 'UZBEKISTAN',
    VU: 'VANUATU', VE: 'VENEZUELA', VN: 'VIET NAM', VG: 'VIRGIN ISLANDS, BRITISH', VI: 'VIRGIN ISLANDS, U.S.', WF: 'WALLIS AND FUTUNA',
    EH: 'WESTERN SAHARA', YE: 'YEMEN', YU: 'YUGOSLAVIA', ZM: 'ZAMBIA', ZW: 'ZIMBABWE',
  };
  let chartSetting = { width: 1000, height: 700, title: 'Coronavirus in world' };
  const [data, setData] = useState([]);
  const [time, setTime] = useState(1000);
  const [conditionForInterval, setConditionForInterval] = useState(()=>{});
  let url = 'https://disease.sh/v2/historical/';
  const [chartData, setChartData] = useState(data);
  let formUrl = (countryId, days) => {
    return url + countryId + '?lastdays=' + days;
  }
  function getData(countryId, days) {
    axios.get(formUrl(countryId, days))
      .then(response => {
        setData(response.data);
        console.log('response', response.data);
      }).catch(error => {
        console.log('error', error);
      });
  }

  function addNewCountryStatistic() {
    if (Object.keys(data).length === 0) {
      return [];
    }
    let newChartData = [];
    let sumOfValues = 0;
    Object.values(data.timeline.cases).map((value) => {
      sumOfValues += value;
    });
    newChartData.push(sumOfValues);
    sumOfValues = 0;
    Object.values(data.timeline.deaths).map((value) => {
      sumOfValues += value;
    });
    newChartData.push(sumOfValues);
    sumOfValues = 0;
    Object.values(data.timeline.recovered).map((value) => {
      sumOfValues += value;
    });
    newChartData.push(sumOfValues);
    return newChartData;
  }

  function formChartData() {
    let newChartData = addNewCountryStatistic();
    let formedData = [
      {
        x: (Object.keys(data).length !== 0) ? Object.keys(chartData).length !== 0 ? [...chartData[0].x, data.country] : [data.country] : [],
        y: newChartData[0] ? Object.keys(chartData).length !== 0 ? [...chartData[0].y, newChartData[0]] : [newChartData[0]] : [],
        name: 'Cases',
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: 'yellow' },
      },
      {
        x: (Object.keys(data).length !== 0) ? Object.keys(chartData).length !== 0 ? [...chartData[0].x, data.country] : [data.country] : [],
        y: newChartData[1] ? Object.keys(chartData).length !== 0 ? [...chartData[1].y, newChartData[1]] : [newChartData[1]] : [],
        name: 'Deaths',
        type: 'bar',
        mode: 'lines+markers',
        marker: { color: 'red' },
      },
      {
        x: (Object.keys(data).length !== 0) ? Object.keys(chartData).length !== 0 ? [...chartData[0].x, data.country] : [data.country] : [],
        y: newChartData[2] ? Object.keys(chartData).length !== 0 ? [...chartData[2].y, newChartData[2]] : [newChartData[2]] : [],
        name: 'Recovered',
        type: 'scatter',
        mode: 'lines+markers',
        marker: { color: 'green' },
      }
    ];
    return formedData;
  }
  function run() {
    let i = 0;
    let countriesIds = Object.keys(countries);
    const interval = setInterval(() => {
      getData(countriesIds[(i++)]);
      if (i > countriesIds.length) {
        clearInterval(interval);
      }
      if (i == 1) {
        setConditionForInterval(interval);
      }
    }, time);
    return () => clearInterval(interval);
  }
  function stop() {
    clearInterval(conditionForInterval);
    setData([]);
    setChartData(formChartData());
  }
  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      setChartData(formChartData());
      setData([]);
    }
  });
  return (
    <Row>
      <Button className='w-25 text-center' variant='info' onClick={() => run()}>Start</Button>
      <Button className='ml-4 w-25 text-center' variant='warning' onClick={() => stop()}>Stop</Button>
      <Col xs={11} md={11}>
        <Plot data={chartData} layout={chartSetting} />
      </Col>
      <Col xs={1} md={1} style={chartSetting.dimension}>
        <OverlayTrigger placement='right' overlay={
          <Tooltip>Increase speed</Tooltip>}>
          <Image className="ml-3 mt-5" src={singleUpArrow} width={96} height={96} onClick={() => setTime(time + 200)} roundedCircle />
        </OverlayTrigger>
        <OverlayTrigger placement='right' overlay={
          <Tooltip>Decrease speed</Tooltip>}>
          <Image className="ml-3 mt-5" src={singleDownArrow} width={96} height={96} onClick={() => setTime(time - 200)} roundedCircle />
        </OverlayTrigger>
      </Col>
    </Row>
  );
}
