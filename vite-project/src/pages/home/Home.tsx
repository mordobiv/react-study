import React, { useState, useEffect } from 'react';
import SearchInput from '../../components/search-input/search-input';
import TilesList from '../../components/tiles-list/tiles-list';
import Spinner from '../../components/loading-spinner/index';
import Modal from '../../components/modal/modal';
import ErrorMessage from '../../components/error/index';
import apiUrl from '../../configuration';
import NodeType from '../../types/node';
import apiResponseType from '../../types/api-response';

export default function Home() {
  const [nodes, setNodes] = useState<NodeType[]>([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch(`${apiUrl}/character/`)
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw Error('Could not fetch the data');
        }
        return res.json();
      })
      .then((data) => {
        setNodes(data.results);
        setIsPending(false);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setIsPending(false);
      });
  }, []);

  function handleSearchFilter(result: apiResponseType) {
    if (result.status === 'ok') {
      setNodes(result.nodes || []);
      setIsPending(false);
      setError(null);
    } else if (result.status === 'loading') {
      setNodes([]);
      setIsPending(true);
      setError(null);
    } else {
      setNodes([]);
      setIsPending(false);
      setError(result.errorMessage || 'Unexpected error occured.');
    }
  }

  return (
    <div className="App">
      {/* <button onClick={() => setIsModalOpen(true)}>Click to Open Modal</button> */}
      <Modal handleClose={() => setIsModalOpen(false)} isOpen={isModalOpen}>
        This is Modal Content!
      </Modal>

      <SearchInput handleSearchFilter={handleSearchFilter} />
      {error && <ErrorMessage message={error} />}
      {isPending && <Spinner />}
      {nodes && <TilesList nodes={nodes} />}
    </div>
  );
}
