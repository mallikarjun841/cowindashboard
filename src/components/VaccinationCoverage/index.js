import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {coverage} = props
  const demo = number => {
    if (number > 1000) {
      return `${(number / 1000).toString()}k`
    }
    return number.toString()
  }

  return (
    <div className="coveragecontainer">
      <h1 className="des">Vaccination Coverage</h1>
      <div className="">
        <ResponsiveContainer width="90%" height={400}>
          <BarChart data={coverage} margin={{top: 5}}>
            <XAxis
              dataKey="vaccineDate"
              tick={{stroke: '#94a3b8', strokeWidth: 1}}
            />
            <YAxis
              tickFormatter={demo}
              tick={{stroke: '#94a3b8', strokeWidth: 0}}
            />

            <Legend
              wrapperStyle={{
                padding: 30,
              }}
            />
            <Bar dataKey="dose1" name="dose1" fill="#5a8dee" barSize="40%" />
            <Bar dataKey="dose2" name="dose2" fill="#f54394" barSize="40%" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default VaccinationCoverage
