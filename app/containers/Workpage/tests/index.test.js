import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import Showcase from '../index';
import messages from '../messages';

describe('<Showcase />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(
      <Showcase />
    );
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.header} />
    )).toEqual(true);
  });
});
