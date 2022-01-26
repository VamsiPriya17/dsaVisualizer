import { Canvas, Node, Edge, Port, MarkerArrow ,Label} from 'reaflow';

export const CustomCanvas = () => (
  <Canvas
    nodes={[]}
    edges={[]}
    node={
      <Node
        style={{ stroke: '#1a192b', fill: 'white', strokeWidth: 1 }}
        label={<Label style={{ fill: 'black' }} />}
        port={<Port style={{ fill: 'blue', stroke: 'white' }} rx={10} ry={10} />}
      />
    }
    arrow={<MarkerArrow style={{ fill: '#b1b1b7' }} />}
    edge={<Edge className="edge" />}
  />
);