<template>
<div class="mychart">
    <div class="chart-title">
        前端薪資調查報告
    </div>
    <div class="items">
      <div class="items-inner">
        <div class="item choose-item">
          基本資料
        </div>
        <div class="item">
          薪資與產業
        </div>
      </div>
      <!-- <div>
        下拉選單
      </div> -->
    </div>

    <!-- 地區 -->
    <div class="row">
      <div class="bg-chart">
        <div class="bg-chart-inner">
          <div class="chart-outer">
            <Bar
            :chart-options="chartOptions"
            :chart-data="chartData"
            :chart-id="chartId"
            :dataset-id-key="datasetIdKey"
            :plugins="plugins"
            :css-classes="cssClasses"
            :styles="styles"
            :width="400"
            :height="300"
            />
          </div>

        </div>
      </div>
    </div>

    <!-- 年齡 性別比 -->
    <div class="row">
      <div class="bg-chart col-md">
        <div class="bg-chart-inner">
          <div class="chart-outer">
            <Bar
            :chart-options="chartOptions"
            :chart-data="chartData"
            :chart-id="chartId"
            :dataset-id-key="datasetIdKey"
            :plugins="plugins"
            :css-classes="cssClasses"
            :styles="styles"
            :width="200"
            :height="150"
            />
          </div>
        </div>
      </div>
      <div class="bg-chart col-md">
        <div class="bg-chart-inner">
          <div class="chart-outer">
            <Pie
              :chart-options="chartOptions"
              :chart-data="chartData"
              :chart-id="chartId"
              :dataset-id-key="datasetIdKey"
              :plugins="plugins"
              :css-classes="cssClasses"
              :styles="styles"
              :width="150"
              :height="100"
            />
          </div>
        </div>
      </div>
    </div>
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
    height:100vh ;
}

.mychart{
  width: 100%;
  padding: 20% ;
  background-color: rgb(247, 64, 95);
}

.chart-title{
  width:100%;
  margin: 0 auto ;
  display: flex;
  justify-content: center;  
  margin-bottom: 20px;
}



/*  */

.items{
  width:100%;
  display: flex;
  justify-content: center;  
  
}

.items-inner{
  display: flex;
  border: 1px white solid;
}

.items-inner .item{
  padding: 10px;
  margin: 10px;
}

.choose-item{
  background: pink;
  border-radius: 10px;
}

/*  */
.bg-chart{
  margin-top:20px
}
.bg-chart-inner{
  background-color: pink;
  padding: 20px;
  width: 100%;
  /* height:auto; */
  min-height:100%;
  display:flex ;
  justify-content: center;
  align-items: center;
  
}

.chart-outer{
  width: 80%;
  height: 80%;
}

</style>

<!-- 參考畫面 -->
<!-- https://kuanfuchen.github.io/vuedatagraph/ -->
<!-- https://the-f2e-week4.chill404.cc/ -->
<!-- 圖表 參考以下 （vue-chartjs） -->
<!-- https://vue-chartjs.org/examples/#vue-3-charts -->