const LoadingHandler: React.FC<{ loading: boolean }> = ({ loading }) => {
  if (loading) return <div>loading</div>;
  else return null;
};

export default LoadingHandler;
