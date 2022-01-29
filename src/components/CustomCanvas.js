import { Canvas, Node, Edge, Port, MarkerArrow ,Label} from 'reaflow';

export const CustomCanvas = () => (
  <>
  <h1>He</h1>l
  <Canvas
    // layoutOptions={}
  
    nodes={[{
      id: '1',
      text: '1'
    },
    {
      id: '2',
      text: '2'
    }]}
    edges={[{
      id: '1-2',
      from: '1',
      to: '2'
    }]}
    node={
      <Node
        style={{ stroke: '#1a192b', fill: 'white', strokeWidth: 1 }}
        label={<Label style={{ fill: 'black' }} />}
        port={<Port style={{ fill: 'blue', stroke: 'white' }}offsetx={0} rx={100} ry={50} />}
      />
    }
    arrow={<MarkerArrow style={{ fill: '#b1b1b7' }} />}
    edge={<Edge className="edge" />}
  />

  </>
);