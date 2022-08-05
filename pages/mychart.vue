<template>
<div>
    <!-- <div>
        前端薪資調查報告
    </div> -->
    <!-- <div class = "bar_part">
        <Bar
            :chart-options="chartOptions"
            :chart-data="chartData"
            :chart-id="chartId"
            :dataset-id-key="datasetIdKey"
            :plugins="plugins"
            :css-classes="cssClasses"
            :styles="styles"
            :width="350"
            :height="200"
        />
    </div>
    <button @click="changeData()">點我改值</button> -->
    <!-- <div class = "bar_part">
        <Pie
            :chart-options="chartOptions"
            :chart-data="chartData"
            :chart-id="chartId"
            :dataset-id-key="datasetIdKey"
            :plugins="plugins"
            :css-classes="cssClasses"
            :styles="styles"
            :width="150"
            :height="150"
        />
    </div> -->
</div>



</template>

<script>
import { Bar , Pie } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { defineComponent, inject, provide, reactive, ref, toRefs, onMounted, watch } from "vue";


ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar , Pie },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
      default: () => {}
    },
    plugins: {
      type: Object,
      default: () => {}
    }
  },
  setup(props) {
    var chartData = reactive({
        labels: [ 'January', 'February', 'March' ],
        datasets: [ 
            { 
                label: 'Data One',
                data: [40, 20, 12],
                backgroundColor: ['#41B883', '#E46651', '#00D8FF'],
            } ,
        ]
      })
    const changeData = () =>{
        console.log('點我改值')
        chartData.datasets[0].data = [20,20,20];
        console.log(chartData);
    }

    return {
      chartData,
      chartOptions: {
        responsive: true
      },
      changeData
    }
  },

}
</script>

<style>

.bar_part{
    width: 30%;
    height:auto ;
}

</style>