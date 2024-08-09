import { HexGrid, Layout, Hexagon } from 'react-hexgrid-dev';
export default function App() {

  return (
    <>
      <HexGrid width={1200} height={800}>
        <Layout>
          <Hexagon q={0} r={0} s={0} cellStyle={{
            fill: 'red',
          }} />
        </Layout>
      </HexGrid>
    </>
  )
}