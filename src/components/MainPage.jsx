import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { loadServices } from "../redux/actions/actionCreator"
import ErrorView from "./ErrorView"
import LoadingView from "./LoadingView"

export default function MainPage() {

  const dispatch = useDispatch();
  let service = useSelector(state => state.loadServices)

  useEffect(() => {
    dispatch(loadServices())
  }, [])

  return (
    <div className="row">
      {service.data.map(item => (
        <div className="col-3" key={item.id}>
          <Link 
            className="service border rounded p-4 d-block text-black text-decoration-none" 
            to={`${item.id}/details`}
          >
            <p className="service__title fw-bold fst-italic">{item.name}</p>
            <p className="service__price text-end fs-3 mb-0">от {item.price}</p>
          </Link>
        </div>
      ))}

      {service.error ? <ErrorView /> : ''}

      {service.loading ? <LoadingView /> : ''}
    </div>
  )
}