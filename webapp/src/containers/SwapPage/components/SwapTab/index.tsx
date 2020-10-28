import React from 'react';
import { Row, Col } from 'reactstrap';
import { MdCompareArrows } from 'react-icons/md';

import SwapCard from '../../../../components/SwapCard';
import styles from './swapTab.module.scss';
import { I18n } from 'react-redux-i18n';

interface SwapTabProps {}

const SwapTab: React.FunctionComponent<SwapTabProps> = (
  props: SwapTabProps
) => {
  const popularTokenList: Map<string, number> = new Map([
    ['DFI', 10],
    ['BTC', 20],
    ['ETH', 30],
  ]);
  const normalTokenList: Map<string, number> = new Map([
    ['DOO', 40],
    ['MEOW', 50],
  ]);

  return (
    <>
      <section>
        <Row>
          <Col md='5'>
            <SwapCard
              isFrom={true}
              label={I18n.t('containers.swap.swapTab.from')}
              balance={100}
              popularTokenList={popularTokenList}
              normalTokenList={normalTokenList}
            />
          </Col>
          <Col md='2' className='text-center vertical-center'>
            <MdCompareArrows className={styles.svg} />
          </Col>
          <Col md='5'>
            <SwapCard
              isFrom={false}
              label={I18n.t('containers.swap.swapTab.to')}
              balance={100}
              popularTokenList={popularTokenList}
              normalTokenList={normalTokenList}
            />
          </Col>
        </Row>
      </section>
    </>
  );
};

export default SwapTab;