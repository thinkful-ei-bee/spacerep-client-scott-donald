import React, { Component } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  Tooltip,
  Legend
} from "recharts";
import "./Progress.css";

const data01 = [
  { hour: "А а", index: 1, value: 17, correct: 17, incorrect: 17 },
  { hour: "Б б", index: 1, value: 18, correct: 18, incorrect: 18 },
  { hour: "В в", index: 1, value: 15, correct: 15, incorrect: 15 },
  { hour: "Г г", index: 1, value: 12, correct: 12, incorrect: 12 },
  { hour: "Д д", index: 1, value: 20, correct: 20, incorrect: 20 },
  { hour: "Е е", index: 1, value: 30, correct: 30, incorrect: 30 },
  { hour: "Ё ё", index: 1, value: 40, correct: 40, incorrect: 40 },
  { hour: "Ж ж", index: 1, value: 20, correct: 20, incorrect: 20 },
  { hour: "З з", index: 1, value: 10, correct: 10, incorrect: 10 },
  { hour: "И и", index: 1, value: 15, correct: 15, incorrect: 15 },
  { hour: "Й й", index: 1, value: 16, correct: 16, incorrect: 16 },
  { hour: "К к", index: 1, value: 17, correct: 17, incorrect: 17 },
  { hour: "Л л", index: 1, value: 18, correct: 18, incorrect: 18 },
  { hour: "М м", index: 1, value: 14, correct: 14, incorrect: 14 },
  { hour: "Н н", index: 1, value: 16, correct: 16, incorrect: 16 },
  { hour: "О о", index: 1, value: 14, correct: 14, incorrect: 14 },
  { hour: "П п", index: 1, value: 15, correct: 15, incorrect: 15 }
];

const data02 = [
  { hour: "Р р", index: 1, value: 16, correct: 16, incorrect: 16 },
  { hour: "С с", index: 1, value: 18, correct: 18, incorrect: 18 },
  { hour: "Т т", index: 1, value: 15, correct: 15, incorrect: 15 },
  { hour: "У у", index: 1, value: 12, correct: 12, incorrect: 12 },
  { hour: "Ф ф", index: 1, value: 20, correct: 20, incorrect: 20 },
  { hour: "Х х", index: 1, value: 30, correct: 30, incorrect: 30 },
  { hour: "Ц ц", index: 1, value: 10, correct: 10, incorrect: 10 },
  { hour: "Ч ч", index: 1, value: 20, correct: 20, incorrect: 20 },
  { hour: "Ш ш", index: 1, value: 10, correct: 10, incorrect: 10 },
  { hour: "Щ щ", index: 1, value: 15, correct: 15, incorrect: 15 },
  { hour: "Ъ ъ", index: 1, value: 16, correct: 16, incorrect: 16 },
  { hour: "Ы ы", index: 1, value: 16, correct: 16, incorrect: 16 },
  { hour: "Ь ь", index: 1, value: 18, correct: 18, incorrect: 18 },
  { hour: "Э э", index: 1, value: 14, correct: 14, incorrect: 14 },
  { hour: "Ю ю", index: 1, value: 16, correct: 16, incorrect: 16 },
  { hour: "Я я", index: 1, value: 14, correct: 14, incorrect: 14 }
];

const parseDomain = () => [
  0,
  Math.max(
    Math.max.apply(null, data01.map(entry => entry.value)),
    Math.max.apply(null, data02.map(entry => entry.value))
  )
];

class Progress extends Component {
  renderWords = words => {
    return words.map(word => (
      <div className="word-div" key={word.id}>
        <span>{word.original}</span>
        <span>
          {word.correct_count}/{word.correct_count + word.incorrect_count || 0}
        </span>
      </div>
    ));
  };

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
            <span>{data.correct} " correct,</span>
            {data.incorrect} incorrect
          </p>
        </div>
      );
    }

    return null;
  };

  render() {
    const { language, words } = this.props;
    const domain = parseDomain();
    const range = [16, 225];

    return (
      <div>
        <ScatterChart
          width={800}
          height={60}
          margin={{
            top: 10,
            right: 0,
            bottom: 0,
            left: 0
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
          <Scatter data={data01} fill="#8884d8" />
        </ScatterChart>

        <ScatterChart
          width={800}
          height={60}
          margin={{
            top: 10,
            right: 0,
            bottom: 0,
            left: 0
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
          <Scatter data={data02} fill="#8884d8" />
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
