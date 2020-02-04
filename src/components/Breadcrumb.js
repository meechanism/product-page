import React from 'react';
import styled from 'styled-components';

const BreadcrumbWrapper = styled.div``;

const BreadCrumb = ({ crumbs }) => {
  return (
    <BreadcrumbWrapper>
      <p>{crumbs}</p>
    </BreadcrumbWrapper>
  );
};

export default BreadCrumb;
