import Searchbar from 'components/Searchbar';

interface Props {
  onSubmit: (query: string) => void;
  children: any;
}
function SearchService({ children, onSubmit }: Props) {
  return (
    <>
      <Searchbar onSubmit={onSubmit} />
      <section>{children}</section>
    </>
  );
}

export default SearchService;
