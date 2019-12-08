import { takeLatest, all, call, put } from "redux-saga/effects";

import shopActionTypes from "./shop.types";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure
} from "./shop.actions";

import {
  firestore,
  convertCollectionsSnapshotToMap
} from "../../firebase/firebase.utils";

export function* fetchCollectionsAsync() {
  yield console.log("i am fired");
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    yield put(fetchCollectionsSuccess(collectionsMap));
  } catch (error) {
    console.log(error);
    yield put(fetchCollectionsFailure(error));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    shopActionTypes.FETCH_COLLECTIONS_START,
    fetchCollectionsAsync
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
