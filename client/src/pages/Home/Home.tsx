import RenderTimeWrapper from '../../RenderTimeWrapper';
import FeaturedArtists from '../../components/FeaturedArtists/FeaturedArtists';
import FeaturedPieces from '../../components/FeaturedPieces/FeaturedPieces';
import Navbar from '../../components/Navbar/Navbar';

const Home = ({ renderTime }) => {
  console.log(
    'Home rendered in: ',
    renderTime ? renderTime.toFixed(2) : 0,
    'ms',
  );
  return (
    <>
      <RenderTimeWrapper>
        <Navbar logoOnly={false} />
      </RenderTimeWrapper>
      <main>
        <RenderTimeWrapper>
          <FeaturedPieces />
        </RenderTimeWrapper>
        <RenderTimeWrapper>
          <FeaturedArtists />
        </RenderTimeWrapper>
      </main>
    </>
  );
};

export default Home;
