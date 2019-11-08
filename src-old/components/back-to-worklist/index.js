import React from 'react';
import { Link } from 'gatsby';

import backToWorkListStyles from './back-to-worklist-styles.module.scss';

export default function BackToWorkList() {
  return (
    <Link className={backToWorkListStyles.btn} to="./projects">
      Back to Project List
    </Link>
  )
}
