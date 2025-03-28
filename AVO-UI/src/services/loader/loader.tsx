import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
    <Spinner className='mx-auto' animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
  );
}

export default Loader;