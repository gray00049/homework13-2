import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { loadServices } from "../redux/actions/actionCreator";
import LoadingView from "./LoadingView";
import ErrorView from "./ErrorView";

export default function DetailPage() {
  const dispatch = useDispatch();
  const {data, loading, error} = useSelector(state => state.loadCurrentService)

  const id = useParams();

  useEffect(() => {
    dispatch(loadServices(id))
  }, [])

  return (
    <>
      <div className={loading || error ? 'd-none' : 'row'} >
        <div className="col-4">
          <div className="fakePhoto rounded w-100 bg-secondary text-light text-center fs-2 fw-bolder">
            415x350
          </div>
        </div>
        <div className="col-8">
          <p className="fs-1">{data.name}</p>
          <p className="fs-3">от {data.price} руб.</p>
        </div>
      </div>

      {error ? <ErrorView id={id}/> : ''}

      {loading ? <LoadingView /> : ''}
    </>
  )
}