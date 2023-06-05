import CardHome from 'components/CardHome/CardHome';
import { Container, TitleHome, Wrapper, Card } from './Home.styled';

export default function Home() {
  return (
    <Container>
      <TitleHome>Click GO! to go to the Tweets.</TitleHome>
      <Wrapper>
        <Card>
          <CardHome />
        </Card>
        <Card>
          <CardHome />
        </Card>
        <Card>
          <CardHome />
        </Card>
        <Card>
          <CardHome />
        </Card>
        <Card>
          <CardHome />
        </Card>
      </Wrapper>
    </Container>
  );
}
