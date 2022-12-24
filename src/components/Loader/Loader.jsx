import { Circles } from 'react-loader-spinner';
import { Load } from './Loader.styled';
export const Loader = () => {
  return (
    <Load>
      <Circles
        height="80"
        width="80"
        color="blue"
        ariaLabel="circles-loading"
        wrapperStyle={{ margin: 'auto' }}
        wrapperClass=""
        visible={true}
      />
    </Load>
  );
};
