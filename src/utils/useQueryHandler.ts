import { useQuery } from "react-query";

interface IBody {
  [key: string]: any;
}

interface IPromiseReturn<D extends object> {
  success: boolean;
  data?: Array<D>;
  message?: string;
}

interface IQueryReturn<D extends object> {
  error: unknown;
  data: IPromiseReturn<D> | undefined;
  loading: boolean;
}

function useQueryHandler<D extends object> (id: string, slug: string, body?: IBody): IQueryReturn<D> {
  const ROOT_URL = process.env.REACT_APP_API_ROUTE;

  const paramsArray = body
  ? "?" + Object.keys(body)
    .map(el => `${el}=${body[el]}`)
    .join("&")
  : "";

  const fetchQuery = async (slug: string, paramsArray: string) => {
    const result = await fetch(`${ROOT_URL}${slug}${paramsArray}`)
    return await result.json();
  }

  const keys = body
  ? [
    id,
    Object.keys(body).map(el => ({ [el]: body[el] }))
  ] : id;

  const {
    error,
    data,
    isFetching: loading
  } = useQuery(
    keys,
    () => fetchQuery(slug, paramsArray),
    {
      enabled: !!id
    }
  )

  return {
    error,
    data,
    loading
  }
}

export default useQueryHandler;