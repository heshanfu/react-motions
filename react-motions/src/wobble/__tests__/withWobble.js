import React from 'react';
import withWobble from '../withWobble';

describe('withWobble', () => {
  it('should renderer', () => {
    const wrapper = shallow(withWobble(<div>Wobble</div>));

    expect(wrapper).toMatchSnapshot();
  });
});
