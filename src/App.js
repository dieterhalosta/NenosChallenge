import React from 'react';
import { useDataFetch } from './hooks/';
import {
  DATASET_BASELINE_URL,
  DATASET_1,
  DASHBOARD_TITLE,
} from './common/constants';
import { Header, Body } from './components';
import styled from 'styled-components';
import './theme/nautical.css';

const App = () => {
  const [{ data: response, isLoading }, setUrl] = useDataFetch(
    DATASET_1.url,
    []
  );

  const dataSet = response?.data;

  const onReload = (e, dataFile) => {
    e.preventDefault();
    setUrl(`${DATASET_BASELINE_URL}${dataFile}`);
  };

  return (
    <Container id="container">
      <Header heading={DASHBOARD_TITLE} />
      {dataSet && !isLoading && <Body data={dataSet} onReload={onReload} />}
    </Container>
  );
};

export default React.memo(App);

const Container = styled.div`
  text-align: center;
`;
