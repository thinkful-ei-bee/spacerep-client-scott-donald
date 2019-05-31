import React, { Component } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Cell,
  Legend,
  ResponsiveContainer
} from "recharts";
import "./Progress.css";

const parseDomain = (d01, d02) => [
  0,
  Math.max(
    Math.max.apply(null, d01.map(entry => entry.value)),
    Math.max.apply(null, d02.map(entry => entry.value))
  )
];

class Progress extends Component {
  renderTooltip = props => {
    const { active, payload } = props;

    if (active && payload && payload.length) {
      const data = payload[0] && payload[0].payload;

      return (
        <div
          style={{
            backgroundColor: "#fff",
            border: "1px solid #999",
            margin: 0,
            padding: 10
          }}
        >
          <p>{data.hour}</p>
          <p>
            <span>{data.correct} correct,</span>
            {data.incorrect} incorrect
          </p>
        </div>
      );
    }

    return null;
  };

  render() {
    const { language, kAlphabet } = this.props;
    const range = [16, 225];

    let d01 = kAlphabet;
    let d02 = d01.splice(17);
    const domain = parseDomain(d01, d02);

    return (
      <div className="viz">
        <ScatterChart
          width={800}
          height={60}
          margin={{
            top: 10,
            right: 0,
            bottom: 0,
            left: -80
          }}
        >
          <XAxis
            type="category"
            dataKey="hour"
            name="hour"
            interval={0}
            tickLine={{ transform: "translate(0, -6)" }}
          />
          <YAxis
            type="number"
            dataKey="index"
            height={10}
            width={80}
            tick={false}
            tickLine={false}
            axisLine={false}
            label={{ value: "", position: "insideRight" }}
          />
          <ZAxis type="number" dataKey="value" domain={domain} range={range} />
          <Tooltip
            cursor={{ strokeDasharray: "3 3" }}
            wrapperStyle={{ zIndex: 100 }}
            content={this.renderTooltip}
          />
          <Scatter data={d01} fill="#8884d8">
            {d01.map((entry, index) => {
              let tempColor = "#00C49F";
              if (entry.value < 0) {
                tempColor = "#FF8042";
              }
              return <Cell key={`cell-${index}`} fill={tempColor} />;
            })}
          </Scatter>
        </ScatterChart>

        <ScatterChart
          width={800}
          height={60}
          margin={{
            top: 10,
            right: 0,
            bottom: 0,
            left: -80
          }}
        >
          <XAxis
            type="category"
            dataKey="hour"
            name="hour"
            interval={0}
            tickLine={{ transform: "translate(0, -6)" }}
          />
          <YAxis
            type="number"
            dataKey="index"
            height={10}
            width={80}
            tick={false}
            tickLine={false}
            axisLine={false}
            label={{ value: "", position: "insideRight" }}
          />
          <ZAxis type="number" dataKey="value" domain={domain} range={range} />
          <Tooltip
            cursor={{ strokeDasharray: "3 3" }}
            wrapperStyle={{ zIndex: 100 }}
            content={this.renderTooltip}
          />
          <Scatter data={d02} fill="#8884d8">
            {d02.map((entry, index) => {
              let tempColor = "#00C49F";
              if (entry.value < 0) {
                tempColor = "#FF8042";
              }
              return <Cell key={`cell-${index}`} fill={tempColor} />;
            })}
          </Scatter>
        </ScatterChart>
      </div>
    );
  }
}

export default Progress;

// <section className="progress-section">
//   <div className="lang-prog-div">
//     <h2>{language.name}</h2>
//     <span>total score:{language.total_score}</span>
//   </div>

//   <div className="word-prog-div">{this.renderWords(words)}</div>
// </section>

// const data01 = [
//   { hour: "А а", index: 1, value: 7, correct: 10, incorrect: 3 },
//   { hour: "Б б", index: 1, value: 8, correct: 10, incorrect: 2 },
//   { hour: "В в", index: 1, value: 5, correct: 7, incorrect: 2 },
//   { hour: "Г г", index: 1, value: 2, correct: 12, incorrect: 10 },
//   { hour: "Д д", index: 1, value: -1, correct: 10, incorrect: 11 },
//   { hour: "Е е", index: 1, value: 8, correct: 9, incorrect: 1 },
//   { hour: "Ё ё", index: 1, value: 4, correct: 5, incorrect: 1 },
//   { hour: "Ж ж", index: 1, value: -2, correct: 5, incorrect: 7 },
//   { hour: "З з", index: 1, value: 4, correct: 10, incorrect: 6 },
//   { hour: "И и", index: 1, value: 5, correct: 15, incorrect: 10 },
//   { hour: "Й й", index: 1, value: 6, correct: 6, incorrect: 0 },
//   { hour: "К к", index: 1, value: 7, correct: 8, incorrect: 1 },
//   { hour: "Л л", index: 1, value: 8, correct: 10, incorrect: 2 },
//   { hour: "М м", index: 1, value: 4, correct: 7, incorrect: 3 },
//   { hour: "Н н", index: 1, value: 6, correct: 8, incorrect: 2 },
//   { hour: "О о", index: 1, value: -4, correct: 3, incorrect: 7 },
//   { hour: "П п", index: 1, value: 5, correct: 7, incorrect: 2 }
// ];

// const data02 = [
//   { hour: "Р р", index: 1, value: 6, correct: 16, incorrect: 10 },
//   { hour: "С с", index: 1, value: 8, correct: 12, incorrect: 4 },
//   { hour: "Т т", index: 1, value: 5, correct: 9, incorrect: 4 },
//   { hour: "У у", index: 1, value: 2, correct: 9, incorrect: 7 },
//   { hour: "Ф ф", index: 1, value: -2, correct: 4, incorrect: 6 },
//   { hour: "Х х", index: 1, value: -3, correct: 3, incorrect: 6 },
//   { hour: "Ц ц", index: 1, value: 1, correct: 10, incorrect: 9 },
//   { hour: "Ч ч", index: 1, value: 2, corvrect: 11, incorrect: 9 },
//   { hour: "Ш ш", index: 1, value: 1, correct: 8, incorrect: 7 },
//   { hour: "Щ щ", index: 1, value: 5, correct: 9, incorrect: 4 },
//   { hour: "Ъ ъ", index: 1, value: 6, correct: 7, incorrect: 1 },
//   { hour: "Ы ы", index: 1, value: -2, correct: 8, incorrect: 10 },
//   { hour: "Ь ь", index: 1, value: 8, correct: 11, incorrect: 3 },
//   { hour: "Э э", index: 1, value: 4, correct: 5, incorrect: 1 },
//   { hour: "Ю ю", index: 1, value: 6, correct: 9, incorrect: 3 },
//   { hour: "Я я", index: 1, value: 4, correct: 12, incorrect: 8 }
// ];
