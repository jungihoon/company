const cht1 = document.getElementById("myChart1");
const cht2 = document.getElementById("myChart2");
const cht3 = document.getElementById("myChart3");
const cht4 = document.getElementById("myChart4");

const chart1 = new Chart(cht1, {
  type: "bar", //차트 종류
  data: {
    labels: ["2022", "2023", "2024"],
    datasets: [
      {
        label: "매출액",
        data: [12299, 13436, 12863],
        backgroundColor: [
          "rgba(245, 131, 27, 0.2)", // labels[0]
          "rgba(153, 204, 0, 0.2)", // labels[1]
          "rgba(3, 122, 254, 0.2)", // labels[2]
        ],
        borderColor: [
          "rgb(245, 131, 27)", // labels[0]
          "rgb(153, 204, 0)", // labels[1]
          "rgb(3, 122, 254)", // labels[2]
        ],
        borderWidth: [5],
        borderRadius: [10],
        maxBarThickness: [
          150, // 최대 bar의 두께 설정
        ],
      },
    ],
  },
  options: {
    scales: {
      y: {
        grid: {
          // 축에 대한 격자선
          display: false, // grid 활성화 (기본값 true)
        },
        beginAtZero: true, //0부터 시작
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      // labels: {
      //     font: {
      //         size: 26
      //     },
      // }
    },
    // legend: {
    //     labels: {
    //         // 이 더 특정한 폰트 속성은 전역 속성을 덮어씁니다
    //         fontColor: 'red',
    //         fontFamily: "'Noto Sans KR'",
    //         fontSize: 40
    //     }
    // }
  },
});

const chart2 = new Chart(cht2, {
  type: "bar", //차트 종류
  data: {
    labels: ["2022", "2023", "2024"],
    datasets: [
      {
        label: "영업이익",
        data: [5548, -3879, 2860],
        backgroundColor: [
          "rgba(245, 131, 27, 0.2)", // labels[0]
          "rgba(153, 204, 0, 0.2)", // labels[1]
          "rgba(3, 122, 254, 0.2)", // labels[2]
        ],
        borderColor: [
          "rgb(245, 131, 27)", // labels[0]
          "rgb(153, 204, 0)", // labels[1]
          "rgb(3, 122, 254)", // labels[2]
        ],
        borderWidth: [5],
        borderRadius: [10],
        maxBarThickness: [
          150, // 최대 bar의 두께 설정
        ],
      },
    ],
  },
  options: {
    scales: {
      y: {
        grid: {
          // 축에 대한 격자선
          display: false, // grid 활성화 (기본값 true)
        },
        beginAtZero: true, //0부터 시작
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      // labels: {
      //     font: {
      //         size: 26
      //     },
      // }
    },
    // legend: {
    //     labels: {
    //         // 이 더 특정한 폰트 속성은 전역 속성을 덮어씁니다
    //         fontColor: 'red',
    //         fontFamily: "'Noto Sans KR'",
    //         fontSize: 40
    //     }
    // }
  },
});

const chart3 = new Chart(cht3, {
  type: "bar", //차트 종류
  data: {
    labels: ["2022", "2023", "2024"],
    datasets: [
      {
        label: "순이익",
        data: [4412, -4195, 2639],
        backgroundColor: [
          "rgba(245, 131, 27, 0.2)", // labels[0]
          "rgba(153, 204, 0, 0.2)", // labels[1]
          "rgba(3, 122, 254, 0.2)", // labels[2]
        ],
        borderColor: [
          "rgb(245, 131, 27)", // labels[0]
          "rgb(153, 204, 0)", // labels[1]
          "rgb(3, 122, 254)", // labels[2]
        ],
        borderWidth: [5],
        borderRadius: [10],
        maxBarThickness: [
          150, // 최대 bar의 두께 설정
        ],
      },
    ],
  },
  options: {
    scales: {
      y: {
        grid: {
          // 축에 대한 격자선
          display: false, // grid 활성화 (기본값 true)
        },
        beginAtZero: true, //0부터 시작
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      // labels: {
      //     font: {
      //         size: 26
      //     },
      // }
    },
    // legend: {
    //     labels: {
    //         // 이 더 특정한 폰트 속성은 전역 속성을 덮어씁니다
    //         fontColor: 'red',
    //         fontFamily: "'Noto Sans KR'",
    //         fontSize: 40
    //     }
    // }
  },
});
// legend: {
//     labels: {
//         font: {
//             // 이 더 특정한 폰트 속성은 전역 속성을 덮어씁니다
//             fontColor: 'red',
//                 fontFamily: "'Noto Sans KR'",
//                     fontSize: 40
//         }
//     }
// }
const chart4 = new Chart(cht4, {
  type: "bar", //차트 종류
  data: {
    labels: ["2021", "2022", "2023"],
    datasets: [
      {
        label: "총자산",
        data: [137701, 98717, 108424],
        backgroundColor: [
          "rgba(245, 131, 27, 0.2)", // labels[0]
          "rgba(153, 204, 0, 0.2)", // labels[1]
          "rgba(3, 122, 254, 0.2)", // labels[2]
        ],
        borderColor: [
          "rgb(245, 131, 27)", // labels[0]
          "rgb(153, 204, 0)", // labels[1]
          "rgb(3, 122, 254)", // labels[2]
        ],
        borderWidth: [5],
        borderRadius: [10],
        maxBarThickness: [
          150, // 최대 bar의 두께 설정
        ],
      },
    ],
  },
  options: {
    scales: {
      y: {
        grid: {
          // 축에 대한 격자선
          display: false, // grid 활성화 (기본값 true)
        },
        beginAtZero: true, //0부터 시작
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      // labels: {
      //     font: {
      //         size: 26
      //     },
      // }
    },
    // legend: {
    //     labels: {
    //         // 이 더 특정한 폰트 속성은 전역 속성을 덮어씁니다
    //         fontColor: 'red',
    //         fontFamily: "'Noto Sans KR'",
    //         fontSize: 40
    //     }
    // }
  },
});
