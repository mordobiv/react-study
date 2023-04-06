import React, { useState, useEffect } from 'react';
import SearchInput from '../../components/search-input/search-input';
import TilesList from '../../components/tiles-list/tiles-list';
import apiUrl from '../../configuration';
import NodeType from '../../types/node';
import apiResponseType from '../../types/api-response';

export default function Home() {
  const [nodes, setNodes] = useState<NodeType[]>([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
      <SearchInput handleSearchFilter={handleSearchFilter} />
      {error && <div>{error} </div>}
      {isPending && <div>Loading...</div>}
      {nodes && <TilesList nodes={nodes} />}
    </div>
  );
}
