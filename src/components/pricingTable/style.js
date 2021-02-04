import styled from 'styled-components';

export const Table = styled.div`
  max-width: 660px;
  margin: 0 auto;
`;

export const Toggle = styled.a`
  display: block;
  margin-top: 28px;
  text-align: right;
`;

export const TableRow = styled.div`
  align-items: center;
  border-bottom: 1px solid #e2e2e2;
  display: flex;

  &:first-of-type {
    border-bottom: 2px solid #b2b2b2;
    margin-bottom: 10px;
  }

  &:last-of-type {
    border-bottom: none;
  }
`;

export const TableCell = styled.div`
  color: #666;
  flex: 1;
  padding: 16px 12px;

  &:first-of-type {
    min-width: 236px;
  }
`;

export const TableHead = styled(TableCell)`
  color: #b2b2b2;
  font-weight: bold;
  padding: 8px 12px;
`;
