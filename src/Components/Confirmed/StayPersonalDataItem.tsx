import React from 'react';
import styled from 'styled-components';

const StayPersonalDataItemStyled = styled.div`
width: calc((100% - 16px) / 2);
`;

const Title = styled.p`
color: ${props => props.theme.txtFormColor};
font-size: 16px;
font-weight: 400;
line-height: 150%;
text-transform: uppercase;
margin: 0;
`;

const ListItem = styled.p`
margin: 0;
`;

const ListItemTitle = styled.span`
color: ${props => props.theme.txtFormColor};
margin: 0 4px 0 0;
`;

const TxtBold = styled.span`
color: ${props => props.theme.txtColor};
font-size: 16px;
font-weight: 700;
line-height: 150%;
`;

interface Props {
  array: any;
  title: string;
}

export const StayPersonalDataItem: React.FC <Props> = ({ array, title}) => {
  return (
    <StayPersonalDataItemStyled>
      <Title>
        {title}
      </Title>
      <div>
        {array.map((item: any) => (
          <ListItem>
            <ListItemTitle>
              {item.title}:
            </ListItemTitle>
            <TxtBold>
              {item.value}
            </TxtBold>
          </ListItem>
        ))}
      </div>
    </StayPersonalDataItemStyled>
  );
};
