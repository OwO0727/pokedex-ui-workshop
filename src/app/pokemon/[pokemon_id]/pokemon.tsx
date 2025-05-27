import Pokemon from "@/model/pokemon";
import { Row, Col, Container, Image, ProgressBar, Accordion, ListGroup, Badge} from 'react-bootstrap';


type Props ={
   pokemon: Pokemon;
}


export default function PokemonComponent(props : Props) {
   const {pokemon} = props;
   const stats = [
    { label: "Speed", value: pokemon.speed, color: "#00cfff" },
    { label: "Health points", value: pokemon.healthPoints, color: "#f51d47" },
    { label: "Attack", value: pokemon.attack, color: "#ffc400" },
    { label: "Defense", value: pokemon.defense, color: "#007849" },
  ];

  const getFamilyTag = (pokemon: Pokemon, evolution: string) => {
        if (evolution === pokemon.devolution) {
          return <Badge bg="danger">Devolution</Badge>
        }
        if (evolution === pokemon.pokemonName) {
          return <Badge bg="primary">Current</Badge>
        }
        if (evolution === pokemon.evolution) {
          return <Badge bg="success">Evolution</Badge>
        }
        return <></>
      }


   return (
       <Container>
           <Row className="justify-content-md-center">
               <Col md="auto"><h1>{pokemon.pokemonName}</h1></Col>
           </Row>
           <Row>
               <Col>
                   <Image src={pokemon.mainImage} thumbnail />
               </Col>
               <Col md={8}>
          {stats.map(stat => (
            <div key={stat.label} className="mb-3">
              <div className="fw-bold">{stat.label}:</div>
              <div className="position-relative">
                <ProgressBar
                  now={stat.value}
                  max={100}
                  style={{
                    height: '24px',
                    backgroundColor: '#e9ecef',
                  }}
                  variant="custom"
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    height: '24px',
                    width: `${stat.value}%`,
                    backgroundColor: stat.color,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: 'white',
                    fontWeight: 'bold',
                    fontSize: '0.9rem',
                    borderRadius: '4px',
                  }}
                >
                  {stat.value}
                </div>
              </div>
            </div>
          ))}
    <Accordion alwaysOpen >
      <Accordion.Item eventKey="0" >
        <Accordion.Header>Pokemon type</Accordion.Header>
        <Accordion.Body>
            <ListGroup variant="flush">
                {pokemon.pokemonType.map(type => <ListGroup.Item key={pokemon.pokemonNumber}>{type}</ListGroup.Item>)}
            </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Evalution family</Accordion.Header>
        <Accordion.Body>
            <ListGroup variant="flush">
                {pokemon.evolutionFamily.map(evolution => <ListGroup.Item key={pokemon.pokemonNumber}>{evolution} {getFamilyTag(pokemon, evolution)}</ListGroup.Item>)}
            </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Col>
           </Row>
       </Container>
   );
}
