import NodeType from './node';

type apiResponseType = {
  status: 'ok' | 'fail' | 'loading';
  nodes?: NodeType[];
  errorMessage?: string;
};

export default apiResponseType;
