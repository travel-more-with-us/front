import React from 'react';
import { Oval } from 'react-loader-spinner';
import { Container } from '../Layout/Container';

export const Loading = () => {
  return (
    <div>
      <Container>
        <h4>
          Loading...
        </h4>
        <Oval 
          height={40}
          width={40}
          color="#29E3AB"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel='oval-loading'
          secondaryColor="#29E3AB"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      </Container>
    </div>
  );
};
