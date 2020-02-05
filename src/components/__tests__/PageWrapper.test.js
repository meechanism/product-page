import React from 'react';
import PageWrapper from '../PageWrapper';
import MainFooter from '../MainFooter';
import MainHeader from '../MainHeader';
import GlobalStyles from '../../styles/GlobalStyles';

describe('PageWrapper component', () => {
  it('should render', () => {
    const output = shallow(
      <PageWrapper>
        <p>test</p>
      </PageWrapper>
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should contain main header, fooder, and global styles', () => {
    const output = shallow(
      <PageWrapper>
        <p>test</p>
      </PageWrapper>
    );
    expect(output.find(MainHeader).exists()).toBeTruthy();
    expect(output.find(MainFooter).exists()).toBeTruthy();
    expect(output.find(GlobalStyles).exists()).toBeTruthy();
  });
});
