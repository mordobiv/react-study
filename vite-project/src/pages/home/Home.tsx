import React, { useEffect, useRef } from 'react';
import SearchInput from '../../components/search-input/search-input';
import TilesList from '../../components/tiles-list/tiles-list';
import Spinner from '../../components/loading-spinner/index';
import ErrorMessage from '../../components/error/index';
import apiUrl from '../../configuration';
import apiResponseType from '../../types/api-response';
import Modal from '../../components/modal/modal';
import { useDispatch, useSelector } from 'react-redux';
import {
  setError,
  removeError,
  setNodes,
  removeNodes,
  setPending,
  setResolved,
} from '../../store/search';

export default function Home() {
  const dispatch = useDispatch();
  const nodes = useSelector((state) => state.searchReducer.nodes);
  const isPending = useSelector((state) => state.searchReducer.isPending);
  const modalContent = useSelector((state) => state.searchReducer.modalContent);
  const error = useSelector((state) => state.searchReducer.error);
  const value = useSelector((state) => state.searchReducer.value);

  const isFetching = useRef(false);

  useEffect(() => {
    if (!isFetching.current && !value) {
      isFetching.current = true;

      fetch(`${apiUrl}/character/`)
        .then((res) => {
          if (!res.ok) {
            throw Error('Could not fetch the data');
          }
          return res.json();
        })
        .then((data) => {
          dispatch(setNodes(data.results));
          dispatch(setResolved());
          dispatch(removeError());
        })
        .catch((err) => {
          dispatch(setError(err.message));
          dispatch(setResolved());
        });
    }
  }, []);

  function handleSearchFilter(result: apiResponseType) {
    if (result.status === 'ok') {
      dispatch(setNodes(result.nodes) || []);
      dispatch(setResolved());
      dispatch(removeError());
    } else if (result.status === 'loading') {
      dispatch(removeNodes());
      dispatch(setPending());
      dispatch(removeError());
    } else {
      dispatch(removeNodes());
      dispatch(setResolved());
      dispatch(setError(result.errorMessage || 'Unexpected error occured.'));
    }
  }

  return (
    <div className="App">
      <SearchInput handleSearchFilter={handleSearchFilter} />
      {error && <ErrorMessage message={error} />}
      {isPending && <Spinner />}
      {nodes && <TilesList nodes={nodes} />}
      {modalContent && <Modal data={modalContent} />}
    </div>
  );
}
