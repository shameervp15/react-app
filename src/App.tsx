import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  let items = ['NewYork', 'Sydney', 'Los Angeles', 'Las Vegas']
  const handleSelectitem = (item: string) => {
    console.log(item);
  }

  return (<div>
            <div>
              <Alert>
                <h2>Hello World!</h2>
              </Alert>
            </div>
            <div>
              <ListGroup items={items} heading="Cities" onSelectitem={handleSelectitem}/>
            </div>
          </div>
    );
}

export default App