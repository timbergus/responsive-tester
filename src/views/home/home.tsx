import React from 'react';

import styles from './home.css';
import ResponsiveTester from '../../components/responsive-tester/responsive-tester';

export default function Home() {
  return (
    <div data-testid="home" className={styles.view}>
      Home
      <ResponsiveTester minWidth={200}>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse itaque,
          commodi voluptate labore atque, nulla dignissimos dolore veniam
          assumenda aspernatur sit odio eius, quibusdam unde fuga explicabo
          tempora perspiciatis neque.
        </div>
      </ResponsiveTester>
    </div>
  );
}
