export const EmpaticaExerciseGraph = () => {}

// import { Box } from "@chakra-ui/react"
// import { ApexOptions } from "apexcharts";
// import Chart from 'react-apexcharts'
// import Papa, { ParseResult } from "papaparse"
// import React from "react";

// const EmpaticaExerciseGraph = () => {

//   type HRDataType = {
//     sample_rate: any,
//     time: string,
//     hr: number,
//     speed: any,
//     pace: any,
//     cadence: any,
//     altitude: any,
//     stride_length: any,
//     distances: any,
//     temperature: any,
//     power: any
//   }

//   type HRValuesType = {
//     data: HRDataType[]
//   }

//   const [timestamp, setTimestamp] = React.useState<String[]>()

//   const [HRValues, setHRValues] = React.useState<HRValuesType>({} as HRValuesType)

//   const getCSV = () => {
//     Papa.parse("/data/DWC_020_CONTROL_25_HR.csv", {
//       header: false,
//       download: true,
//       skipEmptyLines: true,
//       delimiter: ",",
//       complete: (results: ParseResult<HRDataType[]>) => {
//         setTimestamp(results.data.map((value) => {
//           console.log(value)
//           return 'hei'
//         }))
//       },
//     })
//   }

//   console.log(timestamp)

//   React.useEffect(() => {
//     console.log("hei")
//     getCSV()
//   }, [])

//   const state = {
//     series: [{
//       name: "Desktops",
//       data: [1, 2, 3, 4, 5, 6, 7, 7, 8, 9]
//     }],
//     options: {
//       chart: {
//         height: 350,
//         type: "line",
//         zoom: {
//           enabled: false
//         }
//       },
//       dataLabels: {
//         enabled: false
//       },
//       stroke: {
//         curve: 'straight'
//       },
//       title: {
//         text: 'Product Trends by Month',
//         align: 'left'
//       },
//       grid: {
//         row: {
//           colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
//           opacity: 0.5
//         },
//       },
//       xaxis: {
//         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
//       }
//     },
//   };

//   return (
//     <Box>
//       <h1>hei</h1>
//       <Chart
//         series={state.series}
//         options={state.options as ApexOptions}
//         type="line"
//         height={350}
//       />
//     </Box>

//   )
// }


// export default EmpaticaExerciseGraph