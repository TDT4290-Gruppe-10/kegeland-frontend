import React from 'react';
import { Text } from '@chakra-ui/react';
import withSilentRefresh from '../withSilentRefresh';
import * as silentRefreshHook from '../../hooks/useSilentRefresh';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { mockStore } from '../../state/mocks/store.mock';
import { MemoryRouter } from 'react-router-dom';

describe('Test withAppWrapper-hoc', () => {
  const MockComponent: React.FC = () => {
    return <Text />;
  };

  it('should render correctly', () => {
    const Component = withSilentRefresh(MockComponent, {});
    const tree = renderer.create(
      <Provider store={mockStore()}>
        <MemoryRouter>
          <Component />
        </MemoryRouter>
      </Provider>,
    );
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('should call correct hooks', () => {
    const silentRefreshHookSpy = jest.spyOn(silentRefreshHook, 'default');
    const Component = withSilentRefresh(MockComponent, {});
    renderer.create(
      <Provider store={mockStore()}>
        <MemoryRouter>
          <Component />
        </MemoryRouter>
      </Provider>,
    );
    expect(silentRefreshHookSpy).toBeCalled();
  });
});
