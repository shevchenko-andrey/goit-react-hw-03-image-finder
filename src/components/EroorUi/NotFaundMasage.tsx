import { ErrorImage, ErrorWrapper } from './NotFaundStyled';
interface Props {
  image: string;
}
function NotFaundMassage({ image }: Props) {
  return (
    <>
      <ErrorWrapper>
        <ErrorImage src={image} alt="cat, not faund" />
      </ErrorWrapper>
    </>
  );
}

export default NotFaundMassage;
