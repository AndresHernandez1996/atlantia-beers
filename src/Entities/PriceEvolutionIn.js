/* eslint-disable array-callback-return */
/**
 * @description Returns matches according to product name
 */

class PriceEvolutionIn {
  constructor({ data }) {
    const getPrices = (arrOfPrices, sku) => {
      return arrOfPrices
        .map((el) => {
          if (el.sku === sku) {
            return el.price
          }
        })
        .filter((item) => item !== undefined)
    }
    this.series = [
      {
        name: "Cerveza XX Ambar 325 ml",
        data: getPrices(data, "039430430493093"),
      },
      {
        name: "Cerveza Tecate Light 355 ml",
        data: getPrices(data, "019130421492023"),
      },
      {
        name: "Cerveza XX Lager 355 ml",
        data: getPrices(data, "149430221492023"),
      },
    ]
    this.options = {
      chart: {
        height: 350,
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      colors: ["#D6215B", "#7530B2", "#FFB448"],
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 0,
          opacityFrom: 0,
          opacityTo: 0,
          stops: [0, 90, 100],
        },
      },
      xaxis: {
        type: "datetime",
        categories: data
          .map((el) => {
            return el.dateExtraction
          })
          .filter(
            (el, index) =>
              data
                .map((el) => {
                  return el.dateExtraction
                })
                .indexOf(el) === index
          ),
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    }
  }

  get = () => {
    return { ...this }
  }
}

export default PriceEvolutionIn
