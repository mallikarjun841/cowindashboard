import {PieChart, Pie, Cell, ResponsiveContainer, Legend} from 'recharts'
import './index.css'

const VaccinationAge = props => {
  const {age} = props

  return (
    <div className="agecontainer">
      <h1 className="name">Vaccination by Age</h1>

      <ResponsiveContainer className="chart" width="100%" height={500}>
        <PieChart>
          <Pie
            className="cellcontainer"
            cx="50%"
            cy="50%"
            data={age}
            innerRadius="0%"
            outerRadius="70%"
            startAngle={0}
            endAngle={360}
            dataKey="count"
          >
            <Cell name="18-44" fill="#f54394" />
            <Cell name="45-60" fill="#a3df9f" />
            <Cell name="Above 60" fill="#64c2a6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="end"
            verticalAlign="bottom"
            align="right"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationAge
