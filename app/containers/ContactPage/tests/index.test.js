import React from 'react';
import { FormattedMessage } from 'react-intl';
import { shallow } from 'enzyme';

import ContactPage from '../index';
import messages from '../messages';

describe('<ContactPage />', () => {
  it('should render the page message', () => {
    const renderedComponent = shallow(
      <ContactPage />
    );
    expect(renderedComponent.contains(
      <FormattedMessage {...messages.header} />
    )).toEqual(true);
  });
});
