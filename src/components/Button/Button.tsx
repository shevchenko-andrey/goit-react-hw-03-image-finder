import { LoadMore } from './Button.syled';
interface Props {
  onClick: () => void;
}
const Button = ({ onClick }: Props) => {
  return (
    <LoadMore type="button" onClick={onClick}>
      Load more
    </LoadMore>
  );
};

export default Button;
