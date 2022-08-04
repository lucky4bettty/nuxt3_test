<template>
  <div>
    <div class = "pie_part">
        <PieChart />
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
    BarChart
  },
  data() {
    return{}
  }
}
</script>

<style>

.pie_part , .bar_part{
    width: 30%;
    height:auto ;
}

</style>

<!-- 圖表 參考以下 （vue-chartjs） -->
<!-- https://vue-chartjs.org/examples/#vue-3-charts -->
