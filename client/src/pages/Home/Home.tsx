import FeaturedArtists from '../../components/FeaturedArtists/FeaturedArtists';
import FeaturedPieces from '../../components/FeaturedPieces/FeaturedPieces';
import Navbar from '../../components/Navbar/Navbar';

const Home = () => {
  return (
    <>
      <Navbar logoOnly={false} />
      <main>
        <FeaturedPieces />
        <FeaturedArtists />
      </main>
    </>
  );
};

export default Home;
