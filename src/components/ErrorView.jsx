import { useDispatch } from "react-redux"
import { loadServices } from '../redux/actions/actionCreator'

export default function ErrorView({ id = 'all' }) {
  const dispatch = useDispatch();

  const handleReloadService = () => {
    dispatch(loadServices(id))
  }

  return (
    <div className="bg-opacity-25 bg-danger text-center rounded p-3">
      Произошла ошибка!
      <button className="btn btn-danger ms-2" onClick={handleReloadService}>Повторить попытку</button>
    </div>
  )
}