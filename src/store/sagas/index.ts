import { call, put, takeEvery, all } from "redux-saga/effects"
import { setLoading, setResult } from "../reducers/search"
import DummyData from "../dummy-data"

const fetch = ({ sortBy = "Highest price", filterBy = "Villa", searchWord = "" }: { sortBy: string, filterBy: string, searchWord: string }) => {
    return new Promise((resolve, reject) => {
        let data: any[] = []

        if (searchWord === "") {
            data = DummyData
        } else {
            data = DummyData.filter((el) => el.name.toLowerCase().includes(searchWord.toLowerCase()) || el.address.toLowerCase().includes(searchWord.toLowerCase()))
        }

        if (filterBy) {
            data = data.filter((el) => el.type === filterBy)
        }

        if (sortBy) {
            switch (sortBy) {
                case "Date added":
                    data.sort((a, b) => new Date(a.addedAt).getTime() / 1000 - new Date(b.addedAt).getTime() / 1000)
                    break
                case "Highest price":
                    data.sort((a, b) => b.price - a.price)
                    break
                case "Lowest price":
                    data.sort((a, b) => a.price - b.price)
                    break
                default:
                    break
            }
        }

        setTimeout(() => resolve(data), 1000);
    })
}

function* fetchData(action: any): Generator {
    try {
        yield put(setLoading(true))
        const result = yield call(fetch, action.payload)
        yield put(setResult(result))
    } catch (err) {
        console.error(err)
    } finally {
        yield put(setLoading(false))
    }
}

function* watchFetchData() {
    yield takeEvery("FETCH_DATA", fetchData)
}

export default function* rootSaga() {
    yield all([
        watchFetchData()
    ])
}