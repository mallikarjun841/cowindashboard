import {PieChart, Pie, Cell, ResponsiveContainer, Legend} from 'recharts'

import './index.css'

const VaccinationGender = props => {
  const {gender} = props
  console.log(gender)
  return (
    <div className="gendercontainer">
      <h1 className="name">Vaccination by gender</h1>
      <ResponsiveContainer className="chart" width="100%" height={500}>
        <PieChart>
          <Pie
            className="cellcontainer"
            cx="50%"
            cy="50%"
            data={gender}
            innerRadius="40%"
            outerRadius="70%"
            startAngle={0}
            endAngle={180}
            dataKey="count"
          >
            <Cell name="Male" fill="#f54394" />
            <Cell name="Female" fill="#a3df9f" />
            <Cell name="Others" fill="#64c2a6" />
          </Pie>
          <Legend
            iconType="circle"
            layout="middle"
            verticalAlign="bottom"
            align="left"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}

export default VaccinationGender
