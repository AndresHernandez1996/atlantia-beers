/* eslint-disable array-callback-return */
/**
 * @description Returns matches according to product name and presence
 */

class PresenceProductIn {
  constructor({ data }) {
    this.series = data.map((el) => {
      return el.presenceShare
    })

    this.options = {
      chart: {
        width: 280,
        height: 280,
        type: "pie",
      },
      labels: data.map((el) => {
        return el.name
      }),
      dataLabels: {
        enabled: false,
      },
      colors: ["#D6215B", "#7530B2", "#006FFF", "#FF7A00", "#23B794"],
      responsive: [
        {
          breakpoint: 400,
          options: {
            chart: {
              width: 280,
              height: 280,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    }
  }

  get = () => {
    return { ...this }
  }
}

export default PresenceProductIn
