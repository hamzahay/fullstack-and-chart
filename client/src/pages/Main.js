import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import './Main.css'
import Navbar from '../components/Navbar.js'
import { fetchIncomesData } from '../store/action'
import { Bar } from 'react-chartjs-2'

export default function Main () {
  const history = useHistory()
  const dispatch = useDispatch()
  const incomes = useSelector(state => state.incomes)
  const data = {
    labels: incomes.map(income => income.month),
    datasets: [
      {
        label: '# of Incomes',
        data: incomes.map(income => income.sum),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
      },
    ],
  };

  useEffect(() => {
    if (!localStorage.access_token) {
      history.push('/login')
    } else {
      dispatch(fetchIncomesData())
    }
  }, [history])

  return (
    <div className="mainContainer">
      <Navbar />
      <div className="chartContainer">
        <Bar data={data} />
      </div>
    </div>
  )
}