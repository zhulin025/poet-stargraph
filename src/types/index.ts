export interface Work {
  title: string;
  content: string;
  type?: string;
  popularity?: number;
  tags?: string[];
  isGift?: boolean;
  recipientId?: string;
}

export interface Node {
  id: string;
  group: number;
  val: number;
  color: string;
  desc?: string;
  birth?: number;
  death?: number;
  locations?: string[];
  works?: Work[];
  x?: number;
  y?: number;
  z?: number;
}

export interface Link {
  source: string | Node;
  target: string | Node;
  value: number;
  type?: string;
  description?: string;
}

export interface GraphData {
  nodes: Node[];
  links: Link[];
}
