import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationAge from '../VaccinationByAge'
import VaccinationGender from '../VaccinationByGender'
import VaccinationCoverage from '../VaccinationCoverage'
import './index.css'

const status = {
  success: 'Success',
  progress: 'Progress',
  failure: 'Failure',
}

class CowinDashboard extends Component {
  state = {
    age: [],
    gender: [],
    coverage: [],
    statusof: status.progress,
  }

  componentDidMount() {
    this.getdetails()
  }

  getdetails = async () => {
    this.setState({statusof: status.progress})
    const vaccinationDataApiUrl = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(vaccinationDataApiUrl)
    const responsedata = await response.json()

    if (response.ok === true) {
      const updateddata1 = responsedata.last_7_days_vaccination.map(object => ({
        vaccineDate: object.vaccine_date,
        dose1: object.dose_1,
        dose2: object.dose_2,
      }))

      const updateddata2 = responsedata.vaccination_by_age.map(object => ({
        age: object.age,
        count: object.count,
      }))

      const updateddata3 = responsedata.vaccination_by_gender.map(object => ({
        count: object.count,
        gender: object.gender,
      }))

      this.setState({
        age: updateddata2,
        gender: updateddata3,
        coverage: updateddata1,
        statusof: status.success,
      })
    } else {
      this.setState({statusof: status.failure})
    }
  }

  getloader = () => (
    <div testid="loader" className="do">
      <Loader type="ThreeDots" width={80} height={80} />
    </div>
  )

  getprogressdata = () => {
    const {age, gender, coverage} = this.state
    return (
      <div className="container">
        <VaccinationCoverage coverage={coverage} />
        <VaccinationGender gender={gender} />
        <VaccinationAge age={age} />
      </div>
    )
  }

  getfailureview = () => (
    <div className="imgcontainer">
      <img
        className="failure"
        alt="failure view"
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
      />
      <h1>Something went wrong</h1>
    </div>
  )

  makeswitch = () => {
    const {statusof} = this.state

    switch (statusof) {
      case status.success:
        return this.getprogressdata()

      case status.progress:
        return this.getloader()

      case status.failure:
        return this.getfailureview()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="maincontainer">
        <div className="subcontainer">
          <div className="logocontainer">
            <img
              className="logo"
              alt="website logo"
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            />
            <h1 className="heading">Co-WIN</h1>
          </div>
          <h1 className="tag">CoWin Vaccination in India</h1>
          {this.makeswitch()}
        </div>
      </div>
    )
  }
}

export default CowinDashboard
