<template>
  <div>
    <div class = "pie_part">
        <PieChart :labels = "labels"/>
    </div>
    <div class = "bar_part">
        <BarChart />
    </div>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import PieChart from './components/pieChart'
import BarChart from './components/barChart'



ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'AllCharts',
  components: { 
    PieChart,
    BarChart,
  },
  data() {
    var mockPayload = {
        "bedTime": "22:10",
        "missing": "false",
        "quality": "Excellent",
        "startTime": "20:00",
        "timeline": [
            {
            "state": "Asleep",
            "duration": "01:20"
            },
            {
            "state": "Disrupted",
            "duration": "00:10"
            },
            {
            "state": "Asleep",
            "duration": "06:30"
            },
            {
            "state": "Disrupted",
            "duration": "00:10"
            },
            {
            "state": "Asleep",
            "duration": "00:50"
            }
        ],
        "totalTimeAsleep": "08:40",
        "totalTimeAwake": "00:20",
        "wakeupTime": "07:10"
        };
    var labels = ['豬','雞','魚','牛']

    return {
      mockPayload,
      labels
    };
  }
}
</script>

<style>

.pie_part , .bar_part{
    width: 30%;
    height:auto ;
}

</style>

<!-- 參考畫面 -->
<!-- https://kuanfuchen.github.io/vuedatagraph/ -->
<!-- https://the-f2e-week4.chill404.cc/ -->
<!-- 圖表 參考以下 （vue-chartjs） -->
<!-- https://vue-chartjs.org/examples/#vue-3-charts -->
