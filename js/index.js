//调用函数使用判断语句，将图表函数调用渲染到大屏中
let getvisual = true
if (getvisual) {
  // setInterval(timeid, 1000);
  // bar()
  pie()
  map()
  table()
  stock()
  line()
  getvisual = !getvisual//判断条件否定避免二次调用
}

function map() {
  //坐标数据

  const data = [
    {
      "name": "山西省晋中市灵石县静升镇景区",
      "value": [111.866534, 36.896071]
    },
    {
      "name": "江苏省苏州市昆山市周庄镇景区",
      "value": [120.844956, 31.114451]
    },
    {
      "name": "江苏省苏州市吴江区同里镇景区",
      "value": [120.714193, 31.160075]
    },
    {
      "name": "江苏省苏州市吴中区甪直镇景区",
      "value": [120.868413, 31.271258]
    },
    {
      "name": "浙江省嘉兴市嘉善县西塘镇景区",
      "value": [120.889456, 30.948160]
    },
    {
      "name": "浙江省桐乡市乌镇景区",
      "value": [120.478847, 30.751728]
    },
    {
      "name": "福建省龙岩市上杭县古田镇景区",
      "value": [116.827159, 25.224479]
    },
    {
      "name": "重庆市合川区涞滩镇景区",
      "value": [106.490298, 30.176644]
    },
    {
      "name": "重庆市石柱县西沱镇景区",
      "value": [108.216741, 30.409247]
    },
    {
      "name": "重庆市潼南区双江镇景区",
      "value": [105.746439, 30.219184]
    },
    {
      "name": "河北省张家口市蔚县暖泉镇景区",
      "value": [114.429485, 39.802845]
    },
    {
      "name": "山西省吕梁市临县碛口镇景区",
      "value": [110.792275, 37.640852]
    },
    {
      "name": "辽宁省抚顺市新宾满族自治县永陵镇景区",
      "value": [124.796028, 41.708434]
    },
    {
      "name": "上海市金山区枫泾镇景区",
      "value": [121.010399, 30.889458]
    },
    {
      "name": "江苏省苏州市吴中区木渎镇景区",
      "value": [120.509012, 31.253453]
    },
    {
      "name": "江苏省太仓市沙溪镇景区",
      "value": [121.065383, 31.568477]
    },
    {
      "name": "江苏省泰州市姜堰区溱潼镇景区",
      "value": [120.092174, 32.651607]
    },
    {
      "name": "江苏省泰兴市黄桥镇景区",
      "value": [120.226001, 32.242770]
    },
    {
      "name": "浙江省湖州市南浔区南浔镇景区",
      "value": [120.425753, 30.877435]
    },
    {
      "name": "浙江省宁波市江北区慈城镇景区",
      "value": [121.444313, 29.987549]
    },
    {
      "name": "浙江省宁波市象山县石浦镇景区",
      "value": [121.939816, 29.214361]
    },
    {
      "name": "福建省邵武市和平镇景区",
      "value": [117.296747, 27.163708]
    },
    {
      "name": "江西省景德镇市浮梁县瑶里镇景区",
      "value": [117.576004, 29.548834]
    },
    {
      "name": "河南省禹州市神垕镇景区",
      "value": [113.222659, 34.118446]
    },
    {
      "name": "河南省南阳市淅川县荆紫关镇景区",
      "value": [111.016479, 33.248959]
    },
    {
      "name": "湖北省荆州市监利县周老嘴镇景区",
      "value": [112.979870, 30.033176]
    },
    {
      "name": "湖北省黄冈市红安县七里坪镇景区",
      "value": [114.650925, 31.466597]
    },
    {
      "name": "湖南省湘西土家族苗族自治州龙山县里耶镇景区",
      "value": [109.292623, 28.786771]
    },
    {
      "name": "广东省广州市番禺区沙湾镇景区",
      "value": [113.329832, 22.905667]
    },
    {
      "name": "广东省吴川市吴阳镇景区",
      "value": [110.683657, 21.350901]
    },
    {
      "name": "广西壮族自治区桂林市灵川县大圩镇景区",
      "value": [110.419964, 25.184826]
    },
    {
      "name": "重庆市渝北区龙兴镇景区",
      "value": [106.789906, 29.702554]
    },
    {
      "name": "重庆市江津区中山镇景区",
      "value": [106.325070, 28.842693]
    },
    {
      "name": "重庆市黔江区酉阳土家族苗族自治县龙潭镇景区",
      "value": [108.767042, 28.847209]
    },
    {
      "name": "四川省邛崃市平乐镇景区",
      "value": [103.331512, 30.346689]
    },
    {
      "name": "四川省成都市大邑县安仁镇景区",
      "value": [103.616753, 30.512777]
    },
    {
      "name": "四川省阆中市老观镇景区",
      "value": [106.181391, 31.766586]
    },
    {
      "name": "四川省宜宾市翠屏区李庄镇景区",
      "value": [104.799148, 28.807278]
    },
    {
      "name": "贵州省贵阳市花溪区青岩镇景区",
      "value": [106.684635, 26.334561]
    },
    {
      "name": "贵州省遵义市习水县土城镇景区",
      "value": [105.994899, 28.279493]
    },
    {
      "name": "云南省楚雄彝族自治州禄丰县黑井镇景区",
      "value": [101.744376, 25.372893]
    },
    {
      "name": "甘肃省隆南市（应为陇南市）宕昌县哈达铺镇景区",
      "value": [104.221067, 34.234771]
    },
    {
      "name": "新疆吐鲁番市鄯善县鲁克沁镇景区",
      "value": [89.753562, 42.743582]
    },
    {
      "name": "河北省邯郸市永年县广府镇景区",
      "value": [114.724501, 36.700875]
    },
    {
      "name": "山西省临汾市襄汾县汾城镇景区",
      "value": [111.271745, 35.818662]
    },
    {
      "name": "山西省阳泉市平定县娘子关镇景区",
      "value": [113.878029, 37.967900]
    },
    {
      "name": "黑龙江省海林市横道河子镇景区",
      "value": [129.055449, 44.816867]
    },
    {
      "name": "上海市青浦区朱家角镇景区",
      "value": [121.051118, 31.113788]
    }
  ]
  //添加坐标点大小
  for (let i = 0; i < data.length; i++) {
    data[i]['value'][2] = Math.floor(Math.random() * (300 - 100 + 1)) + 100

  }
  console.log(data)

  var myMap = echarts.init(document.getElementById('map'))//获取容器进行渲染

  var option = {//图表配置项
    title: [{
      text: '历史名镇景区',
      left: '2%',
      top: '3%',
      textStyle: {
        color: '#fff'
      }
    }],
    geo: {
      map: 'china',
      show: true,
      roam: false,
      label: {
        emphasis: {
          show: false
        }
      },
      itemStyle: {
        normal: {
          areaColor: '#091632',
          borderColor: '#1773c3',
          shadowColor: '#1773c3',
          shadowBlur: 20
        }
      }
    },
    series: [
      {
        type: 'map',
        map: 'china',
        geoIndex: 1,
        aspectScale: 0.75, //长宽比
        showLegendSymbol: true, // 存在legend时显示
        label: {
          normal: {
            show: false,
          },
          emphasis: {
            show: false,
            textStyle: {
              color: '#fff'
            }
          }
        },
        roam: false,
        itemStyle: {
          normal: {
            areaColor: '#031525',
            borderColor: '#3B5077',
            borderWidth: 1
          },
          emphasis: {
            areaColor: '#0f2c70'
          }
        },
        data: [
          { name: '北京', value: 21300 }
        ]
      },
      {
        name: '城市',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: data,
        symbolSize: function (val) {
          return val[2] / 20;
        },
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: false
          },
          emphasis: {
            show: true
          }
        },
        itemStyle: {
          normal: {
            color: '#ddb926'
          }
        }
      },

    ]

  };
  myMap.setOption(option)//将图表配置渲染到容器中

}


//top20滚动表格

function table() {
  const data = [['1、5A 级', '故宫', '北京'], 
  ['2、5A 级', '兵马俑 ', '陕西西安'],
  ['3、5A 级', '黄山', '安徽'], 
  ['4、5A 级', '九寨沟 ', '四川'], 
  ['5、5A级', '平遥古城', '山西'], 
  ['6、5A级', '周庄', '江苏'], 
  ['7、5A级', '亚龙湾', '海南三亚'],
  ['8、5A级', '千岛湖', '浙江'],
  ['9、5A级', '五台山', '山西'],
  ['10、5A级', '普陀山', '浙江'],
  ['11、5A级', '篁岭', '江西'],
  ['12、5A级', '天山托木尔大峡谷', '新疆'], 
  ['13、5A级', '查济古村', '安徽'], 
  ['14、5A级', '西塘古镇', '浙江'],
  ['15、5A级', '敦煌莫高窟', '甘肃'],
  ['16、5A级', '青岩古镇', '贵州'],
  ['17、5A级', '张家界', '湖南'],
  ['18、5A级', '衡水湖旅游景区', '河北'],
  ['19、5A级', '桂林漓江', '广西'],
  ['20、5A级', '清明上河园', '河南开封'] ,


  ]


  const tbody = document.querySelector('.right-bottom-right tbody');
  console.log(data)




  for (let n = 0; n < data.length; n++) {
    const tr = document.createElement('tr')

    if (n % 2 === 0) {
      tr.style.backgroundColor = '#0c4e92'
      //获取数据渲染
    } else {
      tr.style.backgroundColor = '#9eb4e9'

    }
    tr.innerHTML = `<td>${data[n][0]}</td>
      <td>${data[n][1]}</td>
      <td>${data[n][2]}</td>`;
    //追加节点到父元素的子节点的最后一位
    tbody.appendChild(tr)
  }

  let scrollBox = document.querySelector('.right-bottom-right .scroll');

  let distance = 0;
  //设置全局变量控制定时器
  let p
  //滚动函数
  function time() {
    p = setInterval(function () {
      distance += 1;
      scrollBox.style.transform = 'translateY(-' + distance + 'px)';
      //当滚动到最底部时跳会最初位置滚动，实现无限滚动

      if (scrollBox.style.transform == 'translateY(-250px)') {
        distance = 0
      }

    }, 65);
  }

  let folg1 = true
  if (folg1) {
    {
      time()
      folg1 = !folg1
    }
  }

  scrollBox.addEventListener('mouseout', function () {
    //调用滚动函数
    time()

  }



  )
  scrollBox.addEventListener('mouseover', function () {
    //鼠标悬停暂停
    clearInterval(p)
  })
}
//饼图
function pie() {
  let myChart = echarts.init(document.getElementById('pie'));


  let randomColors = generateRandomColorsArray(30);
  console.log(randomColors)
  const res = [{ 'name': '安徽省', 'value': 11 },
  { 'name': '北京市', 'value': 1 },
  { 'name': '福建省', 'value': 19 },
  { 'name': '甘肃省', 'value': 8 },
  { 'name': '广东省', 'value': 15 },
  { 'name': '广西壮族自治区 ', 'value': 9 },
  { 'name': '贵州省', 'value': 8 },
  { 'name': '海南省', 'value': 4 },
  { 'name': '河北省', 'value': 8 },
  { 'name': '河南省', 'value': 10 },
  { 'name': '黑龙江省', 'value': 2 },
  { 'name': '湖北省', 'value': 13 },
  { 'name': '湖南省', 'value': 10 },
  { 'name': '吉林省', 'value': 2 },
  { 'name': '江苏省', 'value': 31 },
  { 'name': '江西省', 'value': 13 },
  { 'name': '辽宁省', 'value': 4 },
  { 'name': '内蒙古自治区', 'value': 5 },
  { 'name': '青海省', 'value': 1 },
  { 'name': '山东省', 'value': 4 },
  { 'name': '山西省', 'value': 15 },
  { 'name': '陕西省', 'value': 7 },
  { 'name': '上海市', 'value': 11 },
  { 'name': '四川省', 'value': 31 },
  { 'name': '天津市', 'value': 1 },
  { 'name': '西藏自治区', 'value': 5 },
  { 'name': '新疆维吾尔自治区', 'value': 3 },
  { 'name': '云南省', 'value': 11 },
  { 'name': '浙江省', 'value': 27 },
  { 'name': '重庆市', 'value': 23 },

  ]
  data = []
  console.log(res.length)
  for (let i = 0; i < res.legend; i++) {
    data.push = res[i]['name']
  }


  let option = {
    grid: {
      left: '1%',
      top: 10,
      buttom: 8

    },
    title: [{
      text: '景区名镇地区占比',
      left: '2%',
      top: '3%',
      textStyle: {
        color: '#fff'
      }
    }],
    tooltip: {
      trigger: 'item',
      top: '1%',
      formatter: "{b}:{d}%"
    },
    legend: {
      orient: 'vertical',
      top: 1,
      left: "74%",
      textStyle: {
        color: '#7c8081'
      },
      itemWidth: 0,
      itemHeight: 0,
      data: data,
      formatter: function (params) {
        for (var i = 0; i < option.series[0].data.length; i++) {
          if (option.series[0].data[i].name == params) {
            return params + ":" + option.series[0].data[i].value;
          }
        }
      },

    },
    series: [
      {
        name: '年预计规模',
        type: 'pie',
        radius: ['55%', '75%'],
        center: ['50%', '60%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '20',
              fontWeight: 'bold'
            }
          }
        },

        labelLine: {
          normal: {
            show: false
          }
        },
        data: res,
        itemStyle: {
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          },
          normal: {
            color: function (params) {
              //自定义颜色
              var colorList = randomColors;
              return colorList[params.dataIndex]
            }
          }
        }
      }

    ]



  };
  myChart.setOption(option);


}

//生成数组随机颜色
function getRandomColor() {
  // 生成一个随机颜色  
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// 生成30个随机颜色字符串的数组， 
function generateRandomColorsArray(numColors) {
  let colorsArray = [];
  for (let i = 0; i < numColors; i++) {
    colorsArray.push(getRandomColor()); // 将每个颜色作添加在数组中  
  }
  return colorsArray;
}

//右上线性图
function line() {
  var myChart = echarts.init(document.getElementById('line'));
  option = {
    title: [{
      text: '历史名镇景区从清朝到现代数量的变化',
      left: '2%',
      top: '3%',
      textStyle: {
        color: '#fff'
      }
    }],
    tooltip: {
      trigger: 'axis'
    },
    grid: {
      top: 'middle',
      left: '3%',
      right: '4%',
      bottom: '5%',
      top: '25%',
      containLabel: true
    },
    legend: {
      show: true,
      top: '15%',
      left: '20%',
      textStyle: {
        color: "#fff"
      }

    },
    xAxis: [{
      type: 'category',
      data: ['清朝', '民国', '建国初期', '20 世纪末', '2024年'],
      axisLabel: {
        show: true,
        rotate: 35, // 将标签倾斜45度
        textStyle: {
          color: "#ebf8ac" //X轴文字颜色
        }
      },
      axisLine: {
        lineStyle: {
          color: '#01FCE3'
        }
      },
    }],
    yAxis: [{
      type: 'value',
      name: "历史名镇",
      axisLabel: {
        formatter: '{value} ',
        textStyle: {
          color: "#2EC7C9" //X轴文字颜色
        }
      },
      axisLine: {
        lineStyle: {
          color: '#01FCE3'
        }
      },
    },
    ],
    series: [

      // {
      //   name: '国产影视',
      //   type: 'bar',
      //   itemStyle: {
      //     normal: {
      //       barBorderRadius: 5,
      //       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      //         offset: 0,
      //         color: "#00FFE3"
      //       },
      //       {
      //         offset: 1,
      //         color: "#4693EC"
      //       }
      //       ])
      //     }
      //   },
      //   /*data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]*/
      //   data: [100, 205, 260],
      // },
      // {
      //   name: '美剧类',
      //   type: 'bar',
      //   itemStyle: {
      //     normal: {
      //       barBorderRadius: 5,
      //       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
      //         offset: 0,
      //         color: "#C1B2EA"
      //       },
      //       {
      //         offset: 1,
      //         color: "#8362C6"
      //       }
      //       ])
      //     }
      //   },
      //   data: [100, 180, 133],
      // },
      {
        name: '历史名镇景点数量变化',
        type: 'line',
        data: [294, 198, 157, 117, 312],
        lineStyle: {
          normal: {
            width: 5,
            color: {
              type: 'linear',

              colorStops: [{
                offset: 0,
                color: '#AAF487' // 0% 处的颜色
              },
              {
                offset: 0.4,
                color: '#47D8BE' // 100% 处的颜色
              }, {
                offset: 1,
                color: '#47D8BE' // 100% 处的颜色
              }
              ],
              globalCoord: false // 缺省为 false
            },
            shadowColor: 'rgba(71,216,190, 0.5)',
            shadowBlur: 10,
            shadowOffsetY: 7
          }
        },
        itemStyle: {
          normal: {
            color: '#AAF487',
            borderWidth: 10,
            /*shadowColor: 'rgba(72,216,191, 0.3)',
             shadowBlur: 100,*/
            borderColor: "#AAF487"
          }
        },
        smooth: true,
      }
    ]
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}

// 搜索记录前五名
function stock() {
  var myChart = echarts.init(document.getElementById('stock'));
  option = {
    title: [{
      text: '名镇景点受喜爱程度排序',
      left: '2%',
      top: '3%',
      textStyle: {
        color: '#fff'
      }
    }],
    grid: {
      top: 'middle',
      left: '3%',
      right: '4%',
      bottom: '3%',
      top: '50%',
      containLabel: true
    },
    color: [new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
      offset: 0,
      color: '#f2719a'
    },
    {
      offset: 1,
      color: '#ffffff'
    }]), new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
      offset: 0,
      color: '#FFB547'
    },
    {
      offset: 1,
      color: '#ffffff'
    }]), new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
      offset: 0,
      color: '#50FFF9'
    },
    {
      offset: 1,
      color: '#ffffff'
    }]), new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
      offset: 0,
      color: '#8579FF'
    },
    {
      offset: 1,
      color: '#ffffff'
    }]), new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
      offset: 0,
      color: '#2076EF'
    },
    {
      offset: 1,
      color: '#ffffff'
    }])],
    tooltip: {
      trigger: 'item',
    },

    legend: {
      top: '15%',
      textStyle: {
        color: "#e9ebee"

      }
    },

    series: [{
      name: '名镇景点热度排行榜',
      type: 'funnel', left: '10%',
      top: '32%',
      bottom: 20,
      width: '80%',

      label: {
        show: true,
        position: 'inside'


      },
      labelLine: {

        length: 5,
        lineStyle: {
          width: 1,
          type: 'solid'
        }
      },
      data: [
        { value: 4.64, name: '南浔古镇' },
        { value: 4.0675, name: '丽江古城' },
        { value: 3.4175, name: '同里古镇' },
        { value: 2.78, name: '平遥古城' },
        { value: 2.7075, name: '阆中古城' },
        { value: 2.6675, name: '黄姚古镇' }
      ]
    }]
  };


  myChart.setOption(option);
}