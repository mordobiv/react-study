type NodeType = {
  id: number;
  name: string;
  image: string;
  status: string;
  created: string;
  gender: string;
  species: string;
  type?: string;
  origin?: {
    name: string;
  };
  location?: {
    name: string;
  };
  url: string;
  episode: string[];
};

export default NodeType;
