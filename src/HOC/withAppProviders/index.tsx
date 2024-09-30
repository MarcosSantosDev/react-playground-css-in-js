import AppProviders from './AppProviders';

const withAppProviders = <P extends object>(
  WrappedComponent: React.ComponentType<P>,
) => {
  function WithAppProviders(props: P) {
    return (
      <AppProviders>
        <WrappedComponent {...props} />
      </AppProviders>
    );
  }

  return WithAppProviders;
};

export default withAppProviders;
